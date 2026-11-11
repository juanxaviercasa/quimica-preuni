import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = relative => readFileSync(new URL(relative, import.meta.url), "utf8");

test("Chemistry sales CTA goes to Skool, never Clerk or a second checkout", () => {
  const pricing = read("../src/components/LaunchPricing.jsx");
  const config = read("../src/config.js");
  assert.match(pricing, /href=\{communityUrl\}/);
  assert.match(config, /skool\.com\/academia-zenit-3587\/about/);
  assert.match(pricing, /Inscribirme y pagar en Skool/);
  assert.match(pricing, /US\$19/);
  assert.doesNotMatch(pricing, /\/api\/checkout|openSignIn|useAuth|whop|Whop|clerk\.openSignIn/i);
});

test("landing communicates Skool as exclusive payment processor", () => {
  const landing = read("../src/Landing.jsx");
  assert.match(landing, /pago se realizan exclusivamente en Skool/);
  assert.match(landing, /<LaunchPricing \/>/);
  assert.doesNotMatch(landing, /tarifa promocional de tu plan/);
});
