# Rifero · catálogo de funcionalidades

Tabla comparativa de funcionalidades y roadmap de Rifero, con columnas **staging** y **main (producción)**, más una timeline de primeras detecciones de implementación.

**Web:** https://victormanuel.github.io/rifero-feature-catalog/

Inventario curado por categorías. Incluye búsqueda sin acentos, filtros combinados, evidencia fijada a commits, timeline y exportación CSV con fechas registradas.

## Leer los estados

- **✓ Implementado:** código presente en la rama; no garantiza deploy ni activación del flag.
- **× No implementado:** capacidad pendiente en esa rama; una especificación no es implementación.
- `main` representa la rama destinada a producción, no una inspección del entorno real.
- Es un snapshot curado: refleja `main` y `staging` remotos de los repositorios fuente, no ramas sin integrar ni cambios locales.
- Los enlaces de evidencia apuntan a repositorios privados y requieren acceso. No se publica su código fuente aquí.
- Los checks detectan cambios de las capacidades ya catalogadas. Descubrir una función nueva o reinterpretar una nota del roadmap requiere revisar y actualizar `generate.py`.
- La timeline comienza con una línea base: no reconstruye fechas históricas. Desde ese punto registra cuándo el refresco detecta por primera vez una implementación en cada rama; esto también aplica a una capacidad agregada al catálogo que ya estuviera implementada. La hora puede ser posterior al cambio real de código.
- La identidad histórica usa la evidencia de código, no el ID secuencial ni el título. Las capacidades que comparten evidencia declaran una `timeline_key` inmutable junto a su entrada en `generate.py`; hay que conservar esa clave aunque se renombre la función.

## Desarrollo local

Requisitos: Node.js 22 y pnpm 10.28.0. Sin dependencias de terceros.

```sh
pnpm start
# http://localhost:4317
pnpm test
pnpm build
```

El servidor escucha sólo en 127.0.0.1. Ctrl+C lo detiene. `dist/` contiene sólo los assets estáticos públicos.

## Actualizar el inventario y publicar

Para reflejar cambios subidos a los repositorios privados y publicar el snapshot en Pages, ejecuta desde una terminal:

```sh
update-rifero-status
```

El comando descarga las referencias `main` y `staging` de `web/`, `backend/` y `email-worker/` por HTTPS, regenera el inventario y la timeline, corre tests y build, y si cambió `data.js` crea un commit de ese archivo y lo publica en `main`. GitHub Actions despliega el sitio. Una transición de pendiente a implementado genera una fecha para esa rama; una función que ya existía al iniciar el seguimiento aparece sin fecha histórica. En la primera instalación, agrega el ejecutable al PATH:

```sh
ln -s "$(pwd)/bin/update-rifero-status" "$HOME/Library/pnpm/update-rifero-status"
```

También se puede invocar sin instalarlo con `pnpm update-status`. Requisitos: Python 3, Node.js 22, pnpm 10.x, GitHub autenticado con lectura de los tres repositorios privados y permiso de push a `VictorManuel/rifero-feature-catalog`. Ejecuta `update-rifero-status --dry-run` para descargar y validar sin dejar cambios, commit ni publicación.

El script no consulta DB, flags activos ni infraestructura, no toca archivos locales de los repositorios fuente y sólo puede marcar automáticamente las capacidades ya catalogadas en `generate.py`. Los nuevos elementos de roadmap y cambios de significado se mantienen curados manualmente. Automatizar cada push de los repositorios privados en GitHub requeriría configurar acceso entre repositorios y credenciales de Actions; por ahora se usa este comando explícito.

## Publicación

GitHub Actions verifica y publica al pushear a `main`. Los PR sólo ejecutan tests/build. El workflow despliega exclusivamente `dist/`, no el servidor, generador, documentación interna o capturas. Un push autorizado a main actualiza el sitio público.

Para recuperar una versión anterior, revertir el commit correspondiente y pushear a main con autorización. También se puede desactivar Pages desde Settings. No afecta servicios de Rifero ni datos productivos.

## Publicador aislado y recuperación

`update-rifero-status` conserva intacto el checkout de trabajo aunque tenga
cambios locales. Serializa ejecuciones con un lock del repositorio Git y usa
exclusivamente el worktree hermano `worktree-rifero-status-publisher`, rama
`codex/catalog-status-publisher`, con propiedad registrada en el Git común.
No adopta carpetas existentes ni modifica ramas ajenas. La fuente del updater
es esta instalación; el generador/datos se leen de `origin/main` en el worktree.
Las mejoras al generador deben publicarse por separado, nunca como parte del
permiso permanente para `data.js`.

`--dry-run` tampoco commitea/publica y restaura su propio `data.js`. El worktree
se conserva para reutilizarlo y para diagnóstico. Si falla, no se resetea, no
se elimina ni se fuerza un push. Ante un árbol sucio, inspeccionar ese worktree;
si existe un único commit de snapshot pendiente, el runner puede reintentar su
push sin incluir otros archivos. Un origen/branch/propiedad inesperados bloquean
la ejecución. Una segunda ejecución simultánea falla con mensaje accionable.
No borrar manualmente el lock: el bloqueo del sistema se libera al salir.

Pruebas: `pnpm test`, `pnpm build` y `bash -n scripts/update-status-in-place.sh`.
Los tests del publicador usan repos temporales y un runner simulado: nunca red,
push ni Pages. La comprobación operativa se realiza primero con `--dry-run`.

## Hitos operacionales en la timeline

Las fechas de primera detección de capacidades y los cierres operacionales son
registros distintos. `operational_milestones.py` cura cierres con fecha evidenciada,
entorno y recibos inmutables ya integrados; el generador verifica contenido, gates
y ancestralidad de ambos recibos antes de publicar. No consulta infraestructura ni
infiere despliegue por presencia de código. Los enlaces de evidencia requieren
acceso a los repositorios privados. Un hito staging no marca producción ni A3.

El cierre A2.7 corresponde al fin de observación documentado del 19oct2026 a
01:43:55 ART, no al momento de refrescar el catálogo. Regenerar no cambia esa fecha,
no duplica el hito ni altera baseline/fechas de capacidades. Para ampliar o corregir
hitos se revisa/publica la fuente antes de ejecutar el updater oficial; nunca se
edita `data.js` a mano. No se publica fuente privada, scripts ni capturas en `dist`.

### A3.0 — frontera navegador

La capacidad `browser-runtime-boundary` representa únicamente el guard estático
`web/scripts/verify-client-boundary.mjs` presente en la ref publicada. Su enlace
apunta al código inmutable; primera detección no significa despliegue ni cierre
de toda A3. La capacidad pendiente «Frontend independiente sin Prisma» conserva
su estado. Nuevas capacidades se agregan al final para preservar IDs históricos.

### A3.1 — clientes y consumidores navegador

Cuatro capacidades distintas: transporte JSON validado, identidad, cuenta y
disponibilidad pública. La fuente de cada una enlaza código versionado de web;
ninguna representa cierre total de A3, despliegue o entrega de correo. La evidencia
E2E local (desktop/mobile, DB sintética, sin delivery) se conserva en los PRs y
handoff del bloque. Nuevas filas se añaden al final para preservar F001..F120.

### UX-P1 / UX-P2 — alta histórica como planificadas

Estado al incorporarlas; la regla vigente de UX-P1 se detalla al final.
Personalización de colores del sorteo e imágenes para compartir/descargar se
incorporan como roadmap, no disponibles en ninguna rama. Sus enlaces apuntan
a las secciones UX-P1/UX-P2 del roadmap versionado, nunca a código de una función
que aún no existe. No generan eventos de implementación ni modifican baseline,
orden/fechas/hitos previos de la timeline. SDD/Ready sigue pendiente.

### A3.2 — ventas y vendedores tipados

F127/F128 se agregan después de las126 capacidades previas, no entre ellas.
Representan migración de consumidores al cliente HTTP, no capacidades de negocio
nuevas, deploy ni cierre A3. El bloque verifica recibos sintéticos R2staging
(attach/create/read/permisos), con cuatro claves retiradas y GET404, no producción. El snapshot se genera
solo después de integrar los candidatos en las refs remotas staging. Se conservan
baseline, fechas, orden relativo de eventos, hito A2.7 y UX-P1/P2 planificadas.
La evidencia de navegador/DB sintética y limitaciones se conserva en PRs/handoff.


### A3.3 — administración y ciclo de sorteo

F129/F130 se añaden después de las128 capacidades existentes, sin reiniciar la
timeline. Soporte/moderación y resize/cancel/draw consumen clientes navegador
validados. Evidencia de permisos, persistencia y cooldown en pruebas locales y
PRs del bloque; presencia en staging no es despliegue ni cierre global A3.
Colores e imágenes para compartir siguen planificados, sin eventos de disponibilidad.


### A3.4 — creación y configuración multipart tipadas
F131/F132 se añaden después de130 capacidades, sin reiniciar historia. Código
browser-safe conserva campos, cuatro slots, focal y remociones; E2E de metadata
sin archivos y negativos locales. Usuario negó almacenamiento remoto de imágenes:
no se reclama subida R2 ni deploy. Frontend independiente/A3 global siguen pendientes.


### A3.5 — seam de consumidor y timeline desplazable
F133 se añade tras132 capacidades, sin alterar IDs/fechas/orden histórico,
baseline ni A2.7. Verifica consumidor real con console, no entrega externa.
Fuente apps solo staging; snapshot oficial después de ambas integraciones.

La lista de avances mantiene todos sus elementos, dentro de una región nombrada
accesible por Tab con altura máxima min(34rem,65vh) y scroll vertical nativo
(escritorio/móvil). Flechas/PageDown/End y touch/rueda permiten recorrerla;
Tab sale normalmente y no se impide encadenar scroll a la página. Foco visible,
scrollbar acorde a paleta y espacio para marcadores. Baseline y catálogo fuera de
la región, sin truncar, paginar ni reiniciar datos o cambiar orden. Enlaces directos
a hitos/funciones y exportación conservados. Sin dependencias nuevas.

### Frescura de la publicación
El build mantiene la allowlist de cinco assets públicos y `.nojekyll`, sin publicar
fuentes ni alterar `data.js`. Versiona CSS y la cadena HTML→app→data/model con hashes
de contenido en sus URLs. Una publicación nueva invalida assets cacheados sin pedir
al visitante vaciar caché ni cambiar datos/historia. El build repetido es determinista;
solo una variación de contenido cambia su URL. El servidor local sigue sin caché.

## A3.6 — aceptación fuente del frontend independiente

F100 conserva ID/título/timelineKey y posición; pasa de plan a implementación
solo cuando el gate de artefacto existe en la ref staging remota integrada y CI
está verificado. Next.js+BFF same-origin sigue dependiendo del backend en runtime:
no se afirma funcionamiento offline ni cierre operacional A3/A4 o despliegue.
El snapshot oficial conserva las otras132 capacidades, fechas, eventos, baseline
y A2.7; añade únicamente la primera detección staging de F100. Main no cambia.

## A3.7 — compradores públicos y SSE nativo

F134 se añade tras133 capacidades. El bug dejaba compradores SSR vacíos mientras
la disponibilidad nativa ya cambiaba; se refresca la proyección pública existente
tras venta/reversión validada, sin endpoint/DTO nuevo ni ampliar datos o sellerScope.
La curación solo es publicable tras E2E reales desktop/móvil, SQL/worker/cleanup y
los gates de fuente staging. Conserva IDs/fechas/eventos/baseline/A2.7 y UX-P1/P2
planificadas; no cambia a implementado el realtime entre múltiples réplicas.

## A4.0 — primera traza de recuperación

F135 se añade después de las134 capacidades existentes. Solo recuperación de
contraseña: respuesta BFF→audit→EmailJob→worker validados por E2E local y console,
sin entrega externa. Campo v1 opcional; compatibilidad con consumidor anterior
comprobada por fuente exacta. La curación exige fuente de los tres repos integrada
solo staging y gates completos antes del snapshot oficial. No marca implementada
la observabilidad centralizada, múltiples réplicas ni cutover/rollout A4. Preserva
F001–F134, fechas, eventos, baseline/A2.7 y personalización/imágenes aún planificadas.

## A4.1 — registro/reenvío y preparación del cierre conjunto

F136 se añade después de135 capacidades; solo registro y reenvío de verificación.
UUID respuesta/audit/job vigente/worker real console, no entrega externa. El job
sustituido sigue redactado: su traza no justifica restaurar payloads. No se marca
observabilidad global ni se inventa un cierre operacional por preparar el plan
conjunto A2.7/A3/A4. Publicar snapshot solo después de fuente web/backend integrada
staging y gates; preservar135IDs/estados/fechas/eventos/baseline/A2.7 y UX planes.

## A4.2 — solicitud autenticada de cambio de correo
F137 se agrega después de136 capacidades. Solo respuesta/auditoría/job/worker de
la solicitud autenticada, no confirmación ni notificación posterior ni invitación.
No implica entrega externa, despliegue o cierre operacional. Exige fuente
web/backend verificada e integrada staging antes del snapshot oficial. Conservar
los136 IDs/estados/fechas/eventos, baseline/A2.7, scroll y UX planificadas.

## A4.3 — confirmación/notificación y resend de invitación
F138 yF139 se agregan después de137 capacidades. Scope acotado ysource-only:
confirmación notifica al correo anterior con audit anónimo; resend mantiene actor
admin/raffleId. Worker console no acredita entrega externa ni entrega válida de
un job previamente encolado tras revoke; lifecycle previo no corregido. Exigir
fuente web/backend verificada e integrada staging antes del updater. Preservar
137IDs/estados/fechas/eventos/baseline/A2.7/scroll y UX planes.

## Corrección pending de invitaciones — F140
La nueva capacidad se agrega al inventario y timeline sin reemplazar eventos o
hitos previos. Su marcador exige fuente integrada en la rama consultada; generar
antes de integrar debe rechazar la ausencia, no simular un estado disponible.
Es cancelación por hash del token vigente y elegibilidad pendiente, no recall de
correo enviado/en vuelo ni purga global. E2E local y fuente staging no acreditan
despliegue u observación; imágenes remotas están excluidas por aceptación expresa.
El cierre histórico A2.7 y las funcionalidades UX planificadas se conservan.

### A3/A4 — corte operacional solo staging

Hito separado de implementación, finalizado `2026-10-20T01:56:59-03:00`:21 muestras/84 HTTP
durante 600.36s reales, HTTP+SQL, worker console por IDs y limpieza exacta.
Requiere dos recibos inmutables integrados staging y sus siete gates PASS.
A2.7 se conserva idéntico; no agrega capacidad/fecha de implementación ni reinicia
la timeline. Imágenes remotas excluidas; sin entrega externa, producción ni retiro
global A4. Notas F007/F009/F043/F100/F139/F140 se actualizan con ese alcance,
sin cambiar IDs, estados, fechas, eventos anteriores o UX-P1/P2 planificadas.

### Ensayo protegido de snapshot — solo staging aislado

Hito operacional adicional, sin reiniciar la timeline ni cambiar estados/fechas
de implementación: requiere recibos inmutables integrados en staging de backend
y web, seis gates PASS y referencia cruzada exacta. Acredita restauración y
lecturas HTTP de copia restringida, NOOP del migrador y limpieza. No acredita
login real, browser E2E ni escrituras mediante apps sobre la copia, migración de
archivos, downgrade PG18→16, producción o cierre global A4. A2.7 y A3/A4
conservan sus hitos completos; el generador no infiere despliegues de commits.

## 21oct2026 — contingencia local integrada solo en staging

[Recibo de tooling y preparación Purchase](docs/LOCAL_APPROVAL_STAGING_20261021.md):
tres candidatos exactos revisados e integrados con autorización humana excepcional,
sin falsear Actions ni gastar. Se añade un hito operacional, no una disponibilidad
Purchase ni deploy/migración activa. Los cuatro hitos anteriores, baseline,
estados y fechas de funcionalidades/avances permanecen intactos. La cancelación
se limita a PR obsoletos; todos los controles/eventos siguen vigentes.

## Purchase — código protegido por flags, no disponibilidad activa

F057 conserva ID/título/posición. Por ahora conserva su referencia al plan y
permanece pendiente. Tras la integración real, una curación revisada podrá detectar
el adapter funcional backend y marcar código presente en la ref staging remota.
No se cambia el schema Prisma para satisfacer al catálogo ni se usa SQL propuesto como implementación.
Los flags continúan OFF, sin migración activa/deploy ni disponibilidad runtime.
La nota de preparación puede publicarse antes de integrar las apps, pero el check
permanece pendiente hasta detectar la fuente integrada remota. Conservar las otras
139 capacidades, main, baseline/eventos y cinco hitos previos.

[Preparación funcional y límites comprobados](docs/PURCHASE_FUNCTIONAL_PREPARATION_20261021.md).
Un PR publicado no es un merge ni genera por sí solo un avance de implementación.

### UX-P1 y biblioteca SUPERADMIN — detección de código, no activación
La fila existente de colores mantiene su ID, posición y `timelineKey`; deja de ser
un futuro fijo solo cuando editor web, persistencia backend y migración canónica
están presentes en la misma rama remota. La biblioteca interna se agrega al final
como F141 únicamente cuando existen tanto el guard SUPERADMIN como su componente
real en alguna rama comparada; no inventa evidencia de plan en un roadmap ajeno.
Colores conserva el plan hasta completar sus requisitos. UX-P2 sigue pendiente.
No se consultan DB ni flags, ni se infiere despliegue, disponibilidad pública o
activación a partir de PRs/ramas locales. El updater oficial sigue publicando solo
`data.js`; fechas/baseline/eventos/hitos previos se preservan. Las nuevas primeras
detecciones de código son eventos adicionales, nunca pruebas de rollout.

### Recibo operacional: galería y colores en staging
La nueva entrada histórica se separa de las primeras detecciones F125/F141: exige ambos recibos propietarios inmutables integrados en staging y sus ocho gates aprobados. Registra la aceptación real de2026-10-21 (600.939s/21 muestras y limpieza), no la hora de publicación del catálogo. No cambia fechas, baseline, eventos o hitos anteriores ni afirma producción, Purchase o cierre global A3/A4. El generador falla si falta un recibo o su integración; publicar este código en un PR no publica el hito ni autoriza su merge.


## Purchase — fuente integrada, sin activación (21 October 2026)

Entrada posterior: sustituye solo el estado pendiente de la preparación anterior,
que se conserva intacta. Backend PR66 y web PR160 están integrados normalmente en
staging con expedientes completos v2/revisión/auditor online y árboles exactos.
[Recibo vigente de integración de fuente](docs/PURCHASE_SOURCE_INTEGRATION_20261021.md).
F057 solo detecta código cuando productor/mantenimiento y consumidor/uso existen
en la misma rama; conserva ID y key histórica. **NO disponible en runtime: flags
OFF, sin SQL activo ni despliegue Purchase**, pagos nuevos, email o backfill. Imágenes
activas de galería/colores y autoDeploy=false permanecen iguales.141 filas y los
seis hitos anteriores se conservan; la primera detección oficial añade solo un
evento de código, nunca un hito de activación ni cierre global A3/A4/UX-P2/producción.
