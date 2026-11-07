import { Link } from "react-router-dom";
import { CheckCircle2, ShieldCheck } from "lucide-react";

// A redirect from checkout is not proof of payment. Entitlement is verified on
// the server, independently of this page, after receiving a signed Whop event.
export default function PaymentResult() {
  return <main style={{ minHeight: "70vh", display: "grid", placeItems: "center", padding: "30px 18px", background: "#FFF9EF" }}>
    <section style={{ width: "100%", maxWidth: 600, background: "#fff", color: "#12243C", border: "1px solid #E8D9C1", borderRadius: 22, padding: "36px 28px", textAlign: "center", boxShadow: "0 12px 36px #0B1D3C10" }}>
      <ShieldCheck size={42} color="#9A6B16" aria-hidden="true"/>
      <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(26px,5vw,37px)", lineHeight: 1.18 }}>Comprueba tu membresía de Química Zenit</h1>
      <p style={{ lineHeight: 1.8, color: "#5C687B" }}>Si completaste el pago en Whop, la activación se confirma mediante una verificación segura de tu membresía. Volver a esta página no habilita el acceso por sí solo.</p>
      <p style={{ lineHeight: 1.65, color: "#5C687B" }}>No necesitas realizar otro pago si tu membresía todavía se está sincronizando.</p>
      <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: 9, borderRadius: 12, padding: "14px 22px", color: "#11243E", fontWeight: 800, background: "#F5C65E", textDecoration: "none" }}>Volver a Química Zenit <CheckCircle2 size={18}/></Link>
    </section>
  </main>;
}
