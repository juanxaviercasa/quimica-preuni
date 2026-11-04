import { useState } from "react";
import { gradeQuestion } from "./families.js";
import { Feedback, RichText, letter } from "./ui.jsx";

function QuestionInput({ q, value, onChange, disabled, name }) {
  if (q.type === "num") {
    return (
      <label className="cq-num">
          <span>Tu respuesta{q.unit ? ` (${q.unit})` : ""}</span>
        <input
          type="text"
          inputMode="decimal"
          value={value ?? ""}
          disabled={disabled}
          onChange={e => onChange(e.target.value)}
          aria-label={`Respuesta numérica${q.unit ? ` en ${q.unit}` : ""}`}
        />
      </label>
    );
  }
  const has = value !== null && value !== undefined && value !== "";
  return (
    <fieldset className="cq-options" disabled={disabled}>
      <legend className="sr-only">Alternativas</legend>
      {q.options.map((opt, i) => (
        <label key={i} className={`cq-option ${has && Number(value) === i ? "is-selected" : ""}`}>
          <input type="radio" name={name} value={i} checked={has && Number(value) === i} onChange={() => onChange(i)} />
          <span className="cq-letter">{letter(i)})</span> <RichText text={opt} />
        </label>
      ))}
    </fieldset>
  );
}

function Solution({ q, response, showAllDistractors }) {
  const chosen = q.type === "mc" && response !== undefined && response !== null && response !== "" ? Number(response) : null;
  return (
    <div className="cq-solution">
      {q.type === "mc" ? (
        <p><strong>Clave: {letter(q.answer)})</strong> <RichText text={q.options[q.answer]} /></p>
      ) : (
        <p><strong>Respuesta: {String(q.answer)}{q.unit ? ` ${q.unit}` : ""}</strong>{q.tolerance ? ` (se acepta ±${q.tolerance})` : ""}</p>
      )}
      <RichText as="p" text={q.explanation} />
      {q.type === "mc" && chosen !== null && chosen !== q.answer && q.why?.[chosen] && (
        <p className="cq-why"><strong>Por qué {letter(chosen)}) no:</strong> <RichText text={q.why[chosen]} /></p>
      )}
      {q.type === "mc" && showAllDistractors && (
        <ul className="cq-distractors">
          {q.options.map((opt, i) => i !== q.answer && i !== chosen && q.why?.[i] ? (
            <li key={i}><strong>{letter(i)})</strong> <RichText text={q.why[i]} /></li>
          ) : null)}
        </ul>
      )}
    </div>
  );
}

function PracticeQuestion({ q, index }) {
  const [response, setResponse] = useState(null);
  const [checked, setChecked] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const ok = checked ? gradeQuestion(q, response) : null;
  const answered = response !== null && response !== "";
  return (
    <article className="cq-question" data-question-id={q.id}>
      <h4>Ejercicio {index + 1}{q.application ? <span className="cq-tag">Aplicación</span> : null}</h4>
      <RichText as="p" text={q.prompt} className="cq-prompt" />
      <QuestionInput q={q} value={response} onChange={v => { setResponse(v); setChecked(false); }} disabled={revealed} name={`p-${q.id}`} />
      <div className="cq-actions">
        <button type="button" className="cq-btn" disabled={!answered || revealed} onClick={() => setChecked(true)}>Comprobar</button>
        <button type="button" className="cq-btn ghost" onClick={() => { setRevealed(true); setChecked(true); }}>Ver solución</button>
      </div>
      {checked && !revealed && (
        <Feedback ok={ok}>
          {ok ? <RichText text={q.explanation} /> : q.type === "mc" && q.why?.[Number(response)] ? <RichText text={q.why[Number(response)]} /> : "Vuelve a intentarlo o abre la solución."}
        </Feedback>
      )}
      {revealed && <Solution q={q} response={response} showAllDistractors />}
    </article>
  );
}

export function PracticeSet({ questions }) {
  return <div className="cq-set">{questions.map((q, i) => <PracticeQuestion key={q.id} q={q} index={i} />)}</div>;
}

export function ExamSet({ questions, title = "Mini examen", onFinish }) {
  const [responses, setResponses] = useState({});
  const [finished, setFinished] = useState(false);
  const score = questions.filter(q => gradeQuestion(q, responses[q.id])).length;
  const answeredCount = questions.filter(q => responses[q.id] !== undefined && responses[q.id] !== "").length;
  return (
    <div className="cq-exam">
      {questions.map((q, i) => {
        const ok = finished ? gradeQuestion(q, responses[q.id]) : null;
        return (
          <article key={q.id} className={`cq-question ${finished ? (ok ? "is-ok" : "is-bad") : ""}`} data-question-id={q.id}>
            <h4>Pregunta {i + 1} {finished && <span className={`cq-mark ${ok ? "ok" : "bad"}`}>{ok ? "✔ correcta" : "✘ incorrecta"}</span>}</h4>
            <RichText as="p" text={q.prompt} className="cq-prompt" />
            <QuestionInput q={q} value={responses[q.id]} onChange={v => setResponses(r => ({ ...r, [q.id]: v }))} disabled={finished} name={`e-${q.id}`} />
            {finished && <Solution q={q} response={responses[q.id]} showAllDistractors />}
          </article>
        );
      })}
      {!finished ? (
        <div className="cq-exam-footer">
          <span>{answeredCount}/{questions.length} respondidas</span>
          <button type="button" className="cq-btn primary" onClick={() => { setFinished(true); onFinish?.(score, questions.length); }}>
            Terminar {title.toLowerCase()} y ver soluciones
          </button>
        </div>
      ) : (
        <div className="cq-result" role="status" aria-live="polite">
          <strong>Resultado: {score}/{questions.length}</strong>
          <span>{score === questions.length ? "Respondiste correctamente todas las preguntas de este intento." : score >= Math.ceil(questions.length * 0.6) ? "Buen avance: revisa las soluciones marcadas." : "Repasa la actividad y el ejemplo, y vuelve a intentarlo."}</span>
          <button type="button" className="cq-btn" onClick={() => { setResponses({}); setFinished(false); }}>Reintentar</button>
        </div>
      )}
    </div>
  );
}
