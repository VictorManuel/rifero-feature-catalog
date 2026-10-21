# Integración de tooling local y preparación Purchase — 21 oct 2026

**Integrado únicamente en staging; no desplegado ni migrado.**

## Resultado y autoridad

El usuario aprobó implementar la contingencia local sin gasto y autorizó por24h
los tres SHAs exactos siguientes, condicionados a controles completos, evidencia
vigente, revisión independiente y ausencia de bypass. Esa autorización humana,
no un string JSON ni el auditor, permitió la integración normal. No se modificaron
protecciones, cuotas, planes, credenciales ni main de las aplicaciones/producción.

| Candidato | Integración comprobada |
|---|---|
| backend Purchase `c0e2ecf4a52ffbacd82d16ebb6b01fb7e1e83e34` | [PR64](https://github.com/VictorManuel/rifero-backend/pull/64), incluido como ancestro de PR65; GitHub confirmó MERGED |
| backend tooling `063054183347bfd11c95a15c67849d24888d4a90` | [PR65](https://github.com/VictorManuel/rifero-backend/pull/65), merge staging `6e29387e0eb8afd2edb277f314fd98d3841f6266` |
| web tooling `c678f08f79bbe807c856e40d995f99b976bfbd93` | [PR159](https://github.com/VictorManuel/rifero/pull/159), merge staging `4e7f4994b00385e8c2192b1b4be36280c526ea03` |

Último merge: `2026-10-21T01:48:51-03:00`. Árboles de ambos merges idénticos a
sus candidatos, padres/base e inclusión de c0 comprobados. No se reescribió ningún
SHA para obtener aprobación. Los expedientes quedan consumidos por esta integración,
no son una autorización futura. Base backend previa `b310b31`, web `a0605b6`.

## Evidencias y límites

| Expediente exacto | Digest SHA256 del core revisado |
|---|---|
| PR64 c0 | `e2f052eb7ff4b926871b3bd2c23e0486929c16a01272c4d4be8be82b1bc2d6cf` |
| backend063 | `60442cc9d474078bafd7c8fd1719184cf7f3c045b7ea47aa68c439ca0b5f3ccc` |
| webc678 | `120f1019e15299858d4089ee7a6f58e776317a27f01def2c1218a9c9a0f7b7a4` |

Revisión independiente de fuente y expedientes aprobada, con hashes, comandos,
SHA/base/peer, logs privados y cleanup. Auditor `--online` PASS estructural;
`mergeAuthorized:false` siempre. Su resultado no autentica humanos ni garantiza
por sí solo la ejecución. Los digests vinculan evidencia conservada, no sustituyen
los logs ni la revisión. No se publican logs crudos ni datos personales/secretos.

- Backend ambos SHAs: unitarias385 PASS/1TLS opcional SKIP, integración78 PASS/
  2R2 SKIP; lint/tipos/build, snapshot/paridad/closure,144Python+6Purchase+10Node.
  Docker Linux/amd64 y smoke usando ID inmutable PASS. SQL Purchase local e2e
  sintético con aserciones y limpieza PASS. Ninguna base activa fue migrada.
- Tooling:43 regresiones por repo; web550 unitarias+11 safety, lint/build y gate
  de artefacto sin Prisma. Browser E2E no requerido para este diff de tooling/docs/
  workflows/propuesta aislada, sin cambios a API/UI/runtime/schema activo.
- Host macOS ARM; empaquetado Linux/amd64 emulado. R2/imágenes remotas y TLS
  opcional no acreditados. Correo externo/pagos excluidos. Red local de DB ligada
  a127.0.0.1; bridge sin masquerade no equivale a aislamiento de salida del host.
- Primer setup DB abortado antes de controles por red interna sin puerto publicado;
  diagnóstico conservado y corregido. Primer packet c0 incompleto fue bloqueado;
  se ejecutaron sus guardas exactas antes de revisar el digest final. No se borraron
  fallos históricos ni se sustituyeron por verdes de otro SHA.

## Qué cambia y qué no

Scripts opt-in para checks locales y auditor read-only, sin auto-merge/checks
falsos/runner. Se cancelan solo ejecuciones de PR obsoletas; se conservan todos
los gates y la doble verificación PR/postmerge. No se promete eliminar toda
redundancia. El VPS compartido no fue aprobado como frontera de runner aislado;
no se instaló ninguno. Recursos temporales exactos retirados, sin volúmenes ni
prune global. Guardia8GiB; pruebas pesadas secuenciales; ~24GiB libres al integrar.

Actions continúa rojo por cuota/billing **antes de asignar runner**, también en
postmerge. No se afirma CI remoto verde. La contingencia conserva controles con
aprobación humana excepcional; no relaja protecciones ni habilita gasto.
Las frases históricas «pendiente de integración/autorización» de las fuentes
congeladas describen su estado de preparación: este recibo registra el resultado
posterior sin reescribir los candidatos que el usuario autorizó.

**Compra agrupada sigue planificada/no disponible.** Solo se integró una propuesta
SQL aditiva fuera del migrador, probada localmente. Faltan implementación API/
transacción/UI y sus verificaciones; sin backfill, pagos, migración activa ni deploy.
No es cierre global de A4 ni migración productiva.

## Seguimiento

Timeline añade solo este hito operacional y conserva los cuatro anteriores,
baseline, fechas, orden, avances, estados de funcionalidades y scroll. Snapshot
por el actualizador oficial tras integrar esta curación; producción/main apps sin
cambios. La excepción de main aplica solo al catálogo público documental.
