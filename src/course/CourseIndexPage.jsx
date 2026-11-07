import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Atom, BookOpen, ChevronRight, ClipboardCheck, FlaskConical, GraduationCap, Search, Sparkles } from "lucide-react";
import { CourseAccessState, useCourseResource } from "./useCourseResource.jsx";
import "./course.css";

const normalize = (value) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

export default function CourseIndexPage() {
  const resource = useCourseResource("kind=index");
  const courseModules = resource.data?.modules ?? [];
  const stats = resource.data?.stats ?? { modules: 0, topics: 0 };
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("todos");
  const modules = useMemo(() => courseModules.filter((m) => {
    const matchesSearch = normalize(`${m.title} ${m.description} ${m.topics.map(t => t.title).join(" ")}`).includes(normalize(search.trim()));
    const matchesFilter = filter === "todos" || (filter === "primera" ? m.number <= 6 : filter === "segunda" ? m.number <= 12 && m.number >= 7 : m.number >= 13);
    return matchesSearch && matchesFilter;
  }), [search, filter]);

  if (!resource.data) return <CourseAccessState state={resource} />;
  return (
    <main className="cq-page cq-catalog" aria-labelledby="course-index-title">
      <header className="cq-catalog-hero">
        <div className="cq-breadcrumb"><Link to="/">Inicio</Link><ChevronRight size={14} aria-hidden="true" /><span>Curso de Química PreUNI</span></div>
        <div className="cq-catalog-hero-grid">
          <div>
            <p className="cq-catalog-kicker"><Sparkles size={16}/> TU RUTA DE APRENDIZAJE</p>
            <h1 id="course-index-title">Química PreUNI, <span>tema por tema.</span></h1>
            <p>Aprende desde los fundamentos, explora fenómenos con actividades interactivas y comprueba cuánto has comprendido con ejercicios y evaluaciones.</p>
            <div className="cq-catalog-facts"><span><BookOpen size={17}/><strong>{stats.modules}</strong> módulos</span><span><GraduationCap size={17}/><strong>{stats.topics}</strong> lecciones</span><span><ClipboardCheck size={17}/> Evaluaciones por módulo</span></div>
            <a className="cq-catalog-jump" href="#catalogo">Explorar el temario <ArrowRight size={18}/></a>
          </div>
          <div className="cq-catalog-illustration" aria-hidden="true"><div className="cq-catalog-orbit"><Atom size={84} strokeWidth={1}/></div><div className="cq-catalog-symbol"><span>QUÍMICA</span><strong>PreUNI</strong><small>Comprende · Explora · Practica</small></div></div>
        </div>
      </header>

      <nav className="cq-catalog-shortcuts" aria-label="Accesos de estudio">
        <Link to="/diagnostico"><ClipboardCheck size={21}/><span><strong>¿Por dónde empiezo?</strong><small>Haz un diagnóstico inicial</small></span><ArrowRight size={17}/></Link>
        <Link to="/tabla"><Atom size={21}/><span><strong>Explora los elementos</strong><small>Tabla periódica interactiva</small></span><ArrowRight size={17}/></Link>
        <Link to="/laboratorio"><FlaskConical size={21}/><span><strong>Aprende experimentando</strong><small>Laboratorio virtual</small></span><ArrowRight size={17}/></Link>
      </nav>

      <section id="catalogo" className="cq-catalog-content" aria-labelledby="catalog-title">
        <div className="cq-catalog-intro"><div><p className="cq-catalog-kicker">TEMARIO COMPLETO</p><h2 id="catalog-title">Elige qué quieres aprender hoy.</h2><p>Puedes seguir el orden de los módulos o buscar directamente un tema.</p></div><span className="cq-catalog-count">{modules.length} de {stats.modules} módulos</span></div>
        <div className="cq-catalog-toolbar"><label className="cq-catalog-search"><Search size={19} aria-hidden="true"/><span className="sr-only">Buscar módulos y temas</span><input type="search" value={search} onChange={e => setSearch(e.target.value)} placeholder="Busca un tema: átomos, enlaces, gases..." /></label><div className="cq-catalog-filters" role="group" aria-label="Filtrar módulos">{[{key:"todos",label:"Todos"},{key:"primera",label:"01–06"},{key:"segunda",label:"07–12"},{key:"tercera",label:"13–18"}].map(item=><button type="button" key={item.key} aria-pressed={filter===item.key} className={filter===item.key?"is-active":""} onClick={()=>setFilter(item.key)}>{item.label}</button>)}</div></div>

        {modules.length ? <div className="cq-module-grid">{modules.map(m => <article key={m.number} className="cq-module-card">
          <Link to={m.route} className="cq-module-cover" aria-label={`Abrir módulo ${m.number}: ${m.title}`}>
            {m.imageUrl ? <img src={m.imageUrl} alt="" loading="lazy"/> : <div className="cq-module-placeholder"><Atom size={46}/></div>}
            <span className="cq-module-number">MÓDULO {String(m.number).padStart(2,"0")}</span>
          </Link>
          <div className="cq-module-body"><span className="cq-module-eyebrow"><BookOpen size={14}/> {m.topics.length} lecciones</span><h3><Link to={m.route}>{m.title}</Link></h3><p>{m.description}</p><div className="cq-module-actions"><Link to={m.route} className="cq-module-primary">Ver lecciones <ArrowRight size={17}/></Link>{m.examCount>0 && <Link to={m.examRoute} className="cq-module-exam" aria-label={`Evaluación del módulo ${m.number}`}><ClipboardCheck size={17}/> Evaluación</Link>}</div></div>
        </article>)}</div> : <div className="cq-catalog-empty"><Search size={28}/><h3>No encontramos módulos con esa búsqueda</h3><p>Prueba con otro término o vuelve a mostrar todos los módulos.</p><button type="button" onClick={()=>{setSearch("");setFilter("todos")}}>Mostrar todos los módulos</button></div>}
      </section>
      <div className="cq-catalog-bottom"><div><strong>Aprender química es un proceso.</strong><p>Empieza por una lección, experimenta con las actividades y revisa tus respuestas antes de seguir avanzando.</p></div><Link to="/diagnostico">Hacer diagnóstico <ArrowRight size={18}/></Link></div>
    </main>
  );
}
