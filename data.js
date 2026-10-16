export default {
  "generatedAt": "2026-10-16T03:50:12.731264+00:00",
  "refs": {
    "web": {
      "staging": "4e6a928856a50424fbdbba00fda708758bd01627",
      "main": "038cb0ae090f455914dbd4dc851a6ad924ba606e"
    },
    "backend": {
      "staging": "f16a25b039c10550525e89ff9ce8940abc33e586",
      "main": "6207e838c39246291d832ffde7f82a96c3a999f4"
    },
    "email-worker": {
      "staging": "9d82e8c9dba845ce91f0d7b0cd408ab2b44d57b0",
      "main": "9d82e8c9dba845ce91f0d7b0cd408ab2b44d57b0"
    }
  },
  "repos": {
    "web": "VictorManuel/rifero",
    "backend": "VictorManuel/rifero-backend",
    "email-worker": "VictorManuel/rifero-email-worker"
  },
  "features": [
    {
      "id": "F001",
      "category": "Cuentas y acceso",
      "title": "Registro público",
      "note": "Creación de cuenta con validación y aceptación legal.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/components/forms/register-form.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/components/forms/register-form.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/forms/register-form.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/components/forms/register-form.tsx#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F002",
      "category": "Cuentas y acceso",
      "title": "Ingreso por correo o usuario",
      "note": "Autenticación con contraseña y sesión privada.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/lib/auth-identity.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/lib/auth-identity.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/auth-identity.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/lib/auth-identity.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F003",
      "category": "Cuentas y acceso",
      "title": "Perfil y nombre de usuario",
      "note": "Edición del perfil; usuario global e inmutable una vez definido.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/app/api/account/profile/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/app/api/account/profile/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/account/profile/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/app/api/account/profile/route.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F004",
      "category": "Cuentas y acceso",
      "title": "Agregar y verificar correo",
      "note": "El cambio de correo se confirma con un enlace.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/app/api/account/email/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/app/api/account/email/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/account/email/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/app/api/account/email/route.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F005",
      "category": "Cuentas y acceso",
      "title": "Cambio de contraseña",
      "note": "Solicita contraseña actual y permite invalidar otras sesiones.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/app/api/account/password/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/app/api/account/password/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/account/password/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/app/api/account/password/route.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F006",
      "category": "Cuentas y acceso",
      "title": "Decisión sobre contraseña inicial",
      "note": "En el primer ingreso se puede conservar o reemplazar la contraseña inicial.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/components/initial-password-decision.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/components/initial-password-decision.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/initial-password-decision.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/components/initial-password-decision.tsx#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F007",
      "category": "Cuentas y acceso",
      "title": "Verificación de correo",
      "note": "Implementada; requiere EMAIL_VERIFICATION_ENABLED=true y entrega de emails. No se verificó el flag activo.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/app/api/email-verification/verify/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/app/api/email-verification/verify/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/email-verification/verify/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/app/api/email-verification/verify/route.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F008",
      "category": "Cuentas y acceso",
      "title": "Reenvío de verificación",
      "note": "Enlace nuevo con respuesta genérica y límites de solicitudes.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/app/api/email-verification/resend/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/app/api/email-verification/resend/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/email-verification/resend/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/app/api/email-verification/resend/route.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F009",
      "category": "Cuentas y acceso",
      "title": "Recuperación de contraseña",
      "note": "Implementada; depende de PASSWORD_RECOVERY_ENABLED=true, correo y worker. No equivale a activación.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/app/api/password/forgot/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/app/api/password/forgot/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/password/forgot/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/app/api/password/forgot/route.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F010",
      "category": "Cuentas y acceso",
      "title": "Restablecer por enlace seguro",
      "note": "Token de un solo uso y expiración; condicionado por recuperación habilitada.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/app/api/password/reset/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/app/api/password/reset/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/password/reset/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/app/api/password/reset/route.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F011",
      "category": "Cuentas y acceso",
      "title": "Mis números comprados",
      "note": "Agrupa compras por el correo de la cuenta y excluye ventas revertidas.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/app/app/my-numbers/page.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/app/app/my-numbers/page.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/app/my-numbers/page.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/app/app/my-numbers/page.tsx#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F012",
      "category": "Cuentas y acceso",
      "title": "Roles y permisos por sorteo",
      "note": "ADMIN y SELLER con validación de acceso del lado servidor.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/lib/permissions.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/lib/permissions.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/permissions.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/lib/permissions.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F013",
      "category": "Cuentas y acceso",
      "title": "Restablecimiento por SUPERADMIN",
      "note": "Soporte asigna contraseña temporal e invalida sesiones.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/app/api/admin/users/reset-password/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/app/api/admin/users/reset-password/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/admin/users/reset-password/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/app/api/admin/users/reset-password/route.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F014",
      "category": "Cuentas y acceso",
      "title": "Términos y privacidad",
      "note": "Páginas legales públicas; registro exige aceptación y edad mínima.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/lib/legal.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/lib/legal.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/legal.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/lib/legal.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F015",
      "category": "Sorteos y publicación",
      "title": "Crear un sorteo",
      "note": "Generación de números y membresía ADMIN del creador en una transacción.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/app/api/raffles/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/app/api/raffles/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/raffles/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/app/api/raffles/route.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F016",
      "category": "Sorteos y publicación",
      "title": "Editar configuración",
      "note": "Título, descripción, fecha, precio, estado y slug.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/components/forms/raffle-settings-form.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/components/forms/raffle-settings-form.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/forms/raffle-settings-form.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/components/forms/raffle-settings-form.tsx#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F017",
      "category": "Sorteos y publicación",
      "title": "Premios múltiples",
      "note": "Configuración de premios e imágenes por posición.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/lib/prizes.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/lib/prizes.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/prizes.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/lib/prizes.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F018",
      "category": "Sorteos y publicación",
      "title": "Portada y fotos de premios",
      "note": "Carga y reemplazo de imágenes del sorteo.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/lib/uploads.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/lib/uploads.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/uploads.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/lib/uploads.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F019",
      "category": "Sorteos y publicación",
      "title": "Punto focal de portada",
      "note": "Ajusta el encuadre de las miniaturas sin recortar la imagen original.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/components/image-focal-point-picker.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/components/image-focal-point-picker.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/image-focal-point-picker.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/components/image-focal-point-picker.tsx#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F020",
      "category": "Sorteos y publicación",
      "title": "Galería accesible",
      "note": "Portada y premios con flechas, miniaturas, teclado y Escape.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/components/raffle-image-gallery.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/components/raffle-image-gallery.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/raffle-image-gallery.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/components/raffle-image-gallery.tsx#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F021",
      "category": "Sorteos y publicación",
      "title": "Listado público en home",
      "note": "Sorteos ACTIVE vigentes o sin fecha; excluye borradores y moderados.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/app/page.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/app/page.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/page.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/app/page.tsx#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F022",
      "category": "Sorteos y publicación",
      "title": "Landing pública por sorteo",
      "note": "Consulta de premios, números, fecha y resultados por enlace.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/app/r/[slug]/page.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/app/r/[slug]/page.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/r/[slug]/page.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/app/r/[slug]/page.tsx#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F023",
      "category": "Sorteos y publicación",
      "title": "Vista previa de borradores",
      "note": "Landing directa disponible si está aprobada; no aparece en home.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/lib/raffle-moderation-policy.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/lib/raffle-moderation-policy.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/raffle-moderation-policy.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/lib/raffle-moderation-policy.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F024",
      "category": "Sorteos y publicación",
      "title": "Metadatos al compartir",
      "note": "Título, descripción e imagen propios en vistas previas sociales.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/app/r/[slug]/page.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/app/r/[slug]/page.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/r/[slug]/page.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/app/r/[slug]/page.tsx#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F025",
      "category": "Sorteos y publicación",
      "title": "Disponibilidad en tiempo real",
      "note": "SSE refresca la grilla después de vender o revertir. Broker en memoria: una instancia.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/lib/raffle-events.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/lib/raffle-events.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/raffle-events.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/lib/raffle-events.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F026",
      "category": "Sorteos y publicación",
      "title": "Compradores públicos por número",
      "note": "Sólo primer nombre; sin apellido, correo, teléfono ni identificadores internos.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/lib/public-raffle-page.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/lib/public-raffle-page.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/public-raffle-page.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/lib/public-raffle-page.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F027",
      "category": "Sorteos y publicación",
      "title": "Panel privado y métricas",
      "note": "Números vendidos/disponibles y estadísticas según rol.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/app/app/raffles/[raffleId]/page.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/app/app/raffles/[raffleId]/page.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/app/raffles/[raffleId]/page.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/app/app/raffles/[raffleId]/page.tsx#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F028",
      "category": "Sorteos y publicación",
      "title": "Navegación contextual móvil",
      "note": "Accesos a resumen, ventas, equipo y sorteo según permisos.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/components/raffle-context-navigation.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/components/raffle-context-navigation.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/raffle-context-navigation.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/components/raffle-context-navigation.tsx#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F029",
      "category": "Sorteos y publicación",
      "title": "Modificar cantidad de números",
      "note": "Amplía o reduce sólo el tramo libre; protege ventas, reservas y asignaciones.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/app/api/raffles/[raffleId]/number-count/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/app/api/raffles/[raffleId]/number-count/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/raffles/[raffleId]/number-count/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/app/api/raffles/[raffleId]/number-count/route.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F030",
      "category": "Sorteos y publicación",
      "title": "Cancelar sorteo",
      "note": "Sólo ADMIN; preserva historial y bloquea ventas posteriores.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/app/api/raffles/[raffleId]/cancel/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/app/api/raffles/[raffleId]/cancel/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/raffles/[raffleId]/cancel/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/app/api/raffles/[raffleId]/cancel/route.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F031",
      "category": "Sorteos y publicación",
      "title": "Historial de sorteos terminados",
      "note": "Distingue sorteos en curso de sorteados y cancelados.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/app/app/page.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/app/app/page.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/app/page.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/app/app/page.tsx#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F032",
      "category": "Equipo y vendedores",
      "title": "Alta de vendedores",
      "note": "Crea cuenta o reutiliza existente; correo opcional y usuario obligatorio.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/components/forms/seller-form.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/components/forms/seller-form.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/forms/seller-form.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/components/forms/seller-form.tsx#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F033",
      "category": "Equipo y vendedores",
      "title": "Importación masiva CSV",
      "note": "Valida todas las filas antes de crear; importación atómica.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/app/api/raffles/[raffleId]/sellers/import/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/app/api/raffles/[raffleId]/sellers/import/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/raffles/[raffleId]/sellers/import/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/app/api/raffles/[raffleId]/sellers/import/route.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F034",
      "category": "Equipo y vendedores",
      "title": "Modo de venta libre o restringido",
      "note": "Libres puede vender cualquier disponible; restringido sólo asignados propios.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/components/seller-selling-mode-manager.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/components/seller-selling-mode-manager.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/seller-selling-mode-manager.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/components/seller-selling-mode-manager.tsx#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F035",
      "category": "Equipo y vendedores",
      "title": "Asignación por cantidad o números",
      "note": "Prioriza bloques consecutivos o permite elegir números específicos.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/lib/number-allocation.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/lib/number-allocation.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/number-allocation.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/lib/number-allocation.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F036",
      "category": "Equipo y vendedores",
      "title": "Reasignar números disponibles",
      "note": "Mueve asignaciones sin alterar ventas ni números vendidos.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/app/api/raffles/[raffleId]/number-assignments/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/app/api/raffles/[raffleId]/number-assignments/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/raffles/[raffleId]/number-assignments/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/app/api/raffles/[raffleId]/number-assignments/route.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F037",
      "category": "Equipo y vendedores",
      "title": "Desasignación de números",
      "note": "Libera sólo disponibles y muestra vendidos como referencia.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/components/seller-number-unassignment-manager.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/components/seller-number-unassignment-manager.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/seller-number-unassignment-manager.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/components/seller-number-unassignment-manager.tsx#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F038",
      "category": "Equipo y vendedores",
      "title": "Métricas del equipo",
      "note": "Ventas vigentes, participación, última venta y avance de cupos.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/lib/seller-team-stats.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/lib/seller-team-stats.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/seller-team-stats.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/lib/seller-team-stats.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F039",
      "category": "Equipo y vendedores",
      "title": "Detalle de ventas por vendedor",
      "note": "Modal privado consultable por ADMIN desde Equipo.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/components/seller-sales-modal.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/components/seller-sales-modal.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/seller-sales-modal.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/components/seller-sales-modal.tsx#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F040",
      "category": "Equipo y vendedores",
      "title": "Ventas fuera de asignación",
      "note": "Señala ventas vigentes sobre números no asignados al vendedor actual.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/lib/out-of-assignment-sales.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/lib/out-of-assignment-sales.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/out-of-assignment-sales.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/lib/out-of-assignment-sales.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F041",
      "category": "Equipo y vendedores",
      "title": "Compartir mis números",
      "note": "Enlace propio con grilla y resultados filtrados a la asignación vigente.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/components/share-seller-numbers-button.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/components/share-seller-numbers-button.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/share-seller-numbers-button.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/components/share-seller-numbers-button.tsx#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F042",
      "category": "Equipo y vendedores",
      "title": "Aceptar invitaciones por correo",
      "note": "Código existente; SELLER_INVITATIONS_ENABLED=false por defecto. No se afirma flujo activo.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/app/api/invitations/accept/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/app/api/invitations/accept/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/invitations/accept/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/app/api/invitations/accept/route.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F043",
      "category": "Equipo y vendedores",
      "title": "Reenviar o revocar invitaciones",
      "note": "Código existente y condicionado por flag; no supone alta por invitación habilitada en UI.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/components/invitation-actions.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/components/invitation-actions.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/invitation-actions.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/components/invitation-actions.tsx#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F044",
      "category": "Ventas y comprobantes",
      "title": "Venta simple y múltiple",
      "note": "Una operación puede vender uno o varios números al mismo comprador.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/components/forms/sale-form.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/components/forms/sale-form.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/forms/sale-form.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/components/forms/sale-form.tsx#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F045",
      "category": "Ventas y comprobantes",
      "title": "Selección desde grilla",
      "note": "Agregar y quitar números; total y selección visibles antes de confirmar.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/components/sale-registration.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/components/sale-registration.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/sale-registration.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/components/sale-registration.tsx#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F046",
      "category": "Ventas y comprobantes",
      "title": "Modal de venta por pasos",
      "note": "Registro desde dashboard o panel; ruta de venta alternativa conservada.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/components/sale-modal.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/components/sale-modal.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/sale-modal.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/components/sale-modal.tsx#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F047",
      "category": "Ventas y comprobantes",
      "title": "Reservas temporales",
      "note": "Protección temporal de números mientras se cargan datos; reserva de 5 minutos documentada.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/app/api/raffles/[raffleId]/reservations/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/app/api/raffles/[raffleId]/reservations/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/raffles/[raffleId]/reservations/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/app/api/raffles/[raffleId]/reservations/route.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F048",
      "category": "Ventas y comprobantes",
      "title": "Prevención de doble venta",
      "note": "Validación y actualización transaccional de disponibilidad.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/app/api/raffles/[raffleId]/sales/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/app/api/raffles/[raffleId]/sales/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/raffles/[raffleId]/sales/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/app/api/raffles/[raffleId]/sales/route.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F049",
      "category": "Ventas y comprobantes",
      "title": "Datos del comprador",
      "note": "Datos de contacto privados y comprador compartido en venta múltiple.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/lib/validators.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/lib/validators.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/validators.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/lib/validators.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F050",
      "category": "Ventas y comprobantes",
      "title": "Comprobante al vender",
      "note": "Adjunto opcional de imagen o PDF, hasta 5 MB; no es un pago online.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/components/sale-receipt-field.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/components/sale-receipt-field.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/sale-receipt-field.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/components/sale-receipt-field.tsx#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F051",
      "category": "Ventas y comprobantes",
      "title": "Adjuntar comprobante después",
      "note": "ADMIN o vendedor de su venta vigente, con validación de permisos.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/app/api/raffles/[raffleId]/sales/[saleId]/receipt/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/app/api/raffles/[raffleId]/sales/[saleId]/receipt/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/raffles/[raffleId]/sales/[saleId]/receipt/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/app/api/raffles/[raffleId]/sales/[saleId]/receipt/route.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F052",
      "category": "Ventas y comprobantes",
      "title": "Consulta privada de comprobantes",
      "note": "Archivo protegido; no se publica con los datos de la landing.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/app/api/raffles/[raffleId]/receipts/[receiptId]/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/app/api/raffles/[raffleId]/receipts/[receiptId]/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/raffles/[raffleId]/receipts/[receiptId]/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/app/api/raffles/[raffleId]/receipts/[receiptId]/route.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F053",
      "category": "Ventas y comprobantes",
      "title": "Historial de ventas",
      "note": "Consulta por rol y filtro; conserva ventas revertidas.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/app/app/raffles/[raffleId]/sales/page.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/app/app/raffles/[raffleId]/sales/page.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/app/raffles/[raffleId]/sales/page.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/app/app/raffles/[raffleId]/sales/page.tsx#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F054",
      "category": "Ventas y comprobantes",
      "title": "Ordenar ventas",
      "note": "Ordenamiento del historial de ventas.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/lib/sale-sorting.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/lib/sale-sorting.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/sale-sorting.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/lib/sale-sorting.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F055",
      "category": "Ventas y comprobantes",
      "title": "Exportar ventas",
      "note": "Exportación textual con datos privados sólo para usuarios autorizados.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/app/api/raffles/[raffleId]/sales/export/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/app/api/raffles/[raffleId]/sales/export/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/raffles/[raffleId]/sales/export/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/app/api/raffles/[raffleId]/sales/export/route.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F056",
      "category": "Ventas y comprobantes",
      "title": "Revertir una venta",
      "note": "Preserva historial y libera el número con control de acceso.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/app/api/raffles/[raffleId]/sales/[saleId]/cancel/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/app/api/raffles/[raffleId]/sales/[saleId]/cancel/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/raffles/[raffleId]/sales/[saleId]/cancel/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/app/api/raffles/[raffleId]/sales/[saleId]/cancel/route.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F057",
      "category": "Ventas y comprobantes",
      "title": "Compra agrupada con Purchase",
      "note": "La venta múltiple existe, pero aún no tiene una entidad Purchase para agrupar compras y pagos.",
      "staging": false,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 97,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/ROADMAP_EXECUTION_PLAN.md#L97",
          "match": "Purchase",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 97,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/ROADMAP_EXECUTION_PLAN.md#L97",
          "match": "Purchase",
          "kind": "plan"
        }
      }
    },
    {
      "id": "F058",
      "category": "Sorteo y resultados",
      "title": "Sorteo de prueba y oficial",
      "note": "Distingue simulación de ejecución oficial y su estado.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/components/forms/raffle-draw-form.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/components/forms/raffle-draw-form.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/forms/raffle-draw-form.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/components/forms/raffle-draw-form.tsx#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F059",
      "category": "Sorteo y resultados",
      "title": "Aleatoriedad segura y auditable",
      "note": "HMAC-SHA256, seed y manifiesto de candidatos para reproducibilidad.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/lib/draw-random.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/lib/draw-random.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/draw-random.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/lib/draw-random.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F060",
      "category": "Sorteo y resultados",
      "title": "Historial de ejecuciones",
      "note": "Conserva sorteos y resultados por premio.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/app/api/raffles/[raffleId]/draws/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/app/api/raffles/[raffleId]/draws/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/raffles/[raffleId]/draws/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/app/api/raffles/[raffleId]/draws/route.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F061",
      "category": "Sorteo y resultados",
      "title": "Exportar resultados",
      "note": "Archivo de resultados preservando las posiciones lógicas de premios.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/app/api/raffles/[raffleId]/draws/export/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/app/api/raffles/[raffleId]/draws/export/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/raffles/[raffleId]/draws/export/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/app/api/raffles/[raffleId]/draws/export/route.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F062",
      "category": "Sorteo y resultados",
      "title": "Publicación de ganadores",
      "note": "Publica premio, posición y número oficial sin identidad del comprador.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/lib/public-raffle-page.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/lib/public-raffle-page.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/public-raffle-page.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/lib/public-raffle-page.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F063",
      "category": "Administración y seguridad",
      "title": "Gestión global de usuarios",
      "note": "Listado y búsqueda sólo para SUPERADMIN.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/app/app/admin/users/page.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/app/app/admin/users/page.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/app/admin/users/page.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/app/app/admin/users/page.tsx#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F064",
      "category": "Administración y seguridad",
      "title": "Moderación global de sorteos",
      "note": "Aprobar, ocultar, rechazar o solicitar cambios con motivo obligatorio.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/components/raffle-moderation-form.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/components/raffle-moderation-form.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/raffle-moderation-form.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/components/raffle-moderation-form.tsx#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F065",
      "category": "Administración y seguridad",
      "title": "Restricción de sorteos rechazados",
      "note": "Sólo el propietario conserva acceso privado; inspección SUPERADMIN.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/lib/raffle-inspection.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/lib/raffle-inspection.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/raffle-inspection.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/lib/raffle-inspection.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F066",
      "category": "Administración y seguridad",
      "title": "Registro de actividad",
      "note": "Cronología privada del sorteo con permisos por rol.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/lib/raffle-activity.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/lib/raffle-activity.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/raffle-activity.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/lib/raffle-activity.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F067",
      "category": "Administración y seguridad",
      "title": "Auditoría persistente",
      "note": "AuditLog sanitizado; mutaciones sensibles auditadas en transacción.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/lib/audit.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/lib/audit.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/audit.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/lib/audit.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F068",
      "category": "Administración y seguridad",
      "title": "Rate limiting persistente",
      "note": "Límites PostgreSQL para autenticación, uploads y operaciones sensibles.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/lib/rate-limit.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/lib/rate-limit.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/rate-limit.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/lib/rate-limit.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F069",
      "category": "Administración y seguridad",
      "title": "Tokens de un solo uso",
      "note": "Hashes, expiración y consumo seguro para flujos de cuenta.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/lib/tokens.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/lib/tokens.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/tokens.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/lib/tokens.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F070",
      "category": "Administración y seguridad",
      "title": "Validación fuerte de imágenes",
      "note": "Tipo real, peso, dimensiones y normalización con Sharp.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/lib/uploads.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/lib/uploads.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/uploads.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/lib/uploads.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F071",
      "category": "Administración y seguridad",
      "title": "Validación de comprobantes",
      "note": "Contenido real, formatos y tamaño con descarga privada.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/lib/sale-receipts.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/lib/sale-receipts.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/sale-receipts.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/lib/sale-receipts.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F072",
      "category": "Administración y seguridad",
      "title": "Modo mantenimiento sin DB",
      "note": "Servidor mínimo 503 antes de Prisma; health check operativo.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "scripts/start-deploy.mjs",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/scripts/start-deploy.mjs#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "scripts/start-deploy.mjs",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/scripts/start-deploy.mjs#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F073",
      "category": "Administración y seguridad",
      "title": "Mantenimiento de auditoría",
      "note": "Retención y limpieza con dry-run; existencia de código no implica ejecución programada.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/lib/maintenance.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/lib/maintenance.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/maintenance.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/lib/maintenance.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F074",
      "category": "Administración y seguridad",
      "title": "Logging estructurado",
      "note": "Registro de errores operativos sin secretos ni PII innecesaria.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/lib/logger.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/lib/logger.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/logger.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/lib/logger.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F075",
      "category": "Administración y seguridad",
      "title": "Explorador global de auditoría",
      "note": "AuditLog existe; falta una consola global completa con filtros y búsqueda.",
      "staging": false,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 1319,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/ROADMAP_EXECUTION_PLAN.md#L1319",
          "match": "Auditoria Completa",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 1303,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/ROADMAP_EXECUTION_PLAN.md#L1303",
          "match": "Auditoria Completa",
          "kind": "plan"
        }
      }
    },
    {
      "id": "F076",
      "category": "Administración y seguridad",
      "title": "Verificación de exposición RSC",
      "note": "SEC.EDGE.1: revisión de versión realmente desplegada y superficie expuesta.",
      "staging": false,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "docs/CLOUDFLARE_SECURITY_REVIEW.md",
          "line": 58,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/docs/CLOUDFLARE_SECURITY_REVIEW.md#L58",
          "match": "SEC.EDGE.1",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/ROADMAP_EXECUTION_PLAN.md#L1",
          "match": null,
          "kind": "general-plan"
        }
      }
    },
    {
      "id": "F077",
      "category": "Administración y seguridad",
      "title": "Aislamiento del origen y administración",
      "note": "SEC.EDGE.2: cierre de acceso directo al origen y panel del VPS.",
      "staging": false,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "docs/CLOUDFLARE_SECURITY_REVIEW.md",
          "line": 70,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/docs/CLOUDFLARE_SECURITY_REVIEW.md#L70",
          "match": "SEC.EDGE.2",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/ROADMAP_EXECUTION_PLAN.md#L1",
          "match": null,
          "kind": "general-plan"
        }
      }
    },
    {
      "id": "F078",
      "category": "Administración y seguridad",
      "title": "TLS Full (strict) validado",
      "note": "SEC.EDGE.3: configuración y pruebas previas al corte.",
      "staging": false,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "docs/CLOUDFLARE_SECURITY_REVIEW.md",
          "line": 84,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/docs/CLOUDFLARE_SECURITY_REVIEW.md#L84",
          "match": "SEC.EDGE.3",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/ROADMAP_EXECUTION_PLAN.md#L1",
          "match": null,
          "kind": "general-plan"
        }
      }
    },
    {
      "id": "F079",
      "category": "Administración y seguridad",
      "title": "Antiabuso en Cloudflare",
      "note": "SEC.EDGE.4: reglas que no rompan auth, SSE ni pagos.",
      "staging": false,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "docs/CLOUDFLARE_SECURITY_REVIEW.md",
          "line": 97,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/docs/CLOUDFLARE_SECURITY_REVIEW.md#L97",
          "match": "SEC.EDGE.4",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/ROADMAP_EXECUTION_PLAN.md#L1",
          "match": null,
          "kind": "general-plan"
        }
      }
    },
    {
      "id": "F080",
      "category": "Administración y seguridad",
      "title": "Alertas y runbook de incidentes",
      "note": "SEC.EDGE.5: observación, evidencias y recuperación.",
      "staging": false,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "docs/CLOUDFLARE_SECURITY_REVIEW.md",
          "line": 112,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/docs/CLOUDFLARE_SECURITY_REVIEW.md#L112",
          "match": "SEC.EDGE.5",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/ROADMAP_EXECUTION_PLAN.md#L1",
          "match": null,
          "kind": "general-plan"
        }
      }
    },
    {
      "id": "F081",
      "category": "Emails transaccionales",
      "title": "Cola persistente EmailJob",
      "note": "Los flujos de cuenta encolan mensajes para no depender del envío inmediato.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/lib/email-jobs.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/lib/email-jobs.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/email-jobs.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/lib/email-jobs.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F082",
      "category": "Emails transaccionales",
      "title": "Proveedor Resend",
      "note": "Código de entrega real y proveedor console de desarrollo. La configuración activa no se inspeccionó.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/lib/email/resend-provider.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/lib/email/resend-provider.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/email/resend-provider.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/lib/email/resend-provider.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F083",
      "category": "Emails transaccionales",
      "title": "Plantillas seguras",
      "note": "Templates de cuenta y tokens; escape de contenido y validación de URLs.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/lib/email/templates.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/lib/email/templates.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/email/templates.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/lib/email/templates.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F084",
      "category": "Emails transaccionales",
      "title": "Worker independiente",
      "note": "Servicio separado, con build y ciclo de release propios.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "email-worker",
          "path": "package.json",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero-email-worker/blob/9d82e8c9dba845ce91f0d7b0cd408ab2b44d57b0/package.json#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "email-worker",
          "path": "package.json",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero-email-worker/blob/9d82e8c9dba845ce91f0d7b0cd408ab2b44d57b0/package.json#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F085",
      "category": "Emails transaccionales",
      "title": "Reintentos, locks y backoff",
      "note": "Procesamiento de cola independiente; consultar configuración del worker para su política concreta.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "email-worker",
          "path": "src/worker.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero-email-worker/blob/9d82e8c9dba845ce91f0d7b0cd408ab2b44d57b0/src/worker.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "email-worker",
          "path": "src/worker.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero-email-worker/blob/9d82e8c9dba845ce91f0d7b0cd408ab2b44d57b0/src/worker.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F086",
      "category": "Emails transaccionales",
      "title": "Email de confirmación de compra",
      "note": "Pendiente; depende de agrupación Purchase y definición de entrega.",
      "staging": false,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 15,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/ROADMAP_EXECUTION_PLAN.md#L15",
          "match": "Emails",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 15,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/ROADMAP_EXECUTION_PLAN.md#L15",
          "match": "Emails",
          "kind": "plan"
        }
      }
    },
    {
      "id": "F087",
      "category": "Emails transaccionales",
      "title": "Email de comprobante o resumen",
      "note": "Adjuntar un archivo a una venta no envía un resumen automáticamente.",
      "staging": false,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 15,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/ROADMAP_EXECUTION_PLAN.md#L15",
          "match": "Emails",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 15,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/ROADMAP_EXECUTION_PLAN.md#L15",
          "match": "Emails",
          "kind": "plan"
        }
      }
    },
    {
      "id": "F088",
      "category": "Emails transaccionales",
      "title": "Email de ganadores",
      "note": "Pendiente; no hay envío automático agregado por A2.5.",
      "staging": false,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 15,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/ROADMAP_EXECUTION_PLAN.md#L15",
          "match": "Emails",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 15,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/ROADMAP_EXECUTION_PLAN.md#L15",
          "match": "Emails",
          "kind": "plan"
        }
      }
    },
    {
      "id": "F089",
      "category": "Emails transaccionales",
      "title": "Emails de estado de pago",
      "note": "Pendiente de pagos, conciliación y contratos de eventos.",
      "staging": false,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 15,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/ROADMAP_EXECUTION_PLAN.md#L15",
          "match": "Emails",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 15,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/ROADMAP_EXECUTION_PLAN.md#L15",
          "match": "Emails",
          "kind": "plan"
        }
      }
    },
    {
      "id": "F090",
      "category": "Emails transaccionales",
      "title": "Consola operativa de emails",
      "note": "Vista global de cola, fallos y reintentos aún pendiente.",
      "staging": false,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 15,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/ROADMAP_EXECUTION_PLAN.md#L15",
          "match": "Emails",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 15,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/ROADMAP_EXECUTION_PLAN.md#L15",
          "match": "Emails",
          "kind": "plan"
        }
      }
    },
    {
      "id": "F091",
      "category": "Arquitectura e infraestructura",
      "title": "API backend independiente",
      "note": "Next.js API-only con dominio separado; su presencia no implica corte de tráfico productivo.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "backend",
          "path": "package.json",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero-backend/blob/f16a25b039c10550525e89ff9ce8940abc33e586/package.json#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "backend",
          "path": "package.json",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero-backend/blob/6207e838c39246291d832ffde7f82a96c3a999f4/package.json#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F092",
      "category": "Arquitectura e infraestructura",
      "title": "Contratos HTTP v1",
      "note": "Contratos versionados para lecturas y mutaciones entre servicios.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/contracts/http/v1/index.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/contracts/http/v1/index.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/contracts/http/v1/index.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/contracts/http/v1/index.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F093",
      "category": "Arquitectura e infraestructura",
      "title": "Adaptadores legacy / shadow / backend",
      "note": "Selección por capacidad durante la transición; no se infiere activación a partir del código.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/lib/backend-api.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/lib/backend-api.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/backend-api.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/lib/backend-api.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      }
    },
    {
      "id": "F094",
      "category": "Arquitectura e infraestructura",
      "title": "Bridge de sesión firmado",
      "note": "Emisión/validación delegable al backend, con legacy como default.",
      "staging": true,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/lib/session-bridge.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/lib/session-bridge.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/session-bridge.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/lib/session-bridge.ts#L1",
          "match": null,
          "kind": "absent"
        }
      }
    },
    {
      "id": "F095",
      "category": "Arquitectura e infraestructura",
      "title": "Proxy runtime de archivos y SSE",
      "note": "A2.6: backend puede poseer archivos, comprobantes y stream; web hace proxy.",
      "staging": true,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/lib/backend-runtime.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/lib/backend-runtime.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/backend-runtime.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/lib/backend-runtime.ts#L1",
          "match": null,
          "kind": "absent"
        }
      }
    },
    {
      "id": "F096",
      "category": "Arquitectura e infraestructura",
      "title": "Storage privado R2 en backend",
      "note": "Implementación A2.6 y evidencia de ensayo staging; no implica R2 productivo.",
      "staging": true,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "backend",
          "path": "src/infrastructure/storage/r2-object-store.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero-backend/blob/f16a25b039c10550525e89ff9ce8940abc33e586/src/infrastructure/storage/r2-object-store.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "backend",
          "path": "src/infrastructure/storage/r2-object-store.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero-backend/blob/6207e838c39246291d832ffde7f82a96c3a999f4/src/infrastructure/storage/r2-object-store.ts#L1",
          "match": null,
          "kind": "absent"
        }
      }
    },
    {
      "id": "F097",
      "category": "Arquitectura e infraestructura",
      "title": "Política CI de migrador único",
      "note": "A2.7: política y validación de schema/SQL; web aún conserva Prisma.",
      "staging": true,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "scripts/migration-policy.mjs",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/scripts/migration-policy.mjs#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "scripts/migration-policy.mjs",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/scripts/migration-policy.mjs#L1",
          "match": null,
          "kind": "absent"
        }
      }
    },
    {
      "id": "F098",
      "category": "Arquitectura e infraestructura",
      "title": "Lista pública de home vía backend",
      "note": "A2.7: adaptador de home; integración de rama no implica deploy ni flag activo.",
      "staging": true,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/contracts/http/v1/public-upcoming-raffles.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/contracts/http/v1/public-upcoming-raffles.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/contracts/http/v1/public-upcoming-raffles.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/contracts/http/v1/public-upcoming-raffles.ts#L1",
          "match": null,
          "kind": "absent"
        }
      }
    },
    {
      "id": "F099",
      "category": "Arquitectura e infraestructura",
      "title": "Lista privada de sorteos vía backend",
      "note": "A2.7: contrato y adaptador de dashboard; no equivale a retirar Prisma del resto de web.",
      "staging": true,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/lib/private-reads.ts",
          "line": 16,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/src/lib/private-reads.ts#L16",
          "match": "fetchUserRaffleMembershipsReadFromBackend",
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/private-reads.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/src/lib/private-reads.ts#L1",
          "match": "fetchUserRaffleMembershipsReadFromBackend",
          "kind": "absent"
        }
      }
    },
    {
      "id": "F100",
      "category": "Arquitectura e infraestructura",
      "title": "Frontend independiente sin Prisma",
      "note": "A3 pendiente: web conserva acceso directo a datos y dependencias servidor.",
      "staging": false,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 351,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/ROADMAP_EXECUTION_PLAN.md#L351",
          "match": "A3",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 356,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/ROADMAP_EXECUTION_PLAN.md#L356",
          "match": "A3",
          "kind": "plan"
        }
      }
    },
    {
      "id": "F101",
      "category": "Arquitectura e infraestructura",
      "title": "Backend como único acceso a datos",
      "note": "A2 no cerrada: faltan callers y ownership completos; no confundir con API independiente existente.",
      "staging": false,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 1718,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/ROADMAP_EXECUTION_PLAN.md#L1718",
          "match": "Inventario de persistencia",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/ROADMAP_EXECUTION_PLAN.md#L1",
          "match": null,
          "kind": "general-plan"
        }
      }
    },
    {
      "id": "F102",
      "category": "Arquitectura e infraestructura",
      "title": "Corte productivo al VPS",
      "note": "A4: pendiente de gates A2/A3, migración de datos y autorización.",
      "staging": false,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 369,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/ROADMAP_EXECUTION_PLAN.md#L369",
          "match": "A4",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 363,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/ROADMAP_EXECUTION_PLAN.md#L363",
          "match": "A4",
          "kind": "plan"
        }
      }
    },
    {
      "id": "F103",
      "category": "Arquitectura e infraestructura",
      "title": "Realtime entre múltiples réplicas",
      "note": "Redis/PubSub o equivalente pendiente; SSE actual usa memoria.",
      "staging": false,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 12,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/ROADMAP_EXECUTION_PLAN.md#L12",
          "match": "Redis",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 12,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/ROADMAP_EXECUTION_PLAN.md#L12",
          "match": "Redis",
          "kind": "plan"
        }
      }
    },
    {
      "id": "F104",
      "category": "Arquitectura e infraestructura",
      "title": "Observabilidad centralizada",
      "note": "Integración Sentry/pino y alertas unificadas aún pendiente.",
      "staging": false,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 571,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/ROADMAP_EXECUTION_PLAN.md#L571",
          "match": "Sentry",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 555,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/ROADMAP_EXECUTION_PLAN.md#L555",
          "match": "Sentry",
          "kind": "plan"
        }
      }
    },
    {
      "id": "F105",
      "category": "Analytics y publicidad",
      "title": "Analytics de navegación",
      "note": "Proveedor de métricas de uso pendiente; distinto de las métricas operativas ya visibles.",
      "staging": false,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 18,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/ROADMAP_EXECUTION_PLAN.md#L18",
          "match": "Analytics",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 18,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/ROADMAP_EXECUTION_PLAN.md#L18",
          "match": "Analytics",
          "kind": "plan"
        }
      }
    },
    {
      "id": "F106",
      "category": "Analytics y publicidad",
      "title": "Embudo y conversión",
      "note": "Eventos de visita, selección y conversión sin datos personales.",
      "staging": false,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 18,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/ROADMAP_EXECUTION_PLAN.md#L18",
          "match": "Analytics",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 18,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/ROADMAP_EXECUTION_PLAN.md#L18",
          "match": "Analytics",
          "kind": "plan"
        }
      }
    },
    {
      "id": "F107",
      "category": "Analytics y publicidad",
      "title": "Integración AdSense",
      "note": "Sin script/publisher activo; requiere aprobación y validación de políticas.",
      "staging": false,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 484,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/ROADMAP_EXECUTION_PLAN.md#L484",
          "match": "AdSense",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 468,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/ROADMAP_EXECUTION_PLAN.md#L468",
          "match": "AdSense",
          "kind": "plan"
        }
      }
    },
    {
      "id": "F108",
      "category": "Analytics y publicidad",
      "title": "Control de anuncios por ruta",
      "note": "Flags, exclusión de áreas privadas y apagado rápido pendientes.",
      "staging": false,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 22,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/ROADMAP_EXECUTION_PLAN.md#L22",
          "match": "Ads",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 22,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/ROADMAP_EXECUTION_PLAN.md#L22",
          "match": "Ads",
          "kind": "plan"
        }
      }
    },
    {
      "id": "F109",
      "category": "Analytics y publicidad",
      "title": "Consentimiento publicitario",
      "note": "Política y consentimiento pendientes antes de publicidad.",
      "staging": false,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 508,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/ROADMAP_EXECUTION_PLAN.md#L508",
          "match": "consentimiento",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 492,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/ROADMAP_EXECUTION_PLAN.md#L492",
          "match": "consentimiento",
          "kind": "plan"
        }
      }
    },
    {
      "id": "F110",
      "category": "Pagos y lotería · roadmap",
      "title": "Compra de talonario especial",
      "note": "Especificado: ARS 10.000, una rifa monetizada y hasta 1.000 números. No implementado.",
      "staging": false,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "docs/MERCADOPAGO_LOTTERY_SPEC.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/docs/MERCADOPAGO_LOTTERY_SPEC.md#L1",
          "match": null,
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/ROADMAP_EXECUTION_PLAN.md#L1",
          "match": null,
          "kind": "general-plan"
        }
      }
    },
    {
      "id": "F111",
      "category": "Pagos y lotería · roadmap",
      "title": "Vincular cuenta Mercado Pago",
      "note": "OAuth del organizador y tokens sólo del lado servidor. No implementado.",
      "staging": false,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "docs/MERCADOPAGO_LOTTERY_SPEC.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/docs/MERCADOPAGO_LOTTERY_SPEC.md#L1",
          "match": null,
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/ROADMAP_EXECUTION_PLAN.md#L1",
          "match": null,
          "kind": "general-plan"
        }
      }
    },
    {
      "id": "F112",
      "category": "Pagos y lotería · roadmap",
      "title": "Checkout de uno o varios números",
      "note": "Cobro al organizador; sin comisión Rifero por número. Pendiente y sujeto a gates.",
      "staging": false,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "docs/MERCADOPAGO_LOTTERY_SPEC.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/docs/MERCADOPAGO_LOTTERY_SPEC.md#L1",
          "match": null,
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/ROADMAP_EXECUTION_PLAN.md#L1",
          "match": null,
          "kind": "general-plan"
        }
      }
    },
    {
      "id": "F113",
      "category": "Pagos y lotería · roadmap",
      "title": "Conciliación y webhooks idempotentes",
      "note": "Validar destinatario, importe, moneda y notificaciones; retorno del navegador no confirma pago.",
      "staging": false,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "docs/MERCADOPAGO_LOTTERY_SPEC.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/docs/MERCADOPAGO_LOTTERY_SPEC.md#L1",
          "match": null,
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/ROADMAP_EXECUTION_PLAN.md#L1",
          "match": null,
          "kind": "general-plan"
        }
      }
    },
    {
      "id": "F114",
      "category": "Pagos y lotería · roadmap",
      "title": "Reembolsos y contracargos",
      "note": "Reglas y manejo de devoluciones aún por definir e implementar.",
      "staging": false,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "docs/MERCADOPAGO_LOTTERY_SPEC.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/docs/MERCADOPAGO_LOTTERY_SPEC.md#L1",
          "match": null,
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/ROADMAP_EXECUTION_PLAN.md#L1",
          "match": null,
          "kind": "general-plan"
        }
      }
    },
    {
      "id": "F115",
      "category": "Pagos y lotería · roadmap",
      "title": "Elección de Quiniela de la Ciudad",
      "note": "Alternativa futura al sorteo propio, también para rifas sin pago.",
      "staging": false,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "docs/MERCADOPAGO_LOTTERY_SPEC.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/docs/MERCADOPAGO_LOTTERY_SPEC.md#L1",
          "match": null,
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/ROADMAP_EXECUTION_PLAN.md#L1",
          "match": null,
          "kind": "general-plan"
        }
      }
    },
    {
      "id": "F116",
      "category": "Pagos y lotería · roadmap",
      "title": "Calendario oficial de sorteos",
      "note": "Fuente aprobada, zona horaria y suspensiones; no asumir calendario fijo.",
      "staging": false,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "docs/MERCADOPAGO_LOTTERY_SPEC.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/docs/MERCADOPAGO_LOTTERY_SPEC.md#L1",
          "match": null,
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/ROADMAP_EXECUTION_PLAN.md#L1",
          "match": null,
          "kind": "general-plan"
        }
      }
    },
    {
      "id": "F117",
      "category": "Pagos y lotería · roadmap",
      "title": "Extracto completo de 20 posiciones",
      "note": "Ingesta validada conservando ceros iniciales y evidencia oficial.",
      "staging": false,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "docs/MERCADOPAGO_LOTTERY_SPEC.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/docs/MERCADOPAGO_LOTTERY_SPEC.md#L1",
          "match": null,
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/ROADMAP_EXECUTION_PLAN.md#L1",
          "match": null,
          "kind": "general-plan"
        }
      }
    },
    {
      "id": "F118",
      "category": "Pagos y lotería · roadmap",
      "title": "Adjudicación por lotería",
      "note": "Premios 1/2/3 con posiciones 1/2/3; número no vendido o fuera de rango deja vacante.",
      "staging": false,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "docs/MERCADOPAGO_LOTTERY_SPEC.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/docs/MERCADOPAGO_LOTTERY_SPEC.md#L1",
          "match": null,
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/ROADMAP_EXECUTION_PLAN.md#L1",
          "match": null,
          "kind": "general-plan"
        }
      }
    },
    {
      "id": "F119",
      "category": "Pagos y lotería · roadmap",
      "title": "Tipo de sorteo inmutable tras venta",
      "note": "Bloqueo UI/API posterior a la primera venta; reglas exactas aún pendientes.",
      "staging": false,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "docs/MERCADOPAGO_LOTTERY_SPEC.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/4e6a928856a50424fbdbba00fda708758bd01627/docs/MERCADOPAGO_LOTTERY_SPEC.md#L1",
          "match": null,
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/038cb0ae090f455914dbd4dc851a6ad924ba606e/ROADMAP_EXECUTION_PLAN.md#L1",
          "match": null,
          "kind": "general-plan"
        }
      }
    }
  ],
  "method": "Revisión de código y documentación versionados; checks = implementación presente, no activación ni despliegue. Pendientes curados del roadmap y especificaciones. No consulta DB, flags activos ni infraestructura."
};
