import { useState } from "react";
import Markdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

export function StudyText({ text }) {
  return <div className="cq-study-text"><Markdown
    remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}
    components={{ h1: ({ children }) => <h3>{children}</h3> }}
  >{text || ""}</Markdown></div>;
}

export function GuidedActivity({ activity }) {
  const [reasoning, setReasoning] = useState("");
  const [revealed, setRevealed] = useState(false);
  return <div>
    <StudyText text={activity.question} />
    <label>
      Tu predicción y razonamiento
      <textarea className="cq-reasoning" value={reasoning} onChange={e => setReasoning(e.target.value)} rows={4} />
    </label>
    <button className="cq-btn" disabled={!reasoning.trim()} onClick={() => setRevealed(true)}>Contrastar con la solución</button>
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
