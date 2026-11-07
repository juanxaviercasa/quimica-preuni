import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Atom, BookOpen, CheckCircle2, ChevronRight, FlaskConical, GraduationCap, Menu, PlayCircle, Sparkles, Target, X } from "lucide-react";
import { useState } from "react";
import LandingAtomExperience from "./components/LandingAtomExperience.jsx";
import "./landing.css";

const resources = [
  { icon: BookOpen, number: "01", title: "Curso de Química PreUNI", description: "Avanza por 18 módulos: conceptos, ejemplos resueltos, actividades y evaluaciones.", link: "/curso/quimica", action: "Explorar módulos", tone: "violet" },
  { icon: Atom, number: "02", title: "Tabla periódica interactiva", description: "Investiga propiedades, familias y tendencias de los 118 elementos.", link: "/tabla", action: "Explorar la tabla", tone: "blue" },
  { icon: FlaskConical, number: "03", title: "Laboratorio virtual", description: "Experimenta con modelos de química y contrasta lo que sucede al cambiar variables.", link: "/laboratorio", action: "Abrir laboratorio", tone: "orange" },
];

const steps = [
  { number: "01", title: "Detecta tu punto de partida", body: "Responde un diagnóstico breve para identificar qué conceptos necesitas reforzar." },
  { number: "02", title: "Comprende y experimenta", body: "Relaciona la explicación con modelos visuales, ejemplos y actividades interactivas." },
  { number: "03", title: "Practica como en un examen", body: "Resuelve preguntas, revisa la retroalimentación y vuelve a estudiar lo que te costó." },
];

export default function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="zl-page">
      <a className="zl-skip" href="#contenido">Saltar al contenido</a>
      <header className="zl-header">
        <Link className="zl-brand" to="/" aria-label="Academia Zenit, inicio" onClick={() => setMenuOpen(false)}>
          <span className="zl-brand-icon" aria-hidden="true"><Atom size={23} strokeWidth={2.1}/></span>
          <span><strong>ZENIT</strong><small>ACADEMIA</small></span>
        </Link>
        <button className="zl-menu" type="button" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen} aria-controls="zl-nav" onClick={() => setMenuOpen(value => !value)}>{menuOpen ? <X size={22}/> : <Menu size={22}/>}</button>
        <nav id="zl-nav" className={menuOpen ? "zl-nav is-open" : "zl-nav"} aria-label="Navegación principal">
          <a href="#herramientas" onClick={() => setMenuOpen(false)}>Herramientas</a>
          <a href="#metodo" onClick={() => setMenuOpen(false)}>Cómo aprender</a>
          <Link to="/curso/quimica" onClick={() => setMenuOpen(false)}>Temario</Link>
        </nav>
        <a className="zl-header-cta" href="https://www.skool.com/academia-zenit-3587/about" target="_blank" rel="noopener noreferrer">Comunidad Zenit <ArrowUpRight size={16}/></a>
      </header>

      <main id="contenido">
        <section className="zl-hero" aria-labelledby="zl-hero-title">
          <div className="zl-hero-content">
            <div className="zl-pill"><span className="zl-pulse"/> TU ESPACIO DE QUÍMICA PREUNIVERSITARIA</div>
            <h1 id="zl-hero-title">De memorizar fórmulas a <span>entender la química.</span></h1>
            <p className="zl-lead">Prepárate para tus exámenes de admisión con explicaciones claras, simuladores y práctica con retroalimentación. Aprende viendo qué sucede, no solo leyendo la teoría.</p>
            <div className="zl-actions">
              <Link className="zl-button zl-button-primary" to="/curso/quimica">Empezar a estudiar <ArrowRight size={19}/></Link>
              <Link className="zl-button zl-button-secondary" to="/diagnostico"><Target size={18}/> Hacer diagnóstico</Link>
            </div>
            <div className="zl-hero-proof"><span><CheckCircle2 size={16}/> 18 módulos</span><span><CheckCircle2 size={16}/> Simuladores interactivos</span><span><CheckCircle2 size={16}/> Práctica guiada</span></div>
          </div>
          <div className="zl-visual" aria-label="Vista ilustrativa de las herramientas de estudio de química">
            <LandingAtomExperience />
          </div>
        </section>

        <section className="zl-quick" aria-label="Resumen de la plataforma"><div><strong>18</strong><span>Módulos para estudiar</span></div><div><strong>118</strong><span>Elementos para explorar</span></div><div><strong>3</strong><span>Formas de aprender: comprender, explorar y practicar</span></div></section>

        <section className="zl-section zl-resources" id="herramientas" aria-labelledby="zl-resources-title">
          <div className="zl-heading"><div><p className="zl-eyebrow">APRENDE HACIENDO</p><h2 id="zl-resources-title">Todo lo que necesitas para <span>pasar de la teoría a la práctica.</span></h2></div><p>No saltes entre materiales dispersos. Encuentra el curso, los modelos interactivos y las herramientas de estudio en un mismo lugar.</p></div>
          <div className="zl-resource-grid">{resources.map(({ icon: Icon, ...item }) => <Link className={`zl-resource zl-resource-${item.tone}`} to={item.link} key={item.number}><div className="zl-resource-meta"><span>{item.number} / RECURSO</span><span className="zl-resource-icon"><Icon size={24}/></span></div><h3>{item.title}</h3><p>{item.description}</p><span className="zl-resource-action">{item.action} <ArrowUpRight size={18}/></span></Link>)}</div>
        </section>

        <section className="zl-method" id="metodo" aria-labelledby="zl-method-title">
          <div className="zl-method-inner">
            <div className="zl-method-heading"><p className="zl-eyebrow">TU RUTA DE APRENDIZAJE</p><h2 id="zl-method-title">No estudies más a ciegas. <span>Estudia con un método.</span></h2><p>Un recorrido sencillo para transformar dudas en comprensión y práctica constante.</p><Link to="/diagnostico" className="zl-text-link">Descubrir qué necesito reforzar <ArrowRight size={17}/></Link></div>
            <div className="zl-steps">{steps.map(step => <article key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.body}</p></div></article>)}</div>
          </div>
        </section>

        <section className="zl-section zl-path" aria-labelledby="zl-path-title">
          <div className="zl-heading"><div><p className="zl-eyebrow">PREPARACIÓN PREUNIVERSITARIA</p><h2 id="zl-path-title">Tu siguiente tema está <span>a un clic.</span></h2></div><p>Comienza desde los fundamentos o repasa directamente el tema que necesitas mejorar.</p></div>
          <div className="zl-path-grid">
            <Link to="/curso/quimica" className="zl-path-feature"><span className="zl-path-icon"><GraduationCap size={24}/></span><div><h3>Explorar los 18 módulos</h3><p>Una ruta de estudio desde las bases de química hasta aplicaciones y evaluación.</p></div><ChevronRight size={24}/></Link>
            <Link to="/diagnostico" className="zl-path-feature"><span className="zl-path-icon"><Target size={24}/></span><div><h3>Empezar por un diagnóstico</h3><p>Identifica qué necesitas reforzar antes de elegir tus próximas lecciones.</p></div><ChevronRight size={24}/></Link>
          </div>
        </section>

        <section className="zl-final" aria-labelledby="zl-final-title"><div><p className="zl-eyebrow">ACADEMIA ZENIT</p><h2 id="zl-final-title">La química deja de ser abstracta cuando <em>puedes explorarla.</em></h2><p>Abre una lección, interactúa con sus modelos y pon a prueba tus ideas.</p></div><Link className="zl-button zl-button-light" to="/curso/quimica">Ir al curso de química <ArrowRight size={19}/></Link></section>
      </main>

      <footer className="zl-footer"><Link className="zl-brand" to="/"><span className="zl-brand-icon"><Atom size={21}/></span><span><strong>ZENIT</strong><small>ACADEMIA</small></span></Link><p>Química PreUNI · Aprende, explora y practica.</p><div><Link to="/curso/quimica">Curso</Link><Link to="/tabla">Tabla periódica</Link><a href="https://www.skool.com/academia-zenit-3587/about" target="_blank" rel="noopener noreferrer">Comunidad <ArrowUpRight size={13}/></a></div></footer>
    </div>
  );
}
