// Automated validation of the course registry and authored data.
// Used by tests/course.test.mjs and scripts/course/validate.mjs.
import { parseExpression, variablesOf, evaluate, withinTolerance } from "./expr.js";
import { convertTemperature, checkBalance, calculatorValues, calculatorGoalMet, trendValue, TREND_PROPERTIES, TEMPERATURE_SCALES, builderIsCorrect } from "./families.js";

export const FAMILIES = ["isotopes", "trends", "temperature", "calculator", "classify", "order", "compare", "builder", "balance"];
export const STATUSES = ["listo", "pendiente", "bloqueado"];
const UNIVERSITY_ATTRIBUTION = /\b(UNI|UNMSM|San Marcos|PUCP|UNSAAC|UNAC|DECO|CEPRE[- ]?\w*)\b/;
const OBSOLETE_HOST = /https?:\/\/quimica\.sistemazenit\.com/;

const isText = v => typeof v === "string" && v.trim().length > 0;

export function validateCourse({ modules, sourceIndex, elements, isotopes }) {
  const errors = [];
  const warnings = [];
  const err = (where, msg) => errors.push(`${where}: ${msg}`);
  const warn = (where, msg) => warnings.push(`${where}: ${msg}`);
  const questionIds = new Set();
  const routes = new Set();
  const elementBySymbol = new Map((elements ?? []).map(e => [e.symbol, e]));

  // ---- Source coverage ----
  const sourceCodes = sourceIndex.modules.flatMap(m => m.entries.map(e => e.code));
  if (new Set(sourceCodes).size !== sourceCodes.length) err("inventario", "códigos duplicados en la fuente");

  for (const mod of modules) {
    const src = sourceIndex.modules.find(m => m.number === mod.number);
    if (!src) { err(`módulo ${mod.number}`, "no existe en la fuente"); continue; }
    for (const entry of mod.entries) {
      if (routes.has(entry.route)) err(entry.code, `ruta duplicada ${entry.route}`);
      routes.add(entry.route);
    }
    const codes = mod.entries.map(e => e.code);
    const expected = src.entries.map(e => e.code);
    if (codes.join() !== expected.join()) err(`módulo ${mod.number}`, "el orden o los códigos no coinciden con la fuente");
    if (!mod.authored) continue;

    // ---- Intro ----
    if (!mod.intro?.hasContent) warn(mod.intro?.code ?? `módulo ${mod.number}`, "introducción sin resumen propio");
    else {
      if (!isText(mod.intro.objective)) err(mod.intro.code, "introducción sin objetivo");
      if (!Array.isArray(mod.intro.summary) || mod.intro.summary.length < 1) err(mod.intro.code, "introducción sin resumen");
    }

    // ---- Topics ----
    for (const topic of mod.topics) {
      const where = topic.code;
      if (!topic.hasContent) { warn(where, "sin contenido interactivo (pendiente)"); continue; }
      if (!STATUSES.includes(topic.status)) err(where, `estado inválido ${topic.status}`);
      if (topic.status === "bloqueado") {
        if (!isText(topic.blockedReason)) err(where, "bloqueado sin motivo");
        continue;
      }
      validateTopic(topic, { err, warn, questionIds, elementBySymbol, isotopes });
      if (topic.status === "pendiente" && !(topic.review?.doubts?.length)) err(where, "pendiente sin dudas registradas en review.doubts");
      if (topic.status === "listo" && topic.review?.status !== "verificado") err(where, "marcado listo sin revisión científica verificada");
      if (topic.status === "listo" && topic.review?.doubts?.length) err(where, "marcado listo con dudas abiertas");
    }

    // ---- Cumulative exam ----
    const exam = mod.exam ?? [];
    const topicCodes = new Set(mod.topics.map(t => t.code));
    const moduleIncomplete = mod.topics.some(t => !t.hasContent);
    if (exam.length < 8) (moduleIncomplete ? warn : err)(`evaluación ${mod.number}`, `tiene ${exam.length} preguntas (mínimo 8)`);
    const objectives = new Set();
    exam.forEach((q, i) => {
      validateQuestion(q, `evaluación ${mod.number} #${i + 1}`, { err, warn, questionIds });
      if (!topicCodes.has(q.objective)) err(`evaluación ${mod.number} #${i + 1}`, `objetivo ${q.objective} no es un tema del módulo`);
      objectives.add(q.objective);
    });
    const needed = Math.min(6, mod.topics.length);
    if (exam.length && objectives.size < needed) err(`evaluación ${mod.number}`, `cubre ${objectives.size} objetivos distintos (mínimo ${needed})`);
  }

  // ---- Obsolete links anywhere in authored data ----
  const raw = JSON.stringify(modules.filter(m => m.authored).map(m => ({
    t: m.topics.map(t => ({ a: t.activity, e: t.example, p: t.practice, q: t.quiz, s: t.sources, sum: t.summary })),
    e: m.exam,
    i: m.intro
  })));
  if (OBSOLETE_HOST.test(raw)) err("datos", "contienen enlaces a tablaperiodica.sistemazenit.com");

  const topics = modules.flatMap(m => m.topics);
  const stats = {
    entries: modules.reduce((s, m) => s + m.entries.length, 0),
    topics: topics.length,
    intros: modules.length,
    authored: topics.filter(t => t.hasContent).length,
    ready: topics.filter(t => t.status === "listo").length,
    pending: topics.filter(t => t.status === "pendiente").length,
    blocked: topics.filter(t => t.status === "bloqueado").length,
    questions: questionIds.size,
    routes: routes.size
  };
  return { errors, warnings, stats };
}

function validateTopic(topic, ctx) {
  const { err, warn } = ctx;
  const where = topic.code;
  if (!isText(topic.objective)) err(where, "sin objetivo observable");
  if (!Array.isArray(topic.summary) || topic.summary.length < 1 || topic.summary.length > 5) err(where, "el resumen debe tener entre 1 y 5 ideas");
  if (topic.summary?.join(" ").length > 900) warn(where, "resumen extenso: la explicación debe ser breve");
  // Activity
  const act = topic.activity;
  if (!act) err(where, "sin actividad");
  else {
    if (!FAMILIES.includes(act.family)) err(where, `familia desconocida ${act.family}`);
    if (!isText(act.title)) err(where, "actividad sin título");
    if (!isText(act.question)) err(where, "actividad sin pregunta guiada (activity.question)");
    if (!Array.isArray(act.instructions) || act.instructions.length < 1) err(where, "actividad sin instrucciones");
    if (!isText(act.reuse)) err(where, "actividad sin familia reutilizada/nueva registrada (activity.reuse)");
    try { validateFamily(act, where, ctx); } catch (e) { err(where, `actividad: ${e.message}`); }
  }
  // Worked example
  const ex = topic.example;
  if (!ex || !isText(ex.statement) || !Array.isArray(ex.steps) || ex.steps.length < 1 || !isText(ex.answer)) err(where, "ejemplo resuelto incompleto");
  // Practice and quiz
  if (!Array.isArray(topic.practice) || topic.practice.length < 2) err(where, "menos de 2 ejercicios de práctica");
  if (!Array.isArray(topic.quiz) || topic.quiz.length < 3) err(where, "menos de 3 preguntas de mini examen");
  (topic.practice ?? []).forEach((q, i) => validateQuestion(q, `${where} práctica ${i + 1}`, ctx));
  (topic.quiz ?? []).forEach((q, i) => validateQuestion(q, `${where} mini examen ${i + 1}`, ctx));
  // Sources
  if (!Array.isArray(topic.sources) || topic.sources.length < 1) err(where, "sin referencias científicas");
  (topic.sources ?? []).forEach((s, i) => {
    if (!isText(s.label) || !/^https:\/\//.test(s.url ?? "")) err(where, `referencia ${i + 1} sin etiqueta o URL https`);
  });
  if (!topic.review || !["verificado", "pendiente"].includes(topic.review.status)) err(where, "sin registro de revisión científica (review.status)");
}

export function validateQuestion(q, where, { err, warn, questionIds }) {
  if (!q || typeof q !== "object") { err(where, "pregunta vacía"); return; }
  if (!isText(q.id)) err(where, "pregunta sin id");
  else if (questionIds.has(q.id)) err(where, `id de pregunta duplicado ${q.id}`);
  else questionIds.add(q.id);
  if (!isText(q.prompt)) err(where, "pregunta sin enunciado");
  if (UNIVERSITY_ATTRIBUTION.test(`${q.prompt} ${q.tag ?? ""}`) && !q.attributionSource) err(where, "atribuye la pregunta a una universidad sin fuente");
  if (!isText(q.explanation)) err(where, "pregunta sin explicación de la solución");
  if (q.type === "mc") {
    if (!Array.isArray(q.options) || q.options.length < 3) err(where, "opción múltiple con menos de 3 opciones");
    else {
      if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer >= q.options.length) err(where, `clave fuera de rango (${q.answer})`);
      if (new Set(q.options.map(o => String(o).trim())).size !== q.options.length) err(where, "opciones repetidas");
      if (!Array.isArray(q.why) || q.why.length !== q.options.length) err(where, "falta explicar cada distractor (why[] con una entrada por opción)");
      else q.why.forEach((w, i) => { if (i !== q.answer && !isText(w)) err(where, `distractor ${String.fromCharCode(97 + i)} sin explicación`); });
    }
  } else if (q.type === "num") {
    if (!Number.isFinite(q.answer)) err(where, "respuesta numérica inválida");
    if (!(q.tolerance >= 0)) err(where, "respuesta numérica sin tolerancia");
    if (typeof q.unit !== "string") err(where, "respuesta numérica sin unidad (usa \"\" si es adimensional)");
  } else err(where, `tipo de pregunta desconocido ${q.type}`);
  if (q.check) {
    try {
      const value = evaluate(q.check.expr, q.check.vars ?? {});
      const target = q.type === "num" ? q.answer : Number(String(q.options?.[q.answer]).replace(/[^\d.eE+-]/g, ""));
      const tol = q.type === "num" ? q.tolerance : (q.check.tolerance ?? Math.abs(target) * 0.01);
      if (!withinTolerance(value, target, tol)) err(where, `la comprobación da ${value}, la clave es ${target}`);
    } catch (e) { err(where, `comprobación inválida: ${e.message}`); }
  } else if (q.type === "num") warn(where, "cálculo sin comprobación automática (check)");
}

function validateFamily(act, where, ctx) {
  const p = act.params ?? {};
  const g = act.goal ?? {};
  switch (act.family) {
    case "calculator": {
      if (!Array.isArray(p.inputs) || p.inputs.length < 1) throw new Error("sin entradas");
      if (!Array.isArray(p.outputs) || p.outputs.length < 1) throw new Error("sin salidas");
      const known = new Set(Object.keys(p.constants ?? {}));
      const defaults = {};
      for (const inp of p.inputs) {
        if (!isText(inp.id) || !isText(inp.label)) throw new Error("entrada sin id o etiqueta");
        if (known.has(inp.id)) throw new Error(`id repetido ${inp.id}`);
        if (!(inp.min < inp.max) || !(inp.step > 0) || inp.value < inp.min || inp.value > inp.max) throw new Error(`rango inválido en ${inp.id}`);
        known.add(inp.id); defaults[inp.id] = inp.value;
      }
      for (const out of p.outputs) {
        if (!isText(out.id) || !isText(out.label)) throw new Error("salida sin id o etiqueta");
        const vars = variablesOf(parseExpression(out.expr));
        for (const v of vars) if (!known.has(v)) throw new Error(`variable no definida «${v}» en ${out.id}`);
        known.add(out.id);
      }
      for (const note of p.notes ?? []) {
        for (const v of variablesOf(parseExpression(note.when))) if (!known.has(v)) throw new Error(`nota usa «${v}» no definida`);
      }
      const values = calculatorValues(p, defaults);
      for (const out of p.outputs) if (!Number.isFinite(values[out.id])) throw new Error(`salida ${out.id} no finita con valores iniciales`);
      if (!g.condition && !(p.outputs.some(o => o.id === g.output) && Number.isFinite(g.target))) throw new Error("meta sin salida/objetivo o condición");
      if (!g.solution) throw new Error("meta sin solución de referencia (goal.solution)");
      const sol = { ...defaults, ...g.solution };
      for (const inp of p.inputs) if (sol[inp.id] < inp.min || sol[inp.id] > inp.max) throw new Error(`solución fuera de rango en ${inp.id}`);
      if (!calculatorGoalMet(p, g, sol)) throw new Error("la solución de referencia no cumple la meta");
      if (calculatorGoalMet(p, g, defaults)) ctx.warn(where, "la meta ya se cumple con los valores iniciales");
      break;
    }
    case "temperature": {
      for (const k of ["from", "to"]) if (!(g[k] in TEMPERATURE_SCALES)) throw new Error(`meta con escala inválida ${g[k]}`);
      if (!["temperatura", "intervalo"].includes(g.mode)) throw new Error("meta sin modo temperatura/intervalo");
      const computed = convertTemperature(g.value, g.from, g.to, g.mode);
      if (!withinTolerance(computed, g.answer, g.tolerance ?? 0.01)) throw new Error(`meta: ${g.value} ${g.from}→${g.to} da ${computed}, no ${g.answer}`);
      break;
    }
    case "isotopes": {
      if (!ctx.isotopes?.[p.sym]) throw new Error(`no hay datos de isótopos para ${p.sym}`);
      if (!(g.tolerance > 0)) throw new Error("meta sin tolerancia");
      break;
    }
    case "trends": {
      if (!TREND_PROPERTIES[p.prop]) throw new Error(`propiedad desconocida ${p.prop}`);
      if (!Array.isArray(p.els) || p.els.length < 3) throw new Error("se necesitan al menos 3 elementos");
      for (const s of p.els) {
        const el = ctx.elementBySymbol.get(s);
        if (!el) throw new Error(`elemento desconocido ${s}`);
        if (trendValue(el, p.prop) === null) throw new Error(`${s} no tiene dato de ${p.prop}`);
      }
      if (!["desc", "asc"].includes(g.order ?? "desc")) throw new Error("orden inválido");
      break;
    }
    case "classify": {
      if (!Array.isArray(p.categories) || p.categories.length < 2) throw new Error("menos de 2 categorías");
      const cats = new Set(p.categories.map(c => c.id));
      if (!Array.isArray(p.items) || p.items.length < 4) throw new Error("menos de 4 casos");
      const ids = new Set();
      for (const it of p.items) {
        if (ids.has(it.id)) throw new Error(`caso repetido ${it.id}`);
        ids.add(it.id);
        if (!cats.has(it.category)) throw new Error(`caso ${it.id} con categoría inválida`);
        if (!isText(it.explanation)) throw new Error(`caso ${it.id} sin explicación`);
      }
      break;
    }
    case "order": {
      if (!Array.isArray(p.items) || p.items.length < 3) throw new Error("menos de 3 elementos para ordenar");
      if (new Set(p.items.map(i => i.id)).size !== p.items.length) throw new Error("ids repetidos");
      if (!isText(p.criterion)) throw new Error("sin criterio de orden");
      if (!isText(p.explanation)) throw new Error("sin explicación del orden");
      break;
    }
    case "compare": {
      if (!Array.isArray(p.cases) || p.cases.length < 2) throw new Error("menos de 2 casos");
      if (!Array.isArray(p.columns) || p.columns.length < 1) throw new Error("sin columnas");
      const ids = new Set(p.cases.map(c => c.id));
      if (ids.size !== p.cases.length) throw new Error("casos repetidos");
      for (const c of p.cases) for (const col of p.columns) if (!(col.id in (c.values ?? {}))) throw new Error(`caso ${c.id} sin valor ${col.id}`);
      if (!ids.has(g.answer)) throw new Error("la respuesta no es un caso");
      if (!isText(g.explanation)) throw new Error("sin explicación de la comparación");
      break;
    }
    case "builder": {
      if (!Array.isArray(p.tokens) || p.tokens.length < 3) throw new Error("menos de 3 fichas");
      const answers = p.answers ?? [p.answer];
      if (!answers.length || answers.some(a => !Array.isArray(a) || !a.length)) throw new Error("sin respuesta");
      for (const a of answers) {
        const pool = [...p.tokens];
        for (const t of a) { const i = pool.indexOf(t); if (i < 0) throw new Error(`la respuesta usa «${t}» que no está entre las fichas`); pool.splice(i, 1); }
      }
      if (!builderIsCorrect(p, answers[0])) throw new Error("respuesta inconsistente");
      if (!isText(p.explanation)) throw new Error("sin explicación");
      break;
    }
    case "balance": {
      if (!Array.isArray(p.species) || p.species.length < 2) throw new Error("menos de 2 especies");
      if (!p.species.some(s => s.side === "reactants") || !p.species.some(s => s.side === "products")) throw new Error("faltan reactivos o productos");
      if (!Array.isArray(g.solution) || g.solution.length !== p.species.length) throw new Error("solución con longitud distinta");
      const r = checkBalance(p.species, g.solution);
      if (!r.ok || !r.minimal) throw new Error(`la solución no está balanceada con mínimos enteros: ${r.reason}`);
      break;
    }
    default:
      throw new Error(`familia desconocida ${act.family}`);
  }
}
