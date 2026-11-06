import test from "node:test";
import assert from "node:assert/strict";
import { allowedWhopPlanIds, isAllowedWhopPlanId, whopPlanIdForChoice } from "../api/_lib/plans.js";

const env = {
  WHOP_MONTHLY_PLAN_ID: "plan_monthly123",
  WHOP_ANNUAL_PLAN_ID: "plan_annual456"
};

test("monthly and annual checkout choices resolve only to configured server plan IDs", () => {
  assert.equal(whopPlanIdForChoice("monthly", env), "plan_monthly123");
  assert.equal(whopPlanIdForChoice("annual", env), "plan_annual456");
  assert.equal(whopPlanIdForChoice("plan_annual456", env), null);
  assert.equal(whopPlanIdForChoice("unknown", env), null);
});

test("membership validation allows either configured plan and no other plan", () => {
  assert.deepEqual(allowedWhopPlanIds(env), ["plan_monthly123", "plan_annual456"]);
  assert.equal(isAllowedWhopPlanId("plan_monthly123", env), true);
  assert.equal(isAllowedWhopPlanId("plan_annual456", env), true);
  assert.equal(isAllowedWhopPlanId("plan_unrelated", env), false);
  assert.equal(isAllowedWhopPlanId(null, env), false);
});

test("missing or malformed plan IDs cannot be selected", () => {
  assert.equal(whopPlanIdForChoice("monthly", {}), null);
  assert.equal(whopPlanIdForChoice("annual", { WHOP_ANNUAL_PLAN_ID: "" }), null);
  assert.deepEqual(allowedWhopPlanIds({ WHOP_MONTHLY_PLAN_ID: "bad", WHOP_ANNUAL_PLAN_ID: "plan_ok" }), ["plan_ok"]);
});
