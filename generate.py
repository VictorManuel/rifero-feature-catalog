"""Snapshot local de refs ya descargadas. No fetch, red ni escritura a repos fuente."""
import subprocess,json,pathlib,datetime
from implementation_timeline import track_implementations
from operational_milestones import operational_milestones
from implementation_evidence import select_evidence, evidence_line, all_markers_present
ROOT=pathlib.Path(__file__).resolve().parent
WORKSPACE=ROOT.parent
repos={'web':'VictorManuel/rifero','backend':'VictorManuel/rifero-backend','email-worker':'VictorManuel/rifero-email-worker'}
def git(repo,*args):
    return subprocess.check_output(['git','-C',str(WORKSPACE/repo),*args],text=True,stderr=subprocess.DEVNULL)
refs={r:{b:git(r,'rev-parse',f'origin/{b}').strip() for b in ['staging','main']} for r in repos}
# Explicit A2.7 relocations, not a generic search for similarly named files.
# Original web evidence remains authoritative on branches where it still exists.
RELOCATED_EVIDENCE = {
    'Ingreso por correo o usuario': ('backend', 'src/infrastructure/prisma/auth-identity-repository.ts', 'identifier.includes("@") ? { email: identifier } : { username: identifier }'),
    'Portada y fotos de premios': ('backend', 'src/http/runtime-asset-responses.ts', 'const image = await prepareRaffleImage(candidate);'),
    'Restricción de sorteos rechazados': ('backend', 'src/core/raffles/moderation-policy.ts', 'raffle.moderationStatus === "REJECTED" && raffle.createdById === actor.id'),
    'Auditoría persistente': ('backend', 'src/infrastructure/prisma/critical-raffle-operations-repository.ts', 'await tx.auditLog.create({ data: {'),
    'Tokens de un solo uso': ('backend', 'src/infrastructure/prisma/identity-mutation-repository.ts', 'where: { id: resetToken.id, tokenHash, usedAt: null, expiresAt: { gt: now } }'),
    'Validación fuerte de imágenes': ('backend', 'src/infrastructure/storage/image-processing.ts', 'export async function validateRaffleImageUpload(file: File)'),
    'Cola persistente EmailJob': ('backend', 'src/infrastructure/email/jobs.ts', 'await db.emailJob.upsert({'),
    'Proveedor Resend': ('email-worker', 'src/email/send-email.ts', 'const { data, error } = await resend.emails.send('),
    'Plantillas seguras': ('backend', 'src/infrastructure/email/templates.ts', 'const safeHref = escapeHtml(validateTrustedAppUrl(href));'),
}
rows=[]
def add(category,title,note,path,repo='web',pattern=None,timeline_key=None):
    statuses={}; evidence={}
    for b in refs[repo]:
        def read(source_repo, source_path):
            try: return git(source_repo,'show',f'{refs[source_repo][b]}:{source_path}')
            except subprocess.CalledProcessError: return ''
        source_repo,source_path,marker,source,present=select_evidence(
            read,(repo,path,pattern),RELOCATED_EVIDENCE.get(title) if repo=='web' else None)
        sha=refs[source_repo][b]
        statuses[b]=present
        line=evidence_line(source, marker)
        evidence[b]={'repo':source_repo,'path':source_path,'line':line,'url':f'https://github.com/{repos[source_repo]}/blob/{sha}/{source_path}#L{line}','match':marker,'kind':'implementation' if present else 'absent'}
    row=dict(id=f'F{len(rows)+1:03}',category=category,title=title,note=note,**statuses,evidence=evidence)
    if timeline_key: row['timelineKey']=timeline_key
    rows.append(row)
def future(category,title,note,path='ROADMAP_EXECUTION_PLAN.md',pattern=None,timeline_key=None):
    evidence={}
    for b,sha in refs['web'].items():
        actual=path
        try: source=git('web','show',f'{sha}:{actual}')
        except subprocess.CalledProcessError:
            actual='ROADMAP_EXECUTION_PLAN.md';source=git('web','show',f'{sha}:{actual}')
        matched = pattern is None or pattern in source
        line=evidence_line(source, pattern)
        evidence[b]={'repo':'web','path':actual,'line':line,'url':f'https://github.com/{repos["web"]}/blob/{sha}/{actual}#L{line}','match':pattern if matched else None,'kind':'plan' if matched and actual==path else 'general-plan'}
    row=dict(id=f'F{len(rows)+1:03}',category=category,title=title,note=note,staging=False,main=False,evidence=evidence)
    if timeline_key: row['timelineKey']=timeline_key
    rows.append(row)
def planned_or_implemented(category,title,note,path,pattern,requirements,timeline_key):
    # Preserve the existing row position/id/timelineKey and plan evidence until
    # every curated source requirement exists on the SAME named remote branch.
    future(category,title,note,path,pattern=pattern,timeline_key=timeline_key)
    row=rows[-1]
    for branch in refs['web']:
        def read(source_repo,source_path):
            try: return git(source_repo,'show',f'{refs[source_repo][branch]}:{source_path}')
            except subprocess.CalledProcessError: return ''
        if all_markers_present(read,requirements):
            source_repo,source_path,marker=requirements[0]
            row[branch]=True
            source=read(source_repo,source_path)
            row['evidence'][branch]={'repo':source_repo,'path':source_path,'line':evidence_line(source,marker),'url':f'https://github.com/{repos[source_repo]}/blob/{refs[source_repo][branch]}/{source_path}#L{evidence_line(source,marker)}','match':marker,'kind':'implementation'}

# Cada entrada representa una capacidad concreta, no una promesa del roadmap histórico.
C='Cuentas y acceso'
for title,note,path in [
('Registro público','Creación de cuenta con validación y aceptación legal.','src/components/forms/register-form.tsx'),
('Ingreso por correo o usuario','Autenticación con contraseña y sesión privada.','src/lib/auth-identity.ts'),
('Perfil y nombre de usuario','Edición del perfil; usuario global e inmutable una vez definido.','src/app/api/account/profile/route.ts'),
('Agregar y verificar correo','El cambio de correo se confirma con un enlace.','src/app/api/account/email/route.ts'),
('Cambio de contraseña','Solicita contraseña actual y permite invalidar otras sesiones.','src/app/api/account/password/route.ts'),
('Decisión sobre contraseña inicial','En el primer ingreso se puede conservar o reemplazar la contraseña inicial.','src/components/initial-password-decision.tsx'),
('Verificación de correo','Implementada; EMAIL_VERIFICATION_ENABLED=true verificado solo en staging en el corte A3/A4. Worker console sintético, no entrega externa acreditada ni activación productiva.','src/app/api/email-verification/verify/route.ts'),
('Reenvío de verificación','Enlace nuevo con respuesta genérica y límites de solicitudes.','src/app/api/email-verification/resend/route.ts'),
('Recuperación de contraseña','PASSWORD_RECOVERY_ENABLED=true y flujo HTTP+SQL verificados solo en staging en el corte A3/A4; depende de correo/worker. Sin entrega externa acreditada ni activación productiva.','src/app/api/password/forgot/route.ts'),
('Restablecer por enlace seguro','Token de un solo uso y expiración; condicionado por recuperación habilitada.','src/app/api/password/reset/route.ts'),
('Mis números comprados','Agrupa compras por el correo de la cuenta y excluye ventas revertidas.','src/app/app/my-numbers/page.tsx'),
('Roles y permisos por sorteo','ADMIN y SELLER con validación de acceso del lado servidor.','src/lib/permissions.ts'),
('Restablecimiento por SUPERADMIN','Soporte asigna contraseña temporal e invalida sesiones.','src/app/api/admin/users/reset-password/route.ts'),
('Términos y privacidad','Páginas legales públicas; registro exige aceptación y edad mínima.','src/lib/legal.ts')]:add(C,title,note,path)
C='Sorteos y publicación'
for feature in [
('Crear un sorteo','Generación de números y membresía ADMIN del creador en una transacción.','src/app/api/raffles/route.ts'),
('Editar configuración','Título, descripción, fecha, precio, estado y slug.','src/components/forms/raffle-settings-form.tsx'),
('Premios múltiples','Configuración de premios e imágenes por posición.','src/lib/prizes.ts'),
('Portada y fotos de premios','Carga y reemplazo de imágenes del sorteo.','src/lib/uploads.ts','prize-cover-gallery'),
('Punto focal de portada','Ajusta el encuadre de las miniaturas sin recortar la imagen original.','src/components/image-focal-point-picker.tsx'),
('Galería accesible','Portada y premios con flechas, miniaturas, teclado y Escape.','src/components/raffle-image-gallery.tsx'),
('Listado público en home','Sorteos ACTIVE vigentes o sin fecha; excluye borradores y moderados.','src/app/page.tsx'),
('Landing pública por sorteo','Consulta de premios, números, fecha y resultados por enlace.','src/app/r/[slug]/page.tsx','public-raffle-landing'),
('Vista previa de borradores','Landing directa disponible si está aprobada; no aparece en home.','src/lib/raffle-moderation-policy.ts'),
('Metadatos al compartir','Título, descripción e imagen propios en vistas previas sociales.','src/app/r/[slug]/page.tsx','social-share-metadata'),
('Disponibilidad en tiempo real','SSE refresca la grilla después de vender o revertir. Broker en memoria: una instancia.','src/lib/raffle-events.ts'),
('Compradores públicos por número','Sólo primer nombre; sin apellido, correo, teléfono ni identificadores internos.','src/lib/public-raffle-page.ts','public-number-buyers'),
('Panel privado y métricas','Números vendidos/disponibles y estadísticas según rol.','src/app/app/raffles/[raffleId]/page.tsx'),
('Navegación contextual móvil','Accesos a resumen, ventas, equipo y sorteo según permisos.','src/components/raffle-context-navigation.tsx'),
('Modificar cantidad de números','Amplía o reduce sólo el tramo libre; protege ventas, reservas y asignaciones.','src/app/api/raffles/[raffleId]/number-count/route.ts'),
('Cancelar sorteo','Sólo ADMIN; preserva historial y bloquea ventas posteriores.','src/app/api/raffles/[raffleId]/cancel/route.ts'),
('Historial de sorteos terminados','Distingue sorteos en curso de sorteados y cancelados.','src/app/app/page.tsx')]:
    title,note,path,*keys=feature
    add(C,title,note,path,timeline_key=keys[0] if keys else None)
C='Equipo y vendedores'
for title,note,path in [
('Alta de vendedores','Crea cuenta o reutiliza existente; correo opcional y usuario obligatorio.','src/components/forms/seller-form.tsx'),
('Importación masiva CSV','Valida todas las filas antes de crear; importación atómica.','src/app/api/raffles/[raffleId]/sellers/import/route.ts'),
('Modo de venta libre o restringido','Libres puede vender cualquier disponible; restringido sólo asignados propios.','src/components/seller-selling-mode-manager.tsx'),
('Asignación por cantidad o números','Prioriza bloques consecutivos o permite elegir números específicos.','src/lib/number-allocation.ts'),
('Reasignar números disponibles','Mueve asignaciones sin alterar ventas ni números vendidos.','src/app/api/raffles/[raffleId]/number-assignments/route.ts'),
('Desasignación de números','Libera sólo disponibles y muestra vendidos como referencia.','src/components/seller-number-unassignment-manager.tsx'),
('Métricas del equipo','Ventas vigentes, participación, última venta y avance de cupos.','src/lib/seller-team-stats.ts'),
('Detalle de ventas por vendedor','Modal privado consultable por ADMIN desde Equipo.','src/components/seller-sales-modal.tsx'),
('Ventas fuera de asignación','Señala ventas vigentes sobre números no asignados al vendedor actual.','src/lib/out-of-assignment-sales.ts'),
('Compartir mis números','Enlace propio con grilla y resultados filtrados a la asignación vigente.','src/components/share-seller-numbers-button.tsx'),
('Aceptar invitaciones por correo','Código existente; SELLER_INVITATIONS_ENABLED=false por defecto. No se afirma flujo activo.','src/app/api/invitations/accept/route.ts'),
('Reenviar o revocar invitaciones','SELLER_INVITATIONS_ENABLED=true y resend/revoke exact-token verificados solo en staging en el corte A3/A4. Sin entrega externa ni activación productiva acreditadas.','src/components/invitation-actions.tsx')]:add(C,title,note,path)
C='Ventas y comprobantes'
for title,note,path in [
('Venta simple y múltiple','Una operación puede vender uno o varios números al mismo comprador.','src/components/forms/sale-form.tsx'),
('Selección desde grilla','Agregar y quitar números; total y selección visibles antes de confirmar.','src/components/sale-registration.tsx'),
('Modal de venta por pasos','Registro desde dashboard o panel; ruta de venta alternativa conservada.','src/components/sale-modal.tsx'),
('Reservas temporales','Protección temporal de números mientras se cargan datos; reserva de 5 minutos documentada.','src/app/api/raffles/[raffleId]/reservations/route.ts'),
('Prevención de doble venta','Validación y actualización transaccional de disponibilidad.','src/app/api/raffles/[raffleId]/sales/route.ts'),
('Datos del comprador','Datos de contacto privados y comprador compartido en venta múltiple.','src/lib/validators.ts'),
('Comprobante al vender','Adjunto opcional de imagen o PDF, hasta 5 MB; no es un pago online.','src/components/sale-receipt-field.tsx'),
('Adjuntar comprobante después','ADMIN o vendedor de su venta vigente, con validación de permisos.','src/app/api/raffles/[raffleId]/sales/[saleId]/receipt/route.ts'),
('Consulta privada de comprobantes','Archivo protegido; no se publica con los datos de la landing.','src/app/api/raffles/[raffleId]/receipts/[receiptId]/route.ts'),
('Historial de ventas','Consulta por rol y filtro; conserva ventas revertidas.','src/app/app/raffles/[raffleId]/sales/page.tsx'),
('Ordenar ventas','Ordenamiento del historial de ventas.','src/lib/sale-sorting.ts'),
('Exportar ventas','Exportación textual con datos privados sólo para usuarios autorizados.','src/app/api/raffles/[raffleId]/sales/export/route.ts'),
('Revertir una venta','Preserva historial y libera el número con control de acceso.','src/app/api/raffles/[raffleId]/sales/[saleId]/cancel/route.ts')]:add(C,title,note,path)
# Preserve F057's historical plan-derived key; require producer AND consumer on
# the same named branch. This detects code only, never SQL/flags/deployment.
planned_or_implemented(C,'Compra agrupada con Purchase',
    'Agrupación atómica de 1–500 números con importe original, reversión parcial e historial propietario, verificada en e2e local. El check solo acredita fuente integrada en la rama comparada, NO disponibilidad runtime: flags OFF, sin SQL activo ni despliegue de Purchase, pagos nuevos, emails o backfill.',
    'ROADMAP_EXECUTION_PLAN.md','Purchase',
    [('backend','src/infrastructure/prisma/purchase-repository.ts','export async function createPurchase'),
     ('backend','src/infrastructure/prisma/critical-raffle-operations-repository.ts','await maintainCanceledPurchase(tx, raffleId, saleId);'),
     ('web','src/components/purchase-groups.tsx','export function PurchaseGroups'),
     ('web','src/app/app/raffles/[raffleId]/sales/page.tsx','<PurchaseGroups sales={sales}')],
    'source-4b78fef8a32e3a682e98')
C='Sorteo y resultados'
for feature in [
('Sorteo de prueba y oficial','Distingue simulación de ejecución oficial y su estado.','src/components/forms/raffle-draw-form.tsx'),
('Aleatoriedad segura y auditable','HMAC-SHA256, seed y manifiesto de candidatos para reproducibilidad.','src/lib/draw-random.ts'),
('Historial de ejecuciones','Conserva sorteos y resultados por premio.','src/app/api/raffles/[raffleId]/draws/route.ts'),
('Exportar resultados','Archivo de resultados preservando las posiciones lógicas de premios.','src/app/api/raffles/[raffleId]/draws/export/route.ts'),
('Publicación de ganadores','Publica premio, posición y número oficial sin identidad del comprador.','src/lib/public-raffle-page.ts','winner-publication')]:
    title,note,path,*keys=feature
    add(C,title,note,path,timeline_key=keys[0] if keys else None)
C='Administración y seguridad'
for feature in [
('Gestión global de usuarios','Listado y búsqueda sólo para SUPERADMIN.','src/app/app/admin/users/page.tsx'),
('Moderación global de sorteos','Aprobar, ocultar, rechazar o solicitar cambios con motivo obligatorio.','src/components/raffle-moderation-form.tsx'),
('Restricción de sorteos rechazados','Sólo el propietario conserva acceso privado; inspección SUPERADMIN.','src/lib/raffle-inspection.ts'),
('Registro de actividad','Cronología privada del sorteo con permisos por rol.','src/lib/raffle-activity.ts'),
('Auditoría persistente','AuditLog sanitizado; mutaciones sensibles auditadas en transacción.','src/lib/audit.ts'),
('Rate limiting persistente','Límites PostgreSQL para autenticación, uploads y operaciones sensibles.','src/lib/rate-limit.ts'),
('Tokens de un solo uso','Hashes, expiración y consumo seguro para flujos de cuenta.','src/lib/tokens.ts'),
('Validación fuerte de imágenes','Tipo real, peso, dimensiones y normalización con Sharp.','src/lib/uploads.ts','image-upload-validation'),
('Validación de comprobantes','Contenido real, formatos y tamaño con descarga privada.','src/lib/sale-receipts.ts'),
('Modo mantenimiento sin DB','Servidor mínimo 503 antes de Prisma; health check operativo.','scripts/start-deploy.mjs'),
('Mantenimiento de auditoría','Retención y limpieza con dry-run; existencia de código no implica ejecución programada.','src/lib/maintenance.ts'),
('Logging estructurado','Registro de errores operativos sin secretos ni PII innecesaria.','src/lib/logger.ts')]:
    title,note,path,*keys=feature
    add(C,title,note,path,timeline_key=keys[0] if keys else None)
future(C,'Explorador global de auditoría','AuditLog existe; falta una consola global completa con filtros y búsqueda.',pattern='Auditoria Completa')
for title,note,pattern,timeline_key in [
('Verificación de exposición RSC','SEC.EDGE.1: revisión de versión realmente desplegada y superficie expuesta.','SEC.EDGE.1','edge-rsc-exposure-check'),
('Aislamiento del origen y administración','SEC.EDGE.2: cierre de acceso directo al origen y panel del VPS.','SEC.EDGE.2','edge-origin-isolation'),
('TLS Full (strict) validado','SEC.EDGE.3: configuración y pruebas previas al corte.','SEC.EDGE.3','edge-tls-full-strict'),
('Antiabuso en Cloudflare','SEC.EDGE.4: reglas que no rompan auth, SSE ni pagos.','SEC.EDGE.4','edge-cloudflare-abuse'),
('Alertas y runbook de incidentes','SEC.EDGE.5: observación, evidencias y recuperación.','SEC.EDGE.5','edge-incident-runbook')]:future(C,title,note,'docs/CLOUDFLARE_SECURITY_REVIEW.md',pattern,timeline_key)
C='Emails transaccionales'
for title,note,path in [
('Cola persistente EmailJob','Los flujos de cuenta encolan mensajes para no depender del envío inmediato.','src/lib/email-jobs.ts'),
('Proveedor Resend','Código de entrega real y proveedor console de desarrollo. La configuración activa no se inspeccionó.','src/lib/email/resend-provider.ts'),
('Plantillas seguras','Templates de cuenta y tokens; escape de contenido y validación de URLs.','src/lib/email/templates.ts')]:add(C,title,note,path)
add(C,'Worker independiente','Servicio separado, con build y ciclo de release propios.','package.json','email-worker')
# Funciones operativas del worker se respaldan con implementación real.
worker_tree=git('email-worker','ls-tree','-r','--name-only',refs['email-worker']['main']).splitlines()
worker_source=next(p for p in worker_tree if p.endswith('.ts') and ('worker' in p or 'queue' in p))
add(C,'Reintentos, locks y backoff','Procesamiento de cola independiente; consultar configuración del worker para su política concreta.',worker_source,'email-worker')
for title,note,timeline_key in [
('Email de confirmación de compra','Pendiente; depende de agrupación Purchase y definición de entrega.','purchase-confirmation-email'),
('Email de comprobante o resumen','Adjuntar un archivo a una venta no envía un resumen automáticamente.','purchase-receipt-email'),
('Email de ganadores','Pendiente; no hay envío automático agregado por A2.5.','winners-email'),
('Emails de estado de pago','Pendiente de pagos, conciliación y contratos de eventos.','payment-status-emails'),
('Consola operativa de emails','Vista global de cola, fallos y reintentos aún pendiente.','email-operations-console')]:future(C,title,note,pattern='Emails',timeline_key=timeline_key)
C='Arquitectura e infraestructura'
add(C,'API backend independiente','Next.js API-only con dominio separado; su presencia no implica corte de tráfico productivo.','package.json','backend')
add(C,'Contratos HTTP v1','Contratos versionados para lecturas y mutaciones entre servicios.','src/contracts/http/v1/index.ts')
add(C,'Adaptadores legacy / shadow / backend','Selección por capacidad durante la transición; no se infiere activación a partir del código.','src/lib/backend-api.ts')
add(C,'Bridge de sesión firmado','Firma BFF → backend; staging backend-only, sin retorno a JWT o DB desde web.','src/lib/session-bridge.ts')
add(C,'Proxy runtime de archivos y SSE','A2.6: backend puede poseer archivos, comprobantes y stream; web hace proxy.','src/lib/backend-runtime.ts')
add(C,'Storage privado R2 en backend','Implementación A2.6 y evidencia de ensayo staging; no implica R2 productivo.','src/infrastructure/storage/r2-object-store.ts','backend')
add(C,'Política CI de migrador único','A2.7: backend como único migrador en staging; presencia en la rama no implica despliegue productivo.','scripts/migration-policy.mjs','backend',pattern='Backend must remain the migration owner')
add(C,'Lista pública de home vía backend','A2.7: adaptador de home; integración de rama no implica deploy ni flag activo.','src/contracts/http/v1/public-upcoming-raffles.ts')
add(C,'Lista privada de sorteos vía backend','A2.7: contrato y adaptador de dashboard; no equivale a retirar Prisma del resto de web.','src/lib/private-reads.ts',pattern='fetchUserRaffleMembershipsReadFromBackend')
add(C,'Frontend independiente sin Prisma','A3.6: Next.js+BFF same-origin, clientes HTTP tipados y web sin Prisma/DB/proveedor. Aceptación local y corte HTTP+SQL staging verificados; depende del backend, no es web offline. Imágenes remotas excluidas; sin producción ni retiro global A4.','scripts/verify-frontend-artifact.mjs',pattern='export function verifyFrontendArtifact')
add(C,'Backend como único acceso a datos','A2.7: boundary BFF sin acceso DB ni migrador web; cierre operacional verificado solo staging. No implica producción ni A3.','scripts/verify-web-boundary.mjs',pattern='Web boundary PASS: no database/client/migrator authority',timeline_key='backend-data-ownership')
for title,note,pattern,timeline_key in [
('Corte productivo al VPS','A4: pendiente de gates A2/A3, migración de datos y autorización.','A4',None),
('Realtime entre múltiples réplicas','Redis/PubSub o equivalente pendiente; SSE actual usa memoria.','Redis',None),
('Observabilidad centralizada','Integración Sentry/pino y alertas unificadas aún pendiente.','Sentry',None)]:future(C,title,note,pattern=pattern,timeline_key=timeline_key)
C='Analytics y publicidad'
for title,note,pattern,timeline_key in [
('Analytics de navegación','GA4 elegido y planificado, aún sin integrar ni activar. Capa propia de eventos/proveedor; PostHog solo futuro cuando haya ganancias, no dependencia inicial.','Analytics','navigation-analytics'),
('Embudo y conversión','Embudo de visita, selección y conversión planificado sin PII. Backend/DB conservan la verdad de ventas y pagos; GA4 no sustituye auditoría ni conciliación.','Analytics','conversion-funnel'),
('Integración AdSense','AdSense con Auto ads elegido, aún sin implementar ni activar. Requiere aprobación/elegibilidad del sitio y contenido de rifas, privacidad y consentimiento; sin publisher configurado.','AdSense',None),
('Control de anuncios por ruta','Flags, exclusión de áreas privadas y apagado rápido pendientes.','Ads',None),
('Consentimiento publicitario','Política y consentimiento pendientes antes de publicidad.','consentimiento',None)]:future(C,title,note,pattern=pattern,timeline_key=timeline_key)
C='Pagos y lotería · roadmap'
for title,note,timeline_key in [
('Compra de talonario especial','Especificado: ARS 10.000, una rifa monetizada y hasta 1.000 números. No implementado.','lottery-booklet-purchase'),
('Vincular cuenta Mercado Pago','OAuth del organizador y tokens sólo del lado servidor. No implementado.','mercadopago-account-link'),
('Checkout de uno o varios números','Cobro al organizador; sin comisión Rifero por número. Pendiente y sujeto a gates.','lottery-checkout'),
('Conciliación y webhooks idempotentes','Validar destinatario, importe, moneda y notificaciones; retorno del navegador no confirma pago.','payment-reconciliation-webhooks'),
('Reembolsos y contracargos','Reglas y manejo de devoluciones aún por definir e implementar.','payment-refunds-chargebacks'),
('Elección de Quiniela de la Ciudad','Alternativa futura al sorteo propio, también para rifas sin pago.','quiniela-source-selection'),
('Calendario oficial de sorteos','Fuente aprobada, zona horaria y suspensiones; no asumir calendario fijo.','official-lottery-calendar'),
('Extracto completo de 20 posiciones','Ingesta validada conservando ceros iniciales y evidencia oficial.','lottery-results-extract'),
('Adjudicación por lotería','Premios 1/2/3 con posiciones 1/2/3; número no vendido o fuera de rango deja vacante.','lottery-prize-awarding'),
('Tipo de sorteo inmutable tras venta','Bloqueo UI/API posterior a la primera venta; reglas exactas aún pendientes.','immutable-draw-type')]:future(C,title,note,'docs/MERCADOPAGO_LOTTERY_SPEC.md',timeline_key=timeline_key)
# Append new capabilities: preserve the existing stable F001..F119 IDs.
add('Arquitectura e infraestructura','Frontera de navegador verificada',
    'A3.0: gate estático de imports runtime cliente y entorno privado, integrado en test/build. Preparación de A3; no frontend independiente completo ni despliegue.',
    'scripts/verify-client-boundary.mjs',pattern='Client boundary PASS:',timeline_key='browser-runtime-boundary')
# A3.1 additions remain distinct from the pending independent-frontend milestone.
add('Arquitectura e infraestructura','Transporte JSON browser-safe',
    'A3.1: same-origin, DTOs validados, abortos y errores controlados; sin firma servidor, redirects ni retries mutantes. No implica despliegue o cierre A3.',
    'src/lib/browser/http.ts',pattern='export function createBrowserHttp',timeline_key='browser-json-transport')
add('Arquitectura e infraestructura','Identidad con cliente tipado navegador',
    'A3.1: registro, recuperación/reset, verificación/reenvío e invitaciones migrados; contrato público BFF y confirmaciones preservados. E2E local con datos sintéticos, no entrega de correo.',
    'src/components/forms/register-form.tsx',pattern='createIdentityClient().register(values)',timeline_key='browser-identity-client')
add('Arquitectura e infraestructura','Cuenta con cliente tipado navegador',
    'A3.1: perfil, email, cambio y elección de contraseña inicial migrados; BFF conserva sesión/IP y backend autorización/SQL. Sin despliegue.',
    'src/components/forms/account-profile-form.tsx',pattern='createAccountClient().updateProfile(values)',timeline_key='browser-account-client')
add('Arquitectura e infraestructura','Disponibilidad con DTO validado en navegador',
    'A3.1: refresco SSE consume disponibilidad validada; aborta al desmontar, conserva último DTO válido ante fallo y mantiene cierre/reload 403/404. No cambia ownership realtime.',
    'src/components/availability-board.tsx',pattern='availability.get(raffleId, controller.signal)',timeline_key='browser-availability-client')
# Promote the existing UX-P1 identity only from complete versioned code; never
# infer active SQL/flags or deployment. UX-P2 remains roadmap-only.
planned_or_implemented('Landing y personalización','Personalización de colores del sorteo',
    'UX-P1: cuatro paletas y fondos sólido/degradado, vista previa y restablecer; propietario DRAFT/ACTIVE. El código requiere SQL y capability de apariencia; implementado no acredita activación ni despliegue. Sin colores libres, imágenes remotas ni white-label.',
    'ROADMAP.md','### UX-P1: Personalización visual de la landing del sorteo',
    [('web','src/components/raffle-appearance-editor.tsx','export function RaffleAppearanceEditor'),
     ('backend','src/infrastructure/prisma/raffle-appearance-repository.ts','export async function saveRaffleAppearance'),
     ('backend','prisma/migrations/20261021130000_add_raffle_appearance/migration.sql','CREATE TABLE "RaffleAppearance"')],
    timeline_key='raffle-visual-personalization')
future('Landing y personalización','Compartir y descargar imágenes del sorteo',
    'UX-P2 planificada, no disponible: templates con todos los números y vendidos tachados, sorteo completo o vendedor; descarga obligatoria, compartir nativo opcional. Sin publicación automática; SDD pendiente.',
    'ROADMAP.md',pattern='### UX-P2: Imágenes de números para compartir en redes',timeline_key='raffle-share-images')
# A3.2 appended after UX plans: stable F001..F126 and prior history untouched.
add('Arquitectura e infraestructura','Ventas con cliente HTTP tipado',
    'A3.2: reservas/liberación, venta multipart opcional, reversión e historial por vendedor usan DTOs públicos validados. E2E real local desktop/móvil; sin despliegue. Comprobantes sintéticos R2staging verificados (bytes/permisos y limpieza exacta); no producción.',
    'src/components/sale-modal.tsx',pattern='createSalesClient().create(raffleId',timeline_key='browser-sales-client')
add('Arquitectura e infraestructura','Vendedores con cliente HTTP tipado',
    'A3.2: altas, CSV, asignaciones/desasignaciones y modo de venta migrados; permisos/SQL en backend. E2E local sintético y sin entrega de correo. Invitaciones: cliente y endpoints; sin pantalla nueva.',
    'src/components/forms/seller-form.tsx',pattern='createSellersClient().create(raffleId',timeline_key='browser-sellers-client')
# A3.3 append-only: preserve F001..F128 and existing timeline identities.
add('Arquitectura e infraestructura','Administración con cliente tipado navegador',
    'A3.3: soporte de contraseña y moderación migrados a DTO público validado; E2E local con permisos y revocación de sesión. Integración de rama, no despliegue ni cierre A3.',
    'src/components/support-password-reset-form.tsx',pattern='createAdminClient().resetPassword(values)',timeline_key='browser-admin-client')
add('Arquitectura e infraestructura','Ciclo de sorteo con cliente tipado navegador',
    'A3.3: cantidad de números, cancelación y prueba/oficial/reemplazo con errores controlados y cooldown. Pruebas locales reales; no cambia reglas ni implica despliegue.',
    'src/components/forms/raffle-draw-form.tsx',pattern='createRaffleOperationsClient().draw(raffleId',timeline_key='browser-raffle-lifecycle-client')

# A3.4 append-only; image storage was not accessed remotely for this verification.
add('Arquitectura e infraestructura','Creación con cliente multipart tipado',
    'A3.4: creación de sorteos usa DTO público validado y campos multipart; E2E local de metadata sin archivos. Archivos verificados en protocolo/unitarias locales, no R2 remoto. No despliegue ni cierre A3.',
    'src/components/forms/create-raffle-form.tsx',pattern='createRaffleMetadataClient().create(',timeline_key='browser-raffle-create-client')
add('Arquitectura e infraestructura','Configuración con cliente multipart tipado',
    'A3.4: metadata, focal y remociones conservados, errores controlados y backend sin dependencia de storage para guardar sin archivos. E2E local de metadata/permisos, sin storage remoto de imágenes.',
    'src/components/forms/raffle-settings-form.tsx',pattern='createRaffleMetadataClient().update(raffleId',timeline_key='browser-raffle-settings-client')
# A3.5 append-only: local verification capability, never external delivery.
add('Arquitectura e infraestructura','E2E con email-worker real sin entrega externa',
    'A3.5: navegador/backend/DB e2e aislada y consumidor real compilado; console explícito,8 SENT simulados, redacción y estado idle comprobados. No entrega externa, imágenes remotas ni despliegue; A3 global aún abierta.',
    'scripts/a3-local-console-e2e.mjs','email-worker',pattern='export async function run',timeline_key='browser-backend-console-worker-e2e')
# A3.7 append-only: source fix keeps existing public SSR privacy and seller scope.
add('Arquitectura e infraestructura','Compradores públicos sincronizados por SSE',
    'A3.7: venta/reversión desde otro navegador actualiza disponibilidad y compradores2→1 sin navegación completa. Evento público validado, refresh SSR coalescido y proyección existente de solo nombre/sellerScope; sin nuevo DTO/endpoint ni streams. Verificado localmente en una réplica; no Pub/Sub, deploy ni cierre operacional A3/A4.',
    'src/lib/browser/public-raffle-refresh.ts',pattern='export function createPublicRaffleRefreshScheduler',timeline_key='public-buyers-native-sse-refresh')
# A4.0 append-only: bounded recovery trace, not global observability or cutover.
add('Arquitectura e infraestructura','Traza de recuperación entre request, auditoría y email',
    'A4.0 preparatoria: UUID seguro del BFF une respuesta, auditoría y EmailJob PASSWORD_RESET; worker registra solo UUID validado. Contrato v1 opcional compatible y E2E local con dos envíos console correlacionados, sin entrega externa. Solo recuperación; no observabilidad global, deploy ni cierre operacional A3/A4.',
    'src/infrastructure/prisma/identity-mutation-repository.ts','backend',pattern='resetUrl, correlationId: input.correlationId',timeline_key='recovery-request-audit-email-trace')
# A4.1 append-only: registration/resend traces, not all producers/global observability.
add('Arquitectura e infraestructura','Registro y reenvío con traza de email',
    'A4.1: UUID nuevo del BFF une registro y reenvío de verificación con auditorías y job vigente; contexto interno validado y actor anónimo en resend. E2E local con registro independiente y worker console sin entrega externa; el job sustituido permanece redactado. No deploy, observabilidad global ni cierre operacional A3/A4.',
    'src/infrastructure/prisma/identity-mutation-repository.ts','backend',pattern='action: "EMAIL_VERIFICATION_RESENT"',timeline_key='registration-verification-resend-trace')
# A4.2 append-only: authenticated request, not confirmation/notification.
add('Arquitectura e infraestructura','Solicitud de cambio de correo con traza de email',
    'A4.2: UUID nuevo del BFF enlaza la solicitud autenticada con auditoría transaccional y job EMAIL_VERIFICATION; actor/entidad correctos y metadata sin PII. E2E local respuesta→audit→job→worker console sin entrega externa. No cubre confirmación/notificación posterior, invitaciones, despliegue ni cierre operacional A3/A4.',
    'src/infrastructure/prisma/account-mutation-repository.ts','backend',pattern='action: "ACCOUNT_EMAIL_CHANGE_REQUESTED"',timeline_key='account-email-request-audit-job-trace')
# A4.3 bounded producer traces; never delivery-after-revoke or global observability.
add('Arquitectura e infraestructura','Confirmación de correo con notificación trazada',
    'A4.3: UUID BFF validado enlaza confirmación, auditoría anónima transaccional y notificación ACCOUNT_EMAIL_CHANGED al correo anterior. E2E local separado conserva verificación original y rechaza replay; worker console sin entrega externa. No deploy ni cierre operacional A3/A4.',
    'src/infrastructure/prisma/identity-mutation-repository.ts','backend',pattern='newEmail: verification.targetEmail,\n            correlationId: input.correlationId,',timeline_key='email-confirmation-notification-trace')
add('Arquitectura e infraestructura','Reenvío de invitación con traza de email',
    'A4.3: UUID BFF enlaza resend, auditoría y job SELLER_INVITATION. La traza original no corrigió lifecycle; F140 corrige después la cancelación exact-token pendiente. Corte staging acreditado por el hito A3/A4, worker console sin entrega externa; sin producción.',
    'src/infrastructure/prisma/raffle-admin-mutation-repository.ts','backend',pattern='acceptUrl, correlationId: input.correlationId',timeline_key='seller-invitation-resend-audit-job-trace')
# Pending-only invitation correction: append-only F140; runtime gates are separate.
add('Arquitectura e infraestructura','Cancelación precisa de invitaciones pendientes',
    'Corrección A3/A4: resend/revoke cancelan jobs pendientes desbloqueados del token exacto v1/legacy; otra rifa al mismo email queda intacta. SQL/worker console y corte staging con 10 minutos nuevos acreditados en su hito. No retira correos en vuelo/enviados ni purga tokens históricos no identificables. Imágenes remotas excluidas; sin producción.',
    'src/infrastructure/email/invitation-pending-jobs.ts','backend',pattern='export async function cancelPendingSellerInvitationJobs',timeline_key='seller-invitation-exact-pending-cancellation')
# Append F141 only after complete versioned gallery code exists on a compared
# branch; do not invent gallery planning evidence in an unrelated old roadmap.
gallery_requirements=[('web','src/app/app/admin/components/page.tsx','await requireSuperAdmin();'),
                      ('web','src/components/ui-gallery.tsx','export function UiGallery')]
gallery_complete={}
for branch in refs['web']:
    def read_gallery(source_repo,source_path):
        try: return git(source_repo,'show',f'{refs[source_repo][branch]}:{source_path}')
        except subprocess.CalledProcessError: return ''
    gallery_complete[branch]=all_markers_present(read_gallery,gallery_requirements)
if any(gallery_complete.values()):
    add('Administración','Galería interna de componentes',
        'Biblioteca exclusiva SUPERADMIN: componentes reales e interacciones sintéticas, sin acciones sobre datos reales. Presencia de código no acredita despliegue ni acceso público.',
        'src/app/app/admin/components/page.tsx',pattern='await requireSuperAdmin();',timeline_key='superadmin-ui-component-gallery')
    for branch,complete in gallery_complete.items():
        rows[-1][branch]=complete
        if not complete: rows[-1]['evidence'][branch]['kind']='absent'
# Fallar si una capacidad de implementación no tiene evidencia en ninguna rama.
invalid=[r['title'] for r in rows if all(e['kind']=='absent' for e in r['evidence'].values())]
if invalid: raise SystemExit('Rutas de evidencia a corregir: '+repr(invalid))
method='Revisión de código y documentación versionados; checks = implementación presente, no activación ni despliegue. Pendientes curados del roadmap y especificaciones. No consulta DB, flags activos ni infraestructura.'
previous=None
try:
    previous=json.loads((ROOT/'data.js').read_text().removeprefix('export default ').rstrip().removesuffix(';'))
except (OSError,ValueError):
    pass

now=datetime.datetime.now(datetime.timezone.utc).isoformat()
timeline=track_implementations(rows,previous,now)
timeline['milestones']=operational_milestones(git,refs,repos)
same_snapshot=(previous is not None and previous.get('refs')==refs and previous.get('repos')==repos and previous.get('features')==rows and previous.get('timeline')==timeline and previous.get('method')==method)
generated_at=previous['generatedAt'] if same_snapshot else now
payload={'generatedAt':generated_at,'refs':refs,'repos':repos,'features':rows,'timeline':timeline,'method':method}
(ROOT/'data.js').write_text('export default '+json.dumps(payload,ensure_ascii=False,indent=2)+';\n')
print(f'{len(rows)} capacidades; '+', '.join(f'{b}: {sum(r[b] for r in rows)} implementadas' for b in ['staging','main']))
