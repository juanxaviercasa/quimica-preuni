import { useAuth, useClerk } from "@clerk/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function useCourseResource(query) {
  const { isLoaded, isSignedIn, getToken } = useAuth();
  const [state, setState] = useState({ loading: true, data: null, status: 0, error: "" });

  useEffect(() => {
    if (!isLoaded) return;
    if (!isSignedIn) {
      setState({ loading: false, data: null, status: 401, error: "Inicia sesión para acceder al curso." });
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
        const body = await response.json().catch(() => ({}));
        if (!response.ok) throw Object.assign(new Error(body.error || "No pudimos cargar el curso."), { status: response.status });
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
  if (state.status === 401) return <main className="cq-page"><div className="cq-section" style={{ textAlign: "center", padding: "4rem 1.5rem" }}><h2>Tu curso te espera</h2><p>Inicia sesión con la cuenta que usarás para tu membresía.</p><button className="cq-btn primary" onClick={() => clerk.openSignIn({ fallbackRedirectUrl: window.location.href })}>Iniciar sesión</button></div></main>;
  if (state.status === 403) return <main className="cq-page"><div className="cq-section" style={{ textAlign: "center", padding: "4rem 1.5rem" }}><h2>Activa tu acceso completo</h2><p>Elige una membresía para desbloquear lecciones, prácticas y evaluaciones.</p><Link className="cq-btn primary" to="/#precios">Ver planes</Link></div></main>;
  return <main className="cq-page"><div className="cq-section" style={{ textAlign: "center", padding: "4rem 1.5rem" }}><h2>No pudimos verificar tu acceso</h2><p>{state.error}</p><button className="cq-btn" onClick={() => window.location.reload()}>Intentar de nuevo</button></div></main>;
}
