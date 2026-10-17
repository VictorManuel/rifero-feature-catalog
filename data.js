export default {
  "generatedAt": "2026-10-17T15:37:56.191217+00:00",
  "refs": {
    "web": {
      "staging": "24d07e117a89e504fccdf330d3ab20a04dfac9c2",
      "main": "5da5add4f7fdc13bb86c1854df3f6c3867942d1a"
    },
    "backend": {
      "staging": "071d95fd736164fc40e54dbd1280ebcf48de4e81",
      "main": "2f9cba69f7f15e9ed4490214752e28942301156d"
    },
    "email-worker": {
      "staging": "9d82e8c9dba845ce91f0d7b0cd408ab2b44d57b0",
      "main": "092232c88e43de43a553cffbf9e41fda20cd8b7b"
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/components/forms/register-form.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/forms/register-form.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/components/forms/register-form.tsx#L1",
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
          "repo": "web",
          "path": "src/lib/auth-identity.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/lib/auth-identity.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/auth-identity.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/lib/auth-identity.ts#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/app/api/account/profile/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/account/profile/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/app/api/account/profile/route.ts#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/app/api/account/email/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/account/email/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/app/api/account/email/route.ts#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/app/api/account/password/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/account/password/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/app/api/account/password/route.ts#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/components/initial-password-decision.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/initial-password-decision.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/components/initial-password-decision.tsx#L1",
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
      "note": "Implementada; requiere EMAIL_VERIFICATION_ENABLED=true y entrega de emails. No se verificó el flag activo.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/app/api/email-verification/verify/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/app/api/email-verification/verify/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/email-verification/verify/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/app/api/email-verification/verify/route.ts#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/app/api/email-verification/resend/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/email-verification/resend/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/app/api/email-verification/resend/route.ts#L1",
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
      "note": "Implementada; depende de PASSWORD_RECOVERY_ENABLED=true, correo y worker. No equivale a activación.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/app/api/password/forgot/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/app/api/password/forgot/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/password/forgot/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/app/api/password/forgot/route.ts#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/app/api/password/reset/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/password/reset/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/app/api/password/reset/route.ts#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/app/app/my-numbers/page.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/app/my-numbers/page.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/app/app/my-numbers/page.tsx#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/lib/permissions.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/permissions.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/lib/permissions.ts#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/app/api/admin/users/reset-password/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/admin/users/reset-password/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/app/api/admin/users/reset-password/route.ts#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/lib/legal.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/legal.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/lib/legal.ts#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/app/api/raffles/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/raffles/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/app/api/raffles/route.ts#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/components/forms/raffle-settings-form.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/forms/raffle-settings-form.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/components/forms/raffle-settings-form.tsx#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/lib/prizes.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/prizes.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/lib/prizes.ts#L1",
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
          "repo": "web",
          "path": "src/lib/uploads.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/lib/uploads.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/uploads.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/lib/uploads.ts#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/components/image-focal-point-picker.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/image-focal-point-picker.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/components/image-focal-point-picker.tsx#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/components/raffle-image-gallery.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/raffle-image-gallery.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/components/raffle-image-gallery.tsx#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/app/page.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/page.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/app/page.tsx#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/app/r/[slug]/page.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/r/[slug]/page.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/app/r/[slug]/page.tsx#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/lib/raffle-moderation-policy.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/raffle-moderation-policy.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/lib/raffle-moderation-policy.ts#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/app/r/[slug]/page.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/r/[slug]/page.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/app/r/[slug]/page.tsx#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/lib/raffle-events.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/raffle-events.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/lib/raffle-events.ts#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/lib/public-raffle-page.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/public-raffle-page.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/lib/public-raffle-page.ts#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/app/app/raffles/[raffleId]/page.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/app/raffles/[raffleId]/page.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/app/app/raffles/[raffleId]/page.tsx#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/components/raffle-context-navigation.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/raffle-context-navigation.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/components/raffle-context-navigation.tsx#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/app/api/raffles/[raffleId]/number-count/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/raffles/[raffleId]/number-count/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/app/api/raffles/[raffleId]/number-count/route.ts#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/app/api/raffles/[raffleId]/cancel/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/raffles/[raffleId]/cancel/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/app/api/raffles/[raffleId]/cancel/route.ts#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/app/app/page.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/app/page.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/app/app/page.tsx#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/components/forms/seller-form.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/forms/seller-form.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/components/forms/seller-form.tsx#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/app/api/raffles/[raffleId]/sellers/import/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/raffles/[raffleId]/sellers/import/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/app/api/raffles/[raffleId]/sellers/import/route.ts#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/components/seller-selling-mode-manager.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/seller-selling-mode-manager.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/components/seller-selling-mode-manager.tsx#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/lib/number-allocation.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/number-allocation.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/lib/number-allocation.ts#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/app/api/raffles/[raffleId]/number-assignments/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/raffles/[raffleId]/number-assignments/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/app/api/raffles/[raffleId]/number-assignments/route.ts#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/components/seller-number-unassignment-manager.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/seller-number-unassignment-manager.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/components/seller-number-unassignment-manager.tsx#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/lib/seller-team-stats.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/seller-team-stats.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/lib/seller-team-stats.ts#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/components/seller-sales-modal.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/seller-sales-modal.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/components/seller-sales-modal.tsx#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/lib/out-of-assignment-sales.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/out-of-assignment-sales.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/lib/out-of-assignment-sales.ts#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/components/share-seller-numbers-button.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/share-seller-numbers-button.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/components/share-seller-numbers-button.tsx#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/app/api/invitations/accept/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/invitations/accept/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/app/api/invitations/accept/route.ts#L1",
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
      "note": "Código existente y condicionado por flag; no supone alta por invitación habilitada en UI.",
      "staging": true,
      "main": true,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/components/invitation-actions.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/components/invitation-actions.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/invitation-actions.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/components/invitation-actions.tsx#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/components/forms/sale-form.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/forms/sale-form.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/components/forms/sale-form.tsx#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/components/sale-registration.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/sale-registration.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/components/sale-registration.tsx#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/components/sale-modal.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/sale-modal.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/components/sale-modal.tsx#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/app/api/raffles/[raffleId]/reservations/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/raffles/[raffleId]/reservations/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/app/api/raffles/[raffleId]/reservations/route.ts#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/app/api/raffles/[raffleId]/sales/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/raffles/[raffleId]/sales/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/app/api/raffles/[raffleId]/sales/route.ts#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/lib/validators.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/validators.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/lib/validators.ts#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/components/sale-receipt-field.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/sale-receipt-field.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/components/sale-receipt-field.tsx#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/app/api/raffles/[raffleId]/sales/[saleId]/receipt/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/raffles/[raffleId]/sales/[saleId]/receipt/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/app/api/raffles/[raffleId]/sales/[saleId]/receipt/route.ts#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/app/api/raffles/[raffleId]/receipts/[receiptId]/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/raffles/[raffleId]/receipts/[receiptId]/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/app/api/raffles/[raffleId]/receipts/[receiptId]/route.ts#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/app/app/raffles/[raffleId]/sales/page.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/app/raffles/[raffleId]/sales/page.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/app/app/raffles/[raffleId]/sales/page.tsx#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/lib/sale-sorting.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/sale-sorting.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/lib/sale-sorting.ts#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/app/api/raffles/[raffleId]/sales/export/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/raffles/[raffleId]/sales/export/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/app/api/raffles/[raffleId]/sales/export/route.ts#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/app/api/raffles/[raffleId]/sales/[saleId]/cancel/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/raffles/[raffleId]/sales/[saleId]/cancel/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/app/api/raffles/[raffleId]/sales/[saleId]/cancel/route.ts#L1",
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
      "note": "La venta múltiple existe, pero aún no tiene una entidad Purchase para agrupar compras y pagos.",
      "staging": false,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 97,
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/ROADMAP_EXECUTION_PLAN.md#L97",
          "match": "Purchase",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 97,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/ROADMAP_EXECUTION_PLAN.md#L97",
          "match": "Purchase",
          "kind": "plan"
        }
      },
      "timelineKey": "source-4b78fef8a32e3a682e98",
      "implementationDates": {
        "staging": null,
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/components/forms/raffle-draw-form.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/forms/raffle-draw-form.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/components/forms/raffle-draw-form.tsx#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/lib/draw-random.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/draw-random.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/lib/draw-random.ts#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/app/api/raffles/[raffleId]/draws/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/raffles/[raffleId]/draws/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/app/api/raffles/[raffleId]/draws/route.ts#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/app/api/raffles/[raffleId]/draws/export/route.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/api/raffles/[raffleId]/draws/export/route.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/app/api/raffles/[raffleId]/draws/export/route.ts#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/lib/public-raffle-page.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/public-raffle-page.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/lib/public-raffle-page.ts#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/app/app/admin/users/page.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/app/app/admin/users/page.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/app/app/admin/users/page.tsx#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/components/raffle-moderation-form.tsx#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/components/raffle-moderation-form.tsx",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/components/raffle-moderation-form.tsx#L1",
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
          "repo": "web",
          "path": "src/lib/raffle-inspection.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/lib/raffle-inspection.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/raffle-inspection.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/lib/raffle-inspection.ts#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/lib/raffle-activity.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/raffle-activity.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/lib/raffle-activity.ts#L1",
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
          "repo": "web",
          "path": "src/lib/audit.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/lib/audit.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/audit.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/lib/audit.ts#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/lib/rate-limit.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/rate-limit.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/lib/rate-limit.ts#L1",
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
          "repo": "web",
          "path": "src/lib/tokens.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/lib/tokens.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/tokens.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/lib/tokens.ts#L1",
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
          "repo": "web",
          "path": "src/lib/uploads.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/lib/uploads.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/uploads.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/lib/uploads.ts#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/lib/sale-receipts.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/sale-receipts.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/lib/sale-receipts.ts#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/scripts/start-deploy.mjs#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "scripts/start-deploy.mjs",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/scripts/start-deploy.mjs#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/lib/maintenance.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/maintenance.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/lib/maintenance.ts#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/lib/logger.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/logger.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/lib/logger.ts#L1",
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
          "line": 1319,
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/ROADMAP_EXECUTION_PLAN.md#L1319",
          "match": "Auditoria Completa",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 1303,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/ROADMAP_EXECUTION_PLAN.md#L1303",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/docs/CLOUDFLARE_SECURITY_REVIEW.md#L58",
          "match": "SEC.EDGE.1",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/ROADMAP_EXECUTION_PLAN.md#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/docs/CLOUDFLARE_SECURITY_REVIEW.md#L70",
          "match": "SEC.EDGE.2",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/ROADMAP_EXECUTION_PLAN.md#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/docs/CLOUDFLARE_SECURITY_REVIEW.md#L84",
          "match": "SEC.EDGE.3",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/ROADMAP_EXECUTION_PLAN.md#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/docs/CLOUDFLARE_SECURITY_REVIEW.md#L97",
          "match": "SEC.EDGE.4",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/ROADMAP_EXECUTION_PLAN.md#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/docs/CLOUDFLARE_SECURITY_REVIEW.md#L112",
          "match": "SEC.EDGE.5",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/ROADMAP_EXECUTION_PLAN.md#L1",
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
          "repo": "web",
          "path": "src/lib/email-jobs.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/lib/email-jobs.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/email-jobs.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/lib/email-jobs.ts#L1",
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
          "repo": "web",
          "path": "src/lib/email/resend-provider.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/lib/email/resend-provider.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/email/resend-provider.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/lib/email/resend-provider.ts#L1",
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
          "repo": "web",
          "path": "src/lib/email/templates.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/lib/email/templates.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/email/templates.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/lib/email/templates.ts#L1",
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
          "url": "https://github.com/VictorManuel/rifero-email-worker/blob/9d82e8c9dba845ce91f0d7b0cd408ab2b44d57b0/package.json#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "email-worker",
          "path": "package.json",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero-email-worker/blob/092232c88e43de43a553cffbf9e41fda20cd8b7b/package.json#L1",
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
          "url": "https://github.com/VictorManuel/rifero-email-worker/blob/9d82e8c9dba845ce91f0d7b0cd408ab2b44d57b0/src/worker.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "email-worker",
          "path": "src/worker.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero-email-worker/blob/092232c88e43de43a553cffbf9e41fda20cd8b7b/src/worker.ts#L1",
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
          "line": 15,
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/ROADMAP_EXECUTION_PLAN.md#L15",
          "match": "Emails",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 15,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/ROADMAP_EXECUTION_PLAN.md#L15",
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
          "line": 15,
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/ROADMAP_EXECUTION_PLAN.md#L15",
          "match": "Emails",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 15,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/ROADMAP_EXECUTION_PLAN.md#L15",
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
          "line": 15,
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/ROADMAP_EXECUTION_PLAN.md#L15",
          "match": "Emails",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 15,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/ROADMAP_EXECUTION_PLAN.md#L15",
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
          "line": 15,
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/ROADMAP_EXECUTION_PLAN.md#L15",
          "match": "Emails",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 15,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/ROADMAP_EXECUTION_PLAN.md#L15",
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
          "line": 15,
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/ROADMAP_EXECUTION_PLAN.md#L15",
          "match": "Emails",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 15,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/ROADMAP_EXECUTION_PLAN.md#L15",
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
          "url": "https://github.com/VictorManuel/rifero-backend/blob/071d95fd736164fc40e54dbd1280ebcf48de4e81/package.json#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "backend",
          "path": "package.json",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero-backend/blob/2f9cba69f7f15e9ed4490214752e28942301156d/package.json#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/contracts/http/v1/index.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/contracts/http/v1/index.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/contracts/http/v1/index.ts#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/lib/backend-api.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/backend-api.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/lib/backend-api.ts#L1",
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
      "note": "Emisión/validación delegable al backend, con legacy como default.",
      "staging": true,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "src/lib/session-bridge.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/lib/session-bridge.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/session-bridge.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/lib/session-bridge.ts#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/lib/backend-runtime.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/backend-runtime.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/lib/backend-runtime.ts#L1",
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
          "url": "https://github.com/VictorManuel/rifero-backend/blob/071d95fd736164fc40e54dbd1280ebcf48de4e81/src/infrastructure/storage/r2-object-store.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "backend",
          "path": "src/infrastructure/storage/r2-object-store.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero-backend/blob/2f9cba69f7f15e9ed4490214752e28942301156d/src/infrastructure/storage/r2-object-store.ts#L1",
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
      "note": "A2.7: política y validación de schema/SQL; web aún conserva Prisma.",
      "staging": true,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "scripts/migration-policy.mjs",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/scripts/migration-policy.mjs#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "scripts/migration-policy.mjs",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/scripts/migration-policy.mjs#L1",
          "match": null,
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/contracts/http/v1/public-upcoming-raffles.ts#L1",
          "match": null,
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/contracts/http/v1/public-upcoming-raffles.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/contracts/http/v1/public-upcoming-raffles.ts#L1",
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
          "line": 30,
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/src/lib/private-reads.ts#L30",
          "match": "fetchUserRaffleMembershipsReadFromBackend",
          "kind": "implementation"
        },
        "main": {
          "repo": "web",
          "path": "src/lib/private-reads.ts",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/src/lib/private-reads.ts#L1",
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
      "note": "A3 pendiente: web conserva acceso directo a datos y dependencias servidor.",
      "staging": false,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 351,
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/ROADMAP_EXECUTION_PLAN.md#L351",
          "match": "A3",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 356,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/ROADMAP_EXECUTION_PLAN.md#L356",
          "match": "A3",
          "kind": "plan"
        }
      },
      "timelineKey": "source-a9c5541265817bb6abcb",
      "implementationDates": {
        "staging": null,
        "main": null
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
          "line": 1812,
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/ROADMAP_EXECUTION_PLAN.md#L1812",
          "match": "Inventario de persistencia",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/ROADMAP_EXECUTION_PLAN.md#L1",
          "match": null,
          "kind": "general-plan"
        }
      },
      "timelineKey": "backend-data-ownership",
      "implementationDates": {
        "staging": null,
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
          "line": 369,
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/ROADMAP_EXECUTION_PLAN.md#L369",
          "match": "A4",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 363,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/ROADMAP_EXECUTION_PLAN.md#L363",
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
          "line": 12,
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/ROADMAP_EXECUTION_PLAN.md#L12",
          "match": "Redis",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 12,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/ROADMAP_EXECUTION_PLAN.md#L12",
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
          "line": 571,
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/ROADMAP_EXECUTION_PLAN.md#L571",
          "match": "Sentry",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 555,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/ROADMAP_EXECUTION_PLAN.md#L555",
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
      "note": "Proveedor de métricas de uso pendiente; distinto de las métricas operativas ya visibles.",
      "staging": false,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 18,
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/ROADMAP_EXECUTION_PLAN.md#L18",
          "match": "Analytics",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 18,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/ROADMAP_EXECUTION_PLAN.md#L18",
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
      "note": "Eventos de visita, selección y conversión sin datos personales.",
      "staging": false,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 18,
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/ROADMAP_EXECUTION_PLAN.md#L18",
          "match": "Analytics",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 18,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/ROADMAP_EXECUTION_PLAN.md#L18",
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
      "note": "Sin script/publisher activo; requiere aprobación y validación de políticas.",
      "staging": false,
      "main": false,
      "evidence": {
        "staging": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 484,
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/ROADMAP_EXECUTION_PLAN.md#L484",
          "match": "AdSense",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 468,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/ROADMAP_EXECUTION_PLAN.md#L468",
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
          "line": 22,
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/ROADMAP_EXECUTION_PLAN.md#L22",
          "match": "Ads",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 22,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/ROADMAP_EXECUTION_PLAN.md#L22",
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
          "line": 508,
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/ROADMAP_EXECUTION_PLAN.md#L508",
          "match": "consentimiento",
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 492,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/ROADMAP_EXECUTION_PLAN.md#L492",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/docs/MERCADOPAGO_LOTTERY_SPEC.md#L1",
          "match": null,
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/ROADMAP_EXECUTION_PLAN.md#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/docs/MERCADOPAGO_LOTTERY_SPEC.md#L1",
          "match": null,
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/ROADMAP_EXECUTION_PLAN.md#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/docs/MERCADOPAGO_LOTTERY_SPEC.md#L1",
          "match": null,
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/ROADMAP_EXECUTION_PLAN.md#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/docs/MERCADOPAGO_LOTTERY_SPEC.md#L1",
          "match": null,
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/ROADMAP_EXECUTION_PLAN.md#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/docs/MERCADOPAGO_LOTTERY_SPEC.md#L1",
          "match": null,
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/ROADMAP_EXECUTION_PLAN.md#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/docs/MERCADOPAGO_LOTTERY_SPEC.md#L1",
          "match": null,
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/ROADMAP_EXECUTION_PLAN.md#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/docs/MERCADOPAGO_LOTTERY_SPEC.md#L1",
          "match": null,
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/ROADMAP_EXECUTION_PLAN.md#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/docs/MERCADOPAGO_LOTTERY_SPEC.md#L1",
          "match": null,
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/ROADMAP_EXECUTION_PLAN.md#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/docs/MERCADOPAGO_LOTTERY_SPEC.md#L1",
          "match": null,
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/ROADMAP_EXECUTION_PLAN.md#L1",
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
          "url": "https://github.com/VictorManuel/rifero/blob/24d07e117a89e504fccdf330d3ab20a04dfac9c2/docs/MERCADOPAGO_LOTTERY_SPEC.md#L1",
          "match": null,
          "kind": "plan"
        },
        "main": {
          "repo": "web",
          "path": "ROADMAP_EXECUTION_PLAN.md",
          "line": 1,
          "url": "https://github.com/VictorManuel/rifero/blob/5da5add4f7fdc13bb86c1854df3f6c3867942d1a/ROADMAP_EXECUTION_PLAN.md#L1",
          "match": null,
          "kind": "general-plan"
        }
      },
      "timelineKey": "immutable-draw-type",
      "implementationDates": {
        "staging": null,
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
    "events": []
  },
  "method": "Revisión de código y documentación versionados; checks = implementación presente, no activación ni despliegue. Pendientes curados del roadmap y especificaciones. No consulta DB, flags activos ni infraestructura."
};
