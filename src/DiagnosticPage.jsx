import { StudyImage } from "./components/StudyImage.jsx";
import { useMemo, useState } from "react";
import { ArrowRight, ArrowUpRight, CheckCircle, RotateCcw, Sparkles, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { topics } from "./data.js";
import { getDiagnostic, saveDiagnostic } from "./storage.js";
import { communityUrl } from "./config.js";

const diagnosticTopics = topics.slice(0, 6);

function buildQuestions() {
  return diagnosticTopics.map((topic) => ({
    topicId: topic.id,
    topicTitle: topic.title,
    prompt: topic.questions[0].q,
    options: topic.questions[0].options,
    answer: topic.questions[0].answer,
    explanation: topic.questions[0].explain
  }));
}

export default function DiagnosticPage() {
  const questions = useMemo(buildQuestions, []);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [finished, setFinished] = useState(Boolean(getDiagnostic()));
  const [selected, setSelected] = useState(null);
  const [result, setResult] = useState(getDiagnostic());
  const [persisted, setPersisted] = useState(true);
  const question = questions[index];

  const finish = (nextAnswers) => {
    const topicScores = questions.reduce((scores, item, questionIndex) => ({
      ...scores,
      [item.topicId]: nextAnswers[questionIndex] === item.answer ? 1 : 0
    }), {});
    const score = nextAnswers.reduce((total, answer, questionIndex) => total + (answer === questions[questionIndex].answer ? 1 : 0), 0);
    const diagnostic = { score, total: questions.length, topicScores, recommendedMode: score < 3 ? "comprension" : "examen" };
    setPersisted(saveDiagnostic(diagnostic));
    setResult(diagnostic);
    setFinished(true);
  };

  const answer = () => {
    if (selected === null) return;
    const nextAnswers = [...answers, selected];
    if (index === questions.length - 1) finish(nextAnswers);
    else { setAnswers(nextAnswers); setSelected(null); setIndex(index + 1); }
  };

  const restart = () => { setIndex(0); setAnswers([]); setSelected(null); setFinished(false); setResult(null); };

  if (finished && result) {
    const recommendedMode = result.recommendedMode === "comprension" ? "Ruta Comprensión" : "Ruta Examen";
    const recommendedTopic = result.score < 3 ? topics[0] : topics[1];
    return <main className="diagnostic-page">
      {!persisted && <p className="storage-notice" role="status">Tu navegador no pudo guardar el diagnóstico. Puedes continuar; se conservará durante esta sesión.</p>}
      <div className="diagnostic-hero"><StudyImage src="/visuals/diagnostic-compass.jpg" alt="" className="hero-img" loading="lazy" /><div className="hero-content"><span className="eyebrow">Tu punto de partida</span><h1>Ya sabemos por dónde empezar.</h1><p>El diagnóstico no es una nota: es un mapa para que estudies con menos fricción y mejores repasos.</p></div></div>
      <section className="diagnostic-result"><div className="diagnostic-score"><strong>{result.score}/{result.total}</strong><span>conceptos reconocidos</span></div><h2>Te recomendamos {recommendedMode}.</h2><p>{result.score < 3 ? "Conviene reforzar los modelos básicos antes de acelerar hacia el examen." : "Ya tienes una base funcional. Puedes practicar con foco y volver a profundizar cuando aparezca un error."}</p><div className="diagnostic-actions"><Link className="primary-action" to={`/quiz/${recommendedTopic.id}`}><ArrowRight size={16} /> Empezar por {recommendedTopic.title}</Link><button className="secondary-action" onClick={restart}><RotateCcw size={16} /> Repetir diagnóstico</button></div></section>
      <section className="diagnostic-breakdown">
        <h2>Mapa de competencias</h2>
        {questions.map((item) => (
          <div className="diagnostic-topic" key={item.topicId}>
            <span>{item.topicTitle}</span>
            <strong className={result.topicScores[item.topicId] ? "known" : "needs-review"}>
              {result.topicScores[item.topicId] ? "Base detectada" : "Para repasar"}
            </strong>
          </div>
        ))}
      </section>

      {/* Reciprocity-Driven Community CTA */}
      <section className="diagnostic-community-card">
        <div className="diag-cta-top">
          <div className="diag-cta-badge">
            <Sparkles size={14} />
            <span>Comunidad Oficial Academia Zenit</span>
          </div>
          <span className="diag-cta-free-tag">Sigue aprendiendo</span>
        </div>
        <div className="diag-cta-content">
          <h3>¿Qué tema de química quieres reforzar?</h3>
          <p>
            Usa tu diagnóstico para elegir qué repasar. Continúa aprendiendo con <strong>Academia Zenit en Skool</strong>, una comunidad abierta a estudiantes de Latinoamérica. Acceso gratuito y membresía premium opcional.
          </p>
          <a
            href={communityUrl}
            target="_blank"
            rel="noreferrer"
            className="diag-cta-btn"
            title="Acceder a la comunidad Academia Zenit en Skool"
          >
            <Target size={16} />
            <span>Unirme gratis a la comunidad</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      </section>
    </main>;
  }

  return <main className="diagnostic-page"><div className="diagnostic-hero"><StudyImage src="/visuals/diagnostic-compass.jpg" alt="" className="hero-img" loading="lazy" /><div className="hero-content"><span className="eyebrow">Diagnóstico inicial · {index + 1}/{questions.length}</span><h1>Descubre qué necesitas estudiar primero.</h1><p>Responde seis preguntas sin buscar. Aquí medimos tu punto de partida, no tu memoria perfecta.</p></div></div><section className="diagnostic-question"><div className="diagnostic-question-meta"><span>{question.topicTitle}</span><span>{index + 1} de {questions.length}</span></div><h2>{question.prompt}</h2><div className="options">{question.options.map((option, optionIndex) => <button key={option} className={selected === optionIndex ? "selected" : ""} onClick={() => setSelected(optionIndex)} aria-pressed={selected === optionIndex}>{option}</button>)}</div><button className="primary-action next-button" disabled={selected === null} onClick={answer}>{index === questions.length - 1 ? "Ver mi mapa" : "Siguiente"} <ArrowRight size={16} /></button></section><p className="diagnostic-note"><CheckCircle size={15} /> Puedes cambiar de respuesta antes de continuar.</p></main>;
}
