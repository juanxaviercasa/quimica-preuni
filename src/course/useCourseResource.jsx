import { useAuth, useClerk } from "@clerk/react";
import { useEffect, useState } from "react";

export function useCourseResource(query) {
  const { isLoaded, isSignedIn, getToken } = useAuth();
  const [state, setState] = useState({ loading: true, data: null, status: 0, error: "" });

  useEffect(() => {
    if (!isLoaded) return;
    if (!isSignedIn) {
      setState({ loading: false, data: null, status: 401, error: "Este contenido requiere una membresía pagada en Skool y una cuenta Zenit verificada." });
      return;
    }
    const controller = new AbortController();
    (async () => {
      setState(current => ({ ...current, loading: true, error: "" }));
      try {
        const token = await getToken();
        const response = await fetch(`/api/course?${query}`, {
          headers: { Authorization: `Bearer ${token}` }, signal: controller.signal, credentials: "same-origin"
        });
        const contentType = response.headers.get("content-type") || "";
        // Static hosting can answer /api/course with an HTML fallback and HTTP 200.
        // That is NOT a verified subscription or a valid course response.
        if (!contentType.includes("application/json")) {
          throw Object.assign(new Error("La verificación de acceso todavía no está disponible."), { status: 503 });
        }
        const body = await response.json().catch(() => ({}));
        if (!response.ok) throw Object.assign(new Error(body.error || "No pudimos cargar el curso."), { status: response.status });
        if (!body || typeof body !== "object" || !Object.keys(body).length) {
          throw Object.assign(new Error("La respuesta de acceso no es válida."), { status: 503 });
        }
        setState({ loading: false, data: body, status: 200, error: "" });
      } catch (error) {
        if (error.name !== "AbortError") setState({ loading: false, data: null, status: error.status || 503, error: error.message });
      }
    })();
    return () => controller.abort();
  }, [getToken, isLoaded, isSignedIn, query]);
  return state;
}

export function CourseAccessState({ state }) {
  const clerk = useClerk();
  if (state.loading) return <main className="cq-page"><div className="cq-section" style={{ textAlign: "center", padding: "4rem 1.5rem" }}><h2>Cargando tu curso…</h2></div></main>;
  if (state.status === 401) return <main className="cq-page"><div className="cq-section" style={{ textAlign: "center", padding: "4rem 1.5rem" }}><h2>Tu curso te espera</h2><p>Si ya pagaste en Skool y tu acceso Zenit está activado, inicia sesión aquí.</p><button className="cq-btn primary" onClick={() => clerk.openSignIn({ fallbackRedirectUrl: window.location.href })}>Iniciar sesión</button></div></main>;
  if (state.status === 403) return <main className="cq-page"><div className="cq-section" style={{ textAlign: "center", padding: "4rem 1.5rem" }}><h2>Tu membresía aún no está verificada</h2><p>El pago se realiza en Skool. Si ya te inscribiste, solicita la activación de tu acceso Zenit; no necesitas volver a pagar.</p><a className="cq-btn primary" href="https://www.skool.com/academia-zenit-3587/about">Ir a Academia Zenit en Skool</a></div></main>;
  return <main className="cq-page"><div className="cq-section" style={{ textAlign: "center", padding: "4rem 1.5rem" }}><h2>No pudimos verificar tu acceso</h2><p>{state.error}</p><button className="cq-btn" onClick={() => window.location.reload()}>Intentar de nuevo</button></div></main>;
}
