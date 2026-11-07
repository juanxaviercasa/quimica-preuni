import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, ArrowUpRight, Atom, BookOpen, Check, CheckCircle2, ChevronDown,
  ClipboardCheck, Clock3, Download, FlaskConical, GraduationCap, Layers3,
  LockKeyhole, Menu, Minus, PlayCircle, ShieldCheck, Sparkles, Target, X
} from "lucide-react";
import LandingAtomExperience from "./components/LandingAtomExperience.jsx";
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

const benefits = [
  { title: "Una ruta clara de estudio", body: "Elige un módulo, identifica el objetivo y avanza con temas organizados para tu preparación.", icon: Target },
  { title: "La teoría explicada con contexto", body: "Relaciona conceptos con ejemplos, representaciones visuales y aplicaciones concretas.", icon: BookOpen },
  { title: "Modelos para explorar conceptos", body: "Observa estructuras y fenómenos químicos en lugar de depender solo de definiciones.", icon: Atom },
  { title: "Ejercicios con desarrollo", body: "Compara tus pasos con soluciones explicadas y aprende de los errores.", icon: ClipboardCheck },
  { title: "Evaluaciones por módulo", body: "Pon a prueba lo aprendido y vuelve a los temas que requieran refuerzo.", icon: CheckCircle2 },
  { title: "Aprendizaje a tu ritmo", body: "Revisa los temas que necesites desde una interfaz adaptada a computadora y móvil.", icon: Clock3 }
];

const bonuses = [
  { number: "01", title: "Ruta personal de estudio", summary: "Planifica los 18 módulos, marca tu avance y organiza tus próximas sesiones.", url: "/recursos/ruta-estudio.html", tag: "Planificador imprimible", icon: Target },
  { number: "02", title: "Fórmulas y errores frecuentes", summary: "Consulta relaciones esenciales, unidades y comprobaciones antes de resolver.", url: "/recursos/formulas-y-errores.html", tag: "Ficha de consulta", icon: BookOpen },
  { number: "03", title: "Repaso estratégico preexamen", summary: "Prioriza temas, registra errores y practica con una rutina de repaso flexible.", url: "/recursos/repaso-preexamen.html", tag: "Guía de autoevaluación", icon: ClipboardCheck }
];

const faqs = [
  { q: "¿Para quién está pensado Química PreUNI?", a: "Para estudiantes que se preparan para exámenes de admisión y quieren fortalecer sus bases, comprender conceptos y practicar problemas de química. Puedes empezar por los fundamentos o revisar un módulo concreto." },
  { q: "¿Qué contiene el programa?", a: "El índice reúne 18 módulos y 179 temas organizados, con objetivos de aprendizaje, ejemplos, actividades interactivas y evaluaciones. La disponibilidad y revisión final de cada lección debe comprobarse en el temario." },
  { q: "¿Necesito tener una base sólida antes de empezar?", a: "No necesariamente. El recorrido comienza con materia, medición y estructura atómica antes de avanzar a cálculos, reacciones, equilibrio y química orgánica." },
  { q: "¿Puedo estudiar desde mi celular?", a: "La plataforma tiene un diseño adaptable a pantallas móviles y computadoras. Algunos modelos 3D necesitan un navegador moderno y un dispositivo compatible con WebGL." },
  { q: "¿Cómo funcionarán los pagos mensual y anual?", a: "Se están preparando dos modalidades de suscripción con verificación de acceso. Los importes de esta página son referenciales hasta configurar y probar los planes en Whop; no se están cobrando desde esta landing." },
  { q: "¿Los recursos complementarios se pueden descargar?", a: "Sí. La ruta de estudio, la ficha de fórmulas y la guía de repaso tienen una versión imprimible. Puedes abrirlas y elegir «Imprimir o guardar en PDF» desde tu navegador." },
  { q: "¿El curso garantiza ingresar a la universidad?", a: "No. El curso ofrece herramientas para estudiar y practicar química. El resultado de un examen depende de la preparación integral y de múltiples factores, por lo que no se promete una admisión garantizada." },
  { q: "¿Qué sucede si aún no está habilitada la inscripción?", a: "Puedes revisar el contenido del programa y las muestras disponibles. La compra se habilitará cuando las cuentas de autenticación, las membresías y los cobros estén correctamente configurados y verificados." }
];

function SectionHead({ overline, title, description, light = false }) {
  return <div className={"sz-section-head" + (light ? " is-light" : "")}>
    <p className="sz-eyebrow">{overline}</p>
    <h2>{title}</h2>
    {description && <p className="sz-section-desc">{description}</p>}
  </div>;
}

function GasDemo() {
  const [temperature, setTemperature] = useState(330);
  const pressure = (temperature / 300).toFixed(2);
  const fill = ((temperature - 300) / 150) * 100;
  return (
    <div className="sz-demo-lab">
      <div className="sz-demo-top"><span className="sz-demo-live"><span/> DEMOSTRACIÓN DE APRENDIZAJE</span><span>MÓDULO 05 · GASES</span></div>
      <h3>¿Qué ocurre si calentamos un gas en un recipiente rígido?</h3>
      <p>Con la misma cantidad de gas y volumen constante, modifica la temperatura y observa la presión calculada.</p>
      <div className="sz-demo-stage">
        <div className="sz-demo-vessel" aria-label="Representación esquemática de un recipiente cerrado">
          {Array.from({ length: 12 }, (_, i) => <span key={i} className="sz-particle" style={{ left: (17 + (i * 23) % 66) + "%", top: (17 + (i * 37) % 65) + "%", opacity: .45 + fill / 250 }}/>)}
          <div className="sz-demo-vessel-label">V constante</div>
        </div>
        <div className="sz-demo-metrics">
          <div><span>Temperatura</span><strong>{temperature} <small>K</small></strong></div>
          <div><span>Presión</span><strong>{pressure} <small>atm</small></strong></div>
          <div className="sz-demo-meter"><span style={{ width: (40 + fill * .55) + "%" }}/></div>
        </div>
      </div>
      <label className="sz-demo-slider-label" htmlFor="sz-temperature">Ajusta la temperatura</label>
      <input id="sz-temperature" className="sz-demo-slider" type="range" min="300" max="450" step="10" value={temperature} onChange={event => setTemperature(Number(event.target.value))} />
      <div className="sz-demo-scale"><span>300 K</span><span>450 K</span></div>
      <p className="sz-demo-explanation"><CheckCircle2 size={17} aria-hidden="true"/> <span>Al mantenerse constante el volumen, la presión absoluta aumenta proporcionalmente a la temperatura absoluta (modelo de gas ideal).</span></p>
      <p className="sz-demo-disclaimer">Muestra conceptual basada en los temas de gases del programa. No reemplaza la lección completa.</p>
    </div>
  );
}

export default function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="sz-landing">
      <a className="sz-skip" href="#contenido">Saltar al contenido principal</a>
      <header className="sz-header">
        <Link className="sz-brand" to="/" aria-label="Academia Zenit, inicio" onClick={() => setMenuOpen(false)}>
          <span className="sz-brand-mark"><Atom size={25} strokeWidth={2.1}/></span>
          <span><strong>ZENIT</strong><small>ACADEMIA</small></span>
        </Link>
        <button type="button" className="sz-menu" aria-label={menuOpen ? "Cerrar navegación" : "Abrir navegación"} aria-expanded={menuOpen} aria-controls="sz-nav" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={23}/> : <Menu size={23}/>}
        </button>
        <nav className={"sz-nav" + (menuOpen ? " is-open" : "")} id="sz-nav" aria-label="Navegación de ventas">
          <a href="#metodo" onClick={() => setMenuOpen(false)}>El método</a>
          <a href="#programa" onClick={() => setMenuOpen(false)}>Programa</a>
          <a href="#bonos" onClick={() => setMenuOpen(false)}>Recursos extra</a>
          <a href="#preguntas" onClick={() => setMenuOpen(false)}>Preguntas</a>
        </nav>
        <a className="sz-header-cta" href="#planes">Ver planes <ArrowRight size={16}/></a>
      </header>

      <main id="contenido">
        <section className="sz-hero" aria-labelledby="sz-hero-title">
          <div className="sz-hero-content">
            <p className="sz-hero-kicker"><span/> QUÍMICA PREUNIVERSITARIA · ACADEMIA ZENIT</p>
            <h1 id="sz-hero-title">Deja de memorizar química <em>sin entenderla.</em></h1>
            <p className="sz-hero-lead">Aprende a visualizar los conceptos, resolver ejercicios y prepararte para tu examen de admisión con una ruta guiada de química, ejemplos desarrollados y práctica interactiva.</p>
            <div className="sz-hero-actions">
              <a className="sz-btn sz-btn-primary" href="#planes">Conocer los planes <ArrowRight size={18}/></a>
              <a className="sz-btn sz-btn-outline" href="#demostracion"><PlayCircle size={18}/> Ver cómo se aprende</a>
            </div>
            <div className="sz-hero-reassurance"><span><CheckCircle2 size={17}/> Programa organizado</span><span><CheckCircle2 size={17}/> Visual y práctico</span><span><CheckCircle2 size={17}/> A tu ritmo</span></div>
          </div>
          <div className="sz-hero-visual">
            <div className="sz-hero-visual-top"><span>LA QUÍMICA SE VUELVE VISIBLE</span><span className="sz-visual-symbol">Au · 79</span></div>
            <LandingAtomExperience />
          </div>
        </section>

        <div className="sz-value-strip" aria-label="Resumen del programa">
          <div><strong>{salesModuleCount}</strong><span>módulos de estudio</span></div>
          <div><strong>{salesTopicCount}</strong><span>temas registrados en el programa</span></div>
          <div><strong><Atom size={25}/></strong><span>recursos visuales e interactivos</span></div>
          <div><strong><ClipboardCheck size={25}/></strong><span>práctica y evaluaciones</span></div>
        </div>

        <section className="sz-section sz-problem" id="problema">
          <SectionHead overline="EL PROBLEMA NO ES SOLO RECORDAR" title={<>¿Lees la teoría, memorizas fórmulas… <span>y te bloqueas ante un ejercicio?</span></>} description="Es difícil avanzar cuando cada tema parece una lista aislada de reglas. Una preparación más activa conecta lo que ves, lo que entiendes y lo que eres capaz de resolver."/>
          <div className="sz-problem-grid">
            <article><span>01</span><h3>Demasiadas fórmulas, poca conexión</h3><p>Aprender de memoria sin relacionar conceptos hace más difícil transferirlos a problemas nuevos.</p></article>
            <article><span>02</span><h3>Conceptos que parecen abstractos</h3><p>Átomos, enlaces y reacciones se comprenden mejor cuando puedes explorar representaciones visuales.</p></article>
            <article><span>03</span><h3>Practicar sin entender el error</h3><p>Resolver preguntas sin revisar el procedimiento impide reconocer qué debes reforzar.</p></article>
          </div>
        </section>

        <section className="sz-method-wrap" id="metodo">
          <div className="sz-section sz-method">
            <SectionHead overline="EL MÉTODO ZENIT" light title={<>No se trata de estudiar más a ciegas. <span>Se trata de comprender, explorar y practicar.</span></>} description="Cada bloque conecta teoría, visualización, resolución y revisión para convertir el estudio en una experiencia activa."/>
            <div className="sz-method-steps">
              {[
                { n: "01", icon: BookOpen, title: "Comprende", body: "Parte de objetivos claros, conceptos esenciales y explicaciones con contexto." },
                { n: "02", icon: Atom, title: "Visualiza", body: "Observa modelos y fenómenos que hacen más tangible la teoría." },
                { n: "03", icon: Target, title: "Resuelve", body: "Lleva lo aprendido a ejercicios y problemas de aplicación." },
                { n: "04", icon: CheckCircle2, title: "Corrige", body: "Contrasta procedimientos, identifica errores y vuelve a intentar." }
              ].map(step => <article key={step.n}><span className="sz-method-num">{step.n}</span><step.icon size={26}/><h3>{step.title}</h3><p>{step.body}</p></article>)}
            </div>
            <a href="#demostracion" className="sz-inline-link is-light">Conoce una muestra del método <ArrowRight size={18}/></a>
          </div>
        </section>

        <section className="sz-section sz-demo-section" id="demostracion">
          <div className="sz-demo-copy">
            <p className="sz-eyebrow">NO SOLO TE CONTAMOS CÓMO FUNCIONA</p>
            <h2>Haz una prueba. <span>Observa qué cambia.</span></h2>
            <p>Los temas de química se vuelven más fáciles de relacionar cuando puedes modificar variables y revisar la explicación al instante.</p>
            <ul className="sz-check-list">
              <li><Check size={17}/> Observa el fenómeno antes de sustituir números.</li>
              <li><Check size={17}/> Relaciona las magnitudes con la ley que estás estudiando.</li>
              <li><Check size={17}/> Contrasta la respuesta con la explicación.</li>
            </ul>
            <Link to="/curso/quimica/05" className="sz-text-cta">Conocer el módulo de gases <ArrowUpRight size={17}/></Link>
          </div>
          <GasDemo/>
        </section>

        <section className="sz-section sz-program" id="programa">
          <SectionHead overline="TODO EL RECORRIDO DE QUÍMICA PREUNI" title={<>Una preparación completa, <span>organizada paso a paso.</span></>} description="El programa reúne 18 módulos y 179 temas registrados. Explora cada etapa y encuentra los contenidos que necesitas reforzar."/>
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
                  <Link to={module.route} aria-label={"Explorar módulo " + module.number + ": " + module.title} className="sz-module-photo"><img src={module.imageUrl} alt="" loading="lazy" /></Link>
                  <div><span>MÓDULO {String(module.number).padStart(2,"0")} · {module.topics} TEMAS</span><h3>{module.title}</h3><Link to={module.route}>Ver temas <ArrowRight size={15}/></Link></div>
                </article>)}</div>
              </details>;
            })}
          </div>
          <p className="sz-program-note">El índice describe los temas registrados. Algunas lecciones o revisiones pedagógicas pueden encontrarse en desarrollo.</p>
          <div className="sz-center-cta"><a href="#planes" className="sz-btn sz-btn-primary">Ver las opciones de acceso <ArrowRight size={18}/></a></div>
        </section>

        <section className="sz-benefits-wrap" id="incluye">
          <div className="sz-section sz-benefits">
            <SectionHead overline="QUÉ RECIBES AL ESTUDIAR" title={<>Herramientas pensadas para <span>pasar de la teoría a la práctica.</span></>} description="No es solo una lista de temas: encontrarás formas complementarias de comprender, repasar y comprobar tu aprendizaje."/>
            <div className="sz-benefit-grid">{benefits.map(item => {const Icon=item.icon;return <article key={item.title}><span className="sz-benefit-icon"><Icon size={24}/></span><h3>{item.title}</h3><p>{item.body}</p></article>;})}</div>
          </div>
        </section>

        <section className="sz-section sz-bonuses" id="bonos">
          <SectionHead overline="MATERIAL EXTRA DE ESTUDIO" title={<>Tres recursos prácticos para <span>estudiar con más dirección.</span></>} description="Además del contenido interactivo, hemos preparado versiones imprimibles para organizarte, repasar conceptos y revisar errores. Puedes consultarlas desde ahora."/>
          <div className="sz-bonus-grid">{bonuses.map(bonus=>{const Icon=bonus.icon;return <article key={bonus.number} className="sz-bonus-card">
            <div className="sz-bonus-top"><span>BONO {bonus.number}</span><span><Icon size={24}/></span></div>
            <h3>{bonus.title}</h3><p>{bonus.summary}</p><span className="sz-bonus-tag">{bonus.tag}</span>
            <a href={bonus.url} target="_blank" rel="noopener noreferrer">Abrir recurso imprimible <Download size={17}/></a>
          </article>;})}</div>
          <p className="sz-bonus-note">Estos materiales de consulta están disponibles como muestras descargables; no son un sustituto de las lecciones.</p>
        </section>

        <section className="sz-section sz-evidence" id="evidencia">
          <div className="sz-evidence-intro">
            <p className="sz-eyebrow">PRUEBA LO QUE DECIMOS</p>
            <h2>Antes de elegir, <span>mira el aprendizaje por dentro.</span></h2>
            <p>En lugar de mostrar testimonios inventados o promesas de ingreso garantizado, preferimos enseñarte recursos reales de la plataforma.</p>
          </div>
          <div className="sz-evidence-grid">
            <article className="sz-evidence-hero">
              <img src={salesModules[1].imageUrl} alt="Portada real del módulo de estructura atómica y mecánica cuántica" loading="lazy" />
              <div><span>MÓDULO REAL</span><h3>Estructura atómica y mecánica cuántica</h3><Link to="/curso/quimica/02">Explorar contenidos <ArrowUpRight size={17}/></Link></div>
            </article>
            <article className="sz-evidence-simple"><span className="sz-evidence-symbol"><Atom size={36}/></span><h3>Explora la ficha atómica del oro</h3><p>Conoce la representación del átomo y la información de un elemento en la plataforma.</p><Link to="/elemento/au">Ver ejemplo real <ArrowUpRight size={17}/></Link></article>
          </div>
        </section>

        <section className="sz-founder-wrap" id="academia">
          <div className="sz-section sz-founder">
            <div className="sz-founder-illustration"><span className="sz-founder-glow"/><div className="sz-founder-mark"><Atom size={65}/><strong>ZENIT</strong><small>ACADEMIA</small></div></div>
            <div>
              <p className="sz-eyebrow">¿QUIÉN ESTÁ DETRÁS?</p>
              <h2>Academia Zenit: <span>enseñar química con recursos visuales.</span></h2>
              <p>Química PreUNI reúne contenidos estructurados, modelos interactivos y práctica orientada a comprender los conceptos antes de aplicarlos. La propuesta está centrada en que el estudiante participe activamente, no solo consuma teoría.</p>
              <p>Conoce el proyecto y su comunidad desde el espacio oficial de Academia Zenit.</p>
              <a href="https://www.skool.com/academia-zenit-3587/about" className="sz-text-cta" target="_blank" rel="noopener noreferrer">Conocer Academia Zenit <ArrowUpRight size={17}/></a>
            </div>
          </div>
        </section>

        <section className="sz-section sz-pricing" id="planes">
          <SectionHead overline="ELIGE TU MODALIDAD" title={<>Una inversión en tu forma de <span>aprender y practicar química.</span></>} description="La integración de pagos está en preparación. Estos son los precios previstos para las dos modalidades de acceso, sujetos a confirmación antes de habilitar la inscripción."/>
          <div className="sz-plan-grid">
            <article className="sz-plan-card"><p className="sz-plan-kicker">MODALIDAD FLEXIBLE</p><h3>Mensual</h3><p className="sz-plan-sub">Para avanzar módulo por módulo con renovación mensual.</p><div className="sz-plan-price"><strong>US$19</strong><span>/ mes</span></div><div className="sz-plan-divider"/><ul><li><Check size={16}/> Acceso al programa durante la membresía</li><li><Check size={16}/> Actividades, ejercicios y evaluaciones</li><li><Check size={16}/> Recursos de aprendizaje disponibles</li></ul><Link to="/curso/quimica" className="sz-btn sz-btn-outline">Revisar el acceso <ArrowRight size={18}/></Link></article>
            <article className="sz-plan-card is-featured"><span className="sz-plan-highlight">MEJOR VALOR ANUAL PREVISTO</span><p className="sz-plan-kicker">MODALIDAD CONTINUA</p><h3>Anual</h3><p className="sz-plan-sub">Para organizar tu preparación con una perspectiva de todo el año.</p><div className="sz-plan-price"><strong>US$190</strong><span>/ año</span></div><p className="sz-plan-savings">US$38 menos que 12 meses del precio mensual previsto.</p><div className="sz-plan-divider"/><ul><li><Check size={16}/> El mismo programa completo</li><li><Check size={16}/> Actividades, ejercicios y evaluaciones</li><li><Check size={16}/> Un solo pago anual previsto</li></ul><Link to="/curso/quimica" className="sz-btn sz-btn-primary">Explorar el programa <ArrowRight size={18}/></Link></article>
          </div>
          <div className="sz-plan-notice" role="note"><LockKeyhole size={19}/><p><strong>Inscripción online aún no habilitada.</strong> No estamos procesando compras desde esta página. El registro con Clerk y el cobro con Whop se activarán solo después de configurar los planes y verificar el checkout, la renovación y el acceso.</p></div>
        </section>

        <section className="sz-faq-wrap" id="preguntas">
          <div className="sz-section sz-faq">
            <div><p className="sz-eyebrow">RESOLVEMOS TUS DUDAS</p><h2>Lo que necesitas saber <span>antes de decidir.</span></h2><p>Si estás evaluando el curso, aquí tienes las respuestas esenciales sobre contenidos, estudio y acceso.</p></div>
            <div className="sz-faq-list">{faqs.map((faq,index)=><details key={faq.q} open={index === 0}><summary>{faq.q}<ChevronDown size={20}/></summary><p>{faq.a}</p></details>)}</div>
          </div>
        </section>

        <section className="sz-final">
          <p className="sz-eyebrow">ACADEMIA ZENIT · QUÍMICA PREUNI</p>
          <h2>La química deja de sentirse abstracta <span>cuando puedes comprenderla y practicarla.</span></h2>
          <p>Revisa los contenidos, experimenta con una muestra y descubre la ruta de estudio que estamos preparando para ti.</p>
          <div className="sz-final-actions"><a href="#planes" className="sz-btn sz-btn-light">Conocer los planes <ArrowRight size={18}/></a><a href="#programa" className="sz-btn sz-btn-ghost">Explorar los 18 módulos</a></div>
        </section>
      </main>

      <footer className="sz-footer">
        <Link className="sz-brand" to="/"><span className="sz-brand-mark"><Atom size={21}/></span><span><strong>ZENIT</strong><small>ACADEMIA</small></span></Link>
        <p>Química PreUNI · Comprende, explora y practica.</p>
        <nav aria-label="Enlaces del pie"><a href="#metodo">Método</a><a href="#programa">Programa</a><a href="#planes">Planes</a><a href="#preguntas">Ayuda</a></nav>
      </footer>
      <a className="sz-mobile-cta" href="#planes">Ver planes de acceso <ArrowRight size={17}/></a>
    </div>
  );
}
