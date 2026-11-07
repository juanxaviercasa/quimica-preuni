import { useEffect, useState } from "react";
import { ArrowRight, Check, Clock3, LockKeyhole, ShieldCheck, Sparkles } from "lucide-react";
import { LAUNCH_END_EXCLUSIVE_MS, pricingFor } from "../pricing/zenitOffer.js";
import "./LaunchPricing.css";

const included = [
  "18 módulos de química preuniversitaria",
  "Modelos interactivos, ejercicios y evaluaciones",
  "Recursos de apoyo para estudiar a tu ritmo"
];

function PriceCard({ plan, featured = false }) {
  return <article className={`sz-plan-card sz-launch-plan${featured ? " is-featured" : ""}`}>
    <div className="sz-launch-card-top">
      <div>
        <span className="sz-plan-kicker">{featured ? "PREPARACIÓN CONTINUA" : "AVANZA CON FLEXIBILIDAD"}</span>
        <h3>{plan.label}</h3>
        <p className="sz-plan-sub">{plan.description}</p>
      </div>
      {featured && <span className="sz-launch-plan-mark"><Sparkles size={15} aria-hidden="true"/> Mejor valor del año</span>}
    </div>

    <div className="sz-launch-pricing" aria-label={`Plan ${plan.label}: ${plan.priceUsd} dólares por ${plan.billingUnit}`}>
      {plan.isLaunch && <div className="sz-launch-was"><span>Precio regular</span> <del>US$${plan.regularUsd}</del></div>}
      <div className="sz-launch-price-main">
        <strong>US$${plan.priceUsd}</strong>
        <span>/ {plan.billingUnit}</span>
      </div>
      {plan.isLaunch ? <span className="sz-launch-discount">Ahorras US$${plan.savingsUsd} en cada {plan.billingUnit} de facturación <span>({plan.discountPercent}% menos)</span></span>
        : <span className="sz-launch-regular">Precio regular vigente</span>}
    </div>
    {featured && <p className="sz-launch-comparison">Equivale a US$${(plan.priceUsd / 12).toFixed(2)}/mes, pagando el año por adelantado. Ahorras US$${(12 * pricingFor("monthly", plan.isLaunch ? LAUNCH_END_EXCLUSIVE_MS - 1 : LAUNCH_END_EXCLUSIVE_MS).priceUsd) - plan.priceUsd} frente a 12 pagos mensuales.</p>}

    <div className="sz-plan-divider"/>
    <ul>{included.map(item=><li key={item}><Check size={17} aria-hidden="true"/>{item}</li>)}</ul>

    <button type="button" className={`sz-btn ${featured ? "sz-btn-primary" : "sz-btn-outline"} sz-plan-pending`} disabled aria-label={`Inscripción ${plan.label} no habilitada todavía`}>
      Inscripción próximamente <ArrowRight size={16} aria-hidden="true"/>
    </button>
    <p className="sz-launch-card-footnote">{plan.cadence} · Renueva automáticamente mientras esté activa.</p>
  </article>;
}

export default function LaunchPricing() {
  const [now, setNow] = useState(() => Date.now());
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

  return <section className="sz-section sz-pricing" id="planes">
    <div className="sz-launch-head">
      <p className="sz-eyebrow">{isLaunch ? "OFERTA DE LANZAMIENTO · QUÍMICA ZENIT" : "PLANES DE ACCESO · QUÍMICA ZENIT"}</p>
      <h2>Invierte en entender química. <span>No en memorizarla una y otra vez.</span></h2>
      <p className="sz-section-desc">Elige cómo quieres avanzar: con la flexibilidad mensual o con un año completo para profundizar, practicar y repasar.</p>
    </div>

    {isLaunch ? <div className="sz-launch-banner">
      <Clock3 size={22} aria-hidden="true"/>
      <div><strong>Precio especial de lanzamiento hasta el 30 de noviembre de 2026</strong>
        <span>Finaliza a las 11:59 p. m. (hora de Perú). Desde el 1 de diciembre, nuevas suscripciones a precio regular.</span>
      </div>
    </div> : <div className="sz-launch-banner is-regular">
      <ShieldCheck size={22} aria-hidden="true"/>
      <div><strong>Precios regulares desde el 1 de diciembre de 2026</strong>
        <span>Las suscripciones promocionales contratadas dentro del plazo mantienen su tarifa mientras sigan activas, según sus condiciones.</span>
      </div>
    </div>}

    <div className="sz-plan-grid">
      <PriceCard plan={monthly}/>
      <PriceCard plan={annual} featured/>
    </div>

    {isLaunch && <div className="sz-launch-grandfather">
      <span className="sz-launch-shield"><ShieldCheck size={24} aria-hidden="true"/></span>
      <div>
        <h3>Entra durante la promoción. Conserva tu tarifa mientras sigas activo.</h3>
        <p>Si contratas el plan mensual a US$19 o el anual a US$190 antes del cierre, ese será tu precio de renovación de la <strong>misma suscripción</strong> mientras permanezca activa y con pagos al día. Si cancelas o tu membresía vence, una nueva contratación tendrá el precio vigente en ese momento.</p>
      </div>
    </div>}

    <div className="sz-plan-notice" role="note">
      <LockKeyhole size={19} aria-hidden="true"/>
      <p><strong>Inscripciones online todavía no habilitadas.</strong> No estamos procesando compras desde esta página. Los precios y la permanencia de la tarifa de lanzamiento son las condiciones comerciales previstas; se habilitarán al configurar y probar los cuatro planes recurrentes de Whop y el acceso con Clerk. La fecha límite no se extiende automáticamente por falta de checkout.</p>
    </div>
  </section>;
}
