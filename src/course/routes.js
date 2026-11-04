// Central route helpers for the course. Routes are derived only from lesson codes.
export const COURSE_BASE = "/curso/quimica";
export const PUBLIC_ORIGIN = "https://quimica.sistemazenit.com";

const pad = n => String(n).padStart(2, "0");

export function parseCode(code) {
  const m = /^(\d+)\.(\d+)$/.exec(String(code));
  if (!m) return null;
  return { module: Number(m[1]), topic: Number(m[2]) };
}

export function routeFor(code) {
  const parsed = parseCode(code);
  if (!parsed) throw new Error(`Código inválido: ${code}`);
  return parsed.topic === 0 ? `${COURSE_BASE}/${pad(parsed.module)}` : `${COURSE_BASE}/${pad(parsed.module)}/${pad(parsed.topic)}`;
}

export function moduleRoute(number) { return `${COURSE_BASE}/${pad(number)}`; }
export function examRoute(number) { return `${COURSE_BASE}/${pad(number)}/evaluacion`; }

/** Accepts "02" or "2" from the URL. Returns null if the segment is not a plain number. */
export function segmentToNumber(segment) {
  return /^\d{1,2}$/.test(segment ?? "") ? Number(segment) : null;
}
