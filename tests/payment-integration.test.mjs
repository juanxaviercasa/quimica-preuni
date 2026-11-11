import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { isValidSkoolEntitlement, configured } from "../api/_lib/security.js";

const valid = {
  groupSlug: "academia-zenit-3587",
  status: "active",
  paidThrough: "2026-12-01T05:00:00.000Z"
};
const now = Date.parse("2026-11-11T15:00:00.000Z");

test("Skool entitlement rejects missing, expired, foreign and revoked claims", () => {
  assert.equal(isValidSkoolEntitlement(valid, now), true);
  assert.equal(isValidSkoolEntitlement({ ...valid, status: "cancelled" }, now), true);
  assert.equal(isValidSkoolEntitlement({ ...valid, status: "revoked" }, now), false);
  assert.equal(isValidSkoolEntitlement({ ...valid, paidThrough: "2026-11-01T00:00:00.000Z" }, now), false);
  assert.equal(isValidSkoolEntitlement({ ...valid, paidThrough: "invalid" }, now), false);
  assert.equal(isValidSkoolEntitlement({ ...valid, groupSlug: "other-group" }, now), false);
  assert.equal(isValidSkoolEntitlement(null, now), false);
  assert.equal(isValidSkoolEntitlement({ ...valid, paidThrough: valid.paidThrough }, Date.parse(valid.paidThrough)), false);
});

test("access check requires Clerk server credentials and never trusts client-side checkout", () => {
  assert.equal(configured({}), false);
  assert.equal(configured({ CLERK_SECRET_KEY: "test", APP_URL: "https://quimica.sistemazenit.com" }), true);
  const security = readFileSync(new URL("../api/_lib/security.js", import.meta.url), "utf8");
  assert.match(security, /privateMetadata\?\.skoolMembership/);
  assert.match(security, /paidThrough/);
  assert.doesNotMatch(security, /Whop|WHOP|whop/);
  const pricing = readFileSync(new URL("../src/components/LaunchPricing.jsx", import.meta.url), "utf8");
  assert.doesNotMatch(pricing, /\/api\/checkout|WHOP/i);
});
