import { unwrapWebhook } from "@whop/sdk/helpers";
import { clerkClient, configured, isValidMembership, linkMembership, noStore, whopClient } from "./_lib/security.js";

export const config = { api: { bodyParser: false } };

const idOf = value => typeof value === "string" ? value : value?.id;
const membershipIdOf = value => idOf(value?.membership) || value?.membership_id;
const clerkIdOf = value => value?.metadata?.userId;

export default async function handler(req, res) {
  noStore(res);
  if (req.method !== "POST") return res.status(405).json({ error: "Método no permitido." });
  if (!configured() || !process.env.WHOP_WEBHOOK_SECRET) return res.status(503).json({ error: "Webhook no disponible." });

  let event;
  try {
    const chunks = [];
    for await (const chunk of req) chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
    event = unwrapWebhook(Buffer.concat(chunks).toString("utf8"), {
      headers: Object.fromEntries(Object.entries(req.headers).map(([k, v]) => [k.toLowerCase(), String(v)])),
      key: process.env.WHOP_WEBHOOK_SECRET
    });
  } catch { return res.status(401).json({ error: "Firma de Whop inválida." }); }

  const kind = String(event?.type || "").replaceAll("_", ".");
  const data = event?.data || {};
  if (!["payment.succeeded", "membership.activated", "membership.deactivated"].includes(kind)) {
    return res.status(200).json({ received: true, ignored: true });
  }
  try {
    if (kind === "membership.deactivated") {
      const clerkId = clerkIdOf(data);
      const membershipId = idOf(data);
      if (/^user_[A-Za-z0-9]+$/.test(clerkId || "") && membershipId) {
        const user = await clerkClient().users.getUser(clerkId);
        if (user.privateMetadata?.whopCourse?.membershipId === membershipId) {
          await clerkClient().users.updateUserMetadata(clerkId, { privateMetadata: { whopCourse: null } });
        }
      }
      return res.status(200).json({ received: true });
    }

    const verified = kind === "payment.succeeded" && data?.id
      ? await whopClient().payments.retrieve({ id: data.id })
      : data;
    const clerkId = clerkIdOf(verified) || clerkIdOf(data);
    const membershipId = membershipIdOf(verified) || membershipIdOf(data) ||
      (kind === "membership.activated" ? idOf(data) : null);
    if (!clerkId || !membershipId) return res.status(200).json({ received: true, linked: false });
    // Membership is retrieved from Whop and verified against our product and all 4 plans.
    const linked = await linkMembership(clerkId, membershipId);
    return res.status(200).json({ received: true, linked });
  } catch {
    // Non-2xx allows webhook retry; do not silently grant access.
    return res.status(503).json({ error: "No se pudo sincronizar la membresía." });
  }
}
