export async function paidApi(getToken, type, params = {}, { signal } = {}) {
  const token = await getToken();
  if (!token) throw new Error("Inicia sesión para acceder al curso.");
  const query = new URLSearchParams({ type, ...params });
  const response = await fetch(`/api/course?${query}`, {
    signal,
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
    credentials: "omit"
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw Object.assign(new Error(data.error || "No se pudo cargar la lección."), { status: response.status });
  return data;
}
