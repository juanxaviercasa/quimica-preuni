import { createClerkClient, verifyToken } from "@clerk/backend";

const SKOOL_GROUP = "academia-zenit-3587";

export function noStore(res) {
  res.setHeader("Cache-Control", "private, no-store, max-age=0");
  res.setHeader("X-Content-Type-Options", "nosniff");
}

export function configured(env = process.env) {
  return Boolean(env.CLERK_SECRET_KEY && env.APP_URL);
}

export function clerkClient() {
  if (!process.env.CLERK_SECRET_KEY) throw new Error("Missing CLERK_SECRET_KEY");
  return createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });
}

export async function authenticatedUser(req) {
  if (!configured()) return null;
  const match = /^Bearer (\\S+)$/.exec(req.headers?.authorization || "");
  if (!match) return null;
  try {
    const claims = await verifyToken(match[1], {
      secretKey: process.env.CLERK_SECRET_KEY,
      authorizedParties: [new URL(process.env.APP_URL).origin]
    });
    return /^user_[A-Za-z0-9]+$/.test(claims?.sub || "") ? { id: claims.sub } : null;
  } catch { return null; }
}

// Private Clerk metadata is only a staging entitlement record, NOT a proof
// of payment. A trusted operator/integration must reconcile it with Skool.
// Never accept these fields from browser requests or redirect parameters.
export function isValidSkoolEntitlement(value, now = Date.now()) {
  if (!value || value.groupSlug !== SKOOL_GROUP) return false;
  if (value.status !== "active" && value.status !== "cancelled") return false;
  if (typeof value.paidThrough !== "string" || !/^\\d{4}-\\d\\d-\\d\\dT\\d\\d:\\d\\d:\\d\\d(?:\\.\\d{1,3})?Z$/.test(value.paidThrough)) return false;
  const end = Date.parse(value.paidThrough);
  return Number.isFinite(end) && end > now;
}

export async function membershipFor(clerkUserId) {
  const user = await clerkClient().users.getUser(clerkUserId);
  const entitlement = user.privateMetadata?.skoolMembership;
  return isValidSkoolEntitlement(entitlement) ? entitlement : null;
}
