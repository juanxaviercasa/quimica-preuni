# Integración Clerk + Whop · Química PreUNI

> Estado: **preparada en rama, NO validada con cuentas reales**. Este proyecto vende todo el curso: no se permite acceso sin sesión Clerk y membresía Whop verificada.

## Arquitectura

- `@clerk/react` administra el registro, inicio de sesión y perfil. `@clerk/backend` verifica el JWT en el servidor.
- El frontend ya **no importa** `src/course/registry.js` desde las rutas del curso. Las páginas `/curso/quimica/*` piden módulos, lecciones y exámenes a `/api/course` con `Authorization: Bearer <session token>`.
- `/api/course` y `/api/access` verifican sesión y una membresía Whop activa **en servidor en cada petición**, vinculada a metadatos privados de Clerk y al producto/plan configurados. Respuestas `private, no-store`.
- `/api/checkout` crea un checkout de Whop con plan fijo configurado en servidor y metadatos `userId` derivados de la sesión verificada, nunca de datos manipulables del navegador.
- `/api/whop-webhook` exige la firma Whop del cuerpo en bruto, revisa el pago y la membresía en Whop y almacena el identificador de membresía en los metadatos **privados** de Clerk. Si falla cualquier validación, no concede acceso.
- Se utiliza `@whop/sdk` con `WhopEnvironment.Sandbox` para pruebas.
- `/pago/resultado` permite consultar el estado, pero **no autoriza** la entrada por parámetros de la URL.

## Requisitos de alojamiento

**No publiques el paywall en GitHub Pages**: GitHub Pages entrega solamente archivos estáticos y no ejecuta las funciones `/api`. Usa un hosting con funciones de servidor (en esta rama se incluyen funciones de **Vercel**). Asegura que el DNS de `quimica.sistemazenit.com` vaya al despliegue que aloja tanto el frontend como las funciones API; el cambio de DNS requiere coordinación y prueba.

El repositorio de GitHub actualmente es **público**, y su historial puede incluir el contenido completo. Aunque el bundle publicado ya no incluya el temario, el contenido en el repositorio y en despliegues anteriores puede seguir accesible. Para confidencialidad comercial, cambia a privado, revisa los accesos a antiguos builds y decide cómo retirar contenido de los historiales y copias disponibles. El bloqueo técnico de este frontend **no resuelve** automáticamente esas exposiciones anteriores.

## Variables necesarias en Vercel

| Variable | Contexto | Nota |
| --- | --- | --- |
| `VITE_CLERK_PUBLISHABLE_KEY` | Cliente/build | Clave pública de aplicación Clerk, inicia con `pk_` |
| `CLERK_SECRET_KEY` | Servidor | Clave privada Clerk. **Nunca** `VITE_`. |
| `WHOP_COMPANY_API_KEY` | Servidor | Clave de API de tu empresa Whop con mínimos permisos necesarios. |
| `WHOP_WEBHOOK_SECRET` | Servidor | Secreto de firma del webhook, comienza con `ws_`. |
| `WHOP_PLAN_ID` | Servidor | Plan **de pago recurrente** del curso, `plan_`. |
| `WHOP_PRODUCT_ID` | Servidor | Producto del curso, `prod_`. |
| `WHOP_SANDBOX` | Servidor | `true` para pruebas, `false` en producción. |
| `APP_URL` | Servidor | Origen de la app, como `https://quimica.sistemazenit.com`. |

No se han incluido claves reales en el repositorio. **No pegues ninguna clave secreta en un chat, comentario, commit o issue de GitHub**. Guárdalas en las variables de entorno de Vercel. En Clerk, configura tu dominio de producción. En Whop Sandbox crea el producto y plan, registra un webhook público `https://<tu-dominio>/api/whop-webhook` y suscríbete a `payment.succeeded`, `membership.activated` y `membership.deactivated` (verifica que los nombres coincidan con los ofrecidos por tu API versionada).

## Validación previa al lanzamiento (obligatoria)

1. Instala dependencias con `npm install` para regenerar el `package-lock.json` con los nuevos SDK, **sube el lockfile actualizado** y ejecuta `npm run build`, `npm test`, `npm run test:browser`.
2. Prueba `/api/course?type=index` sin token y con token inválido: ambos deben devolver 401; prueba un usuario autenticado sin membresía: 402.
3. Crea compra sandbox desde una sesión Clerk y verifica la relación de metadatos entre checkout, pago, membresía y usuario antes de habilitar acceso. Si Whop devuelve otros nombres de campos en la versión contratada, adapta y valida explícitamente la capa `api/_lib/security.js` y `api/whop-webhook.js`.
4. Comprueba que una membresía activa válida (producto **y** plan correctos) puede descargar lecciones y exámenes. Comprueba el bloqueo con otro plan, una membresía cancelada o vencida, una cuenta Clerk distinta, una firma de webhook inválida y un webhook repetido.
5. Revisa red, performance y consola en escritorio/móvil; busca `module01`, `sourceContent`, `sourceIndex` y sus textos en archivos `dist/assets` para confirmar que el temario no se incluyó en el bundle.
6. Cambia claves y configuración a producción únicamente tras pruebas, valida webhook de producción, políticas de reembolso y renovación y prueba un pago real de importe controlado.
7. Configura y prueba `APP_URL`, Vercel y el dominio antes de migrar el DNS. Asegura que la entrega HTTPS de `/api/course` no permita caché pública.

**Limitaciones actuales:** No se pudieron ejecutar pruebas ni hacer pagos sandbox desde este entorno y no hay acceso directo a tus cuentas Clerk o Whop. La activación del ciclo completo **no está verificada**. La API está diseñada para **fallar cerrada** ante configuración o membresía inválidas. No fusiones esta rama hasta completar estas pruebas.

## Documentación de referencia
- https://clerk.com/docs/reference/backend/verify-token
- https://clerk.com/docs/guides/development/deployment/production
- https://whop.com/blog/integrate-checkout-api/
- https://whop.com/blog/build-subscription-app/
