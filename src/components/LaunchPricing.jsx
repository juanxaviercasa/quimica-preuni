import { useEffect, useState } from "react";
import {
  ArrowRight, CalendarDays, Check, Clock3, GraduationCap,
  LockKeyhole, MessageCircle, MonitorPlay, ShieldCheck, Sparkles,
  Target, Users, X, BookOpenCheck
} from "lucide-react";
import { pricingFor } from "../pricing/zenitOffer.js";
import "./LaunchPricing.css";

const memberBenefits = [
  {
    label: "Clases grupales en vivo todas las semanas",
    detail: "Refuerza temas difíciles y lleva tus preguntas a cada sesión.",
    icon: CalendarDays
  },
  {
    label: "18 módulos con una ruta de aprendizaje",
    detail: "Aprende desde los fundamentos hasta los temas más exigentes.",
    icon: GraduationCap
  },
  {
    label: "Laboratorios y simuladores interactivos",
    detail: "Explora modelos, mueve variables y comprende lo que ocurre.",
    icon: MonitorPlay
  },
  {
    label: "Prácticas y exámenes autocorregidos",
    detail: "Conoce tu calificación y revisa el solucionario de tus errores.",
    icon: Target
  },
  {
    label: "Comunidad privada de estudiantes",
    detail: "Comparte dudas, mantén el ritmo y aprende acompañado.",
    icon: MessageCircle
  },
  {
    label: "Acompañamiento del equipo Zenit",
    detail: "Clases y orientación de docentes e ingenieros químicos preparados con el método Zenit.",
    icon: Users
  }
];

const planExtras = [
  "Clases grupales en vivo cada semana",
  "Simuladores, modelos 3D y recursos descargables",
  "Prácticas y exámenes con calificación automática",
  "Solucionario para comprender tus errores",
  "Comunidad privada y acompañamiento académico",
  "Acceso al recorrido de 18 módulos"
];

function UsdAmount({ amount, crossed = false }) {
  const Tag = crossed ? "del" : "span";
  return <Tag className={crossed ? "sz-launch-amount sz-launch-amount-old" : "sz-launch-amount"}>
    <span className="sz-launch-currency" aria-hidden="true">US$</span>
    <span className="sz-launch-digits">{amount}</span>
  </Tag>;
}

function PriceCard({ plan, featured = false, onChoose, busy, anyBusy }) {
  return <article className={`sz-plan-card sz-launch-plan${featured ? " is-featured" : ""}`}>
    <div className="sz-launch-card-top">
      <span className="sz-plan-kicker">{featured ? "PARA PREPARARTE SIN INTERRUPCIONES" : "PARA ESTUDIAR CON FLEXIBILIDAD"}</span>
      <h3>{plan.label}</h3>
      <p className="sz-plan-sub">{plan.description}</p>
      {featured && <span className="sz-launch-plan-mark"><Sparkles size={15} aria-hidden="true"/> Mejor inversión para un año de preparación</span>}
    </div>

    <div className="sz-launch-pricing" aria-label={`Plan ${plan.label}: ${plan.priceUsd} dólares por ${plan.billingUnit}`}>
      {plan.isLaunch && <div className="sz-launch-was"><span>Precio regular</span> <UsdAmount amount={plan.regularUsd} crossed /></div>}
      <div className="sz-launch-price-main">
        <UsdAmount amount={plan.priceUsd}/>
        <span className="sz-launch-billing">/ {plan.billingUnit}</span>
      </div>
      {plan.isLaunch ? <span className="sz-launch-discount">Ahorras {plan.savingsUsd} dólares {plan.billingUnit === "mes" ? "por mes" : "por año"} ({plan.discountPercent}% menos)</span>
        : <span className="sz-launch-regular">Tarifa regular vigente</span>}
    </div>

    {featured && <p className="sz-launch-comparison">
      Equivale a <strong>{(plan.priceUsd / 12).toFixed(2)} dólares al mes</strong> con pago anual.
      Ahorras {12 * (plan.isLaunch ? 19 : 29) - plan.priceUsd} dólares frente a 12 mensualidades.
    </p>}

    <div className="sz-plan-divider"/>
    <p className="sz-plan-includes-title">Tu membresía incluye:</p>
    <ul>{planExtras.map(item => <li key={item}><Check size={17} aria-hidden="true"/><span>{item}</span></li>)}</ul>

    <button
      type="button"
      className={`sz-btn ${featured ? "sz-btn-primary" : "sz-btn-outline"} sz-plan-select`}
      onClick={() => onChoose(plan.key)}
      disabled={anyBusy}
      aria-label={`Elegir plan ${plan.label.toLowerCase()} de ${plan.priceUsd} dólares por ${plan.billingUnit}`}
    >
      {busy ? "Conectando con el pago…" : `Elegir plan ${plan.label.toLowerCase()}`}
      <ArrowRight size={17} aria-hidden="true"/>
    </button>
    <p className="sz-launch-card-footnote">{plan.cadence} · Renovación automática. Puedes cancelar tu renovación.</p>
  </article>;
}

async function openCheckout(planKey) {
  const token = await window.Clerk?.session?.getToken?.();
  const response = await fetch("/api/checkout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    },
    body: JSON.stringify({ plan: planKey }),
    credentials: "same-origin",
    cache: "no-store"
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    if (response.status === 401) throw new Error("Para inscribirte debes iniciar sesión. El acceso seguro con Clerk debe estar habilitado.");
    throw new Error(data.error || "No se pudo abrir el pago. Verifica que el checkout esté habilitado.");
  }
  const candidate = data.checkoutUrl;
  let url;
  try { url = new URL(candidate); } catch { throw new Error("El checkout no devolvió un enlace válido."); }
  const whopHost = url.hostname === "whop.com" || url.hostname.endsWith(".whop.com");
  if (url.protocol !== "https:" || !whopHost) throw new Error("El enlace de pago no pertenece a Whop.");
  window.location.assign(url.toString());
}

export default function LaunchPricing() {
  const [now, setNow] = useState(() => Date.now());
  const [busy, setBusy] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    const sync = () => setNow(Date.now());
    const timer = window.setInterval(sync, 30000);
    window.addEventListener("focus", sync);
    document.addEventListener("visibilitychange", sync);
    return () => {
      window.clearInterval(timer);
      window.removeEventListener("focus", sync);
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);

  const monthly = pricingFor("monthly", now);
  const annual = pricingFor("annual", now);
  const isLaunch = monthly.isLaunch;

  async function choosePlan(key) {
    if (busy) return;
    setBusy(key);
    setError("");
    try { await openCheckout(key); }
    catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo iniciar la inscripción.");
      setBusy(null);
    }
  }

  return <section className="sz-section sz-pricing" id="planes">
    <div className="sz-launch-head">
      <p className="sz-eyebrow">QUÍMICA ZENIT · MEMBRESÍA DE APRENDIZAJE</p>
      <h2>No necesitas otro curso para acumular videos. <span>Necesitas un sistema para aprender, practicar y avanzar.</span></h2>
      <p className="sz-section-desc">Lecciones visuales, clases en directo, ejercicios corregidos y una comunidad que te ayuda a mantener el ritmo. Todo en una sola membresía de química preuniversitaria.</p>
    </div>

    <div className="sz-membership-grid" aria-label="Beneficios de la membresía">
      {memberBenefits.map(benefit => {
        const Icon = benefit.icon;
        return <article key={benefit.label} className="sz-membership-benefit">
          <span className="sz-membership-icon"><Icon size={21} aria-hidden="true"/></span>
          <div><h3>{benefit.label}</h3><p>{benefit.detail}</p></div>
        </article>;
      })}
    </div>

    <div className="sz-membership-conclusion">
      <BookOpenCheck size={23} aria-hidden="true"/>
      <p><strong>De la teoría a la solución.</strong> Estudia el concepto, experimenta con él, responde preguntas y descubre cómo corregir tus errores.</p>
    </div>

    {isLaunch ? <div className="sz-launch-banner">
      <Clock3 size={22} aria-hidden="true"/>
      <div><strong>Tarifa de lanzamiento hasta el 30 de noviembre de 2026</strong>
        <span>Termina a las 11:59 p. m. (hora de Perú). Desde el 1 de diciembre se aplican los precios regulares a nuevas inscripciones.</span>
      </div>
    </div> : <div className="sz-launch-banner is-regular">
      <ShieldCheck size={22} aria-hidden="true"/>
      <div><strong>Precios regulares desde el 1 de diciembre de 2026</strong>
        <span>Las membresías promocionales contratadas dentro del plazo mantienen su tarifa al renovar mientras sigan activas.</span>
      </div>
    </div>}

    <div className="sz-plan-grid">
      <PriceCard plan={monthly} onChoose={choosePlan} busy={busy === "monthly"} anyBusy={busy !== null}/>
      <PriceCard plan={annual} featured onChoose={choosePlan} busy={busy === "annual"} anyBusy={busy !== null}/>
    </div>

    {error && <div className="sz-launch-checkout-error" role="alert">
      <LockKeyhole size={18} aria-hidden="true"/>
      <span>{error} El cobro no se ha iniciado.</span>
      <button type="button" aria-label="Cerrar aviso" onClick={() => setError("")}><X size={17}/></button>
    </div>}

    <div className="sz-launch-grandfather">
      <span className="sz-launch-shield"><ShieldCheck size={24} aria-hidden="true"/></span>
      <div>
        <h3>Tu precio de lanzamiento se queda contigo.</h3>
        <p>Si contratas el plan promocional antes del 1 de diciembre, mantendrás su tarifa en las renovaciones de <strong>esa misma membresía</strong> mientras permanezca activa y al día. Si cancelas o dejas vencer la membresía, una nueva alta tendrá el precio vigente.</p>
      </div>
    </div>

    <p className="sz-launch-terms">
      Las clases en vivo y el espacio comunitario forman parte de la propuesta de membresía; el calendario, los docentes participantes y el canal de comunidad se comunicarán durante el proceso de incorporación. El acceso, los cobros y las renovaciones se confirmarán en el checkout seguro de Whop cuando esté configurado.
    </p>
  </section>;
}
