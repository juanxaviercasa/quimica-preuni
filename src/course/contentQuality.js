// Detect generated scaffolding that does not teach the lesson's specific objective.
export function hasPlaceholderContent(topic) {
  const text = JSON.stringify([topic.activity, topic.practice, topic.quiz]);
  return /Parámetro de control [AB]|¿qué procedimiento garantiza la validez física|¿Cuál es la condición fundamental que rige el fenómeno|Pregunta de integración acumulativa/.test(text);
}
