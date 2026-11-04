import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ArrowDown, ArrowUp, RotateCcw, Target } from "lucide-react";
import { elements118 } from "../elementsData.js";
import { isotopesData } from "../data/isotopesData.js";
import { getHeatmapColor } from "../data/thermalCalculations.js";
import {
  TEMPERATURE_SCALES, convertTemperature, belowAbsoluteZero, weightedAverage, checkBalance, atomBalance,
  calculatorValues, calculatorGoalMet, seededShuffle, orderIsCorrect, builderIsCorrect, TREND_PROPERTIES, trendValue
} from "./families.js";
import { evaluate, formatNumber, withinTolerance } from "./expr.js";
import { Feedback, RichText } from "./ui.jsx";

const num = v => { const text = String(v ?? "").trim(); if (!text) return null; const n = Number(text.replace(",", ".")); return Number.isFinite(n) ? n : null; };
const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

function GoalBox({ question, met, children }) {
  return (
    <div className={`ca-goal ${met ? "is-met" : ""}`} aria-live="polite">
      <p className="ca-goal-q"><Target size={16} aria-hidden="true" /> <RichText text={question} /></p>
      {children}
    </div>
  );
}

function AnswerCheck({ unit, answer, tolerance, traps = [], explanation, onSolved }) {
  const [value, setValue] = useState("");
  const [result, setResult] = useState(null);
  function check() {
    const v = num(value);
    if (v === null) { setResult({ ok: false, text: "Escribe un número (usa punto decimal)." }); return; }
    if (withinTolerance(v, answer, tolerance)) { setResult({ ok: true, text: explanation }); onSolved?.(); return; }
    const trap = traps.find(t => withinTolerance(v, t.value, t.tolerance ?? tolerance));
    setResult({ ok: false, text: trap ? trap.feedback : "Usa el modelo de arriba para comprobar tu valor." });
  }
  return (
    <div className="ca-answer">
      <label>
        <span>Tu respuesta{unit ? ` (${unit})` : ""}</span>
        <input type="text" inputMode="decimal" value={value} onChange={e => { setValue(e.target.value); setResult(null); }}
          onKeyDown={e => { if (e.key === "Enter") check(); }} aria-label={`Respuesta de la actividad${unit ? ` en ${unit}` : ""}`} />
      </label>
      <button type="button" className="cq-btn primary" onClick={check}>Comprobar</button>
      {result && <Feedback ok={result.ok}><RichText text={result.text} /></Feedback>}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Temperatura: lecturas frente a intervalos                           */
/* ------------------------------------------------------------------ */
export function TemperatureActivity({ activity }) {
  const [sp] = useSearchParams();
  const p = activity.params ?? {};
  const [mode, setMode] = useState(["temperatura", "intervalo"].includes(sp.get("modo")) ? sp.get("modo") : (p.mode ?? "temperatura"));
  const [from, setFrom] = useState(TEMPERATURE_SCALES[sp.get("de")] ? sp.get("de") : (p.from ?? "C"));
  const [raw, setRaw] = useState(sp.get("valor") ?? String(p.value ?? 25));
  const value = num(raw);
  const invalid = value === null || (mode === "temperatura" && belowAbsoluteZero(value, from));
  const formula = mode === "temperatura"
    ? "T(K) = t(°C) + 273.15 · t(°F) = 1.8·t(°C) + 32 · T(°R) = t(°F) + 459.67"
    : "ΔT(K) = Δt(°C) · Δt(°F) = ΔT(°R) = 1.8·Δt(°C) (sin desplazamientos)";
  return (
    <div className="ca-temp">
      <div className="ca-segment" role="radiogroup" aria-label="Tipo de magnitud">
        {[["temperatura", "Temperatura (lectura)"], ["intervalo", "Intervalo (ΔT)"]].map(([id, label]) => (
          <button key={id} type="button" role="radio" aria-checked={mode === id} className={mode === id ? "active" : ""} onClick={() => setMode(id)}>{label}</button>
        ))}
      </div>
      <div className="ca-row">
        <label className="ca-field">
          <span>{mode === "intervalo" ? "Variación" : "Valor"}</span>
          <input type="text" inputMode="decimal" value={raw} onChange={e => setRaw(e.target.value)} aria-label="Valor a convertir" />
        </label>
        <label className="ca-field">
          <span>Escala de origen</span>
          <select value={from} onChange={e => setFrom(e.target.value)}>
            {Object.entries(TEMPERATURE_SCALES).map(([id, s]) => <option key={id} value={id}>{s.name} ({s.label})</option>)}
          </select>
        </label>
      </div>
      <input type="range" className="ca-range" min={mode === "intervalo" ? -200 : -273} max={mode === "intervalo" ? 200 : 500} step="1"
        value={value ?? 0} onChange={e => setRaw(e.target.value)} aria-label="Deslizador del valor" />
      {invalid ? (
        <p className="ca-warning" role="alert">{value === null ? "Escribe un número." : "Esa lectura está por debajo del cero absoluto (0 K): no es una temperatura posible."}</p>
      ) : (
        <div className="ca-cards" aria-live="polite">
          {Object.entries(TEMPERATURE_SCALES).map(([id, s]) => (
            <div key={id} className={`ca-card ${id === from ? "is-source" : ""}`}>
              <small>{s.name}</small>
              <strong>{mode === "intervalo" ? "Δ " : ""}{formatNumber(convertTemperature(value, from, id, mode), 2)} {s.label}</strong>
            </div>
          ))}
        </div>
      )}
      <p className="ca-formula">{formula}</p>
      <GoalBox question={activity.question}>
        <AnswerCheck unit={TEMPERATURE_SCALES[activity.goal.to].label} answer={activity.goal.answer} tolerance={activity.goal.tolerance ?? 0.05}
          traps={activity.goal.traps} explanation={activity.goal.explanation} />
      </GoalBox>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Isótopos: masa atómica promedio                                     */
/* ------------------------------------------------------------------ */
export function IsotopesActivity({ activity }) {
  const [sp] = useSearchParams();
  const p = activity.params ?? {};
  const choices = (p.choices ?? [p.sym]).filter(s => isotopesData[s]?.isotopes.length === 2);
  const initialSym = choices.includes(sp.get("sym")) ? sp.get("sym") : p.sym;
  const [sym, setSym] = useState(initialSym);
  const initialAb = num(sp.get("ab"));
  const [ab, setAb] = useState(initialAb !== null ? clamp(initialAb, 0, 100) : (p.startAbundance ?? 50));
  const data = isotopesData[sym];
  const [iso1, iso2] = data.isotopes;
  const abundances = [ab, Number((100 - ab).toFixed(2))];
  const avg = weightedAverage([iso1.mass_u, iso2.mass_u], abundances);
  const target = data.standard_mass;
  const met = withinTolerance(avg, target, activity.goal.tolerance);
  const position = ((avg - iso1.mass_u) / (iso2.mass_u - iso1.mass_u)) * 100;
  return (
    <div className="ca-iso">
      <div className="ca-row">
        <label className="ca-field">
          <span>Elemento</span>
          <select value={sym} onChange={e => { setSym(e.target.value); setAb(50); }}>
            {choices.map(s => <option key={s} value={s}>{isotopesData[s].name} ({s})</option>)}
          </select>
        </label>
        <label className="ca-field">
          <span>Abundancia de {iso1.symbol} (%)</span>
          <input type="number" min="0" max="100" step="0.1" value={ab} onChange={e => setAb(clamp(num(e.target.value) ?? 0, 0, 100))} />
        </label>
      </div>
      <input className="ca-range" type="range" min="0" max="100" step="0.1" value={ab} onChange={e => setAb(Number(e.target.value))}
        aria-label={`Abundancia de ${iso1.name}`} />
      <div className="ca-stack" aria-hidden="true">
        <span style={{ width: `${abundances[0]}%` }}>{iso1.symbol}</span>
        <span style={{ width: `${abundances[1]}%` }}>{iso2.symbol}</span>
      </div>
      <table className="ca-table">
        <thead><tr><th>Isótopo</th><th>Masa isotópica (u)</th><th>Abundancia (%)</th><th>Aporte (u)</th></tr></thead>
        <tbody>
          {[iso1, iso2].map((iso, i) => (
            <tr key={iso.a}><td>{iso.name} ({iso.symbol})</td><td>{iso.mass_u}</td><td>{formatNumber(abundances[i], 2)}</td><td>{formatNumber(iso.mass_u * abundances[i] / 100, 4)}</td></tr>
          ))}
        </tbody>
      </table>
      <div className="ca-scale" aria-label={`Masa promedio ${formatNumber(avg, 3)} u entre ${iso1.mass_u} y ${iso2.mass_u}`}>
        <span className="ca-scale-end">{iso1.mass_u}</span>
        <div className="ca-scale-track"><i style={{ left: `${clamp(position, 0, 100)}%` }} /></div>
        <span className="ca-scale-end">{iso2.mass_u}</span>
      </div>
      <p className="ca-formula">
        Ā = ({iso1.mass_u} × {formatNumber(abundances[0], 2)} + {iso2.mass_u} × {formatNumber(abundances[1], 2)}) / 100 = <strong data-testid="iso-average">{formatNumber(avg, 3)} u</strong>
      </p>
      <GoalBox question={`${activity.question} (masa tabulada del ${data.name.toLowerCase()}: ${target} u, tolerancia ±${activity.goal.tolerance} u)`} met={met}>
        {met
          ? <Feedback ok><RichText text={`Lo lograste con ${formatNumber(ab, 1)} % de ${iso1.symbol}. Abundancia natural registrada: ${iso1.abundance_pct} % y ${iso2.abundance_pct} %. ${activity.goal.explanation ?? ""}`} /></Feedback>
          : <p className="ca-hint">Diferencia actual: {formatNumber(avg - target, 3)} u. {avg > target ? `Sube la abundancia del isótopo ligero (${iso1.symbol}).` : `Baja la abundancia del isótopo ligero (${iso1.symbol}).`}</p>}
      </GoalBox>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Tendencias periódicas: predecir, ordenar y contrastar con datos     */
/* ------------------------------------------------------------------ */
const MAIN_GROUP_COLS = [1, 2, 13, 14, 15, 16, 17, 18];
export function TrendsActivity({ activity }) {
  const [sp] = useSearchParams();
  const p = activity.params ?? {};
  const bySymbol = useMemo(() => new Map(elements118.map(e => [e.symbol, e])), []);
  const urlEls = (sp.get("els") ?? "").split(",").map(s => s.trim()).filter(s => bySymbol.has(s));
  const [prop, setProp] = useState(TREND_PROPERTIES[sp.get("prop")] ? sp.get("prop") : p.prop);
  const [selection, setSelection] = useState(urlEls.length >= 2 ? urlEls.slice(0, 6) : p.els);
  const usable = selection.filter(s => trendValue(bySymbol.get(s), prop) !== null);
  const [order, setOrder] = useState(() => seededShuffle(usable, usable.join()));
  const [checked, setChecked] = useState(null);
  const [showMap, setShowMap] = useState(false);
  const desc = (activity.goal?.order ?? "desc") === "desc";
  const meta = TREND_PROPERTIES[prop];

  useEffect(() => { setOrder(seededShuffle(usable, usable.join() + prop)); setChecked(null); /* eslint-disable-next-line */ }, [prop, selection.join()]);

  const correct = [...usable].sort((a, b) => (desc ? -1 : 1) * (trendValue(bySymbol.get(a), prop) - trendValue(bySymbol.get(b), prop)));
  const values = usable.map(s => trendValue(bySymbol.get(s), prop));
  const max = Math.max(...values, 0);
  const move = (i, d) => setOrder(o => { const n = [...o]; const j = i + d; if (j < 0 || j >= n.length) return o; [n[i], n[j]] = [n[j], n[i]]; setChecked(null); return n; });
  const toggle = s => setSelection(sel => sel.includes(s) ? (sel.length > 2 ? sel.filter(x => x !== s) : sel) : (sel.length < 6 ? [...sel, s] : sel));

  const mapEls = elements118.filter(e => e.period <= 5 && MAIN_GROUP_COLS.includes(e.group));
  const mapValues = mapEls.map(e => trendValue(e, prop)).filter(v => v !== null);
  const [lo, hi] = [Math.min(...mapValues), Math.max(...mapValues)];

  return (
    <div className="ca-trends">
      <div className="ca-row">
        <label className="ca-field">
          <span>Propiedad</span>
          <select value={prop} onChange={e => setProp(e.target.value)}>
            {Object.entries(TREND_PROPERTIES).map(([id, m]) => <option key={id} value={id}>{m.label}</option>)}
          </select>
        </label>
        <p className="ca-hint">Elementos: {usable.join(", ")}. Toca la tabla para cambiarlos (2 a 6).</p>
      </div>
      <div className="ca-minitable" role="group" aria-label="Elementos representativos, periodos 1 a 5">
        {mapEls.map(e => {
          const v = trendValue(e, prop);
          const on = selection.includes(e.symbol);
          return (
            <button key={e.symbol} type="button" aria-pressed={on} title={`${e.name}`}
              style={{ gridColumn: MAIN_GROUP_COLS.indexOf(e.group) + 1, gridRow: e.period, background: showMap && v !== null ? getHeatmapColor(v, lo, hi) : undefined }}
              className={`${on ? "is-on" : ""} ${showMap ? "is-map" : ""}`} onClick={() => toggle(e.symbol)}>
              <b>{e.symbol}</b>{showMap && <small>{v === null ? "—" : v}</small>}
            </button>
          );
        })}
      </div>
      <h4 className="ca-subtitle">Ordena de {desc ? "mayor a menor" : "menor a mayor"}: {meta.label.toLowerCase()}</h4>
      <ol className="ca-order">
        {order.map((s, i) => (
          <li key={s}>
            <span><b>{s}</b> {bySymbol.get(s).name}</span>
            <span className="ca-order-btns">
              <button type="button" onClick={() => move(i, -1)} disabled={i === 0} aria-label={`Subir ${s}`}><ArrowUp size={16} /></button>
              <button type="button" onClick={() => move(i, 1)} disabled={i === order.length - 1} aria-label={`Bajar ${s}`}><ArrowDown size={16} /></button>
            </span>
          </li>
        ))}
      </ol>
      <div className="cq-actions">
        <button type="button" className="cq-btn primary" onClick={() => { setChecked(orderIsCorrect(correct, order)); setShowMap(true); }}>Comprobar con datos</button>
        <button type="button" className="cq-btn ghost" onClick={() => setShowMap(m => !m)}>{showMap ? "Ocultar" : "Mostrar"} mapa de calor</button>
      </div>
      {checked !== null && (
        <>
          <Feedback ok={checked}>
            {checked ? "Tu orden coincide con los datos." : `Orden según los datos: ${correct.join(" > ")}.`} <RichText text={activity.goal?.explanation} />
          </Feedback>
          <div className="ca-bars">
            {correct.map(s => {
              const v = trendValue(bySymbol.get(s), prop);
              return (
                <div key={s} className="ca-bar"><span>{s}</span><i style={{ width: `${max ? (Math.max(v, 0) / max) * 100 : 0}%` }} /><b>{v}{meta.unit ? ` ${meta.unit}` : ""}</b></div>
              );
            })}
          </div>
          <p className="ca-source">Datos de la tabla interactiva (energías de ionización: NIST ASD; electronegatividad de Pauling revisada; afinidad electrónica como energía liberada, valores negativos = anión inestable).</p>
        </>
      )}
      <GoalBox question={activity.question} met={checked === true} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Calculadora paramétrica (familia genérica)                          */
/* ------------------------------------------------------------------ */
export function CalculatorActivity({ activity }) {
  const [sp] = useSearchParams();
  const p = activity.params;
  const [inputs, setInputs] = useState(() => Object.fromEntries(p.inputs.map(i => {
    const fromUrl = num(sp.get(i.id));
    return [i.id, fromUrl !== null ? clamp(fromUrl, i.min, i.max) : i.value];
  })));
  let values = {};
  let error = null;
  try { values = calculatorValues(p, inputs); } catch (e) { error = e.message; }
  const met = !error && calculatorGoalMet(p, activity.goal, inputs);
  const notes = (p.notes ?? []).filter(n => { try { return evaluate(n.when, values); } catch { return false; } });
  return (
    <div className="ca-calc">
      <div className="ca-inputs">
        {p.inputs.map(i => (
          <div key={i.id} className="ca-input">
            <label htmlFor={`in-${i.id}`}><RichText text={i.label} /> {i.unit && <small>({i.unit})</small>}</label>
            <div className="ca-input-row">
              <input id={`in-${i.id}`} type="range" min={i.min} max={i.max} step={i.step} value={inputs[i.id]}
                onChange={e => setInputs(s => ({ ...s, [i.id]: Number(e.target.value) }))} />
              <input type="number" min={i.min} max={i.max} step={i.step} value={inputs[i.id]} aria-label={`${i.label} (valor exacto)`}
                onChange={e => { const v = num(e.target.value); if (v !== null) setInputs(s => ({ ...s, [i.id]: clamp(v, i.min, i.max) })); }} />
            </div>
          </div>
        ))}
      </div>
      {p.formula && <p className="ca-formula"><RichText text={p.formula} /></p>}
      <div className="ca-cards" aria-live="polite">
        {p.outputs.filter(o => !o.hidden).map(o => (
          <div key={o.id} className="ca-card"><small><RichText text={o.label} /></small><strong>{error ? "—" : formatNumber(values[o.id], o.digits ?? 3)} {o.unit}</strong></div>
        ))}
      </div>
      {notes.map((n, i) => <p key={i} className="ca-note"><RichText text={n.text} /></p>)}
      <GoalBox question={activity.question} met={met}>
        {met ? <Feedback ok><RichText text={activity.goal.explanation ?? "Meta lograda."} /></Feedback>
          : <p className="ca-hint">Mueve los controles hasta cumplir la meta. {activity.goal.hint ?? ""}</p>}
      </GoalBox>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Clasificar casos                                                    */
/* ------------------------------------------------------------------ */
export function ClassifyActivity({ activity }) {
  const p = activity.params;
  const items = useMemo(() => seededShuffle(p.items, activity.title), [p.items, activity.title]);
  const [choice, setChoice] = useState({});
  const [checked, setChecked] = useState(false);
  const allDone = items.every(it => choice[it.id]);
  const correctCount = items.filter(it => choice[it.id] === it.category).length;
  return (
    <div className="ca-classify">
      <ul className="ca-items">
        {items.map(it => {
          const ok = checked ? choice[it.id] === it.category : null;
          return (
            <li key={it.id} className={ok === null ? "" : ok ? "is-ok" : "is-bad"}>
              <RichText text={it.label} className="ca-item-label" />
              <div className="ca-chips" role="radiogroup" aria-label={`Categoría para ${it.label}`}>
                {p.categories.map(c => (
                  <button key={c.id} type="button" role="radio" aria-checked={choice[it.id] === c.id} className={choice[it.id] === c.id ? "active" : ""}
                    onClick={() => { setChoice(s => ({ ...s, [it.id]: c.id })); setChecked(false); }}>{c.label}</button>
                ))}
              </div>
              {checked && <p className="ca-item-exp">{ok ? "✔" : `✘ Es «${p.categories.find(c => c.id === it.category).label}».`} <RichText text={it.explanation} /></p>}
            </li>
          );
        })}
      </ul>
      <div className="cq-actions">
        <button type="button" className="cq-btn primary" disabled={!allDone} onClick={() => setChecked(true)}>Comprobar clasificación</button>
        <button type="button" className="cq-btn ghost" onClick={() => { setChoice({}); setChecked(false); }}><RotateCcw size={14} /> Reiniciar</button>
      </div>
      <GoalBox question={activity.question} met={checked && correctCount === items.length}>
        {checked && <p className="ca-hint">{correctCount}/{items.length} casos bien clasificados.</p>}
      </GoalBox>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Ordenar una secuencia                                               */
/* ------------------------------------------------------------------ */
export function OrderActivity({ activity }) {
  const p = activity.params;
  const correctIds = p.items.map(i => i.id);
  const [order, setOrder] = useState(() => seededShuffle(correctIds, activity.title));
  const [checked, setChecked] = useState(null);
  const byId = Object.fromEntries(p.items.map(i => [i.id, i]));
  const move = (i, d) => setOrder(o => { const n = [...o]; const j = i + d; if (j < 0 || j >= n.length) return o; [n[i], n[j]] = [n[j], n[i]]; return n; });
  return (
    <div className="ca-orderwrap">
      <h4 className="ca-subtitle"><RichText text={p.criterion} /></h4>
      <ol className="ca-order">
        {order.map((id, i) => (
          <li key={id} className={checked === null ? "" : id === correctIds[i] ? "is-ok" : "is-bad"}>
            <span><RichText text={byId[id].label} /></span>
            <span className="ca-order-btns">
              <button type="button" onClick={() => { move(i, -1); setChecked(null); }} disabled={i === 0} aria-label={`Subir ${byId[id].label}`}><ArrowUp size={16} /></button>
              <button type="button" onClick={() => { move(i, 1); setChecked(null); }} disabled={i === order.length - 1} aria-label={`Bajar ${byId[id].label}`}><ArrowDown size={16} /></button>
            </span>
          </li>
        ))}
      </ol>
      <div className="cq-actions">
        <button type="button" className="cq-btn primary" onClick={() => setChecked(orderIsCorrect(correctIds, order))}>Comprobar orden</button>
      </div>
      {checked !== null && (
        <Feedback ok={checked}>
          {!checked && <>Orden correcto: {p.items.map(i => i.label).join(" → ")}. </>}<RichText text={p.explanation} />
        </Feedback>
      )}
      <GoalBox question={activity.question} met={checked === true} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Comparar casos                                                      */
/* ------------------------------------------------------------------ */
export function CompareActivity({ activity }) {
  const p = activity.params;
  const g = activity.goal;
  const [picked, setPicked] = useState(null);
  const done = picked !== null;
  return (
    <div className="ca-compare">
      <div className="ca-table-wrap">
        <table className="ca-table">
          <thead><tr><th>Caso</th>{p.columns.map(c => <th key={c.id}><RichText text={c.label} />{c.unit ? ` (${c.unit})` : ""}</th>)}<th>Elegir</th></tr></thead>
          <tbody>
            {p.cases.map(c => (
              <tr key={c.id} className={done && c.id === g.answer ? "is-ok" : done && c.id === picked ? "is-bad" : ""}>
                <td><RichText text={c.label} /></td>
                {p.columns.map(col => <td key={col.id}>{col.hidden && !done ? "?" : <RichText text={String(c.values[col.id])} />}</td>)}
                <td><button type="button" className={`cq-btn small ${picked === c.id ? "primary" : ""}`} aria-pressed={picked === c.id} onClick={() => setPicked(c.id)}>Este</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {done && (
        <>
          <Feedback ok={picked === g.answer}><RichText text={g.explanation} /></Feedback>
          <ul className="ca-case-notes">{p.cases.filter(c => c.note).map(c => <li key={c.id}><strong><RichText text={c.label} />:</strong> <RichText text={c.note} /></li>)}</ul>
          <button type="button" className="cq-btn ghost" onClick={() => setPicked(null)}>Volver a elegir</button>
        </>
      )}
      <GoalBox question={activity.question} met={picked === g.answer} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Construir una respuesta con fichas                                   */
/* ------------------------------------------------------------------ */
export function BuilderActivity({ activity }) {
  const p = activity.params;
  const pool = useMemo(() => seededShuffle(p.tokens.map((t, i) => ({ t, i })), activity.title), [p.tokens, activity.title]);
  const [seq, setSeq] = useState([]);
  const [checked, setChecked] = useState(null);
  const used = new Set(seq.map(s => s.i));
  return (
    <div className="ca-builder">
      <div className="ca-built" aria-live="polite" aria-label="Respuesta construida">
        {seq.length ? seq.map((s, k) => <span key={k} className="ca-token is-built">{s.t}</span>) : <span className="ca-hint">Toca las fichas en orden…</span>}
      </div>
      <div className="ca-pool">
        {pool.map(s => (
          <button key={s.i} type="button" className="ca-token" disabled={used.has(s.i)} onClick={() => { setSeq(q => [...q, s]); setChecked(null); }}>{s.t}</button>
        ))}
      </div>
      <div className="cq-actions">
        <button type="button" className="cq-btn primary" disabled={!seq.length} onClick={() => setChecked(builderIsCorrect(p, seq.map(s => s.t)))}>Comprobar</button>
        <button type="button" className="cq-btn ghost" disabled={!seq.length} onClick={() => { setSeq(q => q.slice(0, -1)); setChecked(null); }}>Quitar última</button>
        <button type="button" className="cq-btn ghost" onClick={() => { setSeq([]); setChecked(null); }}><RotateCcw size={14} /> Reiniciar</button>
      </div>
      {checked !== null && (
        <Feedback ok={checked}>{!checked && <>Una respuesta correcta: {(p.answers ?? [p.answer])[0].join(" ")}. </>}<RichText text={p.explanation} /></Feedback>
      )}
      <GoalBox question={activity.question} met={checked === true} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Balancear ecuaciones (conservación de átomos y carga)               */
/* ------------------------------------------------------------------ */
export function BalanceActivity({ activity }) {
  const p = activity.params;
  const [coefs, setCoefs] = useState(() => p.species.map(() => 1));
  const [checked, setChecked] = useState(null);
  const { tally } = atomBalance(p.species, coefs);
  const elementsList = Object.keys(tally);
  const side = (s, c) => p.species.map((sp, i) => ({ sp, i })).filter(x => x.sp.side === s);
  const count = (s, el) => p.species.reduce((sum, sp, i) => sum + (sp.side === s ? coefs[i] * (sp.atoms[el] ?? 0) : 0), 0);
  const charge = s => p.species.reduce((sum, sp, i) => sum + (sp.side === s ? coefs[i] * (sp.charge ?? 0) : 0), 0);
  const hasCharge = p.species.some(sp => sp.charge);
  const set = (i, v) => { setCoefs(c => c.map((x, k) => k === i ? clamp(v, 1, 20) : x)); setChecked(null); };
  const renderSide = s => side(s).map(({ sp, i }, k) => (
    <span key={i} className="ca-species">
      {k > 0 && <span className="ca-plus">+</span>}
      <span className="ca-stepper">
        <button type="button" onClick={() => set(i, coefs[i] - 1)} aria-label={`Disminuir coeficiente de ${sp.formula}`}>−</button>
        <output aria-label={`Coeficiente de ${sp.formula}`}>{coefs[i]}</output>
        <button type="button" onClick={() => set(i, coefs[i] + 1)} aria-label={`Aumentar coeficiente de ${sp.formula}`}>+</button>
      </span>
      <RichText text={sp.formula} className="ca-formula-chem" />
    </span>
  ));
  return (
    <div className="ca-balance">
      <div className="ca-equation">{renderSide("reactants")}<span className="ca-arrow">→</span>{renderSide("products")}</div>
      <table className="ca-table">
        <thead><tr><th>Elemento</th><th>Reactivos</th><th>Productos</th></tr></thead>
        <tbody>
          {elementsList.map(el => {
            const r = count("reactants", el), q = count("products", el);
            return <tr key={el} className={r === q ? "is-ok" : "is-bad"}><td>{el}</td><td>{r}</td><td>{q}</td></tr>;
          })}
          {hasCharge && <tr className={charge("reactants") === charge("products") ? "is-ok" : "is-bad"}><td>Carga</td><td>{charge("reactants")}</td><td>{charge("products")}</td></tr>}
        </tbody>
      </table>
      <div className="cq-actions">
        <button type="button" className="cq-btn primary" onClick={() => setChecked(checkBalance(p.species, coefs))}>Comprobar balance</button>
        <button type="button" className="cq-btn ghost" onClick={() => { setCoefs(p.species.map(() => 1)); setChecked(null); }}><RotateCcw size={14} /> Reiniciar</button>
      </div>
      {checked && <Feedback ok={checked.ok && checked.minimal}>{checked.reason} {checked.ok && checked.minimal && <RichText text={activity.goal.explanation} />}</Feedback>}
      <GoalBox question={activity.question} met={Boolean(checked?.ok && checked?.minimal)} />
    </div>
  );
}

export const ACTIVITY_COMPONENTS = {
  temperature: TemperatureActivity,
  isotopes: IsotopesActivity,
  trends: TrendsActivity,
  calculator: CalculatorActivity,
  classify: ClassifyActivity,
  order: OrderActivity,
  compare: CompareActivity,
  builder: BuilderActivity,
  balance: BalanceActivity
};

export const FAMILY_LABELS = {
  temperature: "Conversor de temperaturas e intervalos",
  isotopes: "Laboratorio de isótopos",
  trends: "Tendencias periódicas con datos",
  calculator: "Simulador paramétrico",
  classify: "Clasificación de casos",
  order: "Ordenar una secuencia",
  compare: "Comparación de casos",
  builder: "Constructor de respuestas",
  balance: "Balanza de átomos y cargas"
};
