import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { GAS_DEMO, gasPressureAtVolume, gasPressureVolumeProduct, volumeFromPistonDrag } from "../src/components/gasPistonModel.js";

const read = path => readFileSync(new URL(path, import.meta.url), "utf8");

test("brand assets use the Zenit phoenix and preserve sales-only navigation", () => {
  const landing = read("../src/Landing.jsx");
  const logo = read("../public/brand/zenit-phoenix.svg");
  const favicon = read("../public/favicon.svg");
  const css = read("../src/landing.css");
  assert.match(landing, /Química Zenit/);
  assert.match(landing, /zenit-phoenix\.svg/);
  assert.match(landing, /dolor-estudiante\.webp/);
  assert.match(landing, /visualizacion-atomica\.webp/);
  assert.match(landing, /sz-learning-photos/);
  assert.match(logo, /Fénix de Academia Zenit/);
  assert.match(logo, /M1154 1298/); // eye restored
  assert.match(favicon, /#0B1D3C/);
  assert.match(css, /--sz-navy:#0B1D3C/);
  assert.doesNotMatch(landing, /to="\/curso\/quimica/);
  assert.doesNotMatch(landing, /to=\{module\.route\}/);
  const pricing = read("../src/components/LaunchPricing.jsx");
  assert.match(pricing, /Inscribirme y pagar en Skool/);
  assert.doesNotMatch(pricing, /Inscripción próximamente/);
  assert.match(css, /\.sz-module-photo img\{[^}]*object-fit:contain/);
});

test("gas model conserves PV = nRT while pressure responds inversely to volume", () => {
  const highVolume = 18;
  const lowVolume = 6;
  assert.ok(gasPressureAtVolume(lowVolume) > gasPressureAtVolume(highVolume));
  const expected = GAS_DEMO.moles * GAS_DEMO.gasConstant * GAS_DEMO.temperatureKelvin;
  for (const volume of [5, 6, 9.5, 12, 18, 20]) {
    assert.ok(Math.abs(gasPressureVolumeProduct(volume) - expected) < 1e-10);
  }
});

test("piston dragging and keyboard input can expand or compress safely", () => {
  assert.ok(volumeFromPistonDrag(12, 30, 240) < 12);
  assert.ok(volumeFromPistonDrag(12, -30, 240) > 12);
  assert.equal(volumeFromPistonDrag(12, 100000, 240), GAS_DEMO.minVolume);
  assert.equal(volumeFromPistonDrag(12, -100000, 240), GAS_DEMO.maxVolume);
});

test("atom and gas demos expose interactive drag controls", () => {
  const atom = read("../src/components/AtomViewer3D.jsx");
  const gas = read("../src/components/GasPistonDemo.jsx");
  const landing = read("../src/Landing.jsx");
  assert.match(atom, /enableRotate/);
  assert.match(atom, /presentationOnly/);
  assert.match(gas, /setPointerCapture/);
  assert.match(gas, /onPointerMove/);
  assert.match(gas, /onKeyDown/);
  assert.match(landing, /<GasPistonDemo\s*\/>/);
});

test("gold isotope and ideal gas parameters are displayed in the sales page", () => {
  const atom = read("../src/components/LandingAtomExperience.jsx");
  const gas = read("../src/components/GasPistonDemo.jsx");
  for (const field of ["Número atómico", "Número de masa", "Protones", "Neutrones", "Electrones"]) {
    assert.ok(atom.includes(field));
  }
  assert.match(atom, /goldMassNumber - goldProtons/);
  for (const field of ["Presión", "Volumen", "Moles", "Constante", "Temperatura"]) {
    assert.ok(gas.includes(field));
  }
  assert.match(gas, /sz-gas-constants/);
});
