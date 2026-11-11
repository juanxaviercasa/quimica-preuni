import { ArrowRight, CalendarDays, Check, MonitorPlay, ShieldCheck, Target, Users } from "lucide-react";
import { communityUrl } from "../config.js";
import "./LaunchPricing.css";

const benefits = [
  { icon: CalendarDays, label: "Clases grupales y acompañamiento" },
  { icon: MonitorPlay, label: "Simuladores y herramientas interactivas" },
  { icon: Target, label: "Prácticas, evaluaciones y solucionarios" },
  { icon: Users, label: "Comunidad y cursos en Skool" }
];

/**
 * Skool is the ONLY payment processor. Do not request a Clerk account or
 * initiate checkout on the Zenit website before a paid Skool membership exists.
 * Skool's official About page owns enrollment, pricing and payment details.
 */
export default function LaunchPricing() {
  return (
    <section className="sz-section sz-pricing" id="planes">
      <div className="sz-launch-head">
        <p className="sz-eyebrow">QUÍMICA ZENIT · MEMBRESÍA EN SKOOL</p>
        <h2>Aprende química con <span>clases, práctica y herramientas interactivas.</span></h2>
        <p className="sz-section-desc">
          Inscríbete desde esta página o desde la comunidad: en ambos casos,
          Skool gestiona tu pago y la renovación de tu membresía.
        </p>
      </div>

      <div className="sz-membership-grid" aria-label="Beneficios de la membresía">
        {benefits.map(({ icon: Icon, label }) => (
          <div className="sz-membership-benefit" key={label}>
            <span className="sz-membership-icon"><Icon size={21} aria-hidden="true" /></span>
            <div><h3>{label}</h3></div>
          </div>
        ))}
      </div>

      <div className="sz-plan-grid">
        <article className="sz-plan-card sz-launch-plan is-featured" style={{ maxWidth: 640, margin: "0 auto", width: "100%" }}>
          <div className="sz-launch-card-top">
            <span className="sz-plan-kicker">UN SOLO PAGO EN SKOOL</span>
            <h3>Tu membresía de Academia Zenit</h3>
            <p className="sz-plan-sub">Oferta mensual anunciada: US$19. El importe definitivo,
              los planes disponibles y las condiciones de renovación se muestran antes
              de confirmar la compra en Skool.</p>
          </div>
          <div className="sz-plan-divider" />
          <p className="sz-plan-includes-title">Incluye:</p>
          <ul>
            <li><Check size={17} aria-hidden="true" /><span>Lecciones y actividades del programa</span></li>
            <li><Check size={17} aria-hidden="true" /><span>Clases y acompañamiento en la comunidad</span></li>
            <li><Check size={17} aria-hidden="true" /><span>Herramientas Zenit sujetas a validación de membresía</span></li>
          </ul>
          <a className="sz-btn sz-btn-primary sz-plan-select" href={communityUrl}
            aria-label="Ir a Academia Zenit en Skool para inscribirme y pagar">
            Inscribirme y pagar en Skool <ArrowRight size={17} aria-hidden="true" />
          </a>
          <p className="sz-launch-card-footnote">
            <ShieldCheck size={16} aria-hidden="true" /> Pago y suscripción gestionados únicamente por Skool.
            No necesitas registrarte en Clerk para pagar.
          </p>
        </article>
      </div>
      <p className="sz-launch-terms">
        Si ya pagaste en Skool, no vuelvas a comprar en esta página. El acceso a
        las herramientas externas requiere verificar tu membresía con la Academia.
        Cancelaciones y renovaciones se gestionan desde Skool.
      </p>
    </section>
  );
}
