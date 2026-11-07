import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { salesModules, salesModuleCount, salesTopicCount } from "../src/landingProgram.js";

test("sales catalogue preserves the 18 modules and 179 registered topics", () => {
  assert.equal(salesModuleCount, 18);
  assert.equal(salesTopicCount, 179);
  assert.equal(new Set(salesModules.map(m => m.number)).size, 18);
  assert.deepEqual(salesModules.map(m => m.number), Array.from({ length: 18 }, (_, i) => i + 1));
});

test("every published sales module links to real topic and cover routes", () => {
  for (const module of salesModules) {
    assert.match(module.route, /^\/curso\/quimica\/\d{2}$/);
    assert.ok(module.title.length > 7);
    assert.ok(module.topics > 0);
    assert.match(module.imageUrl, /^https:\/\/[^ ]+\.webp$/i);
  }
});

test("hero is locked to Au and does not offer unnecessary element selectors", () => {
  const atom = readFileSync(new URL("../src/components/LandingAtomExperience.jsx", import.meta.url), "utf8");
  assert.match(atom, /element\.symbol === "Au"/);
  assert.doesNotMatch(atom, /ELEMENT_CHOICES|zl-element-picker|setSymbol/);
  assert.match(atom, /presentationOnly/);
});

test("sales page contains functional anchors and honest prelaunch payment messaging", () => {
  const landing = readFileSync(new URL("../src/Landing.jsx", import.meta.url), "utf8");
  for (const anchor of ["#metodo", "#programa", "#bonos", "#planes", "#preguntas"]) {
    assert.ok(landing.includes(anchor), "Missing " + anchor);
  }
  assert.match(landing, /No estamos procesando compras/);
  assert.match(landing, //recursos/ruta-estudio\.html/);
  assert.match(landing, //recursos/formulas-y-errores\.html/);
  assert.match(landing, //recursos/repaso-preexamen\.html/);
});
