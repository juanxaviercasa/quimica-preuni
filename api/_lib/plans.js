const PLAN_ENV = Object.freeze({
  monthly: "WHOP_MONTHLY_PLAN_ID",
  annual: "WHOP_ANNUAL_PLAN_ID"
});

export function whopPlanIdForChoice(choice, env = process.env) {
  const key = PLAN_ENV[choice];
  const id = key && typeof env[key] === "string" ? env[key].trim() : "";
  return id.startsWith("plan_") ? id : null;
}

export function allowedWhopPlanIds(env = process.env) {
  return [...new Set(Object.keys(PLAN_ENV).map(choice => whopPlanIdForChoice(choice, env)).filter(Boolean))];
}

export function isAllowedWhopPlanId(planId, env = process.env) {
  return typeof planId === "string" && allowedWhopPlanIds(env).includes(planId);
}
