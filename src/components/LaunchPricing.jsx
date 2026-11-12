import { ArrowRight, Check, GraduationCap, Users } from "lucide-react";
import { communityUrl } from "../config.js";
import "./LaunchPricing.css";

/**
 * Both entry paths lead to the same official Skool community.
 * Skool alone shows the final plan details and handles enrollment/payment.
 */
export default function LaunchPricing() {
  return (
    <section className="sz-section sz-pricing sz-skool-pricing" id="planes">
      <div className="sz-skool-heading">
        <p className="sz-eyebrow">ACADEMIA ZENIT EN SKOOL</p>
        <h2>Empieza gratis o lleva tu preparación <span>al siguiente nivel.</span></h2>
        <p className="sz-section-desc">
          Explora el acceso básico o elige la membresía completa.
          Ambos caminos comienzan en nuestra comunidad de Skool.
        </p>
      </div>

      <div className="sz-skool-options" aria-label="Modalidades de acceso disponibles en Skool">
        <article className="sz-skool-option sz-skool-free">
          <div className="sz-skool-option-top">
            <span className="sz-skool-icon"><Users size={23} aria-hidden="true" /></span>
            <span className="sz-skool-label">PARA EMPEZAR</span>
          </div>
          <h3>Acceso básico</h3>
          <p className="sz-skool-price sz-skool-free-price">Gratis</p>
          <p className="sz-skool-description">
            Una forma de conocer Academia Zenit y comenzar con el contenido básico
            de Química disponible en la comunidad.
          </p>
          <ul>
            <li><Check size={17} aria-hidden="true" /> Conoce la comunidad y el método Zenit</li>
            <li><Check size={17} aria-hidden="true" /> Explora el curso básico de Química</li>
            <li><Check size={17} aria-hidden="true" /> Decide cuándo dar el siguiente paso</li>
          </ul>
        </article>

        <article className="sz-skool-option sz-skool-premium">
          <div className="sz-skool-option-top">
            <span className="sz-skool-icon"><GraduationCap size={23} aria-hidden="true" /></span>
            <span className="sz-skool-label">PREPARACIÓN COMPLETA</span>
          </div>
          <h3>Membresía completa</h3>
          <p className="sz-skool-price"><strong>US$19</strong><span>/mes</span></p>
          <p className="sz-skool-description">
            Continúa con las clases, los ejercicios y el acompañamiento
            que necesitas para prepararte con método.
          </p>
          <ul>
            <li><Check size={17} aria-hidden="true" /> Programa de Química con módulos y evaluaciones</li>
            <li><Check size={17} aria-hidden="true" /> Clases grupales y comunidad de aprendizaje</li>
            <li><Check size={17} aria-hidden="true" /> Herramientas interactivas con membresía verificada</li>
          </ul>
        </article>
      </div>

      <div className="sz-skool-action">
        <p>Elige tu modalidad directamente en Skool.</p>
        <a className="sz-btn sz-btn-primary sz-skool-cta" href={communityUrl}>
          Ver opciones e inscribirme en Skool <ArrowRight size={18} aria-hidden="true" />
        </a>
        <small>Skool confirma el precio, las condiciones y el acceso disponible antes de inscribirte.</small>
      </div>
    </section>
  );
}
