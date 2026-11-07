import { ZENIT_PLANS, resolveWhopPlanId } from "../../src/pricing/zenitOffer.js";

const planKeys = [...new Set(Object.values(ZENIT_PLANS).flatMap(p => [p.launchPlanEnv, p.regularPlanEnv]))];

export function allowedWhopPlanIds(env = process.env) {
  return [...new Set(planKeys.map(key => env?.[key]).filter(id => typeof id === "string" && /^plan_[A-Za-z0-9]+$/.test(id)))];
}

export function isAllowedWhopPlanId(id, env = process.env) {
  return typeof id === "string" && allowedWhopPlanIds(env).includes(id);
}

export function plansConfigured(env = process.env) {
  return planKeys.every(key => typeof env?.[key] === "string" && /^plan_[A-Za-z0-9]+$/.test(env[key])) &&
    allowedWhopPlanIds(env).length === 4;
}

export function checkoutSelection(choice, env = process.env, now = Date.now()) {
  if (choice !== "monthly" && choice !== "annual") throw new RangeError("Plan de suscripción inválido");
  const selected = resolveWhopPlanId(choice, env, now);
  return Object.freeze({ ...selected, billingPeriodDays: choice === "monthly" ? 30 : 365 });
}

const idOf = value => typeof value === "string" ? value : value?.id;

export function matchesWhopPlan(plan, selection, productId) {
  if (!plan || !selection || typeof productId !== "string") return false;
  // Never let checkout pricing come from the browser.
  return plan.id === selection.planId &&
    idOf(plan.product) === productId &&
    plan.plan_type === "renewal" &&
    String(plan.currency).toLowerCase() === "usd" &&
    Number(plan.billing_period) === selection.billingPeriodDays &&
    Number(plan.renewal_price) === selection.amountUsd &&
    Number(plan.initial_price) === 0 &&
    Number(plan.trial_period_days || 0) === 0 &&
    plan.release_method === "buy_now" &&
    plan.visibility !== "archived";
}
