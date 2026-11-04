// Turns one independently reviewed mini-exam item into a transparent worked
// reinforcement case when the recovered source supplied fewer than two cases.
// It is formative material, deliberately not an additional independent exam.
export function addPracticeReinforcement(examples = [], quiz = []) {
  if (examples.length >= 2) return examples;
  const question = quiz.find(q => q?.prompt && q?.explanation);
  if (!question) return examples;
  const answer = question.type === "mc"
    ? question.options?.[question.answer]
    : `${question.answer}${question.unit ? ` ${question.unit}` : ""}`;
  if (!answer) return examples;
  return [...examples, {
    statement: `### Refuerzo guiado\n\n${question.prompt}\n\nAntes de abrir el desarrollo, identifica los datos o el principio que decide el caso.`,
    solution: `**Principio aplicado:** ${question.explanation}\n\n**Resultado:** ${answer}\n\nEste es un caso formativo derivado de una pregunta revisada de la lección. Úsalo para comprobar el procedimiento; el mini examen sigue siendo un repaso, no una evaluación independiente.`
  }];
}
