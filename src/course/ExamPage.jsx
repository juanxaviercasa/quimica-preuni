import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, FileQuestion } from "lucide-react";
import { getModule } from "./registry.js";
import { segmentToNumber, moduleRoute } from "./routes.js";
import { ExamSet } from "./QuestionSet.jsx";
import "./course.css";

export default function ExamPage() {
  const { moduleSegment } = useParams();
  const modNum = segmentToNumber(moduleSegment);
  const mod = modNum ? getModule(modNum) : null;

  if (!mod) {
    return (
      <main className="cq-page">
        <div className="cq-section" style={{ textAlign: "center", padding: "3rem 1.5rem" }}>
          <h2>Módulo no encontrado</h2>
          <Link to="/curso/quimica" className="cq-btn primary">Volver al índice del curso</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="cq-page" aria-labelledby="exam-title">
      <header className="cq-header">
        <div className="cq-breadcrumb">
          <Link to="/">Tabla Periódica</Link>
          <ChevronRight size={14} aria-hidden="true" />
          <Link to="/curso/quimica">Curso de Química</Link>
          <ChevronRight size={14} aria-hidden="true" />
          <Link to={mod.route}>Módulo {String(mod.number).padStart(2, "0")}</Link>
          <ChevronRight size={14} aria-hidden="true" />
          <span>Evaluación Acumulativa</span>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", flexWrap: "wrap" }}>
          <div>
            <span style={{ fontSize: "0.85rem", fontWeight: "700", color: "#8b4db0", textTransform: "uppercase" }}>
              EVALUACIÓN ACUMULATIVA · MÓDULO {String(mod.number).padStart(2, "0")}
            </span>
            <h1 id="exam-title" className="cq-title">Examen de Integración y Dominio</h1>
          </div>
          <span className="cq-tag">{mod.exam.length} preguntas de admisión</span>
        </div>
        <p style={{ color: "var(--muted, #6b7280)", fontSize: "1.05rem", marginTop: "0.5rem" }}>
          Esta evaluación integra los conceptos fundamentales de «{mod.title}». Cada pregunta evalúa un objetivo observable del módulo con distractores analizados según criterios IUPAC y de admisión.
        </p>
      </header>

      <section className="cq-section">
        {mod.exam.length > 0 ? (
          <ExamSet questions={mod.exam} title="Evaluación acumulativa" />
        ) : (
          <p>La evaluación acumulativa para este módulo está en proceso de redacción.</p>
        )}
      </section>

      <div className="cq-nav">
        <Link to={mod.route}><ArrowLeft size={16} /> Volver a las lecciones del Módulo {mod.number}</Link>
        {mod.number < 18 && (
          <Link to={moduleRoute(mod.number + 1)}>Continuar al Módulo {mod.number + 1} <ArrowRight size={16} /></Link>
        )}
      </div>
    </main>
  );
}
