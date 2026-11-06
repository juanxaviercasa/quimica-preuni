import { unwrapWebhook } from "@whop/sdk/helpers";

export const config = { api: { bodyParser: false } };
import { clerkClient, configured, linkMembership, noStore, whopClient } from "./_lib/security.js";

const getId = x => typeof x === "string" ? x : x?.id;
const membershipIdFrom = item => getId(item?.membership) || item?.membership_id;
const planIdFrom = item => getId(item?.plan) || item?.plan_id;
const clerkIdFrom = item => item?.metadata?.userId;

export default async function handler(req, res) {
  noStore(res);
  if (req.method !== "POST") return res.status(405).json({ error: "Método no permitido" });
  if (!configured() || !process.env.WHOP_WEBHOOK_SECRET)
    return res.status(503).json({ error: "Webhook sin configurar" });

  let event;
  try {
    // Signature MUST be verified against the exact raw request bytes.
    const chunks = [];
    for await (const chunk of req) chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
    const raw = Buffer.concat(chunks).toString("utf8");
    event = unwrapWebhook(raw, {
      headers: Object.fromEntries(Object.entries(req.headers).map(([k, v]) => [k.toLowerCase(), String(v)])),
      key: process.env.WHOP_WEBHOOK_SECRET
    });
  } catch {
    return res.status(401).json({ error: "Firma de Whop inválida" });
  }
  const kind = String(event?.type || "").replaceAll("_", ".");
  const data = event?.data || {};
  if (!["payment.succeeded", "membership.activated", "membership.deactivated"].includes(kind))
    return res.status(200).json({ received: true, ignored: true });

  try {
    if (kind === "membership.deactivated") {
      // No cached entitlement is trusted: GET /api/course always queries Whop live.
      // If metadata identifies a linked member, remove its convenience mapping.
      const clerkId = clerkIdFrom(data);
      const membershipId = getId(data);
      if (clerkId && membershipId) {
        const user = await clerkClient().users.getUser(clerkId);
        if (user.privateMetadata?.whopCourse?.membershipId === membershipId) {
          await clerkClient().users.updateUserMetadata(clerkId, { privateMetadata: { whopCourse: null } });
        }
      }
      return res.status(200).json({ received: true });
    }
    let verified = data;
    if (kind === "payment.succeeded") {
      if (!data.id) return res.status(422).json({ error: "Pago sin identificador" });
      verified = await whopClient().payments.retrieve(data.id);
    }
    const clerkId = clerkIdFrom(verified) || clerkIdFrom(data);
    const membershipId = membershipIdFrom(verified) || membershipIdFrom(data) ||
      (kind === "membership.activated" ? getId(data) : null);
    const planId = planIdFrom(verified) || planIdFrom(data);
    // Without a matching purchased plan, verified membership and Clerk mapping,
    // NEVER grant access, even if a signed webhook was received.
    if (!clerkId || !membershipId || (planId && planId !== process.env.WHOP_PLAN_ID))
      return res.status(200).json({ received: true, linked: false });
    const linked = await linkMembership(clerkId, membershipId);
    return res.status(200).json({ received: true, linked });
  } catch {
    // Retryable server response; never acknowledge a failed entitlement write.
    return res.status(503).json({ error: "No se pudo sincronizar la membresía" });
  }
}
