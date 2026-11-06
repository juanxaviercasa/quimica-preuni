import { authenticatedUser, configured, membershipFor, noStore } from "./_lib/security.js";

export default async function handler(req, res) {
  noStore(res);
  if (req.method !== "GET") return res.status(405).json({ error: "Método no permitido" });
  if (!configured()) return res.status(503).json({ access: false, error: "Servicio de membresías sin configurar." });
  const actor = await authenticatedUser(req);
  if (!actor) return res.status(401).json({ access: false, error: "Debes iniciar sesión." });
  try {
    const membership = await membershipFor(actor.id);
    if (!membership) return res.status(200).json({ access: false, reason: "membership_required" });
    return res.status(200).json({ access: true });
  } catch {
    return res.status(503).json({ access: false, error: "No se puede comprobar la membresía." });
  }
}
