import { authenticatedUser, configured, noStore, whopClient } from "./_lib/security.js";
import { whopPlanIdForChoice } from "./_lib/plans.js";

export default async function handler(req, res) {
  noStore(res);
  if (req.method !== "POST") return res.status(405).json({ error: "Método no permitido" });
  if (!configured()) return res.status(503).json({ error: "Pagos sin configurar." });
  const actor = await authenticatedUser(req);
  if (!actor) return res.status(401).json({ error: "Inicia sesión antes de comprar." });
  const planId = whopPlanIdForChoice(req.body?.plan);
  if (!planId) return res.status(400).json({ error: "Selecciona una opción de suscripción válida." });
  try {
    // The authenticated Clerk ID comes exclusively from the verified session.
    const config = await whopClient().checkoutConfigurations.create({
      plan_id: planId,
      mode: "payment",
      redirect_url: new URL("/pago/resultado", process.env.APP_URL).toString(),
      metadata: { userId: actor.id }
    });
    if (!config?.id || !config.purchase_url || !/^https:\/\/([a-z0-9-]+\.)?whop\.com\//i.test(config.purchase_url)) throw new Error("Missing trusted checkout URL");
    return res.status(200).json({
      sessionId: config.id,
      checkoutUrl: config.purchase_url,
      environment: process.env.WHOP_SANDBOX === "true" ? "sandbox" : "production"
    });
  } catch {
    return res.status(502).json({ error: "No se pudo crear el pago. Intenta nuevamente." });
  }
}
