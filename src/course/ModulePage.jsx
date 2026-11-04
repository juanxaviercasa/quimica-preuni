import { useParams, Link } from "react-router-dom";
import { ArrowLeft, BookOpen, CheckCircle2, ChevronRight, FileQuestion, Sparkles } from "lucide-react";
import { getModule } from "./registry.js";
import { segmentToNumber } from "./routes.js";
import { RichText } from "./ui.jsx";
import "./course.css";

export default function ModulePage() {
  const { moduleSegment } = useParams();
  const modNum = segmentToNumber(moduleSegment);
  const mod = modNum ? getModule(modNum) : null;

  if (!mod) {
    return (
      <main className="cq-page">
        <div className="cq-section" style={{ textAlign: "center", padding: "3rem 1.5rem" }}>
          <h2>Módulo no encontrado</h2>
          <p style={{ margin: "1rem 0" }}>El identificador «{moduleSegment}» no corresponde a ningún módulo del curso.</p>
          <Link to="/curso/quimica" className="cq-btn primary" style={{ textDecoration: "none" }}>Volver al índice del curso</Link>
        </div>
      </main>
    );
  }

  const readyCount = mod.topics.filter(t => t.status === "listo").length;

  return (
    <main className="cq-page" aria-labelledby="mod-title">
      <header className="cq-header">
        <div className="cq-breadcrumb">
          <Link to="/">Tabla Periódica</Link>
          <ChevronRight size={14} aria-hidden="true" />
          <Link to="/curso/quimica">Curso de Química</Link>
          <ChevronRight size={14} aria-hidden="true" />
          <span>Módulo {String(mod.number).padStart(2, "0")}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", flexWrap: "wrap" }}>
          <div>
            <span style={{ fontSize: "0.85rem", fontWeight: "700", color: "#8b4db0", textTransform: "uppercase" }}>Módulo {String(mod.number).padStart(2, "0")}</span>
            <h1 id="mod-title" className="cq-title">{mod.title}</h1>
          </div>
          <span className={`cq-badge ${readyCount === mod.topics.length ? "listo" : "pendiente"}`}>
            {readyCount} de {mod.topics.length} temas interactivos listos
          </span>
        </div>
        <p style={{ color: "var(--muted, #6b7280)", fontSize: "1.05rem", marginTop: "0.5rem" }}>{mod.description}</p>
      </header>

      {mod.imageUrl && (
        <div style={{ width: "100%", maxHeight: "240px", borderRadius: "12px", overflow: "hidden", marginBottom: "2rem", background: "rgba(0,0,0,0.05)" }}>
          <img src={mod.imageUrl} alt={mod.title} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      )}

      {mod.intro?.summary && (
        <section className="cq-section" aria-labelledby="intro-heading">
          <h2 id="intro-heading" className="cq-section-title">
            <Sparkles size={18} /> Presentación del Módulo
          </h2>
          {mod.intro.objective && (
            <div className="cq-objective-box">
              <strong>Objetivo central:</strong> <RichText text={mod.intro.objective} />
            </div>
          )}
          <ul className="cq-summary-list">
            {mod.intro.summary.map((pt, i) => (
              <li key={i}><RichText text={pt} /></li>
            ))}
          </ul>
        </section>
      )}

      <section className="cq-section" aria-labelledby="topics-heading">
        <h2 id="topics-heading" className="cq-section-title">
          <BookOpen size={18} /> Lecciones y Actividades Prácticas
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {mod.topics.map((t) => (
            <article key={t.code} style={{ padding: "1rem", borderRadius: "8px", border: "1px solid rgba(0,0,0,0.08)", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
              <div style={{ flex: "1 1 300px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.25rem" }}>
                  <span style={{ fontWeight: "700", color: "#8b4db0" }}>{t.code}</span>
                  <span className={`cq-badge ${t.status}`}>{t.status}</span>
                  {t.activity?.reuse && <span className="cq-tag">{t.activity.reuse}</span>}
                </div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: "600", margin: "0.25rem 0" }}>{t.title}</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--muted, #6b7280)", margin: 0 }}>
                  {t.objective || t.sourceObjective || "Sin objetivo registrado"}
                </p>
              </div>
              <div>
                <Link to={t.route} className="cq-btn small primary" style={{ textDecoration: "none" }}>
                  Abrir actividad <ChevronRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {mod.exam.length > 0 && (
        <section className="cq-section" style={{ background: "rgba(139, 77, 176, 0.04)", border: "1px solid rgba(139, 77, 176, 0.2)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <h2 style={{ fontSize: "1.2rem", fontWeight: "700", color: "#8b4db0", margin: 0 }}>
                Evaluación Acumulativa del Módulo {String(mod.number).padStart(2, "0")}
              </h2>
              <p style={{ fontSize: "0.9rem", color: "var(--muted, #6b7280)", margin: "0.25rem 0 0 0" }}>
                {mod.exam.length} preguntas de estilo admisión que integran todos los temas del módulo.
              </p>
            </div>
            <Link to={mod.examRoute} className="cq-btn primary" style={{ textDecoration: "none" }}>
              <FileQuestion size={16} /> Rendir evaluación
            </Link>
          </div>
        </section>
      )}

      <div className="cq-nav">
        <Link to="/curso/quimica"><ArrowLeft size={16} /> Índice general del curso</Link>
        {mod.topics.length > 0 && (
          <Link to={mod.topics[0].route}>Iniciar con tema {mod.topics[0].code} <ChevronRight size={16} /></Link>
        )}
      </div>
    </main>
  );
}
