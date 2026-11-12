import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = relative => readFileSync(new URL(relative, import.meta.url), "utf8");

test("Chemistry sales CTA goes to Skool, never Clerk or a second checkout", () => {
  const pricing = read("../src/components/LaunchPricing.jsx");
  const config = read("../src/config.js");
  assert.match(pricing, /href=\{communityUrl\}/);
  assert.match(config, /skool\.com\/academia-zenit-3587\/about/);
  assert.match(pricing, /Ver opciones e inscribirme en Skool/);
  assert.match(pricing, /Acceso básico/);
  assert.match(pricing, /Membresía completa/);
  assert.equal((pricing.match(/href=\{communityUrl\}/g) || []).length, 1);
  assert.match(pricing, /US\$19/);
  assert.doesNotMatch(pricing, /\/api\/checkout|openSignIn|useAuth|whop|Whop|clerk\.openSignIn/i);
});

function pricingForTest() { return read("../src/components/LaunchPricing.jsx"); }

test("landing keeps Skool options and removes old checkout/duplicate payment warnings", () => {
  const landing = read("../src/Landing.jsx");
  assert.match(pricingForTest(), /Skool confirma el precio/);
  assert.match(landing, /<LaunchPricing \/>/);
  assert.doesNotMatch(landing, /tarifa promocional de tu plan/);
  assert.doesNotMatch(pricingForTest(), /no vuelvas a comprar|doble pago/i);
});
