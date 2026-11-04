import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../../", import.meta.url));
const sourceDir = resolve(root, "../Modificar");
const repaired = {};
const problems = [];

function plain(text) {
  return text.replace(/^>\s?/gm, "").replace(/━━━━━━━━[^\n]*/g, "")
    .replace(/\b(?:UNI|DECO|UNMSM)\b/g, "Admisión").trim();
}

for (let module = 1; module <= 18; module++) {
  const file = resolve(sourceDir, `modulo_${String(module).padStart(2, "0")}.txt`);
  const source = JSON.parse(readFileSync(file, "utf8"));
  for (const lesson of source.lessons.slice(1)) {
    const code = lesson.params.title.split(" ")[0];
    let content = lesson.params.content.replace(/\r\n/g, "\n");
    const proposed = content.split(/Ejercicios propuestos/i)[1] || "";
    const keys = new Map([...proposed.matchAll(/(\d+)\s*\(([a-d])\)/gi)]
      .map(m => [Number(m[1]), m[2].toLowerCase().charCodeAt(0) - 97]));
    if (code === "8.9") keys.set(3, 1);
    const blocks = proposed.split(/\*\*(\d+)\.\s*\([^\n]*\)\*\*/);
    const quiz = [];
    for (let i = 1; i < blocks.length; i += 2) {
      const number = Number(blocks[i]);
      const block = blocks[i + 1].split(/\n>\s*(?:🔑|\*Clave|\*Corrección)|\n## 🔗/)[0];
      const firstOption = block.search(/^[a-d]\) /m);
      const options = [...block.matchAll(/^[a-d]\) (.*)$/gm)].map(m => m[1].trim());
      const answer = keys.get(number);
      if (firstOption < 0 || options.length !== 4 || !Number.isInteger(answer)) {
        problems.push({ code, number, reason: "Enunciado, alternativas o clave incompletos." });
        continue;
      }
      if (code === "8.9" && number === 2) options[2] = "23";
      if (code === "11.6" && number === 3) options.splice(0, 4, "VFV", "FVF", "FFV", "VVF");
      let prompt = plain(block.slice(0, firstOption));
      let explanation = `Clave del material del curso: ${String.fromCharCode(97 + answer)}) ${options[answer]}. Contrasta la respuesta con los fundamentos y el ejemplo de esta página.`;
      if (code === "13.1" && number === 2) {
        prompt = "¿Qué sustancia produce OH⁻ al reaccionar con agua, en lugar de disociar directamente grupos OH⁻ presentes en su fórmula?";
        explanation = "NH₃ + H₂O ⇌ NH₄⁺ + OH⁻. El amoníaco aumenta la concentración de OH⁻ por reacción con el agua. La definición operacional de base de Arrhenius puede incluir este comportamiento acuoso.";
      }
      if (code === "11.6" && number === 3) explanation = "I es falsa: el catalizador no cambia Kc a temperatura fija. II es verdadera: proporciona una vía alternativa de reacción. III es falsa: no cambia ΔH entre los mismos reactivos y productos. Secuencia FVF.";
      quiz.push({
        id: `source-${code}-${number}`, type: "mc",
        prompt, options, answer,
        explanation: code === "8.9" && number === 2
          ? "NO₃⁻ + 4Zn + 10H⁺ → 4Zn²⁺ + NH₄⁺ + 3H₂O. Se conservan los átomos y la carga +9 en ambos miembros. La suma es 1 + 4 + 10 + 4 + 1 + 3 = 23."
          : explanation,
        why: [], source: { file: `Modificar/modulo_${String(module).padStart(2, "0")}.txt`, question: number },
        reviewStatus: "clave de la fuente pendiente de revisión independiente"
      });
    }
    const solved = content.split(/Ejercicios resueltos/i)[1]?.split(/Ejercicios propuestos/i)[0] || "";
    const examples = [...solved.matchAll(/\*\*\d+\. ([\s\S]*?)\*\*\s*\n([\s\S]*?)(?=\n\*\*\d+\.|$)/g)]
      .map(m => ({ statement: plain(m[1]), solution: plain(m[2]).replace(/^\*\*Resolución:\*\*\s*/, "") }));
    const theory = content.split(/## 🧮 Entrenamiento práctico/)[0]
      .replace(/^!\[[^\]]*\]\([^)]*\)\s*/, "");
    repaired[code] = { theory: plain(theory), examples, quiz };
    if (quiz.length < 3) problems.push({ code, reason: `Solo ${quiz.length} preguntas extraídas. Requiere autoría específica.` });
  }
}
writeFileSync(resolve(root, "src/course/sourceContent.json"), JSON.stringify(repaired, null, 2) + "\n");
writeFileSync(resolve(root, "scripts/course/content-audit.json"), JSON.stringify(problems, null, 2) + "\n");
console.log(JSON.stringify({ topics: Object.keys(repaired).length, questions: Object.values(repaired).reduce((n, t) => n + t.quiz.length, 0), problems }, null, 2));
