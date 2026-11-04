import { Fragment } from "react";
import Markdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

/** Minimal rich text: **negrita** and line breaks. Chemistry uses Unicode (H₂O, 10⁻³). */
export function RichText({ text, as: Tag = "span", className }) {
  if (text === null || text === undefined) return null;
  if (String(text).includes("$")) {
    return <Tag className={className}><Markdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}
      components={{ p: ({ children }) => <span>{children}</span> }}>{String(text)}</Markdown></Tag>;
  }
  const lines = String(text).split("\n");
  return (
    <Tag className={className}>
      {lines.map((line, li) => (
        <Fragment key={li}>
          {li > 0 && <br />}
          {line.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
            part.startsWith("**") && part.endsWith("**") ? <strong key={i}>{part.slice(2, -2)}</strong> : <Fragment key={i}>{part}</Fragment>
          )}
        </Fragment>
      ))}
    </Tag>
  );
}

export function Feedback({ ok, children, id }) {
  if (ok === null || ok === undefined) return null;
  return (
    <div className={`cq-feedback ${ok ? "is-ok" : "is-bad"}`} role="status" aria-live="polite" id={id}>
      <strong>{ok ? "Correcto." : "Revisa."}</strong> {children}
    </div>
  );
}

export const letter = i => String.fromCharCode(97 + i);
