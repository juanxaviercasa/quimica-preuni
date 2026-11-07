import { noStore, whopClient } from "./_lib/security.js";

const DISCOVERY_TOKEN = "drZpLiDLu2GaHQ2Jt7OwWfOTg7LkeUT5D8x12wyZdAI";

export default async function handler(req, res) {
  noStore(res);
  if (req.method !== "GET") return res.status(405).json({ error: "Método no permitido." });
  if (req.headers["x-whop-discovery-token"] !== DISCOVERY_TOKEN) return res.status(404).end();

  try {
    const page = await whopClient().plans.list({
      product_ids: process.env.WHOP_PRODUCT_ID,
      first: 100,
    });
    const plans = page.data.map((plan) => ({
      id: plan.id,
      product: typeof plan.product === "string" ? plan.product : plan.product?.id,
      plan_type: plan.plan_type,
      billing_period: plan.billing_period,
      renewal_price: plan.renewal_price,
      initial_price: plan.initial_price,
      currency: plan.currency,
      release_method: plan.release_method,
      visibility: plan.visibility,
    }));
    return res.status(200).json({ plans });
  } catch {
    return res.status(502).json({ error: "No se pudo consultar Whop." });
  }
}
