/**
 * Química Zenit · política única de precios para la oferta 2026.
 *
 * Fecha de cierre: 30 nov 2026, 23:59:59.999 America/Lima (UTC-05).
 * 01 dic 2026, 00:00 Peru = 2026-12-01T05:00:00.000Z.
 *
 * La UI solo ilustra la oferta. El checkout DEBE elegir el plan en el servidor,
 * con reloj del servidor y permisos verificados, para que no se pueda adquirir
 * un precio promocional después de la fecha.
 */
export const LAUNCH_END_EXCLUSIVE_UTC = "2026-12-01T05:00:00.000Z";
export const LAUNCH_END_EXCLUSIVE_MS = Date.parse(LAUNCH_END_EXCLUSIVE_UTC);
export const PRICING_TIME_ZONE = "America/Lima";

export const ZENIT_PLANS = Object.freeze({
  monthly: Object.freeze({
    key: "monthly",
    label: "Mensual",
    billingUnit: "mes",
    cadence: "Cada mes",
    regularUsd: 29,
    launchUsd: 19,
    description: "Estudia con flexibilidad, un mes a la vez.",
    regularPlanEnv: "WHOP_MONTHLY_REGULAR_PLAN_ID",
    launchPlanEnv: "WHOP_MONTHLY_LAUNCH_PLAN_ID"
  }),
  annual: Object.freeze({
    key: "annual",
    label: "Anual",
    billingUnit: "año",
    cadence: "Cada año",
    regularUsd: 290,
    launchUsd: 190,
    description: "Un año para avanzar, repasar y prepararte a tu ritmo.",
    regularPlanEnv: "WHOP_ANNUAL_REGULAR_PLAN_ID",
    launchPlanEnv: "WHOP_ANNUAL_LAUNCH_PLAN_ID"
  })
});

function timeMs(input) {
  if (input instanceof Date) return input.getTime();
  if (typeof input === "number") return input;
  return new Date(input).getTime();
}

export function isLaunchActive(now = Date.now()) {
  const ms = timeMs(now);
  // Invalid clocks fail closed to the regular tier.
  return Number.isFinite(ms) && ms < LAUNCH_END_EXCLUSIVE_MS;
}

export function pricingFor(key, now = Date.now()) {
  const plan = ZENIT_PLANS[key];
  if (!plan) throw new RangeError("Plan desconocido");
  const launch = isLaunchActive(now);
  const priceUsd = launch ? plan.launchUsd : plan.regularUsd;
  return Object.freeze({
    ...plan,
    isLaunch: launch,
    priceUsd,
    savingsUsd: launch ? plan.regularUsd - plan.launchUsd : 0,
    discountPercent: launch
      ? Math.round((1 - plan.launchUsd / plan.regularUsd) * 100)
      : 0
  });
}

/**
 * Para la integración futura con Whop (lado SERVIDOR exclusivamente).
 * No confiar en precio, cantidad, descuento o plan_id enviados por el cliente.
 * Guardar los 4 IDs en variables privadas; nunca cambiar el renewal_price de
 * los planes promocionales una vez exista una suscripción.
 */
export function resolveWhopPlanId(key, env, now = Date.now()) {
  const plan = pricingFor(key, now);
  const varName = plan.isLaunch ? plan.launchPlanEnv : plan.regularPlanEnv;
  const planId = env?.[varName];
  if (typeof planId !== "string" || !/^plan_[a-zA-Z0-9]+$/.test(planId)) {
    throw new Error(`Plan de Whop sin configurar: ${varName}`);
  }
  return { planId, key: plan.key, amountUsd: plan.priceUsd, isLaunch: plan.isLaunch };
}
