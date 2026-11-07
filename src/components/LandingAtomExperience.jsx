import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { elements118 } from "../elementsData.js";

const AtomViewer3D = lazy(() => import("./AtomViewer3D.jsx"));
const gold = elements118.find(element => element.symbol === "Au");
const goldMassNumber = gold ? Math.round(Number(gold.atomic_mass)) : 197;
const goldProtons = gold?.number ?? 79;
const goldElectrons = gold?.shells?.reduce((sum, n) => sum + n, 0) ?? goldProtons;
const goldNeutrons = goldMassNumber - goldProtons;
const goldFacts = [
  ["Número atómico", goldProtons],
  ["Número de masa", goldMassNumber],
  ["Protones", goldProtons],
  ["Neutrones", goldNeutrons],
  ["Electrones", goldElectrons]
];

function GoldFallback({ message }) {
  return (
    <div className="sz-gold-fallback" role={message ? "status" : undefined}>
      <span className="sz-gold-fallback-orbit sz-orbit-one" />
      <span className="sz-gold-fallback-orbit sz-orbit-two" />
      <span className="sz-gold-fallback-orbit sz-orbit-three" />
      <span className="sz-gold-fallback-core">Au</span>
      {message && <span className="sz-gold-fallback-note">{message}</span>}
    </div>
  );
}

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("webgl2") || canvas.getContext("webgl");
    const available = Boolean(context);
    context?.getExtension("WEBGL_lose_context")?.loseContext();
    return available;
  } catch {
    return false;
  }
}

/** Same Three.js atom engine as the periodic table. Gold only; autoplay + pause. */
export default function LandingAtomExperience() {
  const hostRef = useRef(null);
  const [active, setActive] = useState(false);
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    if (!supportsWebGL()) {
      setSupported(false);
      return;
    }
    if (!("IntersectionObserver" in window)) {
      setActive(true);
      return;
    }
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        setActive(true);
        observer.disconnect();
      }
    }, { rootMargin: "140px" });
    if (hostRef.current) observer.observe(hostRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="sz-gold-experience" ref={hostRef} aria-label="Representación animada del átomo de oro">
      <div className="sz-gold-stage">
        {supported && active && gold ? (
          <Suspense fallback={<GoldFallback />}>
            <AtomViewer3D element={gold} compact presentationOnly />
          </Suspense>
        ) : (
          <GoldFallback message={supported ? undefined : "Visualización 3D no disponible en este dispositivo"} />
        )}
      </div>
      <dl className="sz-gold-facts" aria-label="Datos del isótopo oro-197">
        {goldFacts.map(([label, value]) => (
          <div key={label} className="sz-gold-fact"><dt>{label}</dt><dd>{value}</dd></div>
        ))}
      </dl>
      <span className="sz-gold-isotope">Au-197 · isótopo estable · modelo visual didáctico</span>
    </div>
  );
}
