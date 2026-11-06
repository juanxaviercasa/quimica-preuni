import { createClerkClient, verifyToken } from "@clerk/backend";
import { WhopClient, WhopEnvironment } from "@whop/sdk";

export function noStore(res) {
  res.setHeader("Cache-Control", "private, no-store, max-age=0");
  res.setHeader("X-Content-Type-Options", "nosniff");
}

export function clerkClient() {
  if (!process.env.CLERK_SECRET_KEY) throw new Error("CLERK_SECRET_KEY is required");
  return createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });
}

export function whopClient() {
  if (!process.env.WHOP_COMPANY_API_KEY) throw new Error("WHOP_COMPANY_API_KEY is required");
  return new WhopClient({
    token: process.env.WHOP_COMPANY_API_KEY,
    environment: process.env.WHOP_SANDBOX === "true" ? WhopEnvironment.Sandbox : WhopEnvironment.Production
  });
}

export function configured() {
  return Boolean(process.env.CLERK_SECRET_KEY && process.env.WHOP_COMPANY_API_KEY &&
    process.env.WHOP_PLAN_ID && process.env.WHOP_PRODUCT_ID && process.env.APP_URL);
}

export async function authenticatedUser(req) {
  if (!process.env.CLERK_SECRET_KEY || !process.env.APP_URL) throw new Error("Auth configuration missing");
  const authorization = req.headers.authorization || "";
  const match = /^Bearer (\S+)$/.exec(authorization);
  if (!match) return null;
  try {
    const claims = await verifyToken(match[1], {
      secretKey: process.env.CLERK_SECRET_KEY,
      authorizedParties: [new URL(process.env.APP_URL).origin]
    });
    if (!claims?.sub) return null;
    return { id: claims.sub };
  } catch {
    return null;
  }
}

const idOf = value => typeof value === "string" ? value : value?.id;
const validDate = value => !value || (Number.isFinite(Date.parse(value)) && Date.parse(value) > Date.now());

export function isValidMembership(membership) {
  if (!membership || !process.env.WHOP_PRODUCT_ID) return false;
  const productId = idOf(membership.product) || membership.product_id;
  if (productId !== process.env.WHOP_PRODUCT_ID) return false;
  const status = String(membership.status || "").toLowerCase();
  if (!["active", "completed"].includes(status)) return false;
  if (!validDate(membership.current_period_end)) return false;
  if (membership.banned === true || membership.cancelled === true || membership.canceled === true) return false;
  return true;
}

export async function membershipFor(clerkUserId) {
  const user = await clerkClient().users.getUser(clerkUserId);
  const membershipId = user.privateMetadata?.whopCourse?.membershipId;
  if (typeof membershipId !== "string" || !/^mem_[a-zA-Z0-9]+$/.test(membershipId)) return null;
  const membership = await whopClient().memberships.retrieve(membershipId);
  if (!isValidMembership(membership)) return null;
  return membership;
}

export async function requirePaid(req, res) {
  noStore(res);
  if (!configured()) {
    res.status(503).json({ error: "Configuración de pagos pendiente." });
    return null;
  }
  const actor = await authenticatedUser(req);
  if (!actor) {
    res.status(401).json({ error: "Inicia sesión para continuar." });
    return null;
  }
  try {
    const membership = await membershipFor(actor.id);
    if (!membership) {
      res.status(402).json({ error: "Necesitas una membresía activa para acceder al curso." });
      return null;
    }
  } catch {
    res.status(503).json({ error: "No se pudo verificar la membresía. Intenta nuevamente." });
    return null;
  }
  return actor;
}

export async function linkMembership(clerkId, membershipId) {
  if (typeof clerkId !== "string" || !clerkId.startsWith("user_")) return false;
  if (typeof membershipId !== "string" || !/^mem_[a-zA-Z0-9]+$/.test(membershipId)) return false;
  const membership = await whopClient().memberships.retrieve(membershipId);
  if (!isValidMembership(membership)) return false;
  await clerkClient().users.updateUserMetadata(clerkId, {
    privateMetadata: { whopCourse: { membershipId } }
  });
  return true;
}
