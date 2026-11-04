// Central course registry: one record per lesson code, merged with the Skool
// source index so that codes, order and titles always match the course files.
import sourceIndex from "./sourceIndex.json" with { type: "json" };
import { authoredModules } from "./modules/index.js";
import { routeFor, moduleRoute, examRoute } from "./routes.js";
import { hasPlaceholderContent } from "./contentQuality.js";

const authoredByNumber = new Map(authoredModules.map(m => [m.number, m]));

function buildModule(source) {
  const authored = authoredByNumber.get(source.number);
  const topicsByCode = new Map((authored?.topics ?? []).map(t => [t.code, t]));
  const entries = source.entries.map((entry, index) => {
    const base = {
      code: entry.code,
      kind: entry.kind,
      order: entry.order,
      title: entry.shortTitle,
      fullTitle: entry.title,
      route: routeFor(entry.code),
      sourceObjective: entry.objective,
      currentLinks: entry.currentLinks,
      image: entry.image
    };
    if (entry.kind === "intro") {
      return { ...base, ...(authored?.intro ?? {}), kind: "intro", code: entry.code, route: base.route, hasContent: Boolean(authored?.intro) };
    }
    const topic = topicsByCode.get(entry.code);
    if (topic && hasPlaceholderContent(topic)) {
      return {
        ...base, activity: topic.activity, hasContent: false, status: "bloqueado",
        blockedReason: "La actividad y las preguntas necesitan contenido específico de esta lección."
      };
    }
    return topic
      ? { ...base, ...topic, title: base.title, fullTitle: base.fullTitle, route: base.route, hasContent: true, status: topic.status ?? "pendiente" }
      : { ...base, hasContent: false, status: "pendiente", blockedReason: "Contenido interactivo aún no redactado." };
  });
  const topics = entries.filter(e => e.kind === "topic");
  return {
    number: source.number,
    title: source.title,
    description: source.description,
    imageUrl: source.imageUrl,
    route: moduleRoute(source.number),
    examRoute: examRoute(source.number),
    authored: Boolean(authored),
    intro: entries.find(e => e.kind === "intro"),
    entries,
    topics,
    exam: topics.every(t => t.hasContent)
      ? (authored?.exam ?? []).filter(q => !hasPlaceholderContent({ quiz: [q] }))
      : [],
    examSources: authored?.examSources ?? []
  };
}

export const courseModules = sourceIndex.modules.map(buildModule);

export const allEntries = courseModules.flatMap(m => m.entries);
const byCode = new Map(allEntries.map(e => [e.code, e]));
const topicSequence = allEntries.filter(e => e.kind === "topic");

export function getEntry(code) { return byCode.get(code) ?? null; }
export function getModule(number) { return courseModules.find(m => m.number === number) ?? null; }

export function neighbours(code) {
  const i = topicSequence.findIndex(t => t.code === code);
  return { prev: i > 0 ? topicSequence[i - 1] : null, next: i >= 0 && i < topicSequence.length - 1 ? topicSequence[i + 1] : null };
}

export function courseStats() {
  const topics = topicSequence.length;
  const ready = topicSequence.filter(t => t.status === "listo").length;
  return { modules: courseModules.length, entries: allEntries.length, topics, intros: allEntries.length - topics, ready };
}
