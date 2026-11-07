import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  allowedWhopPlanIds, isAllowedWhopPlanId, plansConfigured,
  checkoutSelection, matchesWhopPlan
} from "../api/_lib/plans.js";

const env = {
  WHOP_MONTHLY_LAUNCH_PLAN_ID: "plan_Ml123",
  WHOP_ANNUAL_LAUNCH_PLAN_ID: "plan_Al456",
  WHOP_MONTHLY_REGULAR_PLAN_ID: "plan_Mr789",
  WHOP_ANNUAL_REGULAR_PLAN_ID: "plan_Ar012"
};
const before = "2026-12-01T04:59:59.999Z";
const after = "2026-12-01T05:00:00.000Z";

test("only four controlled recurring plan IDs are allowed", () => {
  assert.equal(plansConfigured(env), true);
  assert.equal(allowedWhopPlanIds(env).length, 4);
  for (const id of Object.values(env)) assert.equal(isAllowedWhopPlanId(id, env), true);
  assert.equal(isAllowedWhopPlanId("plan_invalid", env), false);
  assert.equal(plansConfigured({ ...env, WHOP_ANNUAL_REGULAR_PLAN_ID: env.WHOP_MONTHLY_LAUNCH_PLAN_ID }), false);
});

test("server price selection observes Peru cutoff for monthly and annual", () => {
  assert.deepEqual(checkoutSelection("monthly", env, before), {
    planId: "plan_Ml123", key: "monthly", amountUsd: 19, isLaunch: true, billingPeriodDays: 30
  });
  assert.deepEqual(checkoutSelection("annual", env, after), {
    planId: "plan_Ar012", key: "annual", amountUsd: 290, isLaunch: false, billingPeriodDays: 365
  });
  assert.throws(() => checkoutSelection("plan_Ml123", env, before), RangeError);
  assert.throws(() => checkoutSelection("monthly", {}, before), /sin configurar/);
});

test("Whop checkout rejects different product, amount, trial, currency, or billing type", () => {
  const selection = checkoutSelection("monthly", env, before);
  const plan = {
    id: selection.planId, product: { id: "prod_course" }, plan_type: "renewal",
    currency: "usd", billing_period: 30, renewal_price: 19,
    initial_price: 0, trial_period_days: 0, release_method: "buy_now", visibility: "hidden"
  };
  assert.equal(matchesWhopPlan(plan, selection, "prod_course"), true);
  assert.equal(matchesWhopPlan({ ...plan, product: "prod_other" }, selection, "prod_course"), false);
  assert.equal(matchesWhopPlan({ ...plan, renewal_price: 29 }, selection, "prod_course"), false);
  assert.equal(matchesWhopPlan({ ...plan, initial_price: 19 }, selection, "prod_course"), false);
  assert.equal(matchesWhopPlan({ ...plan, currency: "eur" }, selection, "prod_course"), false);
  assert.equal(matchesWhopPlan({ ...plan, plan_type: "one_time" }, selection, "prod_course"), false);
  assert.equal(matchesWhopPlan({ ...plan, billing_period: 365 }, selection, "prod_course"), false);
  assert.equal(matchesWhopPlan({ ...plan, trial_period_days: 7 }, selection, "prod_course"), false);
});

test("the integration is payments-only: no legacy paid-course components are copied", () => {
  const source = readFileSync(new URL("../src/components/LaunchPricing.jsx", import.meta.url), "utf8");
  const main = readFileSync(new URL("../src/main.jsx", import.meta.url), "utf8");
  const backend = readFileSync(new URL("../api/checkout.js", import.meta.url), "utf8");
  const webhook = readFileSync(new URL("../api/whop-webhook.js", import.meta.url), "utf8");
  assert.match(source, /useAuth/);
  assert.match(source, /openSignIn/);
  assert.doesNotMatch(source, /window\.Clerk/);
  assert.match(main, /publishableKey \?/);
  assert.match(backend, /authenticatedUser\(req\)/);
  assert.match(backend, /matchesWhopPlan\(actualPlan/);
  assert.match(webhook, /unwrapWebhook/);
  assert.match(webhook, /linkMembership/);
});
