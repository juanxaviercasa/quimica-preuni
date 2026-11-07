# Integración de pagos de Química Zenit (Clerk + Whop)

Esta integración toma de `feat/clerk-whop-paywall` **solo autenticación y pagos**. No importa las pantallas antiguas del curso, datos pedagógicos, rutas de lecciones ni cambios de diseño.

## Qué incluye este cambio

- La landing sigue pública y muestra la oferta de `main`. Si se configura la clave pública, `ClerkProvider` habilita inicio de sesión de Clerk antes de comprar; sin clave, la landing sigue visible.
- El botón de mensual/anual envía exclusivamente `{ plan: "monthly"|"annual" }` a `POST /api/checkout` con JWT de Clerk.
- El servidor verifica el token, el producto y el importe, periodo y condiciones del plan actual en Whop antes de crear una sesión de checkout alojada por Whop. No acepta un precio ni un plan ID del navegador.
- `/api/whop-webhook` verifica la firma sobre bytes originales de Whop, recupera y valida membresías y guarda su referencia en los metadatos privados de Clerk. Los webhooks repetidos actualizan la misma referencia.
- `GET /api/access` revisa si la sesión tiene una membresía activa consultando Whop.
- `/pago/resultado` es una página informativa: volver al sitio tras un checkout NO demuestra un pago.
- `src/pricing/zenitOffer.js` continúa siendo la fuente única de precios y corte de fecha. Se utilizan **4 planes recurrentes**: promoción mensual/anual y regular mensual/anual.

## Configuración pendiente (a realizar en tus cuentas)

En **Vercel**, configura las variables de `.env.example` como secretos del proyecto y una clave pública `VITE_CLERK_PUBLISHABLE_KEY` para el build. No subas tus claves al repositorio.

En **Clerk**, registra el dominio de producción y permite la autenticación en el origen de `APP_URL`.

En **Whop**, crea un producto `WHOP_PRODUCT_ID` y **cuatro planes de renovación** en USD, con `initial_price=0`, `trial_period_days=0` y `renewal_price` de 19, 190, 29 y 290 USD respectivamente. Para esta integración, Whop debería reportar periodo 30 días (mensual) o 365 (anual) y `plan_type=renewal`. Verifica cómo Whop interpreta estas periodicidades antes de lanzar. **No aumentes el precio del plan promocional que mantienen suscriptores existentes**; el checkout cambia de plan por fecha del servidor. Configura el webhook `https://TU-DOMINIO/api/whop-webhook` y suscríbelo a `payment.succeeded`, `membership.activated` y `membership.deactivated` (el panel puede usar guiones bajos).

**Horario de la promoción:** hasta 2026-11-30 23:59:59.999 America/Lima, con corte en `2026-12-01T05:00:00.000Z`. La selección del plan se realiza con reloj de servidor y la tarifa promocional solo se asigna antes del corte.

**Vercel:** despliega tanto el frontend Vite como `/api` en el mismo origen; `vercel.json` excluye API del fallback SPA. Si el dominio sigue apuntando a Cloudflare Pages, esos endpoints no se ejecutarán allí. Haz la migración DNS después de probar Sandbox.

## Verificación antes de abrir ventas

1. `npm ci`, `npm test`, `npm run build`.
2. Confirmar que sin token, `POST /api/checkout` y `GET /api/access` no autorizan una compra ni una membresía.
3. Probar ambas modalidades de suscripción en Sandbox con importes exactos (importe inicial y recurrencia) y destino de Whop.
4. Verificar webhook firmado, importes, ID del producto, membresía activa y vinculación a la cuenta correcta de Clerk. Un webhook no firmado no debe conceder acceso.
5. Repetir con suscriptor existente, cancelación, caducidad, token inválido y plan equivocado.
6. Simular el corte de noviembre y comprobar tanto nuevas altas a precio regular como renovaciones de suscriptores a precio protegido.
7. Completar la protección de las rutas y datos privados del curso por separado, cuando se aborde la siguiente fase. **La integración de pagos por sí sola no bloquea las lecciones públicas de `main`**.

La activación con credenciales de producción y pruebas completas de Whop/Clerk/Vercel sigue siendo una tarea de configuración de cuentas. Ni este commit ni las pruebas unitarias representan un cobro real verificado.
