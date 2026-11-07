# Química Zenit · Política de lanzamiento y renovación (2026)

## Oferta comercial

Esta política se publica en la landing de `main` mediante `src/components/LaunchPricing.jsx` y se define en un único módulo puro, `src/pricing/zenitOffer.js`.

| Modalidad | Alta promocional (hasta 30 nov 2026) | Precio regular (nuevas altas desde 1 dic 2026) | Frecuencia |
| --- | ---: | ---: | --- |
| Mensual | US$19 | US$29 | Cada mes |
| Anual | US$190 | US$290 | Cada año |

- **Cierre:** 30 de noviembre de 2026 a las 23:59:59.999 (hora de Lima, UTC-05).
- **Cambio a precio regular:** 1 de diciembre de 2026 a las 00:00 (America/Lima), equivalente a `2026-12-01T05:00:00.000Z`. El instante exacto se interpreta como **regular**; se evalúa en servidor, no con la hora del navegador.
- **Beneficio de fundador:** las altas dentro del plazo mantienen **el precio de renovación del mismo plan promocional** mientras la membresía permanezca activa y los pagos se mantengan al día. Si se cancela o vence y se vuelve a contratar, se usa el precio vigente para nuevas altas.
- **Ahorro promocional respecto al plan regular:** US$10 por mes o US$100 por año. El anual equivale a US$15.83 al mes si se paga el año completo, y representa US$38 menos que 12 meses del plan mensual promocional.
- **Después de la fecha:** las tarjetas ya **no muestran el descuento ni un precio tachado**. Nuevos compradores ven US$29 / US$290. Los clientes promocionales que continúen activos siguen vinculados a su plan original.

**Importante:** el proyecto de landing en `main` NO está procesando compras todavía. Su UI muestra las condiciones previstas y botones activos «Elegir plan mensual/anual» que envían la opción a `POST /api/checkout`. El frontend valida que el enlace de respuesta sea HTTPS y pertenezca a Whop; si no hay backend o el pago falla, se muestra un error claro sin cobrar. **Este endpoint todavía no está publicado en `main`**, por lo que los botones no pueden completar pagos hasta que se integre el backend y la autenticación. Esta implementación no activa cobros ni asigna automáticamente los planes de Whop. Hay que probar la integración antes de habilitar la inscripción; si no se lanza hasta después del plazo anunciado, se debe actualizar la promoción y sus condiciones en lugar de simular una oferta vencida.

## Estructura recomendada de Whop para proteger el precio de renovación

Crear **cuatro planes recurrentes distintos** dentro del mismo producto de Química Zenit, con renovación del mismo importe y la periodicidad correcta:

1. `WHOP_MONTHLY_LAUNCH_PLAN_ID` — US$19 por mes, renovando a **US$19**.
2. `WHOP_ANNUAL_LAUNCH_PLAN_ID` — US$190 por año, renovando a **US$190**.
3. `WHOP_MONTHLY_REGULAR_PLAN_ID` — US$29 por mes, renovando a **US$29**.
4. `WHOP_ANNUAL_REGULAR_PLAN_ID` — US$290 por año, renovando a **US$290**.

**No modificar el precio de renovación del plan promocional existente** después del 30/11. El sistema de checkout debe dejar de ofrecer ese plan a nuevas altas y pasar a los IDs regulares. Confirmar en Sandbox que la opción elegida para ocultar las altas del plan promocional no termina ni afecta las renovaciones existentes.

En Whop, `initial_price` puede cobrarse **además** de `renewal_price`, por lo que se debe usar la configuración precisa que facture exactamente el importe anunciado en la primera transacción y en sus renovaciones, sin cargos duplicados. Verificar con la documentación de la versión contratada y un pago Sandbox.

## Regla obligatoria para el backend

Al integrar la rama de pagos con el despliegue que realmente ejecutará `/api/checkout`:

- Obtener el ID de Clerk **desde la sesión verificada**.
- Aceptar del frontend únicamente `monthly` o `annual`; **ignorar precios, descuentos, IDs de planes y fechas** enviados por el cliente.
- Ejecutar en el servidor `resolveWhopPlanId(key, process.env, Date.now())`, importando `src/pricing/zenitOffer.js`; elegir el plan de Whop por la fecha **del servidor**.
- Validar en Whop que el plan es del producto correcto, es de renovación, usa USD, tiene la frecuencia correcta y tanto el precio inicial efectivo como la renovación corresponden al importe prometido. Si no coincide, **rechazar el checkout**.
- Asociar el intento de checkout con el usuario verificado de Clerk.
- Después del pago, verificar la firma del webhook, la membresía vigente y su plan con Whop antes de entregar acceso a los módulos.
- En el bloqueo por expiración, no permitir crear un checkout nuevo en el plan de lanzamiento por URL antigua, cliente manipulado o huso horario falso.
- Si el usuario ya tiene membresía activa, **no crear una segunda**. Ofrecer acceso a su curso y gestión del plan existente.
- Si un pago iniciado antes del cierre se completa después del cierre, decidir y documentar de forma explícita la regla aplicable: la propuesta más segura es usar la hora de creación de sesión verificada y poner una caducidad corta al checkout. **No hay implementación de esa decisión en `main`**.
- Registrar logs mínimos de la decisión de precio en servidor sin exponer credenciales, tokens ni datos de pago.

La infraestructura de Whop/Clerk está todavía separada en `feat/clerk-whop-paywall`, que **no se ha modificado**. Dicha rama utiliza otros nombres de entorno y deberá ajustarse cuidadosamente cuando se autorice integrar el sistema de cobros. No fusionar el cambio de precio de forma parcial sin validar la protección de suscripciones antiguas.

## Pruebas exigidas antes del lanzamiento

- Sandbox: altas mensual/anual antes del 30/11 con tarifas 19/190, pago y renovación al mismo precio.
- Simular fecha de servidor 01/12/2026 00:00 Perú: nuevas altas mensual/anual con 29/290.
- Clientes promocionales activos: conservan 19/190 al renovar después del 01/12.
- Cancelación o vencimiento: un reingreso crea una suscripción nueva a 29/290.
- Clic en URL antigua o manipulaciones de body/fecha/huso horario: nunca concede alta promocional fuera de plazo.
- Verificar recibos, impuestos y posibles tasas de checkout antes de activar.
- Comprobar la accesibilidad móvil, la legibilidad del precio tachado y de los términos, y que el banner desaparece tras el cierre.

Referencias para la configuración de planes:
- https://docs.whop.com/api-reference/plans/create-plan
- https://docs.whop.com/api-reference/plans/update-plan
- https://whop.com/blog/add-checkout-to-nextjs-app/


## Oferta de membresía propuesta (última actualización)

La página presenta una oferta de formación continua, no solo acceso a videos:

- Clases grupales en vivo cada semana para reforzar temas y resolver preguntas.
- 18 módulos y ruta de contenidos de química preuniversitaria.
- Modelos 3D, simuladores interactivos y materiales complementarios.
- Evaluaciones y prácticas con calificación automática, resultados y solucionarios que explican errores (comprobado en `src/course/QuestionSet.jsx`).
- Comunidad privada de aprendizaje para mantener el ritmo y compartir dudas.
- Acompañamiento con docentes y profesionales de química formados en el método Zenit.

**Validar operativamente antes de cobrar:** confirmar quiénes serán los docentes/ingenieros químicos, el horario efectivo de al menos una sesión en vivo semanal, la plataforma elegida para la comunidad (Skool o WhatsApp), soporte, la política de sesiones perdidas y la disponibilidad de las funciones de membresía. No dar por realizado un servicio aún pendiente de organizar.

La landing utiliza los textos comerciales «Elegir plan mensual» y «Elegir plan anual», conectados a `POST /api/checkout` y con aviso seguro si la infraestructura de pagos no responde. Los botones no confirman un cobro ni garantizan el acceso mientras Clerk/Whop no estén conectados.

**Ruta mínima para habilitar pagos en horas:**
1. Configurar los cuatro planes recurrentes en Whop con sus montos de renovación, y confirmar sus IDs en variables privadas de servidor.
2. Configurar la aplicación de Clerk y permitir que la sesión llegue al checkout por token validado en el backend.
3. Implementar o desplegar la ruta `POST /api/checkout` para leer exclusivamente `plan: "monthly"|"annual"` del cuerpo, validar sesión, elegir tarifa por fecha del servidor usando `resolveWhopPlanId`, y devolver `checkoutUrl` apuntando a whop.com.
4. Verificar webhooks Whop, protección de lecciones, altas, cancelaciones y conservación del precio inicial.
5. Probar mensual y anual Sandbox, incluida expiración de promoción e ingreso con cuenta distinta, antes de enviar tráfico.
