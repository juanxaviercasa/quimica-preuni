import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Atom, FlaskConical, MousePointer2, Play, ShieldCheck } from "lucide-react";
import { elements118 } from "../elementsData.js";

const AtomViewer3D = lazy(() => import("./AtomViewer3D.jsx"));
const ELEMENT_CHOICES = [
  { symbol: "O", label: "Oxígeno" },
  { symbol: "C", label: "Carbono" },
  { symbol: "Au", label: "Oro" }
];

function AtomPlaceholder({ element }) {
  return (
    <div className="zl-atom-placeholder" aria-hidden="true">
      <div className="zl-atom-placeholder-orbit zl-orbit-one" />
      <div className="zl-atom-placeholder-orbit zl-orbit-two" />
      <div className="zl-atom-placeholder-orbit zl-orbit-three" />
      <div className="zl-atom-placeholder-core">
        <strong>{element.symbol}</strong><small>Z = {element.number}</small>
      </div>
      <span className="zl-atom-placeholder-dot zl-dot-one" />
      <span className="zl-atom-placeholder-dot zl-dot-two" />
      <span className="zl-atom-placeholder-dot zl-dot-three" />
    </div>
  );
}

function canUseWebGL() {
  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
    const supported = Boolean(gl);
    gl?.getExtension("WEBGL_lose_context")?.loseContext();
    return supported;
  } catch {
    return false;
  }
}

/**
 * The landing uses exactly the same AtomViewer3D engine as ElementDetailPage.
 * It is lazy-loaded when the hero enters the viewport, instead of eagerly
 * downloading Three.js when the document first renders.
 */
export default function LandingAtomExperience() {
  const [symbol, setSymbol] = useState("O");
  const [active, setActive] = useState(false);
  const [supported, setSupported] = useState(true);
  const stageRef = useRef(null);

  const element = elements118.find(item => item.symbol === symbol) || elements118.find(item => item.number === 8);
  const totalElectrons = element.shells.reduce((sum, count) => sum + count, 0);

  useEffect(() => {
    if (!canUseWebGL()) {
      setSupported(false);
      return;
    }
    const saveData = navigator.connection?.saveData === true;
    const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (saveData || prefersReducedMotion) return; // Manual activation remains available.

    if (!("IntersectionObserver" in window)) {
      setActive(true);
      return;
    }
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        setActive(true);
        observer.disconnect();
      }
    }, { rootMargin: "160px" });
    if (stageRef.current) observer.observe(stageRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="zl-visual-glow" aria-hidden="true" />
      <div className="zl-visual-top">
        <span className="zl-live-dot" aria-hidden="true" />
        LABORATORIO INTERACTIVO
        <span>MODELO ATÓMICO 3D</span>
      </div>
      <div className="zl-model">
        <div className="zl-element-picker" role="group" aria-label="Selecciona un elemento para observar su estructura atómica">
          {ELEMENT_CHOICES.map(choice => (
            <button
              key={choice.symbol}
              type="button"
              className={symbol === choice.symbol ? "zl-element-choice is-current" : "zl-element-choice"}
              onClick={() => { setSymbol(choice.symbol); if (supported) setActive(true); }}
              aria-pressed={symbol === choice.symbol}
            >
              <span>{choice.symbol}</span> {choice.label}
            </button>
          ))}
        </div>

        <div
          className="zl-atom-viewport"
          ref={stageRef}
          aria-label={`Modelo interactivo de ${element.name}: ${element.number} protones y ${totalElectrons} electrones`}
        >
          {active && supported ? (
            <Suspense fallback={<AtomPlaceholder element={element} />}>
              <AtomViewer3D key={element.symbol} element={element} compact />
            </Suspense>
          ) : (
            <>
              <AtomPlaceholder element={element} />
              {!supported ? (
                <p className="zl-atom-notice" role="status">El modo 3D no está disponible en este dispositivo.</p>
              ) : (
                <button type="button" className="zl-activate-atom" onClick={() => setActive(true)}>
                  <Play size={16} fill="currentColor" /> Activar visor 3D
                </button>
              )}
            </>
          )}
        </div>

        <div className="zl-atom-guide" aria-live="polite">
          <span className="zl-atom-stats"><strong>Z={element.number}</strong> · {element.number} p⁺ · {totalElectrons} e⁻ · capas {element.shells.join(" · ")}</span>
          <span><MousePointer2 size={13} aria-hidden="true" /> Arrastra para girar · Acerca para observar</span>
        </div>
      </div>
      <div className="zl-visual-bottom">
        <div>
          <span className="zl-visual-kicker"><FlaskConical size={13} aria-hidden="true" /> APRENDE EXPLORANDO</span>
          <strong>{element.name}: del símbolo al átomo.</strong>
          <small>Modelo de capas didáctico; las órbitas no son trayectorias reales de electrones.</small>
        </div>
        <Link
          to={`/elemento/${element.symbol.toLowerCase()}`}
          className="zl-visual-link"
          aria-label={`Abrir ficha atómica completa de ${element.name}`}
          title="Abrir ficha atómica completa"
        >
          <ArrowUpRight size={22} />
        </Link>
      </div>
    </>
  );
}
