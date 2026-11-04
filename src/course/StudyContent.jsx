import { useState } from "react";
import Markdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { gradeQuestion } from "./families.js";
import { Feedback, RichText } from "./ui.jsx";

export function StudyText({ text }) {
  return <div className="cq-study-text"><Markdown
    remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}
    components={{ h1: ({ children }) => <h3>{children}</h3> }}
  >{text || ""}</Markdown></div>;
}

export function GuidedActivity({ activity }) {
  const [reasoning, setReasoning] = useState("");
  const [response, setResponse] = useState("");
  const [checked, setChecked] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const checkpoint = activity.params?.checkpoint;
  const hasResponse = response !== "";
  const correct = checkpoint ? gradeQuestion(checkpoint, response) : false;
  const canReveal = Boolean(reasoning.trim()) && (!checkpoint || checked);
  return <div>
    <StudyText text={activity.question} />
    <label>
      Tu predicción y razonamiento
      <textarea className="cq-reasoning" value={reasoning} onChange={e => setReasoning(e.target.value)} rows={4} />
    </label>
    {checkpoint && <div className="cq-question" style={{ marginTop: "1rem" }}>
      <h3>Comprobación rápida</h3>
      <StudyText text={checkpoint.prompt} />
      {checkpoint.type === "mc" ? <fieldset className="cq-options" disabled={checked}>
        <legend className="sr-only">Alternativas de comprobación</legend>
        {checkpoint.options.map((option, index) => <label key={index} className={`cq-option ${hasResponse && Number(response) === index ? "is-selected" : ""}`}>
          <input type="radio" name="guided-checkpoint" checked={hasResponse && Number(response) === index} onChange={() => { setResponse(index); setChecked(false); }} />
          <RichText text={option} />
        </label>)}
      </fieldset> : <label className="cq-num"><span>Tu respuesta{checkpoint.unit ? ` (${checkpoint.unit})` : ""}</span><input type="text" inputMode="decimal" value={response} disabled={checked} onChange={e => { setResponse(e.target.value); setChecked(false); }} /></label>}
      {!checked ? <button type="button" className="cq-btn" disabled={!hasResponse} onClick={() => setChecked(true)}>Comprobar razonamiento</button> : <Feedback ok={correct}>
        <RichText text={correct ? checkpoint.explanation : (checkpoint.type === "mc" ? checkpoint.why?.[Number(response)] || checkpoint.explanation : checkpoint.explanation)} />
      </Feedback>}
    </div>}
    <button type="button" className="cq-btn" disabled={!canReveal} onClick={() => setRevealed(true)}>{checkpoint ? "Contrastar con el desarrollo" : "Contrastar con la solución"}</button>
    {revealed && <div className="cq-solution">
      <StudyText text={activity.params.solution} />
      <p>Compara tus pasos, las unidades y las condiciones con esta solución. Esta reflexión es una autoevaluación.</p>
    </div>}
  </div>;
}

export function WorkedPractice({ examples }) {
  return examples.map((example, index) => <article className="cq-question" key={index}>
    <h3>Problema de práctica {index + 1}</h3>
    <StudyText text={example.statement} />
    <details><summary>Consultar desarrollo</summary><StudyText text={example.solution} /></details>
  </article>);
}
