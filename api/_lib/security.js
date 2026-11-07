import { createClerkClient, verifyToken } from "@clerk/backend";
import { WhopClient, WhopEnvironment } from "@whop/sdk";
import { isAllowedWhopPlanId, plansConfigured } from "./plans.js";

export function noStore(res) {
  res.setHeader("Cache-Control", "private, no-store, max-age=0");
  res.setHeader("X-Content-Type-Options", "nosniff");
}

export function configured(env = process.env) {
  return Boolean(env.CLERK_SECRET_KEY && env.WHOP_COMPANY_API_KEY &&
    env.WHOP_PRODUCT_ID && env.APP_URL && plansConfigured(env));
}

export function clerkClient() {
  if (!process.env.CLERK_SECRET_KEY) throw new Error("Missing CLERK_SECRET_KEY");
  return createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });
}

export function whopClient() {
  if (!process.env.WHOP_COMPANY_API_KEY) throw new Error("Missing WHOP_COMPANY_API_KEY");
  return new WhopClient({
    token: process.env.WHOP_COMPANY_API_KEY,
    environment: process.env.WHOP_SANDBOX === "true" ? WhopEnvironment.Sandbox : WhopEnvironment.Production
  });
}

export async function authenticatedUser(req) {
  if (!process.env.CLERK_SECRET_KEY || !process.env.APP_URL) return null;
  const match = /^Bearer (\S+)$/.exec(req.headers?.authorization || "");
  if (!match) return null;
  try {
    const claims = await verifyToken(match[1], {
      secretKey: process.env.CLERK_SECRET_KEY,
      authorizedParties: [new URL(process.env.APP_URL).origin]
    });
    return /^user_[A-Za-z0-9]+$/.test(claims?.sub || "") ? { id: claims.sub } : null;
  } catch { return null; }
}

const idOf = value => typeof value === "string" ? value : value?.id;

export function isValidMembership(membership, env = process.env) {
  if (!membership || !env.WHOP_PRODUCT_ID) return false;
  if ((idOf(membership.product) || membership.product_id) !== env.WHOP_PRODUCT_ID) return false;
  if (!isAllowedWhopPlanId(idOf(membership.plan) || membership.plan_id, env)) return false;
  if (String(membership.status || "").toLowerCase() !== "active" || membership.banned === true) return false;
  const periodEnd = membership.current_period_end || membership.renewal_period_end || membership.expires_at;
  if (periodEnd && (!Number.isFinite(Date.parse(periodEnd)) || Date.parse(periodEnd) <= Date.now())) return false;
  return true;
}

export async function membershipFor(clerkUserId) {
  const user = await clerkClient().users.getUser(clerkUserId);
  const membershipId = user.privateMetadata?.whopCourse?.membershipId;
  if (!/^mem_[A-Za-z0-9]+$/.test(membershipId || "")) return null;
  const membership = await whopClient().memberships.retrieve({ id: membershipId });
  return isValidMembership(membership) ? membership : null;
}

export async function linkMembership(clerkId, membershipId) {
  if (!/^user_[A-Za-z0-9]+$/.test(clerkId || "") || !/^mem_[A-Za-z0-9]+$/.test(membershipId || "")) return false;
  const membership = await whopClient().memberships.retrieve({ id: membershipId });
  if (!isValidMembership(membership)) return false;
  await clerkClient().users.updateUserMetadata(clerkId, {
    privateMetadata: { whopCourse: { membershipId } }
  });
  return true;
}
