# Rifero · catálogo de funcionalidades

Tabla comparativa de funcionalidades y roadmap de Rifero, con columnas **staging** y **main (producción)**.

**Web:** https://victormanuel.github.io/rifero-feature-catalog/

119 capacidades en 10 categorías. Incluye búsqueda sin acentos, filtros combinados, evidencia fijada a commits y exportación CSV.

## Leer los estados

- **✓ Implementado:** código presente en la rama; no garantiza deploy ni activación del flag.
- **× No implementado:** capacidad pendiente en esa rama; una especificación no es implementación.
- `main` representa la rama destinada a producción, no una inspección del entorno real.
- Es un snapshot curado, no un monitor automático. No incluye ramas sin integrar ni cambios locales.
- Los enlaces de evidencia apuntan a repositorios privados y requieren acceso. No se publica su código fuente aquí.

## Desarrollo local

Requisitos: Node.js 22 y pnpm 10.28.0. Sin dependencias de terceros.

```sh
pnpm start
# http://localhost:4317
pnpm test
pnpm build
```

El servidor escucha sólo en 127.0.0.1. Ctrl+C lo detiene. `dist/` contiene sólo los assets estáticos públicos.

## Actualizar el inventario

`generate.py` requiere Python 3 y checkouts hermanos `web/`, `backend/` y `email-worker/`, con las referencias `origin/main` y `origin/staging` ya actualizadas mediante fetch. No conecta a DB ni hace fetch automáticamente.

```sh
pnpm refresh
pnpm test
pnpm build
```

Las capacidades implementadas verifican rutas y, cuando corresponde, marcadores de código. Los pendientes se clasifican manualmente en `generate.py`: reclasificarlos cuando se implementen. Contrastar planes históricos con código y últimas actualizaciones.

## Publicación

GitHub Actions verifica y publica al pushear a `main`. Los PR sólo ejecutan tests/build. El workflow despliega exclusivamente `dist/`, no el servidor, generador, documentación interna o capturas. Un push autorizado a main actualiza el sitio público.

Para recuperar una versión anterior, revertir el commit correspondiente y pushear a main con autorización. También se puede desactivar Pages desde Settings. No afecta servicios de Rifero ni datos productivos.
