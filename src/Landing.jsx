import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, ArrowUpRight, Atom, BookOpen, Check, CheckCircle2, ChevronDown,
  ClipboardCheck, Clock3, FlaskConical, GraduationCap, Layers3,
  Menu, PlayCircle, Target, X
} from "lucide-react";
import LandingAtomExperience from "./components/LandingAtomExperience.jsx";
import GasPistonDemo from "./components/GasPistonDemo.jsx";
import LaunchPricing from "./components/LaunchPricing.jsx";
import { salesModules, salesModuleCount, salesTopicCount } from "./landingProgram.js";
import "./landing.css";

const stages = [
  { title: "Entiende los fundamentos", range: "Módulos 01–04", start: 1, end: 4,
    kicker: "BASES SÓLIDAS", outcome: "Descubre de qué está hecha la materia y por qué los átomos se enlazan.", icon: Atom },
  { title: "Aprende a resolver", range: "Módulos 05–10", start: 5, end: 10,
    kicker: "PROBLEMAS Y CÁLCULOS", outcome: "Conecta fórmulas, unidades, reacciones y procedimientos para resolver ejercicios.", icon: FlaskConical },
  { title: "Avanza a los temas exigentes", range: "Módulos 11–14", start: 11, end: 14,
    kicker: "RAZONAMIENTO", outcome: "Profundiza en equilibrios, cinética y electroquímica con criterio.", icon: Layers3 },
  { title: "Integra la química aplicada", range: "Módulos 15–18", start: 15, end: 18,
    kicker: "REPASO INTEGRADOR", outcome: "Relaciona la química orgánica, las biomoléculas, los materiales y el ambiente.", icon: GraduationCap }
];

const bonuses = [
  { number: "01", title: "Tu ruta personal de estudio", summary: "Organiza los 18 módulos y convierte cada sesión en un avance concreto.", tag: "Más claridad para estudiar", icon: Target },
  { number: "02", title: "Kit de fórmulas esenciales", summary: "Ten a mano relaciones clave, unidades y errores frecuentes al resolver.", tag: "Menos dudas al practicar", icon: BookOpen },
  { number: "03", title: "Plan de repaso preexamen", summary: "Prioriza tus puntos débiles y llega al examen con una estrategia de repaso.", tag: "Repaso con propósito", icon: ClipboardCheck }
];

const faqs = [
  { q: "¿Para quién es Química Zenit?", a: "Para estudiantes que se preparan para ingresar a la universidad, necesitan fortalecer sus fundamentos de química y quieren practicar con explicaciones visuales, problemas desarrollados y acompañamiento." },
  { q: "¿Qué incluye la membresía?", a: "Acceso a los 18 módulos y 179 temas del programa, clases grupales semanales en vivo, modelos y simuladores interactivos, prácticas y evaluaciones autocorregidas, solucionarios y comunidad privada de estudiantes." },
  { q: "¿Puedo empezar si tengo dificultades con química?", a: "Sí. El programa comienza por los fundamentos y avanza por etapas. Puedes recorrer los módulos en orden y reforzar los temas que más te cuesten." },
  { q: "¿Las evaluaciones me muestran en qué me equivoqué?", a: "Sí. Recibes una calificación al terminar y puedes revisar las respuestas con explicaciones para comprender tus errores y volver a practicar." },
  { q: "¿Cómo son las clases en vivo y la comunidad?", a: "La membresía incluye encuentros grupales semanales para reforzar conceptos y resolver dudas, además de un espacio privado para compartir preguntas con otros estudiantes y el equipo Zenit." },
  { q: "¿Qué diferencia hay entre el plan mensual y el anual?", a: "Ambos incluyen los mismos beneficios. El mensual se renueva cada mes y te da flexibilidad; el anual se paga por adelantado y tiene un costo equivalente por mes menor." },
  { q: "¿Conservo la tarifa de lanzamiento?", a: "Si te inscribes hasta el 30 de noviembre de 2026 (hora de Perú), mantienes la tarifa promocional de tu plan en sus renovaciones mientras la misma membresía permanezca activa y al día. Si cancelas y vuelves a contratar, se aplicará el precio vigente." },
  { q: "¿Puedo cancelar mi renovación?", a: "Puedes cancelar la renovación de tu membresía. La cancelación evita renovaciones posteriores; si decides regresar con una nueva suscripción, se aplicará la tarifa vigente." }
];

function SectionHead({ overline, title, description, light = false }) {
  return <div className={"sz-section-head" + (light ? " is-light" : "")}>
    <p className="sz-eyebrow">{overline}</p>
    <h2>{title}</h2>
    {description && <p className="sz-section-desc">{description}</p>}
  </div>;
}

export default function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="sz-landing">
      <a className="sz-skip" href="#contenido">Saltar al contenido principal</a>
      <header className="sz-header">
        <Link className="sz-brand" to="/" aria-label="Academia Zenit, inicio" onClick={() => setMenuOpen(false)}>
          <span className="sz-brand-mark"><img src="/brand/zenit-phoenix.svg" alt="" width="35" height="52" /></span>
          <span><strong>Química <em>Zenit</em></strong><small>CURSO PREUNIVERSITARIO</small></span>
        </Link>
        <button type="button" className="sz-menu" aria-label={menuOpen ? "Cerrar navegación" : "Abrir navegación"} aria-expanded={menuOpen} aria-controls="sz-nav" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={23}/> : <Menu size={23}/>}
        </button>
        <nav className={"sz-nav" + (menuOpen ? " is-open" : "")} id="sz-nav" aria-label="Navegación de ventas">
          <a href="#metodo" onClick={() => setMenuOpen(false)}>El método</a>
          <a href="#programa" onClick={() => setMenuOpen(false)}>Programa</a>
          <a href="#bonos" onClick={() => setMenuOpen(false)}>Bonos</a>
          <a href="#preguntas" onClick={() => setMenuOpen(false)}>Preguntas</a>
        </nav>
        <a className="sz-header-cta" href="#planes">Ver planes <ArrowRight size={16}/></a>
      </header>

      <main id="contenido">
        <section className="sz-hero" aria-labelledby="sz-hero-title">
          <div className="sz-hero-content">
            <p className="sz-hero-kicker"><span/> ACADEMIA ZENIT · QUÍMICA ZENIT</p>
            <h1 id="sz-hero-title">Entiende la química, <em>resuelve con seguridad y prepárate para ingresar.</em></h1>
            <p className="sz-hero-lead">Una membresía de química preuniversitaria con explicaciones visuales, simuladores que puedes manipular, práctica autocorregida y clases semanales en vivo. Comprende cada concepto y aprende a aplicarlo en el examen.</p>
            <div className="sz-hero-actions">
              <a className="sz-btn sz-btn-primary" href="#planes" data-cta="hero-plans">Quiero acceder a Química Zenit <ArrowRight size={18}/></a>
              <a className="sz-btn sz-btn-outline" href="#demostracion" data-cta="hero-demo"><PlayCircle size={18}/> Ver cómo se aprende</a>
            </div>
            <div className="sz-hero-reassurance"><span><CheckCircle2 size={17}/> 18 módulos</span><span><CheckCircle2 size={17}/> Evaluaciones con solucionario</span><span><CheckCircle2 size={17}/> Clases en vivo</span></div>
          </div>
          <div className="sz-hero-visual">
            <div className="sz-hero-visual-brand"><span>VISUALIZA LA QUÍMICA</span><strong>Au <span>· Oro</span></strong></div>
            <LandingAtomExperience />
            <div className="sz-atom-hint">Arrastra con el mouse o el dedo para girar el átomo</div>
          </div>
        </section>

        <div className="sz-value-strip" aria-label="Resumen del programa">
          <div><strong>{salesModuleCount}</strong><span>módulos de estudio</span></div>
          <div><strong>{salesTopicCount}</strong><span>temas para prepararte</span></div>
          <div><strong><Atom size={25}/></strong><span>recursos visuales e interactivos</span></div>
          <div><strong><ClipboardCheck size={25}/></strong><span>práctica y evaluaciones</span></div>
        </div>

        <section className="sz-section sz-problem" id="problema">
          <SectionHead overline="EL PROBLEMA NO ES SOLO RECORDAR" title={<>¿Lees la teoría, memorizas fórmulas… <span>y te bloqueas ante un ejercicio?</span></>} description="Memorizar puede ayudarte a recordar una fórmula. Comprenderla es lo que te permite saber cuándo y cómo utilizarla."/>
          <div className="sz-learning-photos" aria-label="Tres escenas de aprendizaje, desde las dudas hasta la práctica guiada">
            {[
              { image: "/brand/dolor-estudiante.webp", alt: "Fotografía de apuntes de química con fórmulas incompletas y preguntas pendientes de resolver", step: "01 · EL PROBLEMA", title: "Tantas fórmulas… y las mismas dudas." },
              { image: "/brand/visualizacion-atomica.webp", alt: "Representación fotorrealista de un modelo atómico luminoso en un laboratorio", step: "02 · EL CAMBIO", title: "Cuando lo visualizas, empiezas a entenderlo." },
              { image: "https://images.presentationgo.com/2025/04/latino-student-chemistry-lab.jpg", alt: "Fotografía de un estudiante practicando química con apuntes y materiales de laboratorio", step: "03 · EL RESULTADO", title: "Resuelve con método y comprueba tus pasos." }
            ].map(item => (
              <figure key={item.step} className="sz-learning-photo">
                <img src={item.image} alt={item.alt} loading="lazy" width="720" height="540" />
                <figcaption><span>{item.step}</span><strong>{item.title}</strong></figcaption>
              </figure>
            ))}
          </div>
          <p className="sz-story-bridge"><strong>Ese es el cambio que buscamos:</strong> que cada concepto tenga sentido antes de llegar a la práctica.</p>
        </section>

        <section className="sz-method-wrap" id="metodo">
          <div className="sz-section sz-method">
            <SectionHead overline="EL MÉTODO ZENIT" light title={<>Una forma de aprender química <span>que puedes poner a prueba.</span></>} description="En Zenit no solo recibes una explicación: exploras el concepto, lo aplicas y compruebas tu respuesta."/>
            <div className="sz-method-steps">
              {[
                { n: "01", icon: BookOpen, title: "Comprende", body: "Parte de objetivos claros, conceptos esenciales y explicaciones con contexto." },
                { n: "02", icon: Atom, title: "Visualiza", body: "Observa modelos y fenómenos que hacen más tangible la teoría." },
                { n: "03", icon: Target, title: "Resuelve", body: "Lleva lo aprendido a ejercicios y problemas de aplicación." },
                { n: "04", icon: CheckCircle2, title: "Corrige", body: "Contrasta procedimientos, identifica errores y vuelve a intentar." }
              ].map(step => <article key={step.n}><span className="sz-method-num">{step.n}</span><step.icon size={26}/><h3>{step.title}</h3><p>{step.body}</p></article>)}
            </div>
            <a href="#demostracion" className="sz-inline-link is-light">Prueba el simulador <ArrowRight size={18}/></a>
          </div>
        </section>

        <section className="sz-section sz-demo-section" id="demostracion">
          <div className="sz-demo-copy">
            <p className="sz-eyebrow">PRUÉBALO TÚ MISMO</p>
            <h2>Mueve el pistón. <span>Entiende la ecuación.</span></h2>
            <p>Arrastra el pistón del recipiente: cuando el volumen disminuye, la presión aumenta. Así puedes experimentar con PV = nRT antes de resolver un ejercicio.</p>
            <ul className="sz-check-list">
              <li><Check size={17}/> Arrastra el pistón hacia abajo para comprimir el gas.</li>
              <li><Check size={17}/> Observa cómo la presión aumenta al disminuir el volumen.</li>
              <li><Check size={17}/> Comprueba la ecuación PV = nRT con los valores del modelo.</li>
            </ul>
            <a href="#programa" className="sz-text-cta">Conocer los 18 módulos <ArrowUpRight size={17}/></a>
          </div>
          <GasPistonDemo/>
        </section>

        <section className="sz-section sz-program" id="programa">
          <SectionHead overline="TU CAMINO POR EL CURSO" title={<>18 módulos para pasar <span>de las bases a resolver problemas.</span></>} description="De las bases de la química hasta los temas más exigentes. Recorre las cuatro etapas y conoce qué aprenderás en cada módulo."/>
          <div className="sz-stage-list">
            {stages.map((stage, idx) => {
              const StageIcon = stage.icon;
              const modules = salesModules.filter(module => module.number >= stage.start && module.number <= stage.end);
              return <details key={stage.start} className="sz-stage" open={idx === 0}>
                <summary>
                  <span className="sz-stage-index">0{idx+1}</span>
                  <span className="sz-stage-symbol"><StageIcon size={25}/></span>
                  <span className="sz-stage-summary"><small>{stage.kicker} · {stage.range}</small><strong>{stage.title}</strong><span>{stage.outcome}</span></span>
                  <ChevronDown className="sz-stage-chevron" size={22}/>
                </summary>
                <div className="sz-module-grid">{modules.map(module => <article key={module.number} className="sz-module">
                  <div className="sz-module-photo"><img src={module.imageUrl} alt={"Portada completa del módulo " + module.number + ": " + module.title} loading="lazy" /></div>
                  <div><span>MÓDULO {String(module.number).padStart(2,"0")} · {module.topics} TEMAS</span><h3>{module.title}</h3><span className="sz-module-included"><CheckCircle2 size={14}/> Incluido en el programa</span></div>
                </article>)}</div>
              </details>;
            })}
          </div>
          <div className="sz-center-cta"><a href="#planes" className="sz-btn sz-btn-primary">Quiero estudiar con este método <ArrowRight size={18}/></a></div>
        </section>

        <section className="sz-section sz-bonuses" id="bonos">
          <SectionHead overline="BONOS DE TU MEMBRESÍA" title={<>Además de las clases, <span>te llevas un plan para avanzar.</span></>} description="Tres apoyos para resolver problemas que el contenido por sí solo no resuelve: saber por dónde empezar, qué fórmulas repasar y cómo prepararte antes del examen."/>
          <div className="sz-bonus-grid">{bonuses.map(bonus=>{const Icon=bonus.icon;return <article key={bonus.number} className="sz-bonus-card">
            <div className="sz-bonus-top"><span>BONO {bonus.number}</span><span><Icon size={24}/></span></div>
            <h3>{bonus.title}</h3><p>{bonus.summary}</p><span className="sz-bonus-tag">{bonus.tag}</span>
            <span className="sz-bonus-included"><CheckCircle2 size={16} aria-hidden="true"/> Incluido en tu membresía</span>
          </article>;})}</div>
          <div className="sz-bonus-cta"><a href="#planes" className="sz-inline-link">Quiero los bonos con mi membresía <ArrowRight size={17}/></a></div>
        </section>

        <section className="sz-founder-wrap" id="academia">
          <div className="sz-section sz-founder">
            <div className="sz-founder-illustration"><span className="sz-founder-glow"/><div className="sz-founder-mark"><img src="/brand/zenit-phoenix.svg" alt="" width="86" height="138" /><strong>Química Zenit</strong><small>UNA EXPERIENCIA DE ACADEMIA ZENIT</small></div></div>
            <div>
              <p className="sz-eyebrow">EL EQUIPO DETRÁS DE TU APRENDIZAJE</p>
              <h2>No estudies solo: <span>aprende con el sistema Zenit.</span></h2>
              <p>Química Zenit combina el acompañamiento de docentes y profesionales de química con recursos digitales que te ayudan a entender, practicar y detectar lo que necesitas reforzar.</p>
              <p>Un método pensado para que cada explicación se convierta en una oportunidad de resolver mejor.</p>
              <a href="https://www.skool.com/academia-zenit-3587/about" className="sz-text-cta" target="_blank" rel="noopener noreferrer">Conocer la comunidad Zenit <ArrowUpRight size={17}/></a>
            </div>
          </div>
        </section>

        <LaunchPricing />

        <section className="sz-faq-wrap" id="preguntas">
          <div className="sz-section sz-faq">
            <div><p className="sz-eyebrow">PREGUNTAS FRECUENTES</p><h2>Todo claro antes <span>de elegir tu plan.</span></h2><p>Respuestas directas sobre la membresía, las clases, las evaluaciones y la renovación.</p></div>
            <div className="sz-faq-list">{faqs.map((faq,index)=><details key={faq.q} open={index === 0}><summary>{faq.q}<ChevronDown size={20}/></summary><p>{faq.a}</p></details>)}</div>
          </div>
        </section>

        <section className="sz-final">
          <p className="sz-eyebrow">ACADEMIA ZENIT · QUÍMICA ZENIT</p>
          <h2>Tu próxima respuesta correcta <span>empieza por comprender.</span></h2>
          <p>Elige tu plan y prepárate con lecciones visuales, práctica guiada y el acompañamiento de la comunidad Zenit.</p>
          <div className="sz-final-actions"><a href="#planes" className="sz-btn sz-btn-light" data-cta="final-plans">Elegir mi plan <ArrowRight size={18}/></a><a href="#programa" className="sz-btn sz-btn-ghost">Conocer el programa</a></div>
        </section>
      </main>

      <footer className="sz-footer">
        <Link className="sz-brand" to="/"><span className="sz-brand-mark"><img src="/brand/zenit-phoenix.svg" alt="" width="31" height="44"/></span><span><strong>Química <em>Zenit</em></strong><small>ACADEMIA ZENIT</small></span></Link>
        <p>Química Zenit · Comprende, experimenta y practica.</p>
        <nav aria-label="Enlaces del pie"><a href="#metodo">Método</a><a href="#programa">Programa</a><a href="#planes">Planes</a><a href="#preguntas">Ayuda</a></nav>
      </footer>
      <a className="sz-mobile-cta" href="#planes">Ver planes de acceso <ArrowRight size={17}/></a>
    </div>
  );
}
