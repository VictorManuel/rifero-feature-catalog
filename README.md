# Rifero · catálogo de funcionalidades

Tabla comparativa de funcionalidades y roadmap de Rifero, con columnas **staging** y **main (producción)**.

**Web:** https://victormanuel.github.io/rifero-feature-catalog/

119 capacidades en 10 categorías. Incluye búsqueda sin acentos, filtros combinados, evidencia fijada a commits y exportación CSV.

## Leer los estados

- **✓ Implementado:** código presente en la rama; no garantiza deploy ni activación del flag.
- **× No implementado:** capacidad pendiente en esa rama; una especificación no es implementación.
- `main` representa la rama destinada a producción, no una inspección del entorno real.
- Es un snapshot curado: refleja `main` y `staging` remotos de los repositorios fuente, no ramas sin integrar ni cambios locales.
- Los enlaces de evidencia apuntan a repositorios privados y requieren acceso. No se publica su código fuente aquí.
- Los checks detectan cambios de las capacidades ya catalogadas. Descubrir una función nueva o reinterpretar una nota del roadmap requiere revisar y actualizar `generate.py`.

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

El comando descarga las referencias `main` y `staging` de `web/`, `backend/` y `email-worker/` por HTTPS, regenera el inventario, corre tests y build, y si cambió `data.js` crea un commit de ese archivo y lo publica en `main`. GitHub Actions despliega el sitio. En la primera instalación, agrega el ejecutable al PATH:

```sh
ln -s "$(pwd)/bin/update-rifero-status" "$HOME/Library/pnpm/update-rifero-status"
```

También se puede invocar sin instalarlo con `pnpm update-status`. Requisitos: Python 3, Node.js 22, pnpm 10.x, GitHub autenticado con lectura de los tres repositorios privados y permiso de push a `VictorManuel/rifero-feature-catalog`. Ejecuta `update-rifero-status --dry-run` para descargar y validar sin dejar cambios, commit ni publicación.

El script no consulta DB, flags activos ni infraestructura, no toca archivos locales de los repositorios fuente y sólo puede marcar automáticamente las capacidades ya catalogadas en `generate.py`. Los nuevos elementos de roadmap y cambios de significado se mantienen curados manualmente. Automatizar cada push de los repositorios privados en GitHub requeriría configurar acceso entre repositorios y credenciales de Actions; por ahora se usa este comando explícito.

## Publicación

GitHub Actions verifica y publica al pushear a `main`. Los PR sólo ejecutan tests/build. El workflow despliega exclusivamente `dist/`, no el servidor, generador, documentación interna o capturas. Un push autorizado a main actualiza el sitio público.

Para recuperar una versión anterior, revertir el commit correspondiente y pushear a main con autorización. También se puede desactivar Pages desde Settings. No afecta servicios de Rifero ni datos productivos.
