export default {
  "generatedAt": "2026-10-30T02:04:36.535776+00:00",
  "refs": {
    "web": {
      "staging": "662672c3d83764696e8e90416ab5c2807579dde9",
      "main": "ea00a2889f5150e5e3d112de333389ebb0313bf8"
    },
    "backend": {
      "staging": "a087ca5093e1d686310a6eea914847c3164c36eb",
      "main": "a9c0087c8fb326e346065a63c8bc3a6ef1d34538"
    },
    "email-worker": {
      "staging": "2e74fab8902792c79df8b82d234c27a4bec2335a",
      "main": "bb39b1b5f68c9f148def542be4a51dedcc0c1664"
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/components/forms/register-form.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/forms/register-form.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/components/forms/register-form.tsx#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-ff7dc8902b8f5d47864a",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "repo": "backend",
          "path": "src/infrastructure/prisma/auth-identity-repository.ts",
          "line": 59,
          "url": "https://github.com/VictorManuel/rifero-backend/blob/a087ca5093e1d686310a6eea914847c3164c36eb/src/infrastructure/prisma/auth-identity-repository.ts#L59",
          "match": "identifier.includes(\"@\") ? { email: identifier } : { username: identifier }",
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/auth-identity.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/lib/auth-identity.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-464f70e88263b2876870",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/app/api/account/profile/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/account/profile/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/app/api/account/profile/route.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-15bfd14f72a595121ac6",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/app/api/account/email/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/account/email/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/app/api/account/email/route.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-8b48432b84bdb019e9b2",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/app/api/account/password/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/account/password/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/app/api/account/password/route.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-f74aebe2db1805937a3f",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/components/initial-password-decision.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/initial-password-decision.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/components/initial-password-decision.tsx#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-2a4f5b2d7906fe1f1961",
      "implementationDates": {
        "staging": null,
        "main": null
      }
    },
    {
      "id": "F007",
      "category": "Cuentas y acceso",
      "title": "Verificación de correo",
      "note": "Implementada; EMAIL_VERIFICATION_ENABLED=true verificado solo en staging en el corte A3/A4. Worker console sintético, no entrega externa acreditada ni activación productiva.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/app/api/email-verification/verify/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/app/api/email-verification/verify/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/email-verification/verify/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/app/api/email-verification/verify/route.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-24de5af6cd3e2443f0e9",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/app/api/email-verification/resend/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/email-verification/resend/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/app/api/email-verification/resend/route.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-11a1723531af2e66f1f4",
      "implementationDates": {
        "staging": null,
        "main": null
      }
    },
    {
      "id": "F009",
      "category": "Cuentas y acceso",
      "title": "Recuperación de contraseña",
      "note": "PASSWORD_RECOVERY_ENABLED=true y flujo HTTP+SQL verificados solo en staging en el corte A3/A4; depende de correo/worker. Sin entrega externa acreditada ni activación productiva.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/app/api/password/forgot/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/app/api/password/forgot/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/password/forgot/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/app/api/password/forgot/route.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-d150b39858ff7185b24a",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/app/api/password/reset/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/password/reset/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/app/api/password/reset/route.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-4671e431368a492fdaa8",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/app/app/my-numbers/page.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/app/my-numbers/page.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/app/app/my-numbers/page.tsx#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-14e3080727026c9da96e",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/lib/permissions.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/permissions.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/lib/permissions.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-175da0466fba27a4ab23",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/app/api/admin/users/reset-password/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/admin/users/reset-password/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/app/api/admin/users/reset-password/route.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-8016c91999d18c152b7e",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/lib/legal.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/legal.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/lib/legal.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-e1765a74dc2ed7ed238a",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/app/api/raffles/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/raffles/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/app/api/raffles/route.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-d370fa890173d9ad10f3",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/components/forms/raffle-settings-form.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/forms/raffle-settings-form.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/components/forms/raffle-settings-form.tsx#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-d95bb01d18190fcf2639",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/lib/prizes.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/prizes.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/lib/prizes.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-c148a05c893892ff353a",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "repo": "backend",
          "path": "src/http/runtime-asset-responses.ts",
          "line": 112,
          "url": "https://github.com/VictorManuel/rifero-backend/blob/a087ca5093e1d686310a6eea914847c3164c36eb/src/http/runtime-asset-responses.ts#L112",
          "match": "const image = await prepareRaffleImage(candidate);",
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/uploads.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/lib/uploads.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "prize-cover-gallery",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/components/image-focal-point-picker.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/image-focal-point-picker.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/components/image-focal-point-picker.tsx#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-7bfab905b36f2e7d8a7b",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/components/raffle-image-gallery.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/raffle-image-gallery.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/components/raffle-image-gallery.tsx#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-e0bd79080776c0943f7a",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/app/page.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/page.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/app/page.tsx#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-4e3d339e4b10b06aedcf",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/app/r/[slug]/page.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/r/[slug]/page.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/app/r/[slug]/page.tsx#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "public-raffle-landing",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/lib/raffle-moderation-policy.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/raffle-moderation-policy.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/lib/raffle-moderation-policy.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-6268eee35ba79b49efe5",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/app/r/[slug]/page.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/r/[slug]/page.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/app/r/[slug]/page.tsx#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "social-share-metadata",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/lib/raffle-events.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/raffle-events.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/lib/raffle-events.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-cf4a5a2a5c7ebcc940ae",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/lib/public-raffle-page.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/public-raffle-page.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/lib/public-raffle-page.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "public-number-buyers",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/app/app/raffles/[raffleId]/page.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/app/raffles/[raffleId]/page.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/app/app/raffles/[raffleId]/page.tsx#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-f35a93033081723ed2d4",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/components/raffle-context-navigation.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/raffle-context-navigation.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/components/raffle-context-navigation.tsx#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-490e18e1a051c92ba7bf",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/app/api/raffles/[raffleId]/number-count/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/raffles/[raffleId]/number-count/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/app/api/raffles/[raffleId]/number-count/route.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-e1ffc997f67449d5f1f8",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/app/api/raffles/[raffleId]/cancel/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/raffles/[raffleId]/cancel/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/app/api/raffles/[raffleId]/cancel/route.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-a7c2684850ee46dc8806",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/app/app/page.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/app/page.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/app/app/page.tsx#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-9ebe7c9b9841ebeace3e",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/components/forms/seller-form.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/forms/seller-form.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/components/forms/seller-form.tsx#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-3aeabf0f892af3e9ad2c",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/app/api/raffles/[raffleId]/sellers/import/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/raffles/[raffleId]/sellers/import/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/app/api/raffles/[raffleId]/sellers/import/route.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-433cab2d2dd2f71b1a6a",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/components/seller-selling-mode-manager.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/seller-selling-mode-manager.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/components/seller-selling-mode-manager.tsx#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-bf10cfca221c54f21b57",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/lib/number-allocation.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/number-allocation.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/lib/number-allocation.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-c9b7fd5f6c1c7ad4b6b9",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/app/api/raffles/[raffleId]/number-assignments/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/raffles/[raffleId]/number-assignments/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/app/api/raffles/[raffleId]/number-assignments/route.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-d957bde60f24c8188aca",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/components/seller-number-unassignment-manager.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/seller-number-unassignment-manager.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/components/seller-number-unassignment-manager.tsx#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-9864bdbf1785a9a2455e",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/lib/seller-team-stats.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/seller-team-stats.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/lib/seller-team-stats.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-1960ebe6eaa47808f556",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/components/seller-sales-modal.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/seller-sales-modal.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/components/seller-sales-modal.tsx#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-b95caffd0240e4303a3b",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/lib/out-of-assignment-sales.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/out-of-assignment-sales.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/lib/out-of-assignment-sales.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-9765ee047feced912280",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/components/share-seller-numbers-button.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/share-seller-numbers-button.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/components/share-seller-numbers-button.tsx#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-1eed2f96fb797676a784",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/app/api/invitations/accept/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/invitations/accept/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/app/api/invitations/accept/route.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-40a9ea0bbab85fbdb152",
      "implementationDates": {
        "staging": null,
        "main": null
      }
    },
    {
      "id": "F043",
      "category": "Equipo y vendedores",
      "title": "Reenviar o revocar invitaciones",
      "note": "SELLER_INVITATIONS_ENABLED=true y resend/revoke exact-token verificados solo en staging en el corte A3/A4. Sin entrega externa ni activación productiva acreditadas.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/components/invitation-actions.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/components/invitation-actions.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/invitation-actions.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/components/invitation-actions.tsx#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-4ad1f027c46783f0907c",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/components/forms/sale-form.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/forms/sale-form.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/components/forms/sale-form.tsx#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-46560c2bb837c0a6e3a6",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/components/sale-registration.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/sale-registration.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/components/sale-registration.tsx#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-1b443ae70547c62cb786",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/components/sale-modal.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/sale-modal.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/components/sale-modal.tsx#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-c60930973ef7e1583ec9",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/app/api/raffles/[raffleId]/reservations/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/raffles/[raffleId]/reservations/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/app/api/raffles/[raffleId]/reservations/route.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-402336c063303b016581",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/app/api/raffles/[raffleId]/sales/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/raffles/[raffleId]/sales/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/app/api/raffles/[raffleId]/sales/route.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-a5446c715f2e3ce06560",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/lib/validators.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/validators.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/lib/validators.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-138af12b87f65a9a1b98",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/components/sale-receipt-field.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/sale-receipt-field.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/components/sale-receipt-field.tsx#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-dbec1f041c42d2f3c1cd",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/app/api/raffles/[raffleId]/sales/[saleId]/receipt/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/raffles/[raffleId]/sales/[saleId]/receipt/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/app/api/raffles/[raffleId]/sales/[saleId]/receipt/route.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-0acc945ef2c584ebd2c2",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/app/api/raffles/[raffleId]/receipts/[receiptId]/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/raffles/[raffleId]/receipts/[receiptId]/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/app/api/raffles/[raffleId]/receipts/[receiptId]/route.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-983e8f848a98110bb232",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/app/app/raffles/[raffleId]/sales/page.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/app/raffles/[raffleId]/sales/page.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/app/app/raffles/[raffleId]/sales/page.tsx#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-e45af271710738b62d87",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/lib/sale-sorting.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/sale-sorting.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/lib/sale-sorting.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-9b0bd3593b7736de5afe",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/app/api/raffles/[raffleId]/sales/export/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/raffles/[raffleId]/sales/export/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/app/api/raffles/[raffleId]/sales/export/route.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-52e6d0f852e840cb0ede",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/app/api/raffles/[raffleId]/sales/[saleId]/cancel/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/raffles/[raffleId]/sales/[saleId]/cancel/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/app/api/raffles/[raffleId]/sales/[saleId]/cancel/route.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-a5345f6081bbdf2190d1",
      "implementationDates": {
        "staging": null,
        "main": null
      }
    },
    {
      "id": "F057",
      "category": "Ventas y comprobantes",
      "title": "Compra agrupada con Purchase",
      "note": "Agrupación atómica de 1–500 números, importe original, reversión parcial e historial propietario. Activación verificada SOLO en staging el22/10/2026 según recibo operacional: esquema canónico23,602s/21 muestras y limpieza. Los checks de rama siguen indicando código, no monitoreo vivo ni producción. Sin pagos, emails nuevos ni backfill.",
      "staging": false,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 11,
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/ROADMAP_EXECUTION_PLAN.md#L11",
          "match": "Purchase",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 97,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/ROADMAP_EXECUTION_PLAN.md#L97",
          "match": "Purchase",
          "kind": "plan"
        }
      },
      "timelineKey": "source-4b78fef8a32e3a682e98",
      "implementationDates": {
        "staging": "2026-10-21T20:35:05.386457+00:00",
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/components/forms/raffle-draw-form.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/forms/raffle-draw-form.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/components/forms/raffle-draw-form.tsx#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-63b539507f453aacc9aa",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/lib/draw-random.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/draw-random.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/lib/draw-random.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-deb29a4fb79b49b3715e",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/app/api/raffles/[raffleId]/draws/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/raffles/[raffleId]/draws/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/app/api/raffles/[raffleId]/draws/route.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-b3ac70e4f0e98e35f510",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/app/api/raffles/[raffleId]/draws/export/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/raffles/[raffleId]/draws/export/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/app/api/raffles/[raffleId]/draws/export/route.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-ad20b6eb517f1aff0ee2",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/lib/public-raffle-page.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/public-raffle-page.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/lib/public-raffle-page.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "winner-publication",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/app/app/admin/users/page.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/app/admin/users/page.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/app/app/admin/users/page.tsx#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-6cebd3502ff2ff9b600d",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/components/raffle-moderation-form.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/raffle-moderation-form.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/components/raffle-moderation-form.tsx#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-25b394f6262c53e37c26",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "repo": "backend",
          "path": "src/core/raffles/moderation-policy.ts",
          "line": 21,
          "url": "https://github.com/VictorManuel/rifero-backend/blob/a087ca5093e1d686310a6eea914847c3164c36eb/src/core/raffles/moderation-policy.ts#L21",
          "match": "raffle.moderationStatus === \"REJECTED\" && raffle.createdById === actor.id",
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/raffle-inspection.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/lib/raffle-inspection.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-170b9b89065e2aee20ca",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/lib/raffle-activity.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/raffle-activity.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/lib/raffle-activity.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-7bf1eadbc1a71811ef9b",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "repo": "backend",
          "path": "src/infrastructure/prisma/critical-raffle-operations-repository.ts",
          "line": 184,
          "url": "https://github.com/VictorManuel/rifero-backend/blob/a087ca5093e1d686310a6eea914847c3164c36eb/src/infrastructure/prisma/critical-raffle-operations-repository.ts#L184",
          "match": "await tx.auditLog.create({ data: {",
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/audit.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/lib/audit.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-4d79b44d2ee962a96815",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/lib/rate-limit.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/rate-limit.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/lib/rate-limit.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-cd583d564ba27f4d0988",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "repo": "backend",
          "path": "src/infrastructure/prisma/identity-mutation-repository.ts",
          "line": 179,
          "url": "https://github.com/VictorManuel/rifero-backend/blob/a087ca5093e1d686310a6eea914847c3164c36eb/src/infrastructure/prisma/identity-mutation-repository.ts#L179",
          "match": "where: { id: resetToken.id, tokenHash, usedAt: null, expiresAt: { gt: now } }",
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/tokens.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/lib/tokens.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-02d745f1a005ebeade1d",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "repo": "backend",
          "path": "src/infrastructure/storage/image-processing.ts",
          "line": 119,
          "url": "https://github.com/VictorManuel/rifero-backend/blob/a087ca5093e1d686310a6eea914847c3164c36eb/src/infrastructure/storage/image-processing.ts#L119",
          "match": "export async function validateRaffleImageUpload(file: File)",
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/uploads.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/lib/uploads.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "image-upload-validation",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/lib/sale-receipts.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/sale-receipts.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/lib/sale-receipts.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-c10fd37e795a4ca37b59",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/scripts/start-deploy.mjs#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "scripts/start-deploy.mjs",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/scripts/start-deploy.mjs#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-c6ef912f234a729f0188",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/lib/maintenance.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/maintenance.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/lib/maintenance.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-10914fc9bcadd709f53b",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/lib/logger.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/logger.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/lib/logger.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-66306302df9cf636e22e",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "line": 1541,
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/ROADMAP_EXECUTION_PLAN.md#L1541",
          "match": "Auditoria Completa",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 1303,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/ROADMAP_EXECUTION_PLAN.md#L1303",
          "match": "Auditoria Completa",
          "kind": "plan"
        }
      },
      "timelineKey": "source-ff257e4af89420e52448",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/docs/CLOUDFLARE_SECURITY_REVIEW.md#L58",
          "match": "SEC.EDGE.1",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/ROADMAP_EXECUTION_PLAN.md#L1",
          "match": null,
          "kind": "general-plan"
        }
      },
      "timelineKey": "edge-rsc-exposure-check",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/docs/CLOUDFLARE_SECURITY_REVIEW.md#L70",
          "match": "SEC.EDGE.2",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/ROADMAP_EXECUTION_PLAN.md#L1",
          "match": null,
          "kind": "general-plan"
        }
      },
      "timelineKey": "edge-origin-isolation",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/docs/CLOUDFLARE_SECURITY_REVIEW.md#L84",
          "match": "SEC.EDGE.3",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/ROADMAP_EXECUTION_PLAN.md#L1",
          "match": null,
          "kind": "general-plan"
        }
      },
      "timelineKey": "edge-tls-full-strict",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/docs/CLOUDFLARE_SECURITY_REVIEW.md#L97",
          "match": "SEC.EDGE.4",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/ROADMAP_EXECUTION_PLAN.md#L1",
          "match": null,
          "kind": "general-plan"
        }
      },
      "timelineKey": "edge-cloudflare-abuse",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/docs/CLOUDFLARE_SECURITY_REVIEW.md#L112",
          "match": "SEC.EDGE.5",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/ROADMAP_EXECUTION_PLAN.md#L1",
          "match": null,
          "kind": "general-plan"
        }
      },
      "timelineKey": "edge-incident-runbook",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "repo": "backend",
          "path": "src/infrastructure/email/jobs.ts",
          "line": 33,
          "url": "https://github.com/VictorManuel/rifero-backend/blob/a087ca5093e1d686310a6eea914847c3164c36eb/src/infrastructure/email/jobs.ts#L33",
          "match": "await db.emailJob.upsert({",
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/email-jobs.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/lib/email-jobs.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-8f32ac18216b7a2e74cb",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "repo": "email-worker",
          "path": "src/email/send-email.ts",
          "line": 26,
          "url": "https://github.com/VictorManuel/rifero-email-worker/blob/2e74fab8902792c79df8b82d234c27a4bec2335a/src/email/send-email.ts#L26",
          "match": "const { data, error } = await resend.emails.send(",
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/email/resend-provider.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/lib/email/resend-provider.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-3bfc3739a9dec1eee05e",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "repo": "backend",
          "path": "src/infrastructure/email/templates.ts",
          "line": 35,
          "url": "https://github.com/VictorManuel/rifero-backend/blob/a087ca5093e1d686310a6eea914847c3164c36eb/src/infrastructure/email/templates.ts#L35",
          "match": "const safeHref = escapeHtml(validateTrustedAppUrl(href));",
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/email/templates.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/lib/email/templates.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-60f2d7b4e30026e82b2f",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero-email-worker/blob/2e74fab8902792c79df8b82d234c27a4bec2335a/package.json#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "email-worker",
          "path": "package.json",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero-email-worker/blob/bb39b1b5f68c9f148def542be4a51dedcc0c1664/package.json#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-e67dc54474d4dd3f66de",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero-email-worker/blob/2e74fab8902792c79df8b82d234c27a4bec2335a/src/worker.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "email-worker",
          "path": "src/worker.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero-email-worker/blob/bb39b1b5f68c9f148def542be4a51dedcc0c1664/src/worker.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-ee994cdededd7f10d2ed",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "line": 203,
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/ROADMAP_EXECUTION_PLAN.md#L203",
          "match": "Emails",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 15,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/ROADMAP_EXECUTION_PLAN.md#L15",
          "match": "Emails",
          "kind": "plan"
        }
      },
      "timelineKey": "purchase-confirmation-email",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "line": 203,
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/ROADMAP_EXECUTION_PLAN.md#L203",
          "match": "Emails",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 15,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/ROADMAP_EXECUTION_PLAN.md#L15",
          "match": "Emails",
          "kind": "plan"
        }
      },
      "timelineKey": "purchase-receipt-email",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "line": 203,
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/ROADMAP_EXECUTION_PLAN.md#L203",
          "match": "Emails",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 15,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/ROADMAP_EXECUTION_PLAN.md#L15",
          "match": "Emails",
          "kind": "plan"
        }
      },
      "timelineKey": "winners-email",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "line": 203,
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/ROADMAP_EXECUTION_PLAN.md#L203",
          "match": "Emails",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 15,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/ROADMAP_EXECUTION_PLAN.md#L15",
          "match": "Emails",
          "kind": "plan"
        }
      },
      "timelineKey": "payment-status-emails",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "line": 203,
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/ROADMAP_EXECUTION_PLAN.md#L203",
          "match": "Emails",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 15,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/ROADMAP_EXECUTION_PLAN.md#L15",
          "match": "Emails",
          "kind": "plan"
        }
      },
      "timelineKey": "email-operations-console",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero-backend/blob/a087ca5093e1d686310a6eea914847c3164c36eb/package.json#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "backend",
          "path": "package.json",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero-backend/blob/a9c0087c8fb326e346065a63c8bc3a6ef1d34538/package.json#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-717fed6f9c20d277648d",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/contracts/http/v1/index.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/contracts/http/v1/index.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/contracts/http/v1/index.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-66e05f1fa0f61c92ee5c",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/lib/backend-api.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/backend-api.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/lib/backend-api.ts#L1",
          "match": null,
          "kind": "implementation"
        }
      },
      "timelineKey": "source-9f0402205fff093c0d3c",
      "implementationDates": {
        "staging": null,
        "main": null
      }
    },
    {
      "id": "F094",
      "category": "Arquitectura e infraestructura",
      "title": "Bridge de sesión firmado",
      "note": "Firma BFF → backend; staging backend-only, sin retorno a JWT o DB desde web.",
      "staging": true,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/lib/session-bridge.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/lib/session-bridge.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/session-bridge.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/lib/session-bridge.ts#L1",
          "match": null,
          "kind": "absent"
        }
      },
      "timelineKey": "source-0eec17e8a71c3f8f7eff",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/lib/backend-runtime.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/backend-runtime.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/lib/backend-runtime.ts#L1",
          "match": null,
          "kind": "absent"
        }
      },
      "timelineKey": "source-f75e78a9ddf130a53425",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero-backend/blob/a087ca5093e1d686310a6eea914847c3164c36eb/src/infrastructure/storage/r2-object-store.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "backend",
          "path": "src/infrastructure/storage/r2-object-store.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero-backend/blob/a9c0087c8fb326e346065a63c8bc3a6ef1d34538/src/infrastructure/storage/r2-object-store.ts#L1",
          "match": null,
          "kind": "absent"
        }
      },
      "timelineKey": "source-5de5e8b58f4de6971a5b",
      "implementationDates": {
        "staging": null,
        "main": null
      }
    },
    {
      "id": "F097",
      "category": "Arquitectura e infraestructura",
      "title": "Política CI de migrador único",
      "note": "A2.7: backend como único migrador en staging; presencia en la rama no implica despliegue productivo.",
      "staging": true,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "backend",
          "path": "scripts/migration-policy.mjs",
          "line": 5,
          "url": "https://github.com/VictorManuel/rifero-backend/blob/a087ca5093e1d686310a6eea914847c3164c36eb/scripts/migration-policy.mjs#L5",
          "match": "Backend must remain the migration owner",
          "kind": "implementation"
        },
        "main": {
          "repo": "backend",
          "path": "scripts/migration-policy.mjs",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero-backend/blob/a9c0087c8fb326e346065a63c8bc3a6ef1d34538/scripts/migration-policy.mjs#L1",
          "match": "Backend must remain the migration owner",
          "kind": "absent"
        }
      },
      "timelineKey": "source-13c35157133adee55ec9",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/contracts/http/v1/public-upcoming-raffles.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/contracts/http/v1/public-upcoming-raffles.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/contracts/http/v1/public-upcoming-raffles.ts#L1",
          "match": null,
          "kind": "absent"
        }
      },
      "timelineKey": "source-557e3bf289b90a783b8c",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "line": 3,
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/lib/private-reads.ts#L3",
          "match": "fetchUserRaffleMembershipsReadFromBackend",
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/private-reads.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/lib/private-reads.ts#L1",
          "match": "fetchUserRaffleMembershipsReadFromBackend",
          "kind": "absent"
        }
      },
      "timelineKey": "source-cb997d54245dee672768",
      "implementationDates": {
        "staging": null,
        "main": null
      }
    },
    {
      "id": "F100",
      "category": "Arquitectura e infraestructura",
      "title": "Frontend independiente sin Prisma",
      "note": "A3.6: Next.js+BFF same-origin, clientes HTTP tipados y web sin Prisma/DB/proveedor. Aceptación local y corte HTTP+SQL staging verificados; depende del backend, no es web offline. Imágenes remotas excluidas; sin producción ni retiro global A4.",
      "staging": true,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "scripts/verify-frontend-artifact.mjs",
          "line": 8,
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/scripts/verify-frontend-artifact.mjs#L8",
          "match": "export function verifyFrontendArtifact",
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "scripts/verify-frontend-artifact.mjs",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/scripts/verify-frontend-artifact.mjs#L1",
          "match": "export function verifyFrontendArtifact",
          "kind": "absent"
        }
      },
      "timelineKey": "source-a9c5541265817bb6abcb",
      "implementationDates": {
        "staging": "2026-10-19T16:49:56.640149+00:00",
        "main": null
      }
    },
    {
      "id": "F101",
      "category": "Arquitectura e infraestructura",
      "title": "Backend como único acceso a datos",
      "note": "A2.7: boundary BFF sin acceso DB ni migrador web; cierre operacional verificado solo staging. No implica producción ni A3.",
      "staging": true,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "scripts/verify-web-boundary.mjs",
          "line": 17,
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/scripts/verify-web-boundary.mjs#L17",
          "match": "Web boundary PASS: no database/client/migrator authority",
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "scripts/verify-web-boundary.mjs",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/scripts/verify-web-boundary.mjs#L1",
          "match": "Web boundary PASS: no database/client/migrator authority",
          "kind": "absent"
        }
      },
      "timelineKey": "backend-data-ownership",
      "implementationDates": {
        "staging": "2026-10-19T05:58:09.191076+00:00",
        "main": null
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
          "line": 3,
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/ROADMAP_EXECUTION_PLAN.md#L3",
          "match": "A4",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 363,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/ROADMAP_EXECUTION_PLAN.md#L363",
          "match": "A4",
          "kind": "plan"
        }
      },
      "timelineKey": "source-ddb3bc4708e996db5ac8",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "line": 200,
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/ROADMAP_EXECUTION_PLAN.md#L200",
          "match": "Redis",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 12,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/ROADMAP_EXECUTION_PLAN.md#L12",
          "match": "Redis",
          "kind": "plan"
        }
      },
      "timelineKey": "source-ba5dec74d3c400e37ba9",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "line": 759,
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/ROADMAP_EXECUTION_PLAN.md#L759",
          "match": "Sentry",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 555,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/ROADMAP_EXECUTION_PLAN.md#L555",
          "match": "Sentry",
          "kind": "plan"
        }
      },
      "timelineKey": "source-234369d2ad7c027569c5",
      "implementationDates": {
        "staging": null,
        "main": null
      }
    },
    {
      "id": "F105",
      "category": "Analytics y publicidad",
      "title": "Analytics de navegación",
      "note": "GA4 elegido y planificado, aún sin integrar ni activar. Capa propia de eventos/proveedor; PostHog solo futuro cuando haya ganancias, no dependencia inicial.",
      "staging": false,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 206,
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/ROADMAP_EXECUTION_PLAN.md#L206",
          "match": "Analytics",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 18,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/ROADMAP_EXECUTION_PLAN.md#L18",
          "match": "Analytics",
          "kind": "plan"
        }
      },
      "timelineKey": "navigation-analytics",
      "implementationDates": {
        "staging": null,
        "main": null
      }
    },
    {
      "id": "F106",
      "category": "Analytics y publicidad",
      "title": "Embudo y conversión",
      "note": "Embudo de visita, selección y conversión planificado sin PII. Backend/DB conservan la verdad de ventas y pagos; GA4 no sustituye auditoría ni conciliación.",
      "staging": false,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 206,
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/ROADMAP_EXECUTION_PLAN.md#L206",
          "match": "Analytics",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 18,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/ROADMAP_EXECUTION_PLAN.md#L18",
          "match": "Analytics",
          "kind": "plan"
        }
      },
      "timelineKey": "conversion-funnel",
      "implementationDates": {
        "staging": null,
        "main": null
      }
    },
    {
      "id": "F107",
      "category": "Analytics y publicidad",
      "title": "Integración AdSense",
      "note": "AdSense con Auto ads elegido, aún sin implementar ni activar. Requiere aprobación/elegibilidad del sitio y contenido de rifas, privacidad y consentimiento; sin publisher configurado.",
      "staging": false,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 672,
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/ROADMAP_EXECUTION_PLAN.md#L672",
          "match": "AdSense",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 468,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/ROADMAP_EXECUTION_PLAN.md#L468",
          "match": "AdSense",
          "kind": "plan"
        }
      },
      "timelineKey": "source-ecb48813a6a9beb69e47",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "line": 210,
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/ROADMAP_EXECUTION_PLAN.md#L210",
          "match": "Ads",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 22,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/ROADMAP_EXECUTION_PLAN.md#L22",
          "match": "Ads",
          "kind": "plan"
        }
      },
      "timelineKey": "source-98e8a1d1d8d487f03c27",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "line": 696,
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/ROADMAP_EXECUTION_PLAN.md#L696",
          "match": "consentimiento",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 492,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/ROADMAP_EXECUTION_PLAN.md#L492",
          "match": "consentimiento",
          "kind": "plan"
        }
      },
      "timelineKey": "source-56290e1f0140dec5badd",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/docs/MERCADOPAGO_LOTTERY_SPEC.md#L1",
          "match": null,
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/ROADMAP_EXECUTION_PLAN.md#L1",
          "match": null,
          "kind": "general-plan"
        }
      },
      "timelineKey": "lottery-booklet-purchase",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/docs/MERCADOPAGO_LOTTERY_SPEC.md#L1",
          "match": null,
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/ROADMAP_EXECUTION_PLAN.md#L1",
          "match": null,
          "kind": "general-plan"
        }
      },
      "timelineKey": "mercadopago-account-link",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/docs/MERCADOPAGO_LOTTERY_SPEC.md#L1",
          "match": null,
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/ROADMAP_EXECUTION_PLAN.md#L1",
          "match": null,
          "kind": "general-plan"
        }
      },
      "timelineKey": "lottery-checkout",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/docs/MERCADOPAGO_LOTTERY_SPEC.md#L1",
          "match": null,
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/ROADMAP_EXECUTION_PLAN.md#L1",
          "match": null,
          "kind": "general-plan"
        }
      },
      "timelineKey": "payment-reconciliation-webhooks",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/docs/MERCADOPAGO_LOTTERY_SPEC.md#L1",
          "match": null,
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/ROADMAP_EXECUTION_PLAN.md#L1",
          "match": null,
          "kind": "general-plan"
        }
      },
      "timelineKey": "payment-refunds-chargebacks",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/docs/MERCADOPAGO_LOTTERY_SPEC.md#L1",
          "match": null,
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/ROADMAP_EXECUTION_PLAN.md#L1",
          "match": null,
          "kind": "general-plan"
        }
      },
      "timelineKey": "quiniela-source-selection",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/docs/MERCADOPAGO_LOTTERY_SPEC.md#L1",
          "match": null,
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/ROADMAP_EXECUTION_PLAN.md#L1",
          "match": null,
          "kind": "general-plan"
        }
      },
      "timelineKey": "official-lottery-calendar",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/docs/MERCADOPAGO_LOTTERY_SPEC.md#L1",
          "match": null,
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/ROADMAP_EXECUTION_PLAN.md#L1",
          "match": null,
          "kind": "general-plan"
        }
      },
      "timelineKey": "lottery-results-extract",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/docs/MERCADOPAGO_LOTTERY_SPEC.md#L1",
          "match": null,
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/ROADMAP_EXECUTION_PLAN.md#L1",
          "match": null,
          "kind": "general-plan"
        }
      },
      "timelineKey": "lottery-prize-awarding",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/docs/MERCADOPAGO_LOTTERY_SPEC.md#L1",
          "match": null,
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/ROADMAP_EXECUTION_PLAN.md#L1",
          "match": null,
          "kind": "general-plan"
        }
      },
      "timelineKey": "immutable-draw-type",
      "implementationDates": {
        "staging": null,
        "main": null
      }
    },
    {
      "id": "F120",
      "category": "Arquitectura e infraestructura",
      "title": "Frontera de navegador verificada",
      "note": "A3.0: gate estático de imports runtime cliente y entorno privado, integrado en test/build. Preparación de A3; no frontend independiente completo ni despliegue.",
      "staging": true,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "scripts/verify-client-boundary.mjs",
          "line": 175,
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/scripts/verify-client-boundary.mjs#L175",
          "match": "Client boundary PASS:",
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "scripts/verify-client-boundary.mjs",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/scripts/verify-client-boundary.mjs#L1",
          "match": "Client boundary PASS:",
          "kind": "absent"
        }
      },
      "timelineKey": "browser-runtime-boundary",
      "implementationDates": {
        "staging": "2026-10-19T10:36:45.399740+00:00",
        "main": null
      }
    },
    {
      "id": "F121",
      "category": "Arquitectura e infraestructura",
      "title": "Transporte JSON browser-safe",
      "note": "A3.1: same-origin, DTOs validados, abortos y errores controlados; sin firma servidor, redirects ni retries mutantes. No implica despliegue o cierre A3.",
      "staging": true,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/lib/browser/http.ts",
          "line": 29,
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/lib/browser/http.ts#L29",
          "match": "export function createBrowserHttp",
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/browser/http.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/lib/browser/http.ts#L1",
          "match": "export function createBrowserHttp",
          "kind": "absent"
        }
      },
      "timelineKey": "browser-json-transport",
      "implementationDates": {
        "staging": "2026-10-19T11:51:56.536259+00:00",
        "main": null
      }
    },
    {
      "id": "F122",
      "category": "Arquitectura e infraestructura",
      "title": "Identidad con cliente tipado navegador",
      "note": "A3.1: registro, recuperación/reset, verificación/reenvío e invitaciones migrados; contrato público BFF y confirmaciones preservados. E2E local con datos sintéticos, no entrega de correo.",
      "staging": true,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/components/forms/register-form.tsx",
          "line": 45,
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/components/forms/register-form.tsx#L45",
          "match": "createIdentityClient().register(values)",
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/forms/register-form.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/components/forms/register-form.tsx#L1",
          "match": "createIdentityClient().register(values)",
          "kind": "absent"
        }
      },
      "timelineKey": "browser-identity-client",
      "implementationDates": {
        "staging": "2026-10-19T11:51:56.536259+00:00",
        "main": null
      }
    },
    {
      "id": "F123",
      "category": "Arquitectura e infraestructura",
      "title": "Cuenta con cliente tipado navegador",
      "note": "A3.1: perfil, email, cambio y elección de contraseña inicial migrados; BFF conserva sesión/IP y backend autorización/SQL. Sin despliegue.",
      "staging": true,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/components/forms/account-profile-form.tsx",
          "line": 35,
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/components/forms/account-profile-form.tsx#L35",
          "match": "createAccountClient().updateProfile(values)",
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/forms/account-profile-form.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/components/forms/account-profile-form.tsx#L1",
          "match": "createAccountClient().updateProfile(values)",
          "kind": "absent"
        }
      },
      "timelineKey": "browser-account-client",
      "implementationDates": {
        "staging": "2026-10-19T11:51:56.536259+00:00",
        "main": null
      }
    },
    {
      "id": "F124",
      "category": "Arquitectura e infraestructura",
      "title": "Disponibilidad con DTO validado en navegador",
      "note": "A3.1: refresco SSE consume disponibilidad validada; aborta al desmontar, conserva último DTO válido ante fallo y mantiene cierre/reload 403/404. No cambia ownership realtime.",
      "staging": true,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/components/availability-board.tsx",
          "line": 118,
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/components/availability-board.tsx#L118",
          "match": "availability.get(raffleId, controller.signal)",
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/availability-board.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/components/availability-board.tsx#L1",
          "match": "availability.get(raffleId, controller.signal)",
          "kind": "absent"
        }
      },
      "timelineKey": "browser-availability-client",
      "implementationDates": {
        "staging": "2026-10-19T11:51:56.536259+00:00",
        "main": null
      }
    },
    {
      "id": "F125",
      "category": "Landing y personalización",
      "title": "Personalización de colores del sorteo",
      "note": "UX-P1: cuatro paletas y fondos sólido/degradado, vista previa y restablecer; propietario DRAFT/ACTIVE. El código requiere SQL y capability de apariencia; implementado no acredita activación ni despliegue. Sin colores libres, imágenes remotas ni white-label.",
      "staging": true,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/components/raffle-appearance-editor.tsx",
          "line": 11,
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/components/raffle-appearance-editor.tsx#L11",
          "match": "export function RaffleAppearanceEditor",
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/ROADMAP.md#L1",
          "match": null,
          "kind": "general-plan"
        }
      },
      "timelineKey": "raffle-visual-personalization",
      "implementationDates": {
        "staging": "2026-10-21T17:57:46.319433+00:00",
        "main": null
      }
    },
    {
      "id": "F126",
      "category": "Landing y personalización",
      "title": "Compartir y descargar imágenes del sorteo",
      "note": "UX-P2 planificada, no disponible: templates con todos los números y vendidos tachados, sorteo completo o vendedor; descarga obligatoria, compartir nativo opcional. Sin publicación automática; SDD pendiente.",
      "staging": false,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "ROADMAP.md",
          "line": 1522,
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/ROADMAP.md#L1522",
          "match": "### UX-P2: Imágenes de números para compartir en redes",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/ROADMAP.md#L1",
          "match": null,
          "kind": "general-plan"
        }
      },
      "timelineKey": "raffle-share-images",
      "implementationDates": {
        "staging": null,
        "main": null
      }
    },
    {
      "id": "F127",
      "category": "Arquitectura e infraestructura",
      "title": "Ventas con cliente HTTP tipado",
      "note": "A3.2: reservas/liberación, venta multipart opcional, reversión e historial por vendedor usan DTOs públicos validados. E2E real local desktop/móvil; sin despliegue. Comprobantes sintéticos R2staging verificados (bytes/permisos y limpieza exacta); no producción.",
      "staging": true,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/components/sale-modal.tsx",
          "line": 159,
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/components/sale-modal.tsx#L159",
          "match": "createSalesClient().create(raffleId",
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/sale-modal.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/components/sale-modal.tsx#L1",
          "match": "createSalesClient().create(raffleId",
          "kind": "absent"
        }
      },
      "timelineKey": "browser-sales-client",
      "implementationDates": {
        "staging": "2026-10-19T13:50:32.318358+00:00",
        "main": null
      }
    },
    {
      "id": "F128",
      "category": "Arquitectura e infraestructura",
      "title": "Vendedores con cliente HTTP tipado",
      "note": "A3.2: altas, CSV, asignaciones/desasignaciones y modo de venta migrados; permisos/SQL en backend. E2E local sintético y sin entrega de correo. Invitaciones: cliente y endpoints; sin pantalla nueva.",
      "staging": true,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/components/forms/seller-form.tsx",
          "line": 73,
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/components/forms/seller-form.tsx#L73",
          "match": "createSellersClient().create(raffleId",
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/forms/seller-form.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/components/forms/seller-form.tsx#L1",
          "match": "createSellersClient().create(raffleId",
          "kind": "absent"
        }
      },
      "timelineKey": "browser-sellers-client",
      "implementationDates": {
        "staging": "2026-10-19T13:50:32.318358+00:00",
        "main": null
      }
    },
    {
      "id": "F129",
      "category": "Arquitectura e infraestructura",
      "title": "Administración con cliente tipado navegador",
      "note": "A3.3: soporte de contraseña y moderación migrados a DTO público validado; E2E local con permisos y revocación de sesión. Integración de rama, no despliegue ni cierre A3.",
      "staging": true,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/components/support-password-reset-form.tsx",
          "line": 31,
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/components/support-password-reset-form.tsx#L31",
          "match": "createAdminClient().resetPassword(values)",
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/support-password-reset-form.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/components/support-password-reset-form.tsx#L1",
          "match": "createAdminClient().resetPassword(values)",
          "kind": "absent"
        }
      },
      "timelineKey": "browser-admin-client",
      "implementationDates": {
        "staging": "2026-10-19T14:37:26.005480+00:00",
        "main": null
      }
    },
    {
      "id": "F130",
      "category": "Arquitectura e infraestructura",
      "title": "Ciclo de sorteo con cliente tipado navegador",
      "note": "A3.3: cantidad de números, cancelación y prueba/oficial/reemplazo con errores controlados y cooldown. Pruebas locales reales; no cambia reglas ni implica despliegue.",
      "staging": true,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/components/forms/raffle-draw-form.tsx",
          "line": 71,
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/components/forms/raffle-draw-form.tsx#L71",
          "match": "createRaffleOperationsClient().draw(raffleId",
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/forms/raffle-draw-form.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/components/forms/raffle-draw-form.tsx#L1",
          "match": "createRaffleOperationsClient().draw(raffleId",
          "kind": "absent"
        }
      },
      "timelineKey": "browser-raffle-lifecycle-client",
      "implementationDates": {
        "staging": "2026-10-19T14:37:26.005480+00:00",
        "main": null
      }
    },
    {
      "id": "F131",
      "category": "Arquitectura e infraestructura",
      "title": "Creación con cliente multipart tipado",
      "note": "A3.4: creación de sorteos usa DTO público validado y campos multipart; E2E local de metadata sin archivos. Archivos verificados en protocolo/unitarias locales, no R2 remoto. No despliegue ni cierre A3.",
      "staging": true,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/components/forms/create-raffle-form.tsx",
          "line": 60,
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/components/forms/create-raffle-form.tsx#L60",
          "match": "createRaffleMetadataClient().create(",
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/forms/create-raffle-form.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/components/forms/create-raffle-form.tsx#L1",
          "match": "createRaffleMetadataClient().create(",
          "kind": "absent"
        }
      },
      "timelineKey": "browser-raffle-create-client",
      "implementationDates": {
        "staging": "2026-10-19T15:13:48.176294+00:00",
        "main": null
      }
    },
    {
      "id": "F132",
      "category": "Arquitectura e infraestructura",
      "title": "Configuración con cliente multipart tipado",
      "note": "A3.4: metadata, focal y remociones conservados, errores controlados y backend sin dependencia de storage para guardar sin archivos. E2E local de metadata/permisos, sin storage remoto de imágenes.",
      "staging": true,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/components/forms/raffle-settings-form.tsx",
          "line": 119,
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/components/forms/raffle-settings-form.tsx#L119",
          "match": "createRaffleMetadataClient().update(raffleId",
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/forms/raffle-settings-form.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/components/forms/raffle-settings-form.tsx#L1",
          "match": "createRaffleMetadataClient().update(raffleId",
          "kind": "absent"
        }
      },
      "timelineKey": "browser-raffle-settings-client",
      "implementationDates": {
        "staging": "2026-10-19T15:13:48.176294+00:00",
        "main": null
      }
    },
    {
      "id": "F133",
      "category": "Arquitectura e infraestructura",
      "title": "E2E con email-worker real sin entrega externa",
      "note": "A3.5: navegador/backend/DB e2e aislada y consumidor real compilado; console explícito,8 SENT simulados, redacción y estado idle comprobados. No entrega externa, imágenes remotas ni despliegue; A3 global aún abierta.",
      "staging": true,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "email-worker",
          "path": "scripts/a3-local-console-e2e.mjs",
          "line": 33,
          "url": "https://github.com/VictorManuel/rifero-email-worker/blob/2e74fab8902792c79df8b82d234c27a4bec2335a/scripts/a3-local-console-e2e.mjs#L33",
          "match": "export async function run",
          "kind": "implementation"
        },
        "main": {
          "repo": "email-worker",
          "path": "scripts/a3-local-console-e2e.mjs",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero-email-worker/blob/bb39b1b5f68c9f148def542be4a51dedcc0c1664/scripts/a3-local-console-e2e.mjs#L1",
          "match": "export async function run",
          "kind": "absent"
        }
      },
      "timelineKey": "browser-backend-console-worker-e2e",
      "implementationDates": {
        "staging": "2026-10-19T15:23:55.101645+00:00",
        "main": null
      }
    },
    {
      "id": "F134",
      "category": "Arquitectura e infraestructura",
      "title": "Compradores públicos sincronizados por SSE",
      "note": "A3.7: venta/reversión desde otro navegador actualiza disponibilidad y compradores2→1 sin navegación completa. Evento público validado, refresh SSR coalescido y proyección existente de solo nombre/sellerScope; sin nuevo DTO/endpoint ni streams. Verificado localmente en una réplica; no Pub/Sub, deploy ni cierre operacional A3/A4.",
      "staging": true,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/lib/browser/public-raffle-refresh.ts",
          "line": 4,
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/lib/browser/public-raffle-refresh.ts#L4",
          "match": "export function createPublicRaffleRefreshScheduler",
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/browser/public-raffle-refresh.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/lib/browser/public-raffle-refresh.ts#L1",
          "match": "export function createPublicRaffleRefreshScheduler",
          "kind": "absent"
        }
      },
      "timelineKey": "public-buyers-native-sse-refresh",
      "implementationDates": {
        "staging": "2026-10-19T17:39:04.193733+00:00",
        "main": null
      }
    },
    {
      "id": "F135",
      "category": "Arquitectura e infraestructura",
      "title": "Traza de recuperación entre request, auditoría y email",
      "note": "A4.0 preparatoria: UUID seguro del BFF une respuesta, auditoría y EmailJob PASSWORD_RESET; worker registra solo UUID validado. Contrato v1 opcional compatible y E2E local con dos envíos console correlacionados, sin entrega externa. Solo recuperación; no observabilidad global, deploy ni cierre operacional A3/A4.",
      "staging": true,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "backend",
          "path": "src/infrastructure/prisma/identity-mutation-repository.ts",
          "line": 151,
          "url": "https://github.com/VictorManuel/rifero-backend/blob/a087ca5093e1d686310a6eea914847c3164c36eb/src/infrastructure/prisma/identity-mutation-repository.ts#L151",
          "match": "resetUrl, correlationId: input.correlationId",
          "kind": "implementation"
        },
        "main": {
          "repo": "backend",
          "path": "src/infrastructure/prisma/identity-mutation-repository.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero-backend/blob/a9c0087c8fb326e346065a63c8bc3a6ef1d34538/src/infrastructure/prisma/identity-mutation-repository.ts#L1",
          "match": "resetUrl, correlationId: input.correlationId",
          "kind": "absent"
        }
      },
      "timelineKey": "recovery-request-audit-email-trace",
      "implementationDates": {
        "staging": "2026-10-19T18:06:15.350646+00:00",
        "main": null
      }
    },
    {
      "id": "F136",
      "category": "Arquitectura e infraestructura",
      "title": "Registro y reenvío con traza de email",
      "note": "A4.1: UUID nuevo del BFF une registro y reenvío de verificación con auditorías y job vigente; contexto interno validado y actor anónimo en resend. E2E local con registro independiente y worker console sin entrega externa; el job sustituido permanece redactado. No deploy, observabilidad global ni cierre operacional A3/A4.",
      "staging": true,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "backend",
          "path": "src/infrastructure/prisma/identity-mutation-repository.ts",
          "line": 213,
          "url": "https://github.com/VictorManuel/rifero-backend/blob/a087ca5093e1d686310a6eea914847c3164c36eb/src/infrastructure/prisma/identity-mutation-repository.ts#L213",
          "match": "action: \"EMAIL_VERIFICATION_RESENT\"",
          "kind": "implementation"
        },
        "main": {
          "repo": "backend",
          "path": "src/infrastructure/prisma/identity-mutation-repository.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero-backend/blob/a9c0087c8fb326e346065a63c8bc3a6ef1d34538/src/infrastructure/prisma/identity-mutation-repository.ts#L1",
          "match": "action: \"EMAIL_VERIFICATION_RESENT\"",
          "kind": "absent"
        }
      },
      "timelineKey": "registration-verification-resend-trace",
      "implementationDates": {
        "staging": "2026-10-19T19:29:16.486762+00:00",
        "main": null
      }
    },
    {
      "id": "F137",
      "category": "Arquitectura e infraestructura",
      "title": "Solicitud de cambio de correo con traza de email",
      "note": "A4.2: UUID nuevo del BFF enlaza la solicitud autenticada con auditoría transaccional y job EMAIL_VERIFICATION; actor/entidad correctos y metadata sin PII. E2E local respuesta→audit→job→worker console sin entrega externa. No cubre confirmación/notificación posterior, invitaciones, despliegue ni cierre operacional A3/A4.",
      "staging": true,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "backend",
          "path": "src/infrastructure/prisma/account-mutation-repository.ts",
          "line": 62,
          "url": "https://github.com/VictorManuel/rifero-backend/blob/a087ca5093e1d686310a6eea914847c3164c36eb/src/infrastructure/prisma/account-mutation-repository.ts#L62",
          "match": "action: \"ACCOUNT_EMAIL_CHANGE_REQUESTED\"",
          "kind": "implementation"
        },
        "main": {
          "repo": "backend",
          "path": "src/infrastructure/prisma/account-mutation-repository.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero-backend/blob/a9c0087c8fb326e346065a63c8bc3a6ef1d34538/src/infrastructure/prisma/account-mutation-repository.ts#L1",
          "match": "action: \"ACCOUNT_EMAIL_CHANGE_REQUESTED\"",
          "kind": "absent"
        }
      },
      "timelineKey": "account-email-request-audit-job-trace",
      "implementationDates": {
        "staging": "2026-10-19T19:52:21.498326+00:00",
        "main": null
      }
    },
    {
      "id": "F138",
      "category": "Arquitectura e infraestructura",
      "title": "Confirmación de correo con notificación trazada",
      "note": "A4.3: UUID BFF validado enlaza confirmación, auditoría anónima transaccional y notificación ACCOUNT_EMAIL_CHANGED al correo anterior. E2E local separado conserva verificación original y rechaza replay; worker console sin entrega externa. No deploy ni cierre operacional A3/A4.",
      "staging": true,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "backend",
          "path": "src/infrastructure/prisma/identity-mutation-repository.ts",
          "line": 254,
          "url": "https://github.com/VictorManuel/rifero-backend/blob/a087ca5093e1d686310a6eea914847c3164c36eb/src/infrastructure/prisma/identity-mutation-repository.ts#L254",
          "match": "newEmail: verification.targetEmail,\n            correlationId: input.correlationId,",
          "kind": "implementation"
        },
        "main": {
          "repo": "backend",
          "path": "src/infrastructure/prisma/identity-mutation-repository.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero-backend/blob/a9c0087c8fb326e346065a63c8bc3a6ef1d34538/src/infrastructure/prisma/identity-mutation-repository.ts#L1",
          "match": "newEmail: verification.targetEmail,\n            correlationId: input.correlationId,",
          "kind": "absent"
        }
      },
      "timelineKey": "email-confirmation-notification-trace",
      "implementationDates": {
        "staging": "2026-10-19T20:21:37.513697+00:00",
        "main": null
      }
    },
    {
      "id": "F139",
      "category": "Arquitectura e infraestructura",
      "title": "Reenvío de invitación con traza de email",
      "note": "A4.3: UUID BFF enlaza resend, auditoría y job SELLER_INVITATION. La traza original no corrigió lifecycle; F140 corrige después la cancelación exact-token pendiente. Corte staging acreditado por el hito A3/A4, worker console sin entrega externa; sin producción.",
      "staging": true,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "backend",
          "path": "src/infrastructure/prisma/raffle-admin-mutation-repository.ts",
          "line": 606,
          "url": "https://github.com/VictorManuel/rifero-backend/blob/a087ca5093e1d686310a6eea914847c3164c36eb/src/infrastructure/prisma/raffle-admin-mutation-repository.ts#L606",
          "match": "acceptUrl, correlationId: input.correlationId",
          "kind": "implementation"
        },
        "main": {
          "repo": "backend",
          "path": "src/infrastructure/prisma/raffle-admin-mutation-repository.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero-backend/blob/a9c0087c8fb326e346065a63c8bc3a6ef1d34538/src/infrastructure/prisma/raffle-admin-mutation-repository.ts#L1",
          "match": "acceptUrl, correlationId: input.correlationId",
          "kind": "absent"
        }
      },
      "timelineKey": "seller-invitation-resend-audit-job-trace",
      "implementationDates": {
        "staging": "2026-10-19T20:21:37.513697+00:00",
        "main": null
      }
    },
    {
      "id": "F140",
      "category": "Arquitectura e infraestructura",
      "title": "Cancelación precisa de invitaciones pendientes",
      "note": "Corrección A3/A4: resend/revoke cancelan jobs pendientes desbloqueados del token exacto v1/legacy; otra rifa al mismo email queda intacta. SQL/worker console y corte staging con 10 minutos nuevos acreditados en su hito. No retira correos en vuelo/enviados ni purga tokens históricos no identificables. Imágenes remotas excluidas; sin producción.",
      "staging": true,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "backend",
          "path": "src/infrastructure/email/invitation-pending-jobs.ts",
          "line": 24,
          "url": "https://github.com/VictorManuel/rifero-backend/blob/a087ca5093e1d686310a6eea914847c3164c36eb/src/infrastructure/email/invitation-pending-jobs.ts#L24",
          "match": "export async function cancelPendingSellerInvitationJobs",
          "kind": "implementation"
        },
        "main": {
          "repo": "backend",
          "path": "src/infrastructure/email/invitation-pending-jobs.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero-backend/blob/a9c0087c8fb326e346065a63c8bc3a6ef1d34538/src/infrastructure/email/invitation-pending-jobs.ts#L1",
          "match": "export async function cancelPendingSellerInvitationJobs",
          "kind": "absent"
        }
      },
      "timelineKey": "seller-invitation-exact-pending-cancellation",
      "implementationDates": {
        "staging": "2026-10-19T23:19:17.603404+00:00",
        "main": null
      }
    },
    {
      "id": "F141",
      "category": "Administración",
      "title": "Galería interna de componentes",
      "note": "Biblioteca exclusiva SUPERADMIN: componentes reales e interacciones sintéticas, sin acciones sobre datos reales. Presencia de código no acredita despliegue ni acceso público.",
      "staging": true,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/app/app/admin/components/page.tsx",
          "line": 13,
          "url": "https://github.com/VictorManuel/rifero/blob/662672c3d83764696e8e90416ab5c2807579dde9/src/app/app/admin/components/page.tsx#L13",
          "match": "await requireSuperAdmin();",
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/app/admin/components/page.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/ea00a2889f5150e5e3d112de333389ebb0313bf8/src/app/app/admin/components/page.tsx#L1",
          "match": "await requireSuperAdmin();",
          "kind": "absent"
        }
      },
      "timelineKey": "superadmin-ui-component-gallery",
      "implementationDates": {
        "staging": "2026-10-21T17:57:46.319433+00:00",
        "main": null
      }
    }
  ],
  "timeline": {
    "startedAt": "2026-10-16T10:55:06.414360+00:00",
    "baseline": [
      {
        "id": "F001",
        "category": "Cuentas y acceso",
        "title": "Registro público",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-ff7dc8902b8f5d47864a"
      },
      {
        "id": "F002",
        "category": "Cuentas y acceso",
        "title": "Ingreso por correo o usuario",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-464f70e88263b2876870"
      },
      {
        "id": "F003",
        "category": "Cuentas y acceso",
        "title": "Perfil y nombre de usuario",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-15bfd14f72a595121ac6"
      },
      {
        "id": "F004",
        "category": "Cuentas y acceso",
        "title": "Agregar y verificar correo",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-8b48432b84bdb019e9b2"
      },
      {
        "id": "F005",
        "category": "Cuentas y acceso",
        "title": "Cambio de contraseña",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-f74aebe2db1805937a3f"
      },
      {
        "id": "F006",
        "category": "Cuentas y acceso",
        "title": "Decisión sobre contraseña inicial",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-2a4f5b2d7906fe1f1961"
      },
      {
        "id": "F007",
        "category": "Cuentas y acceso",
        "title": "Verificación de correo",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-24de5af6cd3e2443f0e9"
      },
      {
        "id": "F008",
        "category": "Cuentas y acceso",
        "title": "Reenvío de verificación",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-11a1723531af2e66f1f4"
      },
      {
        "id": "F009",
        "category": "Cuentas y acceso",
        "title": "Recuperación de contraseña",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-d150b39858ff7185b24a"
      },
      {
        "id": "F010",
        "category": "Cuentas y acceso",
        "title": "Restablecer por enlace seguro",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-4671e431368a492fdaa8"
      },
      {
        "id": "F011",
        "category": "Cuentas y acceso",
        "title": "Mis números comprados",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-14e3080727026c9da96e"
      },
      {
        "id": "F012",
        "category": "Cuentas y acceso",
        "title": "Roles y permisos por sorteo",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-175da0466fba27a4ab23"
      },
      {
        "id": "F013",
        "category": "Cuentas y acceso",
        "title": "Restablecimiento por SUPERADMIN",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-8016c91999d18c152b7e"
      },
      {
        "id": "F014",
        "category": "Cuentas y acceso",
        "title": "Términos y privacidad",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-e1765a74dc2ed7ed238a"
      },
      {
        "id": "F015",
        "category": "Sorteos y publicación",
        "title": "Crear un sorteo",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-d370fa890173d9ad10f3"
      },
      {
        "id": "F016",
        "category": "Sorteos y publicación",
        "title": "Editar configuración",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-d95bb01d18190fcf2639"
      },
      {
        "id": "F017",
        "category": "Sorteos y publicación",
        "title": "Premios múltiples",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-c148a05c893892ff353a"
      },
      {
        "id": "F018",
        "category": "Sorteos y publicación",
        "title": "Portada y fotos de premios",
        "branches": [
          "staging",
          "main"
        ],
        "key": "prize-cover-gallery"
      },
      {
        "id": "F019",
        "category": "Sorteos y publicación",
        "title": "Punto focal de portada",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-7bfab905b36f2e7d8a7b"
      },
      {
        "id": "F020",
        "category": "Sorteos y publicación",
        "title": "Galería accesible",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-e0bd79080776c0943f7a"
      },
      {
        "id": "F021",
        "category": "Sorteos y publicación",
        "title": "Listado público en home",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-4e3d339e4b10b06aedcf"
      },
      {
        "id": "F022",
        "category": "Sorteos y publicación",
        "title": "Landing pública por sorteo",
        "branches": [
          "staging",
          "main"
        ],
        "key": "public-raffle-landing"
      },
      {
        "id": "F023",
        "category": "Sorteos y publicación",
        "title": "Vista previa de borradores",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-6268eee35ba79b49efe5"
      },
      {
        "id": "F024",
        "category": "Sorteos y publicación",
        "title": "Metadatos al compartir",
        "branches": [
          "staging",
          "main"
        ],
        "key": "social-share-metadata"
      },
      {
        "id": "F025",
        "category": "Sorteos y publicación",
        "title": "Disponibilidad en tiempo real",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-cf4a5a2a5c7ebcc940ae"
      },
      {
        "id": "F026",
        "category": "Sorteos y publicación",
        "title": "Compradores públicos por número",
        "branches": [
          "staging",
          "main"
        ],
        "key": "public-number-buyers"
      },
      {
        "id": "F027",
        "category": "Sorteos y publicación",
        "title": "Panel privado y métricas",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-f35a93033081723ed2d4"
      },
      {
        "id": "F028",
        "category": "Sorteos y publicación",
        "title": "Navegación contextual móvil",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-490e18e1a051c92ba7bf"
      },
      {
        "id": "F029",
        "category": "Sorteos y publicación",
        "title": "Modificar cantidad de números",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-e1ffc997f67449d5f1f8"
      },
      {
        "id": "F030",
        "category": "Sorteos y publicación",
        "title": "Cancelar sorteo",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-a7c2684850ee46dc8806"
      },
      {
        "id": "F031",
        "category": "Sorteos y publicación",
        "title": "Historial de sorteos terminados",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-9ebe7c9b9841ebeace3e"
      },
      {
        "id": "F032",
        "category": "Equipo y vendedores",
        "title": "Alta de vendedores",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-3aeabf0f892af3e9ad2c"
      },
      {
        "id": "F033",
        "category": "Equipo y vendedores",
        "title": "Importación masiva CSV",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-433cab2d2dd2f71b1a6a"
      },
      {
        "id": "F034",
        "category": "Equipo y vendedores",
        "title": "Modo de venta libre o restringido",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-bf10cfca221c54f21b57"
      },
      {
        "id": "F035",
        "category": "Equipo y vendedores",
        "title": "Asignación por cantidad o números",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-c9b7fd5f6c1c7ad4b6b9"
      },
      {
        "id": "F036",
        "category": "Equipo y vendedores",
        "title": "Reasignar números disponibles",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-d957bde60f24c8188aca"
      },
      {
        "id": "F037",
        "category": "Equipo y vendedores",
        "title": "Desasignación de números",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-9864bdbf1785a9a2455e"
      },
      {
        "id": "F038",
        "category": "Equipo y vendedores",
        "title": "Métricas del equipo",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-1960ebe6eaa47808f556"
      },
      {
        "id": "F039",
        "category": "Equipo y vendedores",
        "title": "Detalle de ventas por vendedor",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-b95caffd0240e4303a3b"
      },
      {
        "id": "F040",
        "category": "Equipo y vendedores",
        "title": "Ventas fuera de asignación",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-9765ee047feced912280"
      },
      {
        "id": "F041",
        "category": "Equipo y vendedores",
        "title": "Compartir mis números",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-1eed2f96fb797676a784"
      },
      {
        "id": "F042",
        "category": "Equipo y vendedores",
        "title": "Aceptar invitaciones por correo",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-40a9ea0bbab85fbdb152"
      },
      {
        "id": "F043",
        "category": "Equipo y vendedores",
        "title": "Reenviar o revocar invitaciones",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-4ad1f027c46783f0907c"
      },
      {
        "id": "F044",
        "category": "Ventas y comprobantes",
        "title": "Venta simple y múltiple",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-46560c2bb837c0a6e3a6"
      },
      {
        "id": "F045",
        "category": "Ventas y comprobantes",
        "title": "Selección desde grilla",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-1b443ae70547c62cb786"
      },
      {
        "id": "F046",
        "category": "Ventas y comprobantes",
        "title": "Modal de venta por pasos",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-c60930973ef7e1583ec9"
      },
      {
        "id": "F047",
        "category": "Ventas y comprobantes",
        "title": "Reservas temporales",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-402336c063303b016581"
      },
      {
        "id": "F048",
        "category": "Ventas y comprobantes",
        "title": "Prevención de doble venta",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-a5446c715f2e3ce06560"
      },
      {
        "id": "F049",
        "category": "Ventas y comprobantes",
        "title": "Datos del comprador",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-138af12b87f65a9a1b98"
      },
      {
        "id": "F050",
        "category": "Ventas y comprobantes",
        "title": "Comprobante al vender",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-dbec1f041c42d2f3c1cd"
      },
      {
        "id": "F051",
        "category": "Ventas y comprobantes",
        "title": "Adjuntar comprobante después",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-0acc945ef2c584ebd2c2"
      },
      {
        "id": "F052",
        "category": "Ventas y comprobantes",
        "title": "Consulta privada de comprobantes",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-983e8f848a98110bb232"
      },
      {
        "id": "F053",
        "category": "Ventas y comprobantes",
        "title": "Historial de ventas",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-e45af271710738b62d87"
      },
      {
        "id": "F054",
        "category": "Ventas y comprobantes",
        "title": "Ordenar ventas",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-9b0bd3593b7736de5afe"
      },
      {
        "id": "F055",
        "category": "Ventas y comprobantes",
        "title": "Exportar ventas",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-52e6d0f852e840cb0ede"
      },
      {
        "id": "F056",
        "category": "Ventas y comprobantes",
        "title": "Revertir una venta",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-a5345f6081bbdf2190d1"
      },
      {
        "id": "F058",
        "category": "Sorteo y resultados",
        "title": "Sorteo de prueba y oficial",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-63b539507f453aacc9aa"
      },
      {
        "id": "F059",
        "category": "Sorteo y resultados",
        "title": "Aleatoriedad segura y auditable",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-deb29a4fb79b49b3715e"
      },
      {
        "id": "F060",
        "category": "Sorteo y resultados",
        "title": "Historial de ejecuciones",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-b3ac70e4f0e98e35f510"
      },
      {
        "id": "F061",
        "category": "Sorteo y resultados",
        "title": "Exportar resultados",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-ad20b6eb517f1aff0ee2"
      },
      {
        "id": "F062",
        "category": "Sorteo y resultados",
        "title": "Publicación de ganadores",
        "branches": [
          "staging",
          "main"
        ],
        "key": "winner-publication"
      },
      {
        "id": "F063",
        "category": "Administración y seguridad",
        "title": "Gestión global de usuarios",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-6cebd3502ff2ff9b600d"
      },
      {
        "id": "F064",
        "category": "Administración y seguridad",
        "title": "Moderación global de sorteos",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-25b394f6262c53e37c26"
      },
      {
        "id": "F065",
        "category": "Administración y seguridad",
        "title": "Restricción de sorteos rechazados",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-170b9b89065e2aee20ca"
      },
      {
        "id": "F066",
        "category": "Administración y seguridad",
        "title": "Registro de actividad",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-7bf1eadbc1a71811ef9b"
      },
      {
        "id": "F067",
        "category": "Administración y seguridad",
        "title": "Auditoría persistente",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-4d79b44d2ee962a96815"
      },
      {
        "id": "F068",
        "category": "Administración y seguridad",
        "title": "Rate limiting persistente",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-cd583d564ba27f4d0988"
      },
      {
        "id": "F069",
        "category": "Administración y seguridad",
        "title": "Tokens de un solo uso",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-02d745f1a005ebeade1d"
      },
      {
        "id": "F070",
        "category": "Administración y seguridad",
        "title": "Validación fuerte de imágenes",
        "branches": [
          "staging",
          "main"
        ],
        "key": "image-upload-validation"
      },
      {
        "id": "F071",
        "category": "Administración y seguridad",
        "title": "Validación de comprobantes",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-c10fd37e795a4ca37b59"
      },
      {
        "id": "F072",
        "category": "Administración y seguridad",
        "title": "Modo mantenimiento sin DB",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-c6ef912f234a729f0188"
      },
      {
        "id": "F073",
        "category": "Administración y seguridad",
        "title": "Mantenimiento de auditoría",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-10914fc9bcadd709f53b"
      },
      {
        "id": "F074",
        "category": "Administración y seguridad",
        "title": "Logging estructurado",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-66306302df9cf636e22e"
      },
      {
        "id": "F081",
        "category": "Emails transaccionales",
        "title": "Cola persistente EmailJob",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-8f32ac18216b7a2e74cb"
      },
      {
        "id": "F082",
        "category": "Emails transaccionales",
        "title": "Proveedor Resend",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-3bfc3739a9dec1eee05e"
      },
      {
        "id": "F083",
        "category": "Emails transaccionales",
        "title": "Plantillas seguras",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-60f2d7b4e30026e82b2f"
      },
      {
        "id": "F084",
        "category": "Emails transaccionales",
        "title": "Worker independiente",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-e67dc54474d4dd3f66de"
      },
      {
        "id": "F085",
        "category": "Emails transaccionales",
        "title": "Reintentos, locks y backoff",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-ee994cdededd7f10d2ed"
      },
      {
        "id": "F091",
        "category": "Arquitectura e infraestructura",
        "title": "API backend independiente",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-717fed6f9c20d277648d"
      },
      {
        "id": "F092",
        "category": "Arquitectura e infraestructura",
        "title": "Contratos HTTP v1",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-66e05f1fa0f61c92ee5c"
      },
      {
        "id": "F093",
        "category": "Arquitectura e infraestructura",
        "title": "Adaptadores legacy / shadow / backend",
        "branches": [
          "staging",
          "main"
        ],
        "key": "source-9f0402205fff093c0d3c"
      },
      {
        "id": "F094",
        "category": "Arquitectura e infraestructura",
        "title": "Bridge de sesión firmado",
        "branches": [
          "staging"
        ],
        "key": "source-0eec17e8a71c3f8f7eff"
      },
      {
        "id": "F095",
        "category": "Arquitectura e infraestructura",
        "title": "Proxy runtime de archivos y SSE",
        "branches": [
          "staging"
        ],
        "key": "source-f75e78a9ddf130a53425"
      },
      {
        "id": "F096",
        "category": "Arquitectura e infraestructura",
        "title": "Storage privado R2 en backend",
        "branches": [
          "staging"
        ],
        "key": "source-5de5e8b58f4de6971a5b"
      },
      {
        "id": "F097",
        "category": "Arquitectura e infraestructura",
        "title": "Política CI de migrador único",
        "branches": [
          "staging"
        ],
        "key": "source-13c35157133adee55ec9"
      },
      {
        "id": "F098",
        "category": "Arquitectura e infraestructura",
        "title": "Lista pública de home vía backend",
        "branches": [
          "staging"
        ],
        "key": "source-557e3bf289b90a783b8c"
      },
      {
        "id": "F099",
        "category": "Arquitectura e infraestructura",
        "title": "Lista privada de sorteos vía backend",
        "branches": [
          "staging"
        ],
        "key": "source-cb997d54245dee672768"
      }
    ],
    "events": [
      {
        "key": "source-4b78fef8a32e3a682e98",
        "id": "F057",
        "category": "Ventas y comprobantes",
        "title": "Compra agrupada con Purchase",
        "branch": "staging",
        "implementedAt": "2026-10-21T20:35:05.386457+00:00"
      },
      {
        "key": "superadmin-ui-component-gallery",
        "id": "F141",
        "category": "Administración",
        "title": "Galería interna de componentes",
        "branch": "staging",
        "implementedAt": "2026-10-21T17:57:46.319433+00:00"
      },
      {
        "key": "raffle-visual-personalization",
        "id": "F125",
        "category": "Landing y personalización",
        "title": "Personalización de colores del sorteo",
        "branch": "staging",
        "implementedAt": "2026-10-21T17:57:46.319433+00:00"
      },
      {
        "key": "seller-invitation-exact-pending-cancellation",
        "id": "F140",
        "category": "Arquitectura e infraestructura",
        "title": "Cancelación precisa de invitaciones pendientes",
        "branch": "staging",
        "implementedAt": "2026-10-19T23:19:17.603404+00:00"
      },
      {
        "key": "seller-invitation-resend-audit-job-trace",
        "id": "F139",
        "category": "Arquitectura e infraestructura",
        "title": "Reenvío de invitación con traza de email",
        "branch": "staging",
        "implementedAt": "2026-10-19T20:21:37.513697+00:00"
      },
      {
        "key": "email-confirmation-notification-trace",
        "id": "F138",
        "category": "Arquitectura e infraestructura",
        "title": "Confirmación de correo con notificación trazada",
        "branch": "staging",
        "implementedAt": "2026-10-19T20:21:37.513697+00:00"
      },
      {
        "key": "account-email-request-audit-job-trace",
        "id": "F137",
        "category": "Arquitectura e infraestructura",
        "title": "Solicitud de cambio de correo con traza de email",
        "branch": "staging",
        "implementedAt": "2026-10-19T19:52:21.498326+00:00"
      },
      {
        "key": "registration-verification-resend-trace",
        "id": "F136",
        "category": "Arquitectura e infraestructura",
        "title": "Registro y reenvío con traza de email",
        "branch": "staging",
        "implementedAt": "2026-10-19T19:29:16.486762+00:00"
      },
      {
        "key": "recovery-request-audit-email-trace",
        "id": "F135",
        "category": "Arquitectura e infraestructura",
        "title": "Traza de recuperación entre request, auditoría y email",
        "branch": "staging",
        "implementedAt": "2026-10-19T18:06:15.350646+00:00"
      },
      {
        "key": "public-buyers-native-sse-refresh",
        "id": "F134",
        "category": "Arquitectura e infraestructura",
        "title": "Compradores públicos sincronizados por SSE",
        "branch": "staging",
        "implementedAt": "2026-10-19T17:39:04.193733+00:00"
      },
      {
        "key": "source-a9c5541265817bb6abcb",
        "id": "F100",
        "category": "Arquitectura e infraestructura",
        "title": "Frontend independiente sin Prisma",
        "branch": "staging",
        "implementedAt": "2026-10-19T16:49:56.640149+00:00"
      },
      {
        "key": "browser-backend-console-worker-e2e",
        "id": "F133",
        "category": "Arquitectura e infraestructura",
        "title": "E2E con email-worker real sin entrega externa",
        "branch": "staging",
        "implementedAt": "2026-10-19T15:23:55.101645+00:00"
      },
      {
        "key": "browser-raffle-settings-client",
        "id": "F132",
        "category": "Arquitectura e infraestructura",
        "title": "Configuración con cliente multipart tipado",
        "branch": "staging",
        "implementedAt": "2026-10-19T15:13:48.176294+00:00"
      },
      {
        "key": "browser-raffle-create-client",
        "id": "F131",
        "category": "Arquitectura e infraestructura",
        "title": "Creación con cliente multipart tipado",
        "branch": "staging",
        "implementedAt": "2026-10-19T15:13:48.176294+00:00"
      },
      {
        "key": "browser-raffle-lifecycle-client",
        "id": "F130",
        "category": "Arquitectura e infraestructura",
        "title": "Ciclo de sorteo con cliente tipado navegador",
        "branch": "staging",
        "implementedAt": "2026-10-19T14:37:26.005480+00:00"
      },
      {
        "key": "browser-admin-client",
        "id": "F129",
        "category": "Arquitectura e infraestructura",
        "title": "Administración con cliente tipado navegador",
        "branch": "staging",
        "implementedAt": "2026-10-19T14:37:26.005480+00:00"
      },
      {
        "key": "browser-sellers-client",
        "id": "F128",
        "category": "Arquitectura e infraestructura",
        "title": "Vendedores con cliente HTTP tipado",
        "branch": "staging",
        "implementedAt": "2026-10-19T13:50:32.318358+00:00"
      },
      {
        "key": "browser-sales-client",
        "id": "F127",
        "category": "Arquitectura e infraestructura",
        "title": "Ventas con cliente HTTP tipado",
        "branch": "staging",
        "implementedAt": "2026-10-19T13:50:32.318358+00:00"
      },
      {
        "key": "browser-availability-client",
        "id": "F124",
        "category": "Arquitectura e infraestructura",
        "title": "Disponibilidad con DTO validado en navegador",
        "branch": "staging",
        "implementedAt": "2026-10-19T11:51:56.536259+00:00"
      },
      {
        "key": "browser-account-client",
        "id": "F123",
        "category": "Arquitectura e infraestructura",
        "title": "Cuenta con cliente tipado navegador",
        "branch": "staging",
        "implementedAt": "2026-10-19T11:51:56.536259+00:00"
      },
      {
        "key": "browser-identity-client",
        "id": "F122",
        "category": "Arquitectura e infraestructura",
        "title": "Identidad con cliente tipado navegador",
        "branch": "staging",
        "implementedAt": "2026-10-19T11:51:56.536259+00:00"
      },
      {
        "key": "browser-json-transport",
        "id": "F121",
        "category": "Arquitectura e infraestructura",
        "title": "Transporte JSON browser-safe",
        "branch": "staging",
        "implementedAt": "2026-10-19T11:51:56.536259+00:00"
      },
      {
        "key": "browser-runtime-boundary",
        "id": "F120",
        "category": "Arquitectura e infraestructura",
        "title": "Frontera de navegador verificada",
        "branch": "staging",
        "implementedAt": "2026-10-19T10:36:45.399740+00:00"
      },
      {
        "key": "backend-data-ownership",
        "id": "F101",
        "category": "Arquitectura e infraestructura",
        "title": "Backend como único acceso a datos",
        "branch": "staging",
        "implementedAt": "2026-10-19T05:58:09.191076+00:00"
      }
    ],
    "milestones": [
      {
        "key": "a27-staging-cutover",
        "kind": "operational-milestone",
        "title": "A2.7 cerrada en staging",
        "phase": "A2.7",
        "environment": "staging",
        "completedAt": "2026-10-19T01:43:55-03:00",
        "summary": "Corte backend-only verificado: roles DML/DDL separados, migrador y mantenimiento solo backend, rollback ensayado y 10 minutos reales de observación. No implica producción ni cierre de A3.",
        "evidence": [
          {
            "repo": "web",
            "sha": "41297cdbd8d58e815a4ed2881f274b223006e5d6",
            "path": "docs/A27_FINAL_CUTOVER.md",
            "line": 5,
            "url": "https://github.com/VictorManuel/rifero/blob/41297cdbd8d58e815a4ed2881f274b223006e5d6/docs/A27_FINAL_CUTOVER.md#L5"
          },
          {
            "repo": "backend",
            "sha": "4fe8a8d51d1ba25f6207b7f54d026aeed25655c6",
            "path": "docs/A27_FINAL_CUTOVER.md",
            "line": 5,
            "url": "https://github.com/VictorManuel/rifero-backend/blob/4fe8a8d51d1ba25f6207b7f54d026aeed25655c6/docs/A27_FINAL_CUTOVER.md#L5"
          }
        ]
      },
      {
        "key": "a3-a4-staging-cutover",
        "kind": "operational-milestone",
        "title": "A3/A4: corte de staging verificado",
        "phase": "A3/A4",
        "environment": "staging",
        "completedAt": "2026-10-20T01:56:59-03:00",
        "summary": "Corte Next.js+BFF/backend verificado: HTTP+SQL, identidad e invitaciones, SSE, worker console aislado, 10 minutos nuevos de observación y limpieza exacta. Imágenes remotas excluidas; sin producción ni retiro global A4.",
        "evidence": [
          {
            "repo": "web",
            "sha": "0369f3de974e166e34b1ca8956969bf2a7673210",
            "path": "docs/A3_A4_STAGING_CUTOVER.md",
            "line": 3,
            "url": "https://github.com/VictorManuel/rifero/blob/0369f3de974e166e34b1ca8956969bf2a7673210/docs/A3_A4_STAGING_CUTOVER.md#L3"
          },
          {
            "repo": "backend",
            "sha": "0172873f7c34c2ba41297a41702cb226b98fca21",
            "path": "docs/A3_A4_STAGING_CUTOVER.md",
            "line": 3,
            "url": "https://github.com/VictorManuel/rifero-backend/blob/0172873f7c34c2ba41297a41702cb226b98fca21/docs/A3_A4_STAGING_CUTOVER.md#L3"
          }
        ]
      },
      {
        "key": "a4-protected-snapshot-read-rehearsal",
        "kind": "operational-milestone",
        "title": "A4: snapshot protegido, restauración y lecturas verificadas",
        "phase": "A4",
        "environment": "staging",
        "completedAt": "2026-10-20T12:18:39-03:00",
        "summary": "Copia aislada: 16 tablas conciliadas, 21 migraciones, datos personales sustituidos y credenciales invalidadas, migrador NOOP y 10 minutos de lecturas HTTP. Recursos temporales retirados. Sin pruebas de login real, browser E2E o escrituras mediante apps sobre la copia; sin producción ni cierre global A4.",
        "evidence": [
          {
            "repo": "backend",
            "sha": "aab52e68e2442cbd037176267ed7ac6dcc9686f7",
            "path": "docs/A4_PROTECTED_SNAPSHOT_REHEARSAL.md",
            "line": 5,
            "url": "https://github.com/VictorManuel/rifero-backend/blob/aab52e68e2442cbd037176267ed7ac6dcc9686f7/docs/A4_PROTECTED_SNAPSHOT_REHEARSAL.md#L5"
          },
          {
            "repo": "web",
            "sha": "4f4da5e9a5c3146e93a2ff0c041e276b50b0610c",
            "path": "docs/A4_PROTECTED_SNAPSHOT_REHEARSAL.md",
            "line": 3,
            "url": "https://github.com/VictorManuel/rifero/blob/4f4da5e9a5c3146e93a2ff0c041e276b50b0610c/docs/A4_PROTECTED_SNAPSHOT_REHEARSAL.md#L3"
          }
        ]
      },
      {
        "key": "a4-protected-snapshot-session-profile",
        "kind": "operational-milestone",
        "title": "A4: sesión y perfil verificados en copia protegida",
        "phase": "A4",
        "environment": "staging",
        "completedAt": "2026-10-20T19:55:33-03:00",
        "summary": "Copia saneada aislada: login y sesión reales, perfil persistido en escritorio/móvil, 9 denegaciones de privilegios, filas copiadas/cola intactas y 10 minutos nuevos de observación. Recursos temporales retirados. Solo usuario sintético nuevo; sin rifas/ventas escritas en la copia, storage/correo externos, producción ni cierre global A4.",
        "evidence": [
          {
            "repo": "backend",
            "sha": "a09aada7ae5212197cb69fc239ec57ae57a01da0",
            "path": "docs/A4_SESSION_WRITE_REHEARSAL.md",
            "line": 109,
            "url": "https://github.com/VictorManuel/rifero-backend/blob/a09aada7ae5212197cb69fc239ec57ae57a01da0/docs/A4_SESSION_WRITE_REHEARSAL.md#L109"
          },
          {
            "repo": "web",
            "sha": "1d9406a60ebf91b6c52d836743bffdada890483d",
            "path": "docs/A4_SESSION_WRITE_REHEARSAL.md",
            "line": 77,
            "url": "https://github.com/VictorManuel/rifero/blob/1d9406a60ebf91b6c52d836743bffdada890483d/docs/A4_SESSION_WRITE_REHEARSAL.md#L77"
          }
        ]
      },
      {
        "key": "staging-local-approval-purchase-preparation",
        "kind": "operational-milestone",
        "title": "Staging: aprobación local y preparación de compra agrupada integradas",
        "phase": "Tooling / Purchase",
        "environment": "staging",
        "completedAt": "2026-10-21T01:48:51-03:00",
        "summary": "Tres candidatos exactos verificados y revisados con aprobación humana excepcional: script local, auditor sin permisos de merge y cancelación solo de PR obsoletos. Actions sigue bloqueado por cuota; no se falsean checks ni se omiten controles. Purchase conserva estado planificado: solo SQL propuesto probado en e2e local, sin migración activa ni despliegue. Sin main de apps, producción, runner ni gasto adicional.",
        "evidence": [
          {
            "repo": "backend",
            "sha": "063054183347bfd11c95a15c67849d24888d4a90",
            "path": "scripts/local-approval.py",
            "line": 185,
            "url": "https://github.com/VictorManuel/rifero-backend/blob/063054183347bfd11c95a15c67849d24888d4a90/scripts/local-approval.py#L185"
          },
          {
            "repo": "web",
            "sha": "c678f08f79bbe807c856e40d995f99b976bfbd93",
            "path": "scripts/local-approval.py",
            "line": 185,
            "url": "https://github.com/VictorManuel/rifero/blob/c678f08f79bbe807c856e40d995f99b976bfbd93/scripts/local-approval.py#L185"
          },
          {
            "repo": "backend",
            "sha": "c0e2ecf4a52ffbacd82d16ebb6b01fb7e1e83e34",
            "path": "docs/PURCHASE_PREPARATION.md",
            "line": 6,
            "url": "https://github.com/VictorManuel/rifero-backend/blob/c0e2ecf4a52ffbacd82d16ebb6b01fb7e1e83e34/docs/PURCHASE_PREPARATION.md#L6"
          }
        ]
      },
      {
        "key": "gallery-appearance-staging-release",
        "kind": "operational-milestone",
        "title": "Galería y colores: staging desplegado y verificado",
        "phase": "Galería / UX-P1",
        "environment": "staging",
        "completedAt": "2026-10-21T15:32:24.674429-03:00",
        "summary": "Galería exclusiva SUPERADMIN y colores del propietario DRAFT/ACTIVE: SQL canónica22, imágenes exactas, sesión y pruebas sintéticas,600.939s reales/21 muestras y limpieza correlacionada, con revisión independiente. Historial conservado; sin producción, Purchase, correo externo, pagos reales ni imágenes remotas. No implica cierre global A3/A4 ni UX-P2.",
        "evidence": [
          {
            "repo": "backend",
            "sha": "dd3a40b7584ed4c0ddc46c5b7f7d41568fe16117",
            "path": "docs/APPEARANCE_STAGING_CLOSEOUT.md",
            "line": 3,
            "url": "https://github.com/VictorManuel/rifero-backend/blob/dd3a40b7584ed4c0ddc46c5b7f7d41568fe16117/docs/APPEARANCE_STAGING_CLOSEOUT.md#L3"
          },
          {
            "repo": "web",
            "sha": "66a8222bf627fa0de5f422e6aaa79f18e83b8bc8",
            "path": "docs/APPEARANCE_STAGING_CLOSEOUT.md",
            "line": 3,
            "url": "https://github.com/VictorManuel/rifero/blob/66a8222bf627fa0de5f422e6aaa79f18e83b8bc8/docs/APPEARANCE_STAGING_CLOSEOUT.md#L3"
          }
        ]
      },
      {
        "key": "purchase-staging-activation",
        "kind": "operational-milestone",
        "title": "Purchase: compras agrupadas activas y verificadas en staging",
        "phase": "Purchase",
        "environment": "staging",
        "completedAt": "2026-10-22T19:09:52.361117-03:00",
        "summary": "Esquema canónico23 y backend/web exactos: compras1/2/500, permisos/SSE sin PII, mantenimiento y reversión con creación OFF,602s reales/21 muestras y limpieza propia verificados con revisión independiente. Sin backfill, pagos, correo nuevo ni producción. Hito histórico de aceptación, no monitoreo vivo ni cierre global A3/A4 o UX-P2.",
        "evidence": [
          {
            "repo": "backend",
            "sha": "91841c7a4c6bd3cc1208162e459c8e5bac017653",
            "path": "docs/PURCHASE_STAGING_ACTIVATION.md",
            "line": 59,
            "url": "https://github.com/VictorManuel/rifero-backend/blob/91841c7a4c6bd3cc1208162e459c8e5bac017653/docs/PURCHASE_STAGING_ACTIVATION.md#L59"
          },
          {
            "repo": "web",
            "sha": "0452dfdb55b43a9f0acf04e415235195965624ed",
            "path": "docs/PAGE_FLOWS.md",
            "line": 1937,
            "url": "https://github.com/VictorManuel/rifero/blob/0452dfdb55b43a9f0acf04e415235195965624ed/docs/PAGE_FLOWS.md#L1937"
          }
        ]
      }
    ]
  },
  "method": "Revisión de código y documentación versionados; checks = implementación presente, no activación ni despliegue. Pendientes curados del roadmap y especificaciones. No consulta DB, flags activos ni infraestructura."
};
