import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { elements118 } from "../elementsData.js";

const AtomViewer3D = lazy(() => import("./AtomViewer3D.jsx"));
const gold = elements118.find(element => element.symbol === "Au");

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
    </div>
  );
}
