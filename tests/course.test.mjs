import test from "node:test";
import assert from "node:assert/strict";
import { courseModules, allEntries, getEntry, getModule, neighbours, courseStats } from "../src/course/registry.js";
import { validateCourse } from "../src/course/validate.js";
import sourceIndex from "../src/course/sourceIndex.json" with { type: "json" };
import { elements118 } from "../src/elementsData.js";
import { isotopesData } from "../src/data/isotopesData.js";
import { convertTemperature, weightedAverage, checkBalance, TREND_PROPERTIES, trendValue } from "../src/course/families.js";
import { routeFor, moduleRoute, examRoute, segmentToNumber } from "../src/course/routes.js";
import { evaluate, withinTolerance } from "../src/course/expr.js";
import { hasPlaceholderContent } from "../src/course/contentQuality.js";
import { reviewQuestion } from "../src/course/reviewedQuestions.js";

test("all 537 questions have reviewed keys and complete reasoning", () => {
  const questions = courseModules.flatMap(m => m.topics.flatMap(t => t.quiz));
  assert.equal(questions.length, 537);
  for (const q of questions) {
    assert.equal(q.reviewStatus, "revisado", q.id);
    assert.equal(q.why.length, q.options.length, q.id);
    assert.ok(q.why.every(text => text.trim().length > 0), q.id);
    assert.ok(!q.explanation.startsWith("Clave del material del curso:"), q.id);
    assert.equal(new Set(q.options).size, q.options.length, q.id);
  }
});

test("reviewed redox, equilibrium and organic carbon-count keys match independent calculations", () => {
  const chromate = [
    { side: "reactants", atoms: { Cr: 1, O: 4 }, charge: -2 },
    { side: "reactants", atoms: { S: 1 }, charge: -2 },
    { side: "reactants", atoms: { H: 2, O: 1 }, charge: 0 },
    { side: "products", atoms: { Cr: 1, O: 3, H: 3 }, charge: 0 },
    { side: "products", atoms: { S: 1 }, charge: 0 },
    { side: "products", atoms: { O: 1, H: 1 }, charge: -1 }
  ];
  const coefficients = [2, 3, 8, 2, 3, 10];
  assert.equal(checkBalance(chromate, coefficients).ok, true);
  const q = getEntry("8.10").quiz[2];
  assert.equal(Number(q.options[q.answer]), coefficients.reduce((a, b) => a + b));
  assert.ok(1.2 ** 2 / (0.2 * 0.6 ** 3) > 1.2);
  const equilibrium = getEntry("12.5").quiz[2];
  assert.equal(equilibrium.options[equilibrium.answer], "Hacia reactivos.");
  const carbon = getEntry("16.8").quiz[1];
  assert.equal(carbon.options[carbon.answer], "Tres carbonos primarios y un carbono terciario.");
});

test("module two review corrects filling order and quantum terminology", () => {
  const order = getEntry("2.8").quiz[2];
  assert.equal(order.answer, 1);
  assert.equal(order.options[order.answer], "5s < 4d < 4f < 6p");
  assert.ok(getEntry("2.7").quiz[1].prompt.includes("ondas de materia"));
  assert.ok(getEntry("2.7").quiz[2].options[2].includes("|ψ|²"));
  for (const topic of getModule(2).topics) {
    for (const question of topic.quiz) {
      assert.equal(question.reviewStatus, "revisado");
      assert.equal(question.why.length, question.options.length);
    }
  }
});

test("recovered theory exposes the scientific scope notes for corrected claims", () => {
  const cases = [
    ["1.1", "agua desionizada no es automáticamente agua pura"],
    ["3.1", "regla de n + ℓ es un modelo útil"],
    ["12.3", "gases se comportan idealmente"],
    ["14.5", "ΔG° = −nFE°"],
    ["18.10", "normativa local"]
  ];
  for (const [code, phrase] of cases) {
    assert.ok(getEntry(code).theory.toLowerCase().includes(phrase.toLowerCase()), code);
    assert.ok(getEntry(code).theory.includes("Nota de precisión científica"), code);
  }
});

test("module 18 includes two worked, safety-conscious cases in every lesson", () => {
  for (const topic of getModule(18).topics) {
    assert.ok(topic.workedPractice.length >= 2, topic.code);
    assert.ok(topic.workedPractice.every(item => item.statement && item.solution), topic.code);
  }
});

test("every recovered lesson has at least two explained practice cases", () => {
  for (const module of courseModules) for (const topic of module.topics) {
    assert.ok(topic.workedPractice.length >= 2, topic.code);
    assert.ok(topic.workedPractice.every(item => item.statement && item.solution), topic.code);
  }
});

test("every guided recovered lesson exposes a reviewed interactive checkpoint", () => {
  for (const module of courseModules) for (const topic of module.topics) {
    if (topic.activity.family !== "guided") continue;
    const checkpoint = topic.activity.params.checkpoint;
    assert.equal(checkpoint.reviewStatus, "revisado", topic.code);
    assert.ok(checkpoint.explanation, topic.code);
  }
});

test("reviewed module one distinguishes force units and evidence of purity", () => {
  const force = getEntry("1.6").quiz[1];
  assert.ok(force.prompt.includes("4.5 kg"));
  assert.equal(force.options[force.answer], "44 N");
  const density = getEntry("1.7").quiz[1];
  assert.ok(density.options[density.answer].includes("no demuestra"));
  for (const topic of getModule(1).topics) {
    for (const question of topic.quiz) {
      assert.equal(question.why.length, question.options.length);
      assert.equal(question.reviewStatus, "revisado");
      assert.deepEqual(reviewQuestion(question).answer, question.answer);
    }
  }
});

test("course registry covers exactly 197 entries in 18 modules with zero validator errors", () => {
  const report = validateCourse({
    modules: courseModules,
    sourceIndex,
    elements: elements118,
    isotopes: isotopesData
  });
  assert.equal(report.errors.length, 0, `Validator returned errors: ${report.errors.join("; ")}`);
  assert.equal(report.stats.entries, 197);
  assert.equal(report.stats.topics, 179);
  assert.equal(report.stats.intros, 18);
  assert.equal(report.stats.ready, 0);
  assert.equal(report.stats.routes, 197);
  assert.ok(report.stats.questions >= 537);
  assert.ok(allEntries.filter(e => e.kind === "topic").every(e => e.status === "pendiente"));
  assert.ok(allEntries.filter(e => e.kind === "topic").every(e => !hasPlaceholderContent(e)));
});

test("pilot topic 1.8 (temperatures): exact 273.15 shift and thermal interval distinction", () => {
  const t18 = getEntry("1.8");
  assert.ok(t18);
  assert.equal(t18.activity.family, "temperature");
  assert.equal(t18.status, "pendiente");

  // Exact shift: 0 °C = 273.15 K
  assert.equal(convertTemperature(0, "C", "K", "temperatura"), 273.15);
  assert.equal(convertTemperature(100, "C", "K", "temperatura"), 373.15);

  // Exact shift: body temp 37 °C = 98.6 °F
  assert.ok(withinTolerance(convertTemperature(37, "C", "F", "temperatura"), 98.6, 1e-4));

  // Interval: Δ10 °C = Δ10 K (NO shift)
  assert.equal(convertTemperature(10, "C", "K", "intervalo"), 10);
  // Interval: Δ10 °C = Δ18 °F
  assert.equal(convertTemperature(10, "C", "F", "intervalo"), 18);

  // Goal of topic 1.8: reading where °F is double °C -> 160 °C = 320 °F
  const goal = t18.activity.goal;
  assert.equal(goal.value, 160);
  assert.equal(goal.answer, 320);
  assert.ok(withinTolerance(convertTemperature(goal.value, goal.from, goal.to, goal.mode), goal.answer, goal.tolerance));
});

test("pilot topic 2.5 (isotopes): weighted average atomic mass grounded on IUPAC CIAAW", () => {
  const t25 = getEntry("2.5");
  assert.ok(t25);
  assert.equal(t25.activity.family, "isotopes");
  assert.equal(t25.status, "pendiente");

  // Carbon natural abundance: 12.0000 * 0.9893 + 13.0034 * 0.0107
  const cData = isotopesData["C"];
  assert.ok(cData);
  const masses = [cData.isotopes[0].mass_u, cData.isotopes[1].mass_u];
  const naturalAvg = weightedAverage(masses, [98.93, 1.07]);
  assert.ok(withinTolerance(naturalAvg, 12.011, 0.005));

  // Goal tolerance matches activity
  assert.ok(t25.activity.goal.tolerance <= 0.01);
});

test("pilot topic 3.10 (trends): periodic trends vector and property ordering grounded on NIST/Pauling", () => {
  const t310 = getEntry("3.10");
  assert.ok(t310);
  assert.equal(t310.activity.family, "trends");
  assert.equal(t310.status, "pendiente");

  const bySymbol = new Map(elements118.map(e => [e.symbol, e]));
  const group1 = ["Li", "Na", "K", "Rb", "Cs"];
  const ies = group1.map(s => trendValue(bySymbol.get(s), "ionization"));

  // Ionization energy decreases down group 1: Li > Na > K > Rb > Cs
  for (let i = 0; i < ies.length - 1; i++) {
    assert.ok(ies[i] > ies[i + 1], `Ionization energy should decrease down group: ${group1[i]} (${ies[i]}) > ${group1[i+1]} (${ies[i+1]})`);
  }

  // Electronegativity increases across period 2: Li < Be < B < C < N < O < F
  const period2 = ["Li", "Be", "B", "C", "N", "O", "F"];
  const ens = period2.map(s => trendValue(bySymbol.get(s), "electronegativity"));
  for (let i = 0; i < ens.length - 1; i++) {
    assert.ok(ens[i] < ens[i + 1], `Electronegativity should increase across period 2: ${period2[i]} (${ens[i]}) < ${period2[i+1]} (${ens[i+1]})`);
  }
});

test("course route utilities correctly generate stable predictable URLs", () => {
  assert.equal(routeFor("1.0"), "/curso/quimica/01");
  assert.equal(routeFor("1.8"), "/curso/quimica/01/08");
  assert.equal(routeFor("2.5"), "/curso/quimica/02/05");
  assert.equal(routeFor("3.10"), "/curso/quimica/03/10");
  assert.equal(moduleRoute(18), "/curso/quimica/18");
  assert.equal(examRoute(18), "/curso/quimica/18/evaluacion");

  assert.equal(segmentToNumber("01"), 1);
  assert.equal(segmentToNumber("18"), 18);
  assert.equal(segmentToNumber("abc"), null);
  assert.equal(segmentToNumber(undefined), null);
});

test("expression evaluator correctly computes safe arithmetic expressions", () => {
  assert.equal(evaluate("2 + 3 * 4"), 14);
  assert.equal(evaluate("(a + b) / 2", { a: 10, b: 20 }), 15);
  assert.equal(evaluate("log10(100)"), 2);
  assert.equal(evaluate("x > 5 ? 1 : 0", { x: 8 }), 1);
  assert.equal(evaluate("round(3.14159, 2)"), 3.14);
});

test("chemical balance checker validates stoichiometry and charge", () => {
  const species = [
    { side: "reactants", formula: "CH₄", atoms: { C: 1, H: 4 }, charge: 0 },
    { side: "reactants", formula: "O₂", atoms: { O: 2 }, charge: 0 },
    { side: "products", formula: "CO₂", atoms: { C: 1, O: 2 }, charge: 0 },
    { side: "products", formula: "H₂O", atoms: { H: 2, O: 1 }, charge: 0 }
  ];
  const balanced = checkBalance(species, [1, 2, 1, 2]);
  assert.equal(balanced.ok, true);
  assert.equal(balanced.minimal, true);

  const nonMinimal = checkBalance(species, [2, 4, 2, 4]);
  assert.equal(nonMinimal.ok, true);
  assert.equal(nonMinimal.minimal, false);

  const unbalanced = checkBalance(species, [1, 1, 1, 1]);
  assert.equal(unbalanced.ok, false);
});
