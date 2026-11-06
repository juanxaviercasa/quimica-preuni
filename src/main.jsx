import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/react";
import App from "./App.jsx";
import "./styles.css";

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {publishableKey ? (
      <ClerkProvider publishableKey={publishableKey}>
        <BrowserRouter><App /></BrowserRouter>
      </ClerkProvider>
    ) : (
      <div role="alert" style={{ maxWidth: 640, margin: "8rem auto", padding: 24 }}>
        <h1>Configuración de acceso pendiente</h1>
        <p>Falta configurar la clave pública de Clerk para abrir esta plataforma. No se entregará contenido protegido hasta completar la configuración.</p>
      </div>
    )}
  </StrictMode>
);
