# Purchase — activación verificada solo en staging (22 octubre 2026)

## Alcance y permiso
El usuario autorizó explícitamente también el PR/merge del recibo en `VictorManuel/rifero-feature-catalog:main`: «Sí, actualizar también el catálogo al verificar staging». Incluye la publicación gratuita existente de Pages, no aplicaciones/main de apps/producción, DB, nuevas pruebas con datos ni costos. Base catálogo `8c66bf49acf6b9013b68baf7127bca642c3b8b2d`, rama `codex/catalog-purchase-staging-activation`. Registro principal operativo: backend; esta nota es su proyección pública, no otra aceptación de runtime.

## Evidencia propietaria inmutable e integrada
- [Backend: esquema, imágenes, gates y aceptación](https://github.com/VictorManuel/rifero-backend/blob/91841c7a4c6bd3cc1208162e459c8e5bac017653/docs/PURCHASE_STAGING_ACTIVATION.md), integrado por [PR75](https://github.com/VictorManuel/rifero-backend/pull/75) en `1d20fa75a01f4c6d1cd44cea36ca1627d55188d5`.
- [Web: flujo activado y límites](https://github.com/VictorManuel/rifero/blob/0452dfdb55b43a9f0acf04e415235195965624ed/docs/PAGE_FLOWS.md), integrado por [PR169](https://github.com/VictorManuel/rifero/pull/169) en `b6d13f91d559de91e3a0f2ef76d00c56a4cc2b8a`.

Aceptación final independiente: **22/10/2026 19:09:52.361117−03:00**. Es posterior a observación19:09:03, cleanup19:09:16 y readback19:09:27; no es hora de publicación del catálogo. Se registran esquema canónico23, backend/web exactos y flags schema/grouping ON solo staging, compras1/2/500, permisos/SSR/SSE sin PII, legado sin backfill, reversión parcial/final con creación OFF y mantenimiento ON,602.197261s/21 muestras estables y limpieza exacta5usuarios/1rifa/8compradores. Cola y sesión precorte preservadas hasta retirar usuarios sintéticos. Recuperación: mantener binario compatible y schema ON, apagar solo creación.

## Integridad del catálogo y controles
F057 conserva ID/título/posición/key, checks de código y fechas de primera detección. Se actualiza únicamente su nota vigente y se añade un hito operacional histórico separado; los seis hitos previos, baseline/eventos/fechas permanecen idénticos. No inferir runtime por código ni prometer monitoreo continuo. La disponibilidad probada es solo staging, no producción; no pagos, email nuevo ni backfill. UX-P2 queda fuera.

Generador debe leer ambos recibos inmutables como ancestros de las refs staging remotas y exigir marcadores de aceptación/límites. Referencias ausentes, recibos incompletos o disponibles solo en main bloquean generación. Pruebas propias de catálogo y build estático, revisión independiente y comprobación semántica de snapshot/historial antes del PR/merge normal. No suite/build/DB/Docker de las apps ni despliegue adicional por esta curación.

Evidencia privada de este cierre: `.local-evidence/purchase-staging-activation-20261022/catalog-activation/` en el workspace contenedor. No se publican secretos, cookies, copias de DB ni logs privados; Pages continúa publicando solo cinco assets estáticos de dist. El updater oficial conserva el permiso acotado data.js y regenera las refs después de integrar esta fuente revisada; un PR por sí solo no acredita publicación ni Pages.
