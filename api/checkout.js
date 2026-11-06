import { authenticatedUser, configured, noStore, whopClient } from "./_lib/security.js";

export default async function handler(req, res) {
  noStore(res);
  if (req.method !== "POST") return res.status(405).json({ error: "Método no permitido" });
  if (!configured()) return res.status(503).json({ error: "Pagos sin configurar." });
  const actor = await authenticatedUser(req);
  if (!actor) return res.status(401).json({ error: "Inicia sesión antes de comprar." });
  try {
    // The authenticated Clerk ID comes exclusively from the verified session.
    const config = await whopClient().checkoutConfigurations.create({
      plan_id: process.env.WHOP_PLAN_ID,
      mode: "payment",
      redirect_url: new URL("/pago/resultado", process.env.APP_URL).toString(),
      metadata: { userId: actor.id }
    });
    if (!config?.id) throw new Error("Missing checkout session id");
    return res.status(200).json({
      sessionId: config.id,
      environment: process.env.WHOP_SANDBOX === "true" ? "sandbox" : "production"
    });
  } catch {
    return res.status(502).json({ error: "No se pudo crear el pago. Intenta nuevamente." });
  }
}
