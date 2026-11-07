import { authenticatedUser, configured, membershipFor, noStore, whopClient } from "./_lib/security.js";
import { checkoutSelection, matchesWhopPlan } from "./_lib/plans.js";

export function isTrustedCheckoutUrl(value) {
  try {
    const u = new URL(value);
    return u.protocol === "https:" && (u.hostname === "whop.com" || u.hostname.endsWith(".whop.com"));
  } catch { return false; }
}

export default async function handler(req, res) {
  noStore(res);
  if (req.method !== "POST") return res.status(405).json({ error: "Método no permitido." });
  if (!configured()) return res.status(503).json({ error: "El servicio de pago no está disponible en este momento." });
  const actor = await authenticatedUser(req);
  if (!actor) return res.status(401).json({ error: "Inicia sesión para continuar con tu inscripción." });
  const choice = req.body?.plan;
  if (choice !== "monthly" && choice !== "annual") return res.status(400).json({ error: "Elige el plan mensual o anual." });

  try {
    if (await membershipFor(actor.id)) {
      return res.status(200).json({ alreadyMember: true, courseUrl: "/curso/quimica" });
    }
    const selected = checkoutSelection(choice); // trusted server clock
    const whop = whopClient();
    const actualPlan = await whop.plans.retrieve({ id: selected.planId });
    if (!matchesWhopPlan(actualPlan, selected, process.env.WHOP_PRODUCT_ID)) {
      return res.status(503).json({ error: "El plan seleccionado necesita revisión. Comunícate con soporte." });
    }
    const config = await whop.checkoutConfigurations.create({
      plan_id: selected.planId,
      mode: "payment",
      redirect_url: new URL("/pago/resultado", process.env.APP_URL).toString(),
      metadata: { userId: actor.id }
    });
    if (!config?.id || !isTrustedCheckoutUrl(config.purchase_url)) throw new Error("Untrusted checkout");
    return res.status(200).json({ checkoutUrl: config.purchase_url, sessionId: config.id });
  } catch {
    return res.status(502).json({ error: "No pudimos abrir el pago. Intenta nuevamente." });
  }
}
