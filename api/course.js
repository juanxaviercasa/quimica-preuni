import { authenticatedUser, configured, membershipFor, noStore } from "./_lib/security.js";
import { courseModules, courseStats, getEntry, getModule, neighbours } from "../src/course/registry.js";

function moduleSummary(mod) {
  return {
    number: mod.number, title: mod.title, description: mod.description, imageUrl: mod.imageUrl,
    route: mod.route, examRoute: mod.examRoute,
    topics: mod.topics.map(({ code, title, route, status, objective, sourceObjective }) => ({ code, title, route, status, objective, sourceObjective })),
    examCount: mod.exam.length
  };
}

export default async function handler(req, res) {
  noStore(res);
  if (req.method !== "GET") return res.status(405).json({ error: "Método no permitido" });
  if (!configured()) return res.status(503).json({ error: "El acceso al curso aún no está configurado" });

  const actor = await authenticatedUser(req);
  if (!actor) return res.status(401).json({ error: "Inicia sesión para continuar" });
  const membership = await membershipFor(actor.id);
  if (!membership) return res.status(403).json({ error: "Necesitas una membresía activa", code: "membership_required" });

  const kind = String(req.query.kind || "index");
  if (kind === "index") {
    return res.status(200).json({ modules: courseModules.map(moduleSummary), stats: courseStats() });
  }

  const moduleNumber = Number.parseInt(String(req.query.module || ""), 10);
  const mod = Number.isInteger(moduleNumber) ? getModule(moduleNumber) : null;
  if (!mod) return res.status(404).json({ error: "Módulo no encontrado" });

  if (kind === "module") return res.status(200).json({ module: mod });
  if (kind === "exam") return res.status(200).json({ module: { ...moduleSummary(mod), exam: mod.exam, examSources: mod.examSources } });
  if (kind === "topic") {
    const code = String(req.query.code || "");
    const topic = getEntry(code);
    if (!topic || topic.kind === "intro" || !code.startsWith(`${mod.number}.`)) return res.status(404).json({ error: "Tema no encontrado" });
    return res.status(200).json({ topic, module: moduleSummary(mod), neighbours: neighbours(code) });
  }
  return res.status(400).json({ error: "Recurso no válido" });
}
