import { Link } from "react-router-dom";
import { BookOpen, CheckCircle, ChevronRight, GraduationCap, Sparkles } from "lucide-react";
import { courseModules, courseStats } from "./registry.js";
import "./course.css";

export default function CourseIndexPage() {
  const stats = courseStats();

  return (
    <main className="cq-page" aria-labelledby="course-index-title">
      <header className="cq-header">
        <div className="cq-breadcrumb">
          <Link to="/">Inicio</Link>
          <ChevronRight size={14} aria-hidden="true" />
          <span>Curso de Química PreUNI</span>
        </div>
        <h1 id="course-index-title" className="cq-title">Curso Completo de Química PreUNI</h1>
        <p style={{ color: "var(--muted, #6b7280)", fontSize: "1.05rem", marginTop: "0.25rem" }}>
          18 módulos con lecciones, actividades, ejercicios resueltos y evaluaciones acumulativas para tu preparación preuniversitaria.
        </p>

        <div style={{ display: "flex", gap: "1.5rem", marginTop: "1.25rem", flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <BookOpen size={18} color="#8b4db0" />
            <span><strong>{stats.modules}</strong> módulos</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <GraduationCap size={18} color="#8b4db0" />
            <span><strong>{stats.topics}</strong> lecciones interactivas</span>
          </div>

        </div>
      </header>

      <section aria-label="Módulos del curso" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
        {courseModules.map((m) => {
          return (
            <article key={m.number} className="cq-section" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", margin: 0 }}>
              <div>
                {m.imageUrl && (
                  <div style={{ width: "100%", height: "140px", borderRadius: "8px", overflow: "hidden", marginBottom: "1rem", background: "rgba(0,0,0,0.05)" }}>
                    <img src={m.imageUrl} alt={m.title} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                )}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.5rem" }}>
                  <span style={{ fontSize: "0.8rem", fontWeight: "700", color: "#8b4db0", textTransform: "uppercase" }}>Módulo {String(m.number).padStart(2, "0")}</span>
                </div>
                <h2 style={{ fontSize: "1.15rem", fontWeight: "700", marginBottom: "0.5rem", lineHeight: 1.3 }}>{m.title}</h2>
                <p style={{ fontSize: "0.9rem", color: "var(--muted, #6b7280)", lineHeight: 1.4, marginBottom: "1rem" }}>
                  {m.description}
                </p>
              </div>

              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "1rem" }}>
                <Link to={m.route} className="cq-btn primary small" style={{ textDecoration: "none" }}>
                  Ver lecciones ({m.topics.length}) <ChevronRight size={14} />
                </Link>
                {m.exam.length > 0 && (
                  <Link to={m.examRoute} className="cq-btn ghost small" style={{ textDecoration: "none" }}>
                    Evaluación ({m.exam.length} preguntas)
                  </Link>
                )}
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
