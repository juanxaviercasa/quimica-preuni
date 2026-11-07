import { useEffect, useState } from "react";
import { useAuth, useClerk } from "@clerk/react";
import {
  ArrowRight, CalendarDays, Check, Clock3,
  LockKeyhole, MonitorPlay, ShieldCheck, Sparkles,
  Target, Users, X
} from "lucide-react";
import { pricingFor } from "../pricing/zenitOffer.js";
import "./LaunchPricing.css";

const memberBenefits = [
  { label: "Clases semanales en vivo", detail: "Resuelve dudas y refuerza los temas que más te cuestan.", icon: CalendarDays },
  { label: "Herramientas que puedes explorar", detail: "Visualiza conceptos con simuladores, modelos y experimentos digitales.", icon: MonitorPlay },
  { label: "Evaluaciones con solucionario", detail: "Comprueba tu avance y entiende por qué fallaste una respuesta.", icon: Target },
  { label: "Comunidad y acompañamiento", detail: "Aprende junto a otros estudiantes y al equipo docente Zenit.", icon: Users }
];

const planExtras = [
  "18 módulos de química preuniversitaria",
  "Clases grupales en vivo y comunidad privada",
  "Simuladores y herramientas digitales interactivas",
  "Prácticas y exámenes autocorregidos con solucionario"
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

async function openCheckout(planKey, getToken) {
  const token = await getToken();
  // If Clerk opened sign-in, wait until the user clicks a plan again.
  if (!token) return;
  const response = await fetch("/api/checkout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    },
    body: JSON.stringify({ plan: planKey }),
    credentials: "omit",
    cache: "no-store"
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    if (response.status === 401) throw new Error("Inicia sesión para continuar con tu inscripción.");
    throw new Error(data.error || "No pudimos abrir el pago en este momento. Inténtalo nuevamente.");
  }
  if (data.alreadyMember) {
    window.location.assign("/curso/quimica");
    return;
  }
  const candidate = data.checkoutUrl;
  let url;
  try { url = new URL(candidate); } catch { throw new Error("El checkout no devolvió un enlace válido."); }
  const whopHost = url.hostname === "whop.com" || url.hostname.endsWith(".whop.com");
  if (url.protocol !== "https:" || !whopHost) throw new Error("El enlace de pago no pertenece a Whop.");
  window.location.assign(url.toString());
}

function PricingContent({ getCheckoutToken }) {
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
    try { await openCheckout(key, getCheckoutToken); }
    catch (err) { setError(err instanceof Error ? err.message : "No se pudo iniciar la inscripción."); }
    finally { setBusy(null); }
  }

  return <section className="sz-section sz-pricing" id="planes">
    <div className="sz-launch-head">
      <p className="sz-eyebrow">QUÍMICA ZENIT · MEMBRESÍA DE APRENDIZAJE</p>
      <h2>Todo el apoyo para estudiar química <span>sin quedarte solo con la teoría.</span></h2>
      <p className="sz-section-desc">Una sola membresía, dos formas de acceder. Elige tu ritmo y aprovecha las clases en vivo, los simuladores y la práctica con retroalimentación.</p>
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
      <span>{error} No se realizó ningún cargo.</span>
      <button type="button" aria-label="Cerrar aviso" onClick={() => setError("")}><X size={17}/></button>
    </div>}

    {isLaunch && <div className="sz-launch-grandfather">
      <span className="sz-launch-shield"><ShieldCheck size={24} aria-hidden="true"/></span>
      <div>
        <h3>Tu precio de lanzamiento se queda contigo.</h3>
        <p>Si contratas el plan promocional antes del 1 de diciembre, mantendrás su tarifa en las renovaciones de <strong>esa misma membresía</strong> mientras permanezca activa y al día. Si cancelas o dejas vencer la membresía, una nueva alta tendrá el precio vigente.</p>
      </div>
    </div>}

    <p className="sz-launch-terms">
      La membresía se renueva automáticamente según el plan elegido. Puedes cancelar futuras renovaciones; al contratar nuevamente se aplica el precio vigente. Consulta las condiciones de pago antes de confirmar.
    </p>
  </section>;
}

function ClerkPricing() {
  const { isLoaded, isSignedIn, getToken } = useAuth();
  const clerk = useClerk();
  async function sessionToken() {
    if (!isLoaded) throw new Error("Estamos preparando tu sesión. Intenta nuevamente.");
    if (!isSignedIn) {
      clerk.openSignIn({});
      return null;
    }
    const token = await getToken();
    if (!token) throw new Error("No pudimos validar tu sesión. Vuelve a iniciar sesión.");
    return token;
  }
  return <PricingContent getCheckoutToken={sessionToken} />;
}

export default function LaunchPricing() {
  // The public landing must remain visible before Clerk's public key is set.
  if (import.meta.env.VITE_CLERK_PUBLISHABLE_KEY) return <ClerkPricing />;
  return <PricingContent getCheckoutToken={async () => {
    throw new Error("No se pudo iniciar la sesión segura. Intenta más tarde.");
  }} />;
}
