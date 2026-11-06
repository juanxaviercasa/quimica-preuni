import { requirePaid } from "./_lib/security.js";
// IMPORTANT: This module must be used by the server only. Never import the
// registry or course datasets from the client-side React entrypoint.
import { courseModules, courseStats, getModule, getEntry, neighbours } from "../src/course/registry.js";

function moduleSummary(m) {
  return {
    number: m.number, title: m.title, description: m.description,
    imageUrl: m.imageUrl, route: m.route, examRoute: m.examRoute,
    topics: m.topics.map(t => ({ code: t.code, title: t.title, route: t.route })),
    examCount: m.exam.length
  };
}
function topicSummary(t) {
  return t ? { code: t.code, title: t.title, route: t.route } : null;
}

export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).json({ error: "Método no permitido" });
  const actor = await requirePaid(req, res);
  if (!actor) return;

  const type = String(req.query.type || "");
  const number = Number(req.query.module);
  if (type === "index") {
    return res.status(200).json({ modules: courseModules.map(moduleSummary), stats: courseStats() });
  }
  if (!Number.isInteger(number) || number < 1 || number > 18) {
    return res.status(400).json({ error: "Módulo inválido" });
  }
  const mod = getModule(number);
  if (!mod) return res.status(404).json({ error: "Módulo no encontrado" });
  if (type === "module") {
    return res.status(200).json({
      module: { ...moduleSummary(mod), intro: mod.intro,
        topics: mod.topics.map(t => ({ code: t.code, title: t.title, route: t.route,
          objective: t.objective, sourceObjective: t.sourceObjective, status: t.status })) }
    });
  }
  if (type === "exam") {
    return res.status(200).json({ module: { number: mod.number, title: mod.title,
      route: mod.route, examRoute: mod.examRoute, exam: mod.exam } });
  }
  if (type === "topic") {
    const topicNumber = Number(req.query.topic);
    if (!Number.isInteger(topicNumber) || topicNumber < 1 || topicNumber > 99)
      return res.status(400).json({ error: "Tema inválido" });
    const topic = getEntry(`${number}.${topicNumber}`);
    if (!topic || topic.kind !== "topic")
      return res.status(404).json({ error: "Tema no encontrado" });
    const { prev, next } = neighbours(topic.code);
    return res.status(200).json({
      topic, module: { number: mod.number, title: mod.title, route: mod.route, examRoute: mod.examRoute },
      prev: topicSummary(prev), next: topicSummary(next)
    });
  }
  return res.status(400).json({ error: "Tipo de consulta inválido" });
}
