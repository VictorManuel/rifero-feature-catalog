# Purchase funcional — preparación verificada, no activación

## Estado comprobado

Fuente publicada para revisión en [backend PR66](https://github.com/VictorManuel/rifero-backend/pull/66)
y [web PR160](https://github.com/VictorManuel/rifero/pull/160). Este recibo de preparación
no acredita por sí mismo integración ni despliegue. **Integración de estos candidatos
pendiente al momento de este recibo**: la integración excepcional exige
expedientes completos, revisión independiente y decisión humana de los SHAs exactos.
No se debe marcar disponibilidad activa por un commit o un check del catálogo.

- Backend candidato: `f59b97c8ad941223fb0ab3ee1fc44fd996e75651`.
- Web candidato: `ea72f99e8ba957eb51aadfd1be37a72b63d118de`.
- Bases staging: backend `6e29387e0eb8afd2edb277f314fd98d3841f6266`,
  web `4e7f4994b00385e8c2192b1b4be36280c526ea03`.

## Comportamiento preparado

Una compra agrupa de 1 a 500 números de la misma operación, comprador, vendedor y
sorteo; persiste atómicamente junto a las ventas, números y auditoría. Conserva el
importe original y moneda con BIGINT serializado sin pérdida. No es un pago online
ni un saldo pendiente. Se mantiene la reversión por número: solo al revertir todos
se cancela el grupo, conservando el historial propietario y el importe original.
Las ventas históricas conservan su referencia nullable, sin backfill ni inferencias.
La vista de ventas respeta el alcance administrador/vendedor y los números activos
filtrados; el SSE público sigue sin referencia de compra ni nuevos datos privados.

`PURCHASE_SCHEMA_ENABLED` y `PURCHASE_GROUPING_ENABLED` están separados y **OFF por
defecto**. Sin capability de schema no se consulta la tabla nueva; declarar una
capability inexistente falla cerrado. Apagar creación después de activarla no debe
apagar mantenimiento/lectura de grupos existentes. No volver a un backend que los
desconozca tras la primera escritura. Web sigue siendo BFF, sin Prisma ni SQL propio.

## Verificación local y exclusiones

- Backend: 389 unitarias PASS / 1 TLS opcional SKIP; integración general 78 PASS /
  11 SKIP, de los cuales nueve Purchase se ejecutaron en sus fases locales: legacy
  1 PASS y grouped 8 PASS. Dos R2 excluidos. Caso real de 500 números: 641 ms.
- Web: 553 unitarias y 12 guardas Python PASS; navegador real escritorio/móvil:
  64 PASS / 2 comprobantes R2 SKIP. Ambos Purchase PASS; persistencia SQL posterior,
  historial, SSE, no-backfill y limpieza verificados. Capturas desktop/móvil revisadas.
- Lint, tipos, builds, snapshots, paridad y guardas aplicables PASS. Backend imagen
  Linux/amd64 construida una vez y smoke por ID inmutable PASS; limpieza propia PASS.
- Ensayo SQL formal: el runner original falló por confundir el socket temporal de
  initdb con el servidor final. Una pasada diagnóstica confirmó shutdown/ENOENT.
  Se conservaron ambos fallos. El ensayo **con precondición TCP reforzada**, wrapper
  externo de hash revisado, pasó los 21 SQL históricos, propuesta, fixtures y
  assertions originales, sin reintentos de SQL; historia intacta y limpieza PASS.
  Esto no corrige ni declara verde el runner original: su guard de readiness sigue
  siendo deuda de tooling. El wrapper conserva entorno saneado y ownership/CID.
- Actions de los candidatos falló antes de asignar runner por cuota/facturación;
  los resultados locales no se presentan como CI GitHub verde. No se aumentó gasto
  ni se falsificaron checks, instalaron runners o cambiaron protecciones.

Solo bases locales sintéticas desechables `e2e`, contenedores tmpfs y recursos
propios; no bases activas ni volúmenes. Sin imágenes remotas, correo externo,
pagos reales, producción ni main de las apps. Guard de espacio mínimo 8 GiB;
no se limpiaron imágenes/cachés/volúmenes de otros proyectos.

## Lo que no está autorizado ni acreditado

No se alteró el schema Prisma, sus 21 migraciones ni el arranque. La propuesta SQL
queda fuera del migrador. No hay migración ni despliegue activo de Purchase y los
flags remotos no se activaron. Futuro rollout requiere revisión SQL y rol limitado,
backup de staging con restauración comprobada, orden web compatible/backend flags
OFF, autorización explícita del DDL/despliegue y observación posterior. No cerrar
esos gates mediante el ensayo local ni mediante esta publicación documental.

## Conservación del catálogo

F057 conserva ID, título, posición y referencia al plan: sigue pendiente en este corte.
Solo se deberá detectar código implementado cuando el
adapter funcional esté en la ref remota integrada; no se usa la mera propuesta SQL
ni un modelo Prisma agregado para satisfacer el catálogo. Conservar las otras 139
capacidades, estados main, baseline, eventos y cinco hitos anteriores. La primera
detección de F057, cuando corresponda, añade un evento sin reescribir el historial.
