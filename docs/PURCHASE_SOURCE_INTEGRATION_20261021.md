# Purchase — fuente integrada en staging, NO disponible en runtime

## Estado actual comprobado — 21 October 2026

Esta entrada posterior sustituye solo el estado pendiente de la preparación
histórica; conserva su recibo completo y los fallos/diagnósticos anteriores.
Código integrado por merges normales, con autorización conjunta del usuario para
los cierres pendientes, expedientes completos v2, revisión independiente ligada
al digest, auditor canónico online y comprobaciones frescas de SHA/base/protecciones.
No se usó la excepción documental de otros candidatos ni overrides/checks falsos.

| Repo | PR | Candidato revisado | Base exacta | Merge staging | Integrado (UTC) |
|---|---|---|---|---|---|
| backend | [PR66](https://github.com/VictorManuel/rifero-backend/pull/66) | `9a0a09d9b0d1ceb887aedd4d12448d0446c8a7e3` | `d498178e7e3c2e3f2f377427baaf773ef0450fe5` | `629bf33cf0485f139e2f295a1b53f66f8ab73c1c` | 2026-10-21T19:54:24Z |
| web | [PR160](https://github.com/VictorManuel/rifero/pull/160) | `ef2f819ed9f8e7edeb4765c569fb930e2a8daed6` | `a08ecfad449d20f57b0d1d9a820d70a767d9c229` | `a91c1669d23240680a055af7d458ed7e2d28d575` | 2026-10-21T19:55:20Z |

Cada merge conserva exactamente el árbol probado y los padres esperados; el
backend integrado tiene el mismo árbol del peer usado por web. Sin cambios en main
de las aplicaciones, producción, reglas/protecciones ni Actions privados: los diez
workflows privados continúan desactivados. Pages gratuito del catálogo es la única
excepción pública existente.

## Verificación de estos candidatos

- Backend391 unitarias PASS/1 compatibilidad opcional SKIP; web560 unitarias y14
  guardas de harness PASS. Snapshots/provenance, paridad, lint, tipos y builds PASS.
- Migrador real21→22 en DB sintética propia y diff canónico vacío. Catálogo22 sigue
  perteneciendo a apariencia: **ninguna migración Purchase se agregó al migrador**.
  Integración general78 PASS/20 SKIP de fases complementarias y R2 explícito;
  Purchase legacy1 y grouped8 PASS por separado; apariencia enabled8 PASS. Venta
  atómica de500 números:652ms. Permisos, historia/BIGINT, reversión, rollback y SSE.
- Ensayo formal actual de propuesta Purchase:22 SQL canónicos, propuesta separada,
  historia intacta, assertions y limpieza PASS. Espera TCP final, no socket temporal
  de bootstrap; cancelación con limpieza protegida y regresiones verificadas.
  Esto corrige el nuevo runner, no reetiqueta los fallos del recibo anterior.
- Suite real completa de navegador compuesta:72 PASS/2 R2 explícitos SKIP, escritorio
  y móvil, Purchase y galería; persistencia y ausencia exacta de DB/contenedor,
  grupos de procesos y los tres puertos. Capturas revisadas; una advertencia de
  estilo preexistente e idéntica a staging se conserva, no se declara cero hallazgos.
- Fuentes/árboles/archivos exactos Linuxamd64, builds y smokes health/artefacto PASS;
  builder temporal propio1CPU/3GB, cancelación real y retirada de su caché/config/CID
  y smokes verificadas. Recursos y servicios ajenos intactos; sin runners/gasto.

## Runtime deliberadamente sin cambios

**PURCHASE_SCHEMA_ENABLED y PURCHASE_GROUPING_ENABLED siguen OFF. Purchase NO está
migrado, desplegado ni disponible en la instancia activa de staging.** Se verificó
por lectura que las imágenes y especificaciones activas siguen siendo las de la
release previa de galería/colores, con autoDeploy=false. No SQL de aplicación en
la DB activa, no activación, pagos reales, email nuevo, imágenes remotas ni backfill.
Los artefactos probados no son un despliegue. No se repiten ni se atribuyen10 minutos
de observación de Purchase porque no hubo corte runtime de Purchase.

Su futura activación sigue siendo un trabajo separado con autorización explícita,
SQL/roles mínimos revisados, backup consistente y restauración comprobada/frescura,
orden de release, rollback compatible y observación. Apagar creación no permite
apagar mantenimiento ni volver a un binario que desconozca grupos ya escritos.
No cerrar globalmente A3/A4, UX-P2, pagos ni producción con este recibo.

## Catálogo y conservación de historia

F057 conserva ID/título/posición y el timelineKey histórico
`source-4b78fef8a32e3a682e98`. Requiere productor y mantenimiento backend más componente
y uso web en la **misma rama comparada**; no basta una propuesta SQL, un modelo
Prisma, un PR publicado ni fragmentos repartidos entre ramas. El check significa
fuente implementada en esa ref, NO disponibilidad runtime. Main conserva su plan.
La primera detección posterior por el actualizador oficial añadirá solo un evento
de código Purchase; su fecha es la primera detección, no una fecha de despliegue.
Se conservan las141 filas, los otros estados, baseline, fechas/eventos anteriores
y los seis hitos operacionales existentes. No se añade un hito de activación Purchase.
