import { authenticatedUser, configured, membershipFor, noStore } from "./_lib/security.js";

export default async function handler(req, res) {
  noStore(res);
  if (req.method !== "GET") return res.status(405).json({ error: "Método no permitido." });
  if (!configured()) return res.status(503).json({ access: false });
  const actor = await authenticatedUser(req);
  if (!actor) return res.status(401).json({ access: false });
  try {
    const membership = await membershipFor(actor.id);
    return res.status(200).json({ access: Boolean(membership) });
  } catch {
    return res.status(503).json({ access: false, error: "No fue posible verificar el estado de tu membresía." });
  }
}
