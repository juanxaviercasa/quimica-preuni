import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  LAUNCH_END_EXCLUSIVE_UTC, LAUNCH_END_EXCLUSIVE_MS,
  PRICING_TIME_ZONE, ZENIT_PLANS, isLaunchActive, pricingFor, resolveWhopPlanId
} from "../src/pricing/zenitOffer.js";

const before = "2026-12-01T04:59:59.999Z";
const after = "2026-12-01T05:00:00.000Z";

test("promo stays active through Nov 30 23:59:59.999 in Peru, expires at Dec 1 00:00", () => {
  assert.equal(PRICING_TIME_ZONE, "America/Lima");
  assert.equal(LAUNCH_END_EXCLUSIVE_UTC, after);
  assert.equal(LAUNCH_END_EXCLUSIVE_MS, Date.parse(after));
  assert.equal(isLaunchActive(before), true);
  assert.equal(isLaunchActive(after), false);
  assert.equal(isLaunchActive("2026-12-01T08:00:00.000Z"), false);
  assert.equal(isLaunchActive(new Date(before)), true);
  assert.equal(isLaunchActive("bad-date"), false);
});

test("monthly and annual subscriber acquisition prices switch together", () => {
  const cases = [
    ["monthly", 19, 29, 10],
    ["annual", 190, 290, 100]
  ];
  for (const [key, promotional, regular, savings] of cases) {
    const launch = pricingFor(key, before);
    const standard = pricingFor(key, after);
    assert.equal(launch.priceUsd, promotional);
    assert.equal(launch.regularUsd, regular);
    assert.equal(launch.savingsUsd, savings);
    assert.equal(launch.isLaunch, true);
    assert.equal(standard.priceUsd, regular);
    assert.equal(standard.savingsUsd, 0);
    assert.equal(standard.isLaunch, false);
  }
  assert.equal(12 * ZENIT_PLANS.monthly.launchUsd - ZENIT_PLANS.annual.launchUsd, 38);
  assert.equal(12 * ZENIT_PLANS.monthly.regularUsd - ZENIT_PLANS.annual.regularUsd, 58);
  assert.throws(() => pricingFor("invalid"), RangeError);
});

test("server resolver uses distinct recurring Whop plan IDs before/after deadline", () => {
  const env = {
    WHOP_MONTHLY_LAUNCH_PLAN_ID: "plan_mPromo123",
    WHOP_ANNUAL_LAUNCH_PLAN_ID: "plan_yPromo123",
    WHOP_MONTHLY_REGULAR_PLAN_ID: "plan_mStandard123",
    WHOP_ANNUAL_REGULAR_PLAN_ID: "plan_yStandard123"
  };
  assert.deepEqual(resolveWhopPlanId("monthly", env, before),
    { planId: "plan_mPromo123", key: "monthly", amountUsd: 19, isLaunch: true });
  assert.deepEqual(resolveWhopPlanId("annual", env, before),
    { planId: "plan_yPromo123", key: "annual", amountUsd: 190, isLaunch: true });
  assert.deepEqual(resolveWhopPlanId("monthly", env, after),
    { planId: "plan_mStandard123", key: "monthly", amountUsd: 29, isLaunch: false });
  assert.deepEqual(resolveWhopPlanId("annual", env, after),
    { planId: "plan_yStandard123", key: "annual", amountUsd: 290, isLaunch: false });
  assert.throws(() => resolveWhopPlanId("monthly", {}, before), /sin configurar/);
  assert.throws(() => resolveWhopPlanId("monthly", { WHOP_MONTHLY_LAUNCH_PLAN_ID: "https://evil" }, before), /sin configurar/);
});

test("pricing UI shows a single currency symbol, full membership value and connected checkout intent", () => {
  const page = readFileSync(new URL("../src/components/LaunchPricing.jsx", import.meta.url), "utf8");
  assert.match(page, /crossed \? "del"/);
  assert.match(page, /sz-launch-currency/);
  assert.match(page, /<span className="sz-launch-digits">\{amount\}<\/span>/);
  assert.doesNotMatch(page, /US\$\$\{/);
  assert.doesNotMatch(page, /Inscripción próximamente/);
  assert.match(page, /Elegir plan/);
  assert.match(page, /Clases semanales en vivo/);
  assert.match(page, /Prácticas y exámenes autocorregidos/);
  assert.match(page, /Comunidad y acompañamiento/);
  assert.match(page, /\/api\/checkout/);
  assert.match(page, /No se realizó ningún cargo/);
  assert.match(page, /30 de noviembre de 2026/);
  assert.match(page, /1 de diciembre de 2026/);
  assert.match(page, /mantendrás su tarifa en las renovaciones/i);
  assert.doesNotMatch(page, /cuando esté configurado|calendario, los docentes participantes|propuesta de membresía/);
});
