// Pure logic shared by the activity components, the validator and the tests.
import { evaluate, evaluateOutputs, withinTolerance } from "./expr.js";

/* ---------- Temperatura (1.8) ----------
 * Desplazamientos exactos: T/K = t/°C + 273.15 ; t/°F = 1.8·t/°C + 32 ; T/°R = t/°F + 459.67.
 * Un intervalo (ΔT) no lleva desplazamiento: Δ1 K = Δ1 °C ; Δ1 °F = Δ1 °R = (5/9) K.
 */
export const TEMPERATURE_SCALES = {
  C: { label: "°C", name: "Celsius" },
  K: { label: "K", name: "Kelvin" },
  F: { label: "°F", name: "Fahrenheit" },
  R: { label: "°R", name: "Rankine" }
};
const toKelvin = { C: v => v + 273.15, K: v => v, F: v => (v + 459.67) * 5 / 9, R: v => v * 5 / 9 };
const fromKelvin = { C: k => k - 273.15, K: k => k, F: k => k * 9 / 5 - 459.67, R: k => k * 9 / 5 };
const intervalFactorToK = { C: 1, K: 1, F: 5 / 9, R: 5 / 9 };

export function convertTemperature(value, from, to, mode = "temperatura") {
  if (!(from in TEMPERATURE_SCALES) || !(to in TEMPERATURE_SCALES)) throw new Error(`Escala desconocida ${from}/${to}`);
  if (mode === "intervalo") return (value * intervalFactorToK[from]) / intervalFactorToK[to];
  return fromKelvin[to](toKelvin[from](value));
}

export function belowAbsoluteZero(value, from) {
  return toKelvin[from](value) < -1e-9;
}

/* ---------- Isótopos (2.5) ---------- */
export function weightedAverage(masses, abundances) {
  const total = abundances.reduce((s, a) => s + a, 0);
  if (total <= 0) return NaN;
  return masses.reduce((s, m, i) => s + m * abundances[i], 0) / total;
}

/* ---------- Balanceo ---------- */
export function atomBalance(species, coefficients) {
  const tally = {};
  let charge = 0;
  species.forEach((sp, i) => {
    const sign = sp.side === "products" ? -1 : 1;
    const c = coefficients[i] ?? 0;
    for (const [el, n] of Object.entries(sp.atoms ?? {})) tally[el] = (tally[el] ?? 0) + sign * c * n;
    charge += sign * c * (sp.charge ?? 0);
  });
  return { tally, charge };
}

function gcd(a, b) { return b ? gcd(b, a % b) : Math.abs(a); }

export function checkBalance(species, coefficients) {
  if (coefficients.some(c => !Number.isInteger(c) || c < 1)) return { ok: false, reason: "Usa coeficientes enteros positivos." };
  const { tally, charge } = atomBalance(species, coefficients);
  const unbalanced = Object.entries(tally).filter(([, n]) => n !== 0).map(([el]) => el);
  if (unbalanced.length) return { ok: false, unbalanced, charge, reason: `Falta igualar: ${unbalanced.join(", ")}.` };
  if (charge !== 0) return { ok: false, unbalanced: [], charge, reason: "Los átomos cuadran, pero la carga total no se conserva." };
  const g = coefficients.reduce((a, b) => gcd(a, b));
  if (g !== 1) return { ok: true, minimal: false, reason: `Está balanceada, pero puedes dividir todos los coeficientes entre ${g}.` };
  return { ok: true, minimal: true, reason: "Ecuación balanceada con los menores enteros." };
}

/* ---------- Calculadora ---------- */
export function calculatorValues(params, inputValues) {
  return evaluateOutputs(params.outputs, { ...(params.constants ?? {}), ...inputValues });
}

export function calculatorGoalMet(params, goal, inputValues) {
  if (!goal) return false;
  const values = calculatorValues(params, inputValues);
  if (goal.condition) return Boolean(evaluate(goal.condition, values));
  return withinTolerance(values[goal.output], goal.target, goal.tolerance);
}

/* ---------- Orden ---------- */
export function seededShuffle(list, seedText) {
  let seed = [...String(seedText)].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7);
  const rand = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 2 ** 32; };
  const out = [...list];
  for (let i = out.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [out[i], out[j]] = [out[j], out[i]]; }
  // Evita mostrar el orden correcto desde el inicio.
  if (out.length > 1 && out.every((x, i) => x === list[i])) out.push(out.shift());
  return out;
}

export function orderIsCorrect(correctIds, currentIds) {
  return correctIds.length === currentIds.length && correctIds.every((id, i) => id === currentIds[i]);
}

/* ---------- Constructor de respuestas ---------- */
export function builderIsCorrect(params, sequence) {
  const answers = params.answers ?? [params.answer];
  return answers.some(ans => ans.length === sequence.length && ans.every((t, i) => t === sequence[i]));
}

/* ---------- Tendencias ---------- */
export const TREND_PROPERTIES = {
  radius: { label: "Radio atómico", unit: "pm", key: "radius" },
  ionization: { label: "1.ª energía de ionización", unit: "kJ/mol", key: "ionization_1" },
  electronegativity: { label: "Electronegatividad (Pauling)", unit: "", key: "electronegativity" },
  affinity: { label: "Afinidad electrónica (energía liberada)", unit: "kJ/mol", key: "electron_affinity" }
};

export function trendValue(element, prop) {
  const meta = TREND_PROPERTIES[prop];
  if (!element || !meta) return null;
  const raw = element[meta.key] ?? (prop === "ionization" ? element.ionization : null);
  const n = Number(raw);
  return raw === null || raw === undefined || raw === "" || Number.isNaN(n) ? null : n;
}

/* ---------- Preguntas ---------- */
export function gradeQuestion(question, response) {
  if (response === undefined || response === null || String(response).trim() === "") return false;
  if (question.type === "num") {
    const value = Number(String(response).replace(",", "."));
    return Number.isFinite(value) && withinTolerance(value, question.answer, question.tolerance);
  }
  return Number(response) === question.answer;
}
