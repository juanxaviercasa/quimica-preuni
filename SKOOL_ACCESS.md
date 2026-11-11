# Academia Zenit - Skool como único cobrador

## Estado del código

- La landing de Química redirige al `https://www.skool.com/academia-zenit-3587/about` oficial de Skool. No inicia un checkout separado ni obliga a crear cuenta Clerk para pagar.
- Los únicos cargos y las condiciones contractuales se gestionan en Skool. La cuota de US$19 mencionada en la landing es la oferta comunicada por la Academia; comprobar en el panel que coincide con el precio publicado en Skool, incluida la renovación.
- Los endpoints antiguos de checkout y webhooks de Whop se han eliminado. El antiguo enlace `/pago/resultado` solo informa y no activa acceso.

## Acceso a las herramientas: integración pendiente

Clerk proporciona identidad web, pero iniciar sesión en Clerk no demuestra que se pagó en Skool. No crear usuarios públicos en Clerk: configurar **Invite-only** y desactivar el alta pública desde el dashboard de Clerk.

La API de Química valida una sesión real de Clerk y SOLO permite acceso premium a un usuario cuyo `privateMetadata.skoolMembership` haya sido establecido por un administrador/integración de confianza y tenga este formato:

```json
{
  "groupSlug": "academia-zenit-3587",
  "status": "active",
  "paidThrough": "2026-12-01T05:00:00.000Z"
}
```

Es un registro de autorización, no un comprobante de cobro. NO asignarlo automáticamente por un formulario de usuario, email no verificado, un redirect de Skool ni una captura de pantalla. En el alta: verificar realmente al alumno en Skool, vincular un identificador estable si la fuente lo facilita, invitar UNA cuenta de Clerk, y establecer la fecha exacta de vigencia comprobada. En una cancelación con período pagado pendiente, `status: "cancelled"` conserva acceso hasta `paidThrough`; en revocación inmediata `status: "revoked"`; al renovar, actualizar la vigencia tras verificar el pago. El servidor siempre deniega accesos vencidos o no comprobados.

**Importante:** el alta, la revisión de renovaciones y las bajas todavía NO están automatizadas. El trigger oficial de Skool en Zapier (Pro) permite detectar nuevos miembros de pago, pero por sí solo NO acredita cancelaciones, reembolsos, renovaciones ni el estado vigente de todos los usuarios. Implementar una reconciliación segura y la gestión administrativa de cambios antes de anunciar «activación automática». No emitir invitaciones sin verificación.

## Pendiente de infraestructura

La publicación de GitHub Pages es estática. No ejecuta `/api/course` ni `/api/access`; por tanto, el sistema de permisos premium no estará operativo en producción hasta alojar esas APIs en un backend real, por ejemplo Cloudflare Workers, y adaptar correctamente las funciones al entorno. No publicar secretos en Vite.

Las herramientas que actualmente están incluidas en el JavaScript público (`/tabla`, `/laboratorio`, `/diagnostico`) NO están protegidas por este cambio. Para convertirlas en premium, mover la lógica/datos privados detrás del backend y aplicar autorización en servidor. Ocultar rutas de React no protege su contenido.

## Pruebas operativas necesarias

1. Visita anónima: puede abrir la landing, clic en CTA abre Skool y no Clerk.
2. Pago real/sandbox habilitado por Skool: confirmar miembros y suscripción desde Skool, no por redirect.
3. Sin usuario invitado o sin metadatos de acceso: acceso premium denegado.
4. Usuario verificado con vigencia: acceso permitido sólo durante período pagado.
5. Caducidad, cancelación, baja, reembolso, fallo de integración y cambio de correo: acceso debe denegarse o reconciliarse según corresponda.
6. Validación anti-duplicados: una cuenta Zenit por miembro de Skool verificado; no usar email como prueba suficiente.

Este documento describe el control provisional y el trabajo restante, no proclama una integración Skool-Clerk completamente terminada.
