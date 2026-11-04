import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle, ExternalLink, HelpCircle, Lightbulb, ShieldCheck, Sparkles, Target } from "lucide-react";
import { getEntry, getModule, neighbours } from "./registry.js";
import { segmentToNumber } from "./routes.js";
import { ACTIVITY_COMPONENTS, FAMILY_LABELS } from "./activities.jsx";
import { PracticeSet, ExamSet } from "./QuestionSet.jsx";
import { RichText } from "./ui.jsx";
import "./course.css";

export default function TopicPage() {
  const { moduleSegment, topicSegment } = useParams();
  const modNum = segmentToNumber(moduleSegment);
  const topNum = segmentToNumber(topicSegment);
  const code = modNum !== null && topNum !== null ? `${modNum}.${topNum}` : null;
  const topic = code ? getEntry(code) : null;
  const mod = modNum ? getModule(modNum) : null;
  const { prev, next } = topic ? neighbours(topic.code) : { prev: null, next: null };

  if (!topic || topic.kind === "intro") {
    return (
      <main className="cq-page">
        <div className="cq-section" style={{ textAlign: "center", padding: "3rem 1.5rem" }}>
          <h2>Tema no encontrado</h2>
          <p style={{ margin: "1rem 0" }}>El código «{code || `${moduleSegment}/${topicSegment}`}» no corresponde a ninguna lección del curso.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            {mod && <Link to={mod.route} className="cq-btn">Volver al módulo {mod.number}</Link>}
            <Link to="/curso/quimica" className="cq-btn primary">Índice del curso</Link>
          </div>
        </div>
      </main>
    );
  }

  const ActivityComponent = topic.activity ? ACTIVITY_COMPONENTS[topic.activity.family] : null;

  return (
    <main className="cq-page" aria-labelledby="topic-title">
      <header className="cq-header">
        <div className="cq-breadcrumb">
          <Link to="/">Tabla Periódica</Link>
          <ChevronRightIcon />
          <Link to="/curso/quimica">Curso de Química</Link>
          <ChevronRightIcon />
          <Link to={mod?.route || `/curso/quimica/${String(modNum).padStart(2, "0")}`}>
            Módulo {String(modNum).padStart(2, "0")}
          </Link>
          <ChevronRightIcon />
          <span>Tema {topic.code}</span>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", flexWrap: "wrap" }}>
          <div>
            <span style={{ fontSize: "0.85rem", fontWeight: "700", color: "#8b4db0" }}>LECCIÓN {topic.code}</span>
            <h1 id="topic-title" className="cq-title">{topic.code} {topic.title}</h1>
          </div>
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <span className={`cq-badge ${topic.status}`}>{topic.status}</span>
            {topic.activity?.reuse && <span className="cq-tag">{topic.activity.reuse}</span>}
          </div>
        </div>
      </header>

      {/* Objetivo de Aprendizaje */}
      <section className="cq-section" aria-labelledby="obj-heading">
        <h2 id="obj-heading" className="cq-section-title">
          <Target size={18} /> Objetivo de Aprendizaje
        </h2>
        <div className="cq-objective-box">
          <RichText text={topic.objective || topic.sourceObjective} />
        </div>

        {topic.summary && (
          <>
            <h3 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: "0.5rem" }}>Fundamentos clave</h3>
            <ul className="cq-summary-list">
              {topic.summary.map((pt, i) => (
                <li key={i}><RichText text={pt} /></li>
              ))}
            </ul>
          </>
        )}
      </section>

      {/* Actividad Interactiva */}
      {topic.status !== "bloqueado" && topic.activity && ActivityComponent ? (
        <section className="cq-section" aria-labelledby="act-heading" style={{ border: "2px solid rgba(139, 77, 176, 0.25)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem", flexWrap: "wrap", gap: "0.5rem" }}>
            <h2 id="act-heading" className="cq-section-title" style={{ margin: 0, border: "none", padding: 0 }}>
              <Sparkles size={18} /> Actividad Interactiva: {topic.activity.title}
            </h2>
            <span className="cq-tag">{FAMILY_LABELS[topic.activity.family] || topic.activity.family}</span>
          </div>

          <div style={{ marginBottom: "1.25rem", background: "rgba(0,0,0,0.02)", padding: "0.85rem", borderRadius: "6px" }}>
            <strong style={{ fontSize: "0.9rem", color: "#8b4db0" }}>Instrucciones:</strong>
            <ul style={{ margin: "0.35rem 0 0 1.25rem", padding: 0, fontSize: "0.95rem" }}>
              {topic.activity.instructions.map((ins, i) => (
                <li key={i}><RichText text={ins} /></li>
              ))}
            </ul>
          </div>

          <ActivityComponent key={topic.code} activity={topic.activity} />
        </section>
      ) : topic.status === "bloqueado" ? (
        <section className="cq-section" style={{ borderLeft: "4px solid #ef4444" }}>
          <h2 className="cq-section-title" style={{ color: "#ef4444" }}>Tema en revisión / bloqueado</h2>
          <p>{topic.blockedReason || "Este tema requiere contrastación experimental adicional."}</p>
        </section>
      ) : (
        <section className="cq-section" style={{ borderLeft: "4px solid #f59e0b" }}>
          <h2 className="cq-section-title" style={{ color: "#f59e0b" }}>Actividad en desarrollo</h2>
          <p>El simulador para este tema se está integrando.</p>
        </section>
      )}

      {/* Ejemplo Resuelto */}
      {topic.example && (
        <section className="cq-section" aria-labelledby="ex-heading">
          <h2 id="ex-heading" className="cq-section-title">
            <Lightbulb size={18} /> Ejemplo Resuelto (Modelo Admisión)
          </h2>
          <div className="cq-example">
            <RichText as="p" text={topic.example.statement} className="cq-prompt" />
            <div className="cq-example-steps">
              <strong style={{ fontSize: "0.9rem", color: "#10b981" }}>Paso a paso:</strong>
              {topic.example.steps.map((st, i) => (
                <div key={i}><RichText text={st} /></div>
              ))}
            </div>
            <div className="cq-example-ans">
              <span>Respuesta: </span><RichText text={topic.example.answer} />
            </div>
          </div>
        </section>
      )}

      {/* Práctica Guiada */}
      {topic.practice && topic.practice.length > 0 && (
        <section className="cq-section" aria-labelledby="practice-heading">
          <h2 id="practice-heading" className="cq-section-title">
            <BookOpen size={18} /> Práctica con Retroalimentación Inmediata
          </h2>
          <p style={{ fontSize: "0.95rem", color: "var(--muted, #6b7280)", marginBottom: "1.25rem" }}>
            Resuelve cada ejercicio, comprueba tu razonamiento y revisa por qué cada opción es correcta o distractor.
          </p>
          <PracticeSet questions={topic.practice} />
        </section>
      )}

      {/* Mini Examen */}
      {topic.quiz && topic.quiz.length > 0 && (
        <section className="cq-section" aria-labelledby="quiz-heading">
          <h2 id="quiz-heading" className="cq-section-title">
            <CheckCircle size={18} /> Mini Examen de Validación
          </h2>
          <p style={{ fontSize: "0.95rem", color: "var(--muted, #6b7280)", marginBottom: "1.25rem" }}>
            Pon a prueba tu dominio conceptual antes de avanzar al siguiente tema.
          </p>
          <ExamSet key={topic.code} questions={topic.quiz} title="Mini examen" />
        </section>
      )}

      {/* Referencias científicas y revisión */}
      {topic.sources && topic.sources.length > 0 && (
        <section className="cq-review-card" aria-label="Referencias científicas">
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
            <ShieldCheck size={16} color="#10b981" />
            <strong>Revisión científica y fuentes primarias:</strong>
            <span>{topic.review?.status === "verificado" ? "Verificado rigurosamente" : "Pendiente"}</span>
          </div>
          {topic.review?.notes && <p style={{ margin: "0.25rem 0 0.5rem 0" }}><RichText text={topic.review.notes} /></p>}
          <ul className="cq-sources-list">
            {topic.sources.map((s, i) => (
              <li key={i}>
                <a href={s.url} target="_blank" rel="noreferrer">
                  {s.label} <ExternalLink size={12} style={{ display: "inline", verticalAlign: "middle" }} />
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Navegación anterior / siguiente */}
      <nav className="cq-nav" aria-label="Navegación entre temas">
        {prev ? (
          <Link to={prev.route}><ArrowLeft size={16} /> Tema anterior: {prev.code} {prev.title}</Link>
        ) : (
          <Link to={mod?.route || "/curso/quimica"}><ArrowLeft size={16} /> Módulo {modNum}</Link>
        )}
        {next ? (
          <Link to={next.route}>Siguiente tema: {next.code} {next.title} <ArrowRight size={16} /></Link>
        ) : (
          <Link to={mod?.examRoute || "/curso/quimica"}>Evaluación del módulo <ArrowRight size={16} /></Link>
        )}
      </nav>
    </main>
  );
}

function ChevronRightIcon() {
  return <span style={{ opacity: 0.5, fontSize: "0.85rem" }}>›</span>;
}
