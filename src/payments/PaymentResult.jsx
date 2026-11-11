import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import { communityUrl } from "../config.js";

// Historical route: no checkout runs on the Zenit site.
export default function PaymentResult() {
  return <main style={{ minHeight: "70vh", display: "grid", placeItems: "center", padding: 30 }}>
    <section style={{ maxWidth: 620, textAlign: "center" }}>
      <ShieldCheck size={42} aria-hidden="true" />
      <h1>Los pagos se realizan únicamente en Skool</h1>
      <p>Esta página ya no procesa ni confirma pagos. Si todavía no te has inscrito,
        continúa en Academia Zenit en Skool. Si ya pagaste, no repitas el cobro:
        solicita la activación de tu acceso a las herramientas de estudio.</p>
      <p><a href={communityUrl}>Ir a Skool para inscribirme</a></p>
      <Link to="/">Volver a Química Zenit</Link>
    </section>
  </main>;
}
