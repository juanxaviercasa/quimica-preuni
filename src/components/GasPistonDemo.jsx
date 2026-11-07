import { useRef, useState } from "react";
import { ArrowDown, ArrowUp, CheckCircle2, Hand, RefreshCcw } from "lucide-react";
import {
  GAS_DEMO, clampGasVolume, gasHeightPercent, gasPressureAtVolume,
  gasPressureVolumeProduct, pistonTopPercent, volumeFromPistonDrag
} from "./gasPistonModel.js";

const particles = [
  [16, 17], [48, 30], [73, 19], [32, 52], [82, 57], [55, 74],
  [11, 80], [68, 89], [26, 29], [91, 37], [42, 90], [76, 44],
  [20, 64], [60, 14], [37, 75], [86, 83], [50, 54], [10, 42]
];

export default function GasPistonDemo() {
  const [volume, setVolume] = useState(GAS_DEMO.initialVolume);
  const [dragging, setDragging] = useState(false);
  const drag = useRef(null);
  const pressure = gasPressureAtVolume(volume);
  const pistonTop = pistonTopPercent(volume);
  const height = gasHeightPercent(volume);
  const gasWork = gasPressureVolumeProduct(volume);

  function onPointerDown(event) {
    if (event.button !== 0 && event.pointerType === "mouse") return;
    const vessel = event.currentTarget.closest(".sz-piston-vessel");
    const vesselHeight = vessel?.getBoundingClientRect().height;
    if (!vesselHeight) return;
    drag.current = {
      id: event.pointerId,
      y: event.clientY,
      startVolume: volume,
      vesselHeight
    };
    event.currentTarget.setPointerCapture(event.pointerId);
    setDragging(true);
    event.preventDefault();
  }

  function onPointerMove(event) {
    if (!drag.current || event.pointerId !== drag.current.id) return;
    const nextVolume = volumeFromPistonDrag(
      drag.current.startVolume, event.clientY - drag.current.y, drag.current.vesselHeight
    );
    setVolume(Math.round(nextVolume * 10) / 10);
  }

  function onPointerEnd(event) {
    if (!drag.current || event.pointerId !== drag.current.id) return;
    drag.current = null;
    setDragging(false);
    if (event.currentTarget.hasPointerCapture?.(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  }

  function onKeyDown(event) {
    const change = event.key === "ArrowUp" ? 0.5 : event.key === "ArrowDown" ? -0.5 : 0;
    if (change) {
      event.preventDefault();
      setVolume(value => clampGasVolume(Math.round((value + change) * 10) / 10));
    } else if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      setVolume(event.key === "Home" ? GAS_DEMO.minVolume : GAS_DEMO.maxVolume);
    }
  }

  return (
    <div className="sz-demo-lab sz-gas-lab" aria-label="Demostración interactiva de la ley de los gases ideales">
      <div className="sz-demo-top">
        <span className="sz-demo-live"><span/> SIMULADOR INTERACTIVO</span>
        <span>QUÍMICA · GASES IDEALES</span>
      </div>
      <h3>Comprímelo y observa lo que ocurre.</h3>
      <p className="sz-gas-lead">Arrastra el pistón hacia abajo para reducir el volumen. Observa cómo sube la presión y cómo responde la ecuación.</p>

      <div className="sz-gas-law" aria-label="Ecuación general de gases ideales">
        <div className="sz-gas-law-formula">
          {[
            ["P", "Presión"], ["·", null], ["V", "Volumen"], ["=", null],
            ["n", "Moles"], ["·", null], ["R", "Constante"], ["·", null], ["T", "Temperatura"]
          ].map(([symbol, label], i) => label ?
            <span className="sz-gas-law-term" key={i}><em>{symbol}</em><small>{label}</small></span> :
            <span className="sz-gas-law-operator" key={i} aria-hidden="true">{symbol}</span>
          )}
        </div>
        <small>Presión × volumen = cantidad × constante × temperatura</small>
      </div>

      <div className="sz-piston-grid">
        <div className="sz-piston-area">
          <div className="sz-piston-vessel">
            <div className="sz-piston-gas" style={{ height: `${height}%` }} aria-hidden="true">
              {particles.map(([left, top], i) =>
                <span key={i} className="sz-piston-particle" style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  "--gas-shift": `${i % 2 ? 11 : -10}px`,
                  animationDuration: `${(3.1 - pressure * .5 + (i % 5) * .16).toFixed(2)}s`,
                  animationDelay: `${-i * .22}s`
                }}/>
              )}
            </div>
            <div className="sz-piston-shaft" style={{ height: `${pistonTop}%` }} aria-hidden="true"/>
            <div
              role="slider"
              aria-label="Altura del pistón y volumen del gas. Arrastra arriba para expandir y abajo para comprimir."
              aria-valuemin={GAS_DEMO.minVolume}
              aria-valuemax={GAS_DEMO.maxVolume}
              aria-valuenow={volume}
              aria-valuetext={`${volume.toFixed(1)} litros; presión ${pressure.toFixed(2)} atmósferas`}
              aria-orientation="vertical"
              tabIndex={0}
              className={"sz-piston-handle" + (dragging ? " is-dragging" : "")}
              style={{ top: `${pistonTop}%` }}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerEnd}
              onPointerCancel={onPointerEnd}
              onLostPointerCapture={() => { drag.current = null; setDragging(false); }}
              onKeyDown={onKeyDown}
            >
              <span className="sz-piston-handle-grip" aria-hidden="true"/>
              <span className="sz-piston-handle-hint" aria-hidden="true"><ArrowUp size={15}/><ArrowDown size={15}/></span>
            </div>
            <div className="sz-piston-base" aria-hidden="true"/>
          </div>
          <div className="sz-piston-instruction"><Hand size={15}/> Mantén presionado y mueve el pistón</div>
        </div>

        <div className="sz-gas-dashboard">
          <div className="sz-gas-metric sz-gas-pressure">
            <span>Presión <strong>P</strong></span>
            <div><strong>{pressure.toFixed(2)}</strong><small>atm</small></div>
            <div className="sz-gas-bar"><span style={{ width: `${Math.round(pressure / gasPressureAtVolume(GAS_DEMO.minVolume) * 100)}%` }}/></div>
          </div>
          <div className="sz-gas-metric sz-gas-volume">
            <span>Volumen <strong>V</strong></span>
            <div><strong>{volume.toFixed(1)}</strong><small>L</small></div>
            <div className="sz-gas-bar"><span style={{ width: `${Math.round(volume / GAS_DEMO.maxVolume * 100)}%` }}/></div>
          </div>
          <p className="sz-gas-isothermal">En esta demostración, n y T se mantienen constantes.</p>
          <button className="sz-gas-reset" type="button" onClick={() => setVolume(GAS_DEMO.initialVolume)}>
            <RefreshCcw size={15}/> Reiniciar
          </button>
        </div>
      </div>

      <div className="sz-gas-constants" aria-label="Valores de la cantidad de sustancia, la constante de los gases y la temperatura">
        <div className="sz-gas-constant"><span><b>n</b> · Cantidad de gas</span><strong>{GAS_DEMO.moles.toFixed(2)}</strong><small>mol</small></div>
        <div className="sz-gas-constant"><span><b>R</b> · Constante de los gases</span><strong>{GAS_DEMO.gasConstant.toFixed(5)}</strong><small>L·atm/(mol·K)</small></div>
        <div className="sz-gas-constant"><span><b>T</b> · Temperatura</span><strong>{GAS_DEMO.temperatureKelvin}</strong><small>K</small></div>
      </div>

      <div className="sz-gas-calculation" aria-live="off">
        <span>COMPRUEBA LA ECUACIÓN EN TIEMPO REAL</span>
        <strong>{pressure.toFixed(2)} atm × {volume.toFixed(1)} L ≈ {gasWork.toFixed(2)} L·atm</strong>
        <small>nRT = {GAS_DEMO.moles.toFixed(2)} mol × {GAS_DEMO.gasConstant.toFixed(5)} L·atm/(mol·K) × {GAS_DEMO.temperatureKelvin} K ≈ {gasWork.toFixed(2)} L·atm</small>
      </div>

      <p className="sz-gas-feedback"><CheckCircle2 size={18}/>
        <span>{volume < GAS_DEMO.initialVolume - 0.5
          ? "Al comprimir el gas, las partículas chocan más frecuentemente contra las paredes: la presión aumenta."
          : volume > GAS_DEMO.initialVolume + 0.5
            ? "Al expandir el gas, el volumen disponible crece y la presión disminuye."
            : "Arrastra hacia abajo para comprimir o hacia arriba para expandir. La presión varía en sentido inverso al volumen."}</span>
      </p>
      <p className="sz-demo-disclaimer">Modelo didáctico de gas ideal isotérmico: n y T permanecen constantes. El pistón representa cambios de volumen; las partículas son esquemáticas y el recipiente no está a escala.</p>
    </div>
  );
}
