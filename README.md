# Rifero · catálogo de funcionalidades

Tabla comparativa de funcionalidades y roadmap de Rifero, con columnas **staging** y **main (producción)**, más una timeline de primeras detecciones de implementación.

**Web:** https://victormanuel.github.io/rifero-feature-catalog/

119 capacidades en 10 categorías. Incluye búsqueda sin acentos, filtros combinados, evidencia fijada a commits, timeline y exportación CSV con fechas registradas.

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
