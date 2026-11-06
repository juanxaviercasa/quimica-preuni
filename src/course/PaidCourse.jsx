import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAuth, SignInButton, SignUpButton, UserButton } from "@clerk/react";
import { BookOpen, Atom, ArrowRight, ArrowLeft, CheckCircle, LockKeyhole, Search, ShieldCheck } from "lucide-react";
import { paidApi } from "./paidApi.js";
import { segmentToNumber } from "./routes.js";
import { ACTIVITY_COMPONENTS, FAMILY_LABELS } from "./activities.jsx";
import { PracticeSet, ExamSet } from "./QuestionSet.jsx";
import { StudyText, WorkedPractice } from "./StudyContent.jsx";
import { RichText } from "./ui.jsx";
import "./course.css";
import "./paid.css";

function CourseRequest({ type, params, children }) {
  const { isLoaded, isSignedIn, getToken } = useAuth();
  const [state, setState] = useState({ loading: true, data: null, error: null });
  const signature = JSON.stringify(params);
  useEffect(() => {
    if (!isLoaded || !isSignedIn) return;
    const controller = new AbortController();
    setState({ loading: true, data: null, error: null });
    paidApi(getToken, type, params, { signal: controller.signal }).then(data => {
      if (!controller.signal.aborted) setState({ loading: false, data, error: null });
    }).catch(error => {
      if (!controller.signal.aborted) setState({ loading: false, data: null, error });
    });
    return () => controller.abort();
  }, [getToken, isLoaded, isSignedIn, type, signature]);
  if (!isLoaded) return <main className="cq-pay-state"><p>Verificando tu sesión…</p></main>;
  if (!isSignedIn) return <Paywall signedIn={false}/>;
  if (state.loading) return <main className="cq-pay-state"><p>Cargando contenido protegido…</p></main>;
  if (state.error?.status === 402) return <Paywall signedIn={true}/>;
  if (state.error) return <main className="cq-pay-state"><h1>No se pudo abrir el curso</h1><p role="alert">{state.error.message}</p><button type="button" onClick={() => window.location.reload()}>Intentar nuevamente</button><Link to="/">Volver al inicio</Link></main>;
  return children(state.data);
}

export function Paywall({ signedIn }) {
  const { getToken } = useAuth();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [billingPlan, setBillingPlan] = useState("monthly");
  async function checkout() {
    setBusy(true); setError("");
    try {
      const token = await getToken();
      const response = await fetch("/api/checkout", { method: "POST",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify({ plan: billingPlan }), credentials: "omit" });
      const data = await response.json();
      if (!response.ok || !data.checkoutUrl) throw new Error(data.error || "No se pudo abrir el pago.");
      window.location.assign(data.checkoutUrl);
    } catch (err) { setError(err.message || "Error de pago"); setBusy(false); }
  }
  return <main className="cq-paywall">
    <span className="cq-pay-kicker"><LockKeyhole size={16}/> ACCESO A QUÍMICA PREUNI</span>
    <h1>Tu preparación, en un solo lugar.</h1>
    <p>Accede a los 18 módulos, explicaciones, actividades, simuladores, práctica y exámenes del curso completo mediante una membresía activa.</p>
    <div className="cq-pay-perks"><span><CheckCircle size={18}/> Lecciones paso a paso</span><span><CheckCircle size={18}/> Ejercicios y evaluaciones</span><span><CheckCircle size={18}/> Actividades interactivas</span></div>
    <fieldset className="cq-pay-plans" aria-label="Elige tu plan de suscripción">
      <legend>Elige cómo pagar</legend>
      <label className={billingPlan === "monthly" ? "cq-pay-plan is-selected" : "cq-pay-plan"}>
        <input type="radio" name="billing-plan" value="monthly" checked={billingPlan === "monthly"} onChange={() => setBillingPlan("monthly")}/>
        <span><strong>Mensual</strong><span>US$19 cada mes</span></span>
      </label>
      <label className={billingPlan === "annual" ? "cq-pay-plan is-selected" : "cq-pay-plan"}>
        <input type="radio" name="billing-plan" value="annual" checked={billingPlan === "annual"} onChange={() => setBillingPlan("annual")}/>
        <span><strong>Anual</strong><span>US$190 al año · ahorras US$38</span></span>
      </label>
    </fieldset>
    {!signedIn ? <div className="cq-pay-actions"><SignUpButton mode="modal"><button className="cq-pay-primary">Crear cuenta y continuar <ArrowRight size={18}/></button></SignUpButton><SignInButton mode="modal"><button className="cq-pay-secondary">Ya tengo cuenta · Ingresar</button></SignInButton></div> :
      <div className="cq-pay-actions"><button className="cq-pay-primary" onClick={checkout} disabled={busy}>{busy ? "Preparando pago…" : "Obtener acceso al curso"} <ArrowRight size={18}/></button><span className="cq-pay-hint">¿Ya pagaste? Tu acceso se habilitará después de verificar el pago.</span><UserButton/></div>}
    {error && <p role="alert" className="cq-pay-error">{error}</p>}
    <Link to="/" className="cq-pay-return">← Volver al inicio</Link>
  </main>;
}

export function PaidIndex() {
  return <CourseRequest type="index" params={{}}>{({ modules, stats }) => <main className="cq-page">
    <header className="cq-header"><p className="cq-pay-kicker"><ShieldCheck size={16}/> ÁREA DE ESTUDIO</p><h1 className="cq-title">Curso completo de Química PreUNI</h1><p>Tu ruta de aprendizaje: {stats.modules} módulos y {stats.topics} lecciones.</p></header>
    <div className="cq-paid-grid">{modules.map(mod => <article key={mod.number} className="cq-section">
      {mod.imageUrl && <img className="cq-paid-cover" src={mod.imageUrl} alt="" loading="lazy"/>}
      <span className="cq-pay-kicker">MÓDULO {String(mod.number).padStart(2,"0")} · {mod.topics.length} LECCIONES</span>
      <h2>{mod.title}</h2><p>{mod.description}</p><Link to={mod.route} className="cq-btn primary">Ver lecciones <ArrowRight size={17}/></Link>
    </article>)}</div>
  </main>}</CourseRequest>;
}

export function PaidModule() {
  const { moduleSegment } = useParams();
  const number = segmentToNumber(moduleSegment);
  return <CourseRequest type="module" params={{ module: number ?? "" }}>{({ module: mod }) => <main className="cq-page">
    <div className="cq-breadcrumb"><Link to="/curso/quimica">Curso</Link> / Módulo {mod.number}</div>
    <header className="cq-header"><h1 className="cq-title">{mod.title}</h1><p>{mod.description}</p></header>
    {mod.intro?.objective && <section className="cq-section"><h2>Qué aprenderás</h2><RichText text={mod.intro.objective}/></section>}
    <section className="cq-section"><h2>Lecciones y actividades</h2><div className="cq-paid-topics">{mod.topics.map(t => <Link to={t.route} key={t.code}><span>{t.code}</span><div><strong>{t.title}</strong><p>{t.objective || t.sourceObjective || "Estudia y practica este tema."}</p></div><ArrowRight size={17}/></Link>)}</div></section>
    {mod.examCount > 0 && <Link className="cq-btn primary" to={mod.examRoute}>Evaluación del módulo <ArrowRight size={16}/></Link>}
  </main>}</CourseRequest>;
}

export function PaidTopic() {
  const { moduleSegment, topicSegment } = useParams();
  const number = segmentToNumber(moduleSegment), topicNumber = segmentToNumber(topicSegment);
  return <CourseRequest type="topic" params={{ module: number ?? "", topic: topicNumber ?? "" }}>{({ topic, module: mod, prev, next }) => {
    const Activity = topic.activity ? ACTIVITY_COMPONENTS[topic.activity.family] : null;
    return <main className="cq-page">
      <div className="cq-breadcrumb"><Link to="/curso/quimica">Curso</Link> / <Link to={mod.route}>Módulo {mod.number}</Link> / Tema {topic.code}</div>
      <header className="cq-header"><span className="cq-pay-kicker">LECCIÓN {topic.code}</span><h1 className="cq-title">{topic.title}</h1></header>
      <section className="cq-section"><h2>Objetivo de aprendizaje</h2><div className="cq-objective-box"><RichText text={topic.objective || topic.sourceObjective}/></div>{topic.summary?.length>0 && <ul className="cq-summary-list">{topic.summary.map((v,i)=><li key={i}><RichText text={v}/></li>)}</ul>}</section>
      {topic.theory && <section className="cq-section"><h2>Fundamentos de la lección</h2><StudyText text={topic.theory}/></section>}
      {Activity && topic.status !== "bloqueado" && <section className="cq-section"><h2>Actividad interactiva: {topic.activity.title}</h2><p>{FAMILY_LABELS[topic.activity.family]}</p>{topic.activity.instructions?.length>0 && <ul>{topic.activity.instructions.map((v,i)=><li key={i}><RichText text={v}/></li>)}</ul>}<Activity key={topic.code} activity={topic.activity}/></section>}
      {topic.workedPractice?.length>0 && <section className="cq-section"><h2>Práctica con desarrollo</h2><WorkedPractice examples={topic.workedPractice}/></section>}
      {topic.example && <section className="cq-section"><h2>Ejemplo resuelto</h2><p><RichText text={topic.example.statement}/></p>{topic.example.steps?.map((s,i)=><p key={i}><RichText text={s}/></p>)}<strong>Respuesta: <RichText text={topic.example.answer}/></strong></section>}
      {topic.practice?.length>0 && <section className="cq-section"><h2>Práctica guiada</h2><PracticeSet questions={topic.practice}/></section>}
      {topic.quiz?.length>0 && <section className="cq-section"><h2>Comprueba lo aprendido</h2><ExamSet key={topic.code} title="Mini examen" questions={topic.quiz}/></section>}
      <nav className="cq-nav">{prev ? <Link to={prev.route}><ArrowLeft size={16}/> {prev.title}</Link> : <Link to={mod.route}><ArrowLeft size={16}/> Volver al módulo</Link>}{next ? <Link to={next.route}>{next.title} <ArrowRight size={16}/></Link> : <Link to={mod.examRoute}>Ir a la evaluación <ArrowRight size={16}/></Link>}</nav>
    </main>;
  }}</CourseRequest>;
}

export function PaidExam() {
  const { moduleSegment } = useParams();
  const number = segmentToNumber(moduleSegment);
  return <CourseRequest type="exam" params={{ module: number ?? "" }}>{({ module: mod }) => <main className="cq-page">
    <div className="cq-breadcrumb"><Link to={mod.route}>Módulo {mod.number}</Link> / Evaluación</div>
    <header className="cq-header"><h1 className="cq-title">Comprueba lo aprendido</h1><p>{mod.title} · {mod.exam.length} preguntas</p></header>
    <section className="cq-section"><ExamSet key={mod.number} title="Evaluación acumulativa" questions={mod.exam}/></section>
    <Link className="cq-btn" to={mod.route}><ArrowLeft size={16}/> Volver al módulo</Link>
  </main>}</CourseRequest>;
}

export function PaymentResult() {
  const { isLoaded, isSignedIn } = useAuth();
  return <main className="cq-paywall">
    <span className="cq-pay-kicker"><ShieldCheck size={17}/> CONFIRMACIÓN DE PAGO</span>
    <h1>Gracias por elegir Química PreUNI</h1>
    <p>Whop procesa tu pago y notifica la activación. El acceso se concederá cuando el servidor verifique una membresía vigente; el redireccionamiento por sí solo no habilita el curso.</p>
    {!isLoaded ? <p>Comprobando tu sesión…</p> : !isSignedIn ? <SignInButton mode="modal"><button className="cq-pay-primary">Iniciar sesión</button></SignInButton> : <Link to="/curso/quimica" className="cq-pay-primary" style={{ padding: "14px 20px", borderRadius: 10 }}>Comprobar mi acceso <ArrowRight size={17}/></Link>}
    <p className="cq-pay-hint">Si todavía no aparece tu membresía, vuelve a comprobarla. No es necesario pagar otra vez.</p>
  </main>;
}
