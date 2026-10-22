"""Curated operational receipts, separate from first-observed implementation dates."""
from datetime import datetime
import subprocess

COMPLETED_AT = "2026-10-19T01:43:55-03:00"
RECEIPTS = (
    ("web", "41297cdbd8d58e815a4ed2881f274b223006e5d6"),
    ("backend", "4fe8a8d51d1ba25f6207b7f54d026aeed25655c6"),
)
PATH = "docs/A27_FINAL_CUTOVER.md"
REQUIRED = (
    "**Corte desplegado y verificado en staging.",
    "No implica despliegue productivo ni inicio de A3.",
    "21 muestras/84 HTTP durante 600.86s reales",
    "sin reinicios ni errores nuevos en stdout/stderr",
    COMPLETED_AT,
    *[f"| G{gate} " for gate in range(1, 8)],
)


def _a27_milestone(git, refs, repos):
    """Require both immutable published receipts; never infer a deploy from code.

    This is curated historical evidence, not live monitoring. Changing its date,
    status or sources requires a reviewed source update, not a generated-data edit.
    """
    completed = datetime.fromisoformat(COMPLETED_AT)
    if completed.utcoffset() is None:
        raise ValueError("Operational milestone needs an explicit timezone")
    evidence = []
    for repo, sha in RECEIPTS:
        try:
            git(repo, "merge-base", "--is-ancestor", sha, refs[repo]["staging"])
            source = git(repo, "show", f"{sha}:{PATH}")
        except (subprocess.CalledProcessError, KeyError) as exc:
            raise ValueError(f"A2.7 staging receipt not integrated: {repo}") from exc
        if not all(marker in source for marker in REQUIRED):
            raise ValueError(f"A2.7 staging receipt incomplete: {repo}")
        for gate in range(1, 8):
            line = next(line for line in source.splitlines() if line.startswith(f"| G{gate} "))
            if "| PASS:" not in line:
                raise ValueError(f"A2.7 gate G{gate} not passed: {repo}")
        line = next(i for i, text in enumerate(source.splitlines(), 1)
                    if "**Corte desplegado y verificado en staging." in text)
        evidence.append({"repo": repo, "sha": sha, "path": PATH, "line": line,
                         "url": f"https://github.com/{repos[repo]}/blob/{sha}/{PATH}#L{line}"})
    return [{
        "key": "a27-staging-cutover", "kind": "operational-milestone",
        "title": "A2.7 cerrada en staging", "phase": "A2.7",
        "environment": "staging", "completedAt": COMPLETED_AT,
        "summary": "Corte backend-only verificado: roles DML/DDL separados, migrador y mantenimiento solo backend, rollback ensayado y 10 minutos reales de observación. No implica producción ni cierre de A3.",
        "evidence": evidence,
    }]


# Reviewed curated operational receipt; not live detection or an implementation.
A34_COMPLETED_AT = '2026-10-20T01:56:59-03:00'
A34_RECEIPTS = (
    ('web', '0369f3de974e166e34b1ca8956969bf2a7673210'),
    ('backend', '0172873f7c34c2ba41297a41702cb226b98fca21'),
)
A34_PATH = 'docs/A3_A4_STAGING_CUTOVER.md'
A34_REQUIRED = (
    '**Corte desplegado y verificado en staging. No implica producción ni retiro global A4.**',
    A34_COMPLETED_AT,
    '21 muestras/84 HTTP durante 600.36s reales',
    'sin reinicios ni errores nuevos en stdout/stderr',
    '4 SENT simulados',
    'no verificadas',
    '73583de99ce4a201b99dba708925ea65eef7fe5c',
    'c8439716447ba24cb05cce56e70a3f7d52197db7',
    *[f'| G{gate} ' for gate in range(1, 8)],
)


def _a34_milestone(git, refs, repos):
    completed = datetime.fromisoformat(A34_COMPLETED_AT)
    if completed.utcoffset() is None:
        raise ValueError('A3/A4 milestone needs an explicit timezone')
    evidence = []
    for repo, sha in A34_RECEIPTS:
        try:
            git(repo, 'merge-base', '--is-ancestor', sha, refs[repo]['staging'])
            source = git(repo, 'show', f'{sha}:{A34_PATH}')
        except (subprocess.CalledProcessError, KeyError) as exc:
            raise ValueError(f'A3/A4 staging receipt not integrated: {repo}') from exc
        if not all(marker in source for marker in A34_REQUIRED):
            raise ValueError(f'A3/A4 staging receipt incomplete: {repo}')
        for gate in range(1, 8):
            lines = [line for line in source.splitlines() if line.startswith(f'| G{gate} ')]
            if len(lines) != 1 or '| PASS:' not in lines[0]:
                raise ValueError(f'A3/A4 gate G{gate} not passed: {repo}')
        line = next(i for i, text in enumerate(source.splitlines(), 1)
                    if '**Corte desplegado y verificado en staging.' in text)
        evidence.append({'repo': repo, 'sha': sha, 'path': A34_PATH, 'line': line,
                         'url': f'https://github.com/{repos[repo]}/blob/{sha}/{A34_PATH}#L{line}'})
    return {
        'key': 'a3-a4-staging-cutover', 'kind': 'operational-milestone',
        'title': 'A3/A4: corte de staging verificado', 'phase': 'A3/A4',
        'environment': 'staging', 'completedAt': A34_COMPLETED_AT,
        'summary': 'Corte Next.js+BFF/backend verificado: HTTP+SQL, identidad e invitaciones, SSE, worker console aislado, 10 minutos nuevos de observación y limpieza exacta. Imágenes remotas excluidas; sin producción ni retiro global A4.',
        'evidence': evidence,
    }


# Restricted, read-only application rehearsal; not production or full A4 closure.
SNAPSHOT_COMPLETED_AT = '2026-10-20T12:18:39-03:00'
SNAPSHOT_RECEIPTS = (
    ('backend', 'aab52e68e2442cbd037176267ed7ac6dcc9686f7'),
    ('web', '4f4da5e9a5c3146e93a2ff0c041e276b50b0610c'),
)
SNAPSHOT_PATH = 'docs/A4_PROTECTED_SNAPSHOT_REHEARSAL.md'
SNAPSHOT_REQUIRED = (SNAPSHOT_COMPLETED_AT, 'lectura HTTP y limpieza verificadas solo en staging aislado',
                     '16 tablas', '21 migraciones', '15 checks', '21 muestras/84 HTTP',
                     '600.189s reales', 'browser E2E', 'PG16')


def _snapshot_milestone(git, refs, repos):
    if datetime.fromisoformat(SNAPSHOT_COMPLETED_AT).utcoffset() is None:
        raise ValueError('Snapshot receipt needs a timezone')
    evidence = []
    for repo, sha in SNAPSHOT_RECEIPTS:
        try:
            git(repo, 'merge-base', '--is-ancestor', sha, refs[repo]['staging'])
            source = git(repo, 'show', f'{sha}:{SNAPSHOT_PATH}')
        except (subprocess.CalledProcessError, KeyError) as exc:
            raise ValueError(f'Snapshot receipt not integrated in staging: {repo}') from exc
        if not all(marker in source for marker in SNAPSHOT_REQUIRED):
            raise ValueError(f'Snapshot receipt incomplete: {repo}')
        if repo == 'backend':
            for gate in range(1, 7):
                lines = [line for line in source.splitlines() if line.startswith(f'| R{gate} ')]
                if len(lines) != 1 or '| PASS:' not in lines[0]:
                    raise ValueError(f'Snapshot gate R{gate} not passed')
        else:
            backend_sha = dict(SNAPSHOT_RECEIPTS)['backend']
            if f'/blob/{backend_sha}/{SNAPSHOT_PATH}' not in source:
                raise ValueError('Web snapshot receipt references a different backend candidate')
        line = next(i for i, text in enumerate(source.splitlines(), 1)
                    if 'lectura HTTP y limpieza verificadas solo en staging aislado' in text)
        evidence.append({'repo': repo, 'sha': sha, 'path': SNAPSHOT_PATH, 'line': line,
                         'url': f'https://github.com/{repos[repo]}/blob/{sha}/{SNAPSHOT_PATH}#L{line}'})
    return {
        'key': 'a4-protected-snapshot-read-rehearsal', 'kind': 'operational-milestone',
        'title': 'A4: snapshot protegido, restauración y lecturas verificadas',
        'phase': 'A4', 'environment': 'staging', 'completedAt': SNAPSHOT_COMPLETED_AT,
        'summary': 'Copia aislada: 16 tablas conciliadas, 21 migraciones, datos personales sustituidos y credenciales invalidadas, migrador NOOP y 10 minutos de lecturas HTTP. Recursos temporales retirados. Sin pruebas de login real, browser E2E o escrituras mediante apps sobre la copia; sin producción ni cierre global A4.',
        'evidence': evidence,
    }


def operational_milestones(git, refs, repos):
    # Append only; preserve all historical operational receipts exactly.
    return _a27_milestone(git, refs, repos) + [_a34_milestone(git, refs, repos), _snapshot_milestone(git, refs, repos), _session_milestone(git, refs, repos), _local_approval_milestone(git, refs, repos), _appearance_milestone(git, refs, repos), _purchase_milestone(git, refs, repos)]


# Finalized only from immutable, staging-integrated receipts after real cleanup.
SESSION_RECEIPTS = (('backend', 'a09aada7ae5212197cb69fc239ec57ae57a01da0'),
                    ('web', '1d9406a60ebf91b6c52d836743bffdada890483d'))
SESSION_COMPLETED_AT = '2026-10-20T19:55:33-03:00'
SESSION_PATH = 'docs/A4_SESSION_WRITE_REHEARSAL.md'
SESSION_REQUIRED = (
    'sesión y perfil verificados solo en staging aislado',
    '16 checks HTTP', '9 denegaciones', '2 proyectos/2 escrituras',
    'filas copiadas y cola intactas', 'sin cierre global A4',
)


def _session_milestone(git, refs, repos):
    if (len(SESSION_RECEIPTS) != 2 or {repo for repo, _ in SESSION_RECEIPTS} != {'web', 'backend'}
            or not isinstance(SESSION_COMPLETED_AT, str)):
        raise ValueError('Session receipt metadata not finalized')
    if datetime.fromisoformat(SESSION_COMPLETED_AT).utcoffset() is None:
        raise ValueError('Session receipt needs a timezone')
    evidence = []
    for repo, sha in SESSION_RECEIPTS:
        try:
            git(repo, 'merge-base', '--is-ancestor', sha, refs[repo]['staging'])
            source = git(repo, 'show', f'{sha}:{SESSION_PATH}')
        except (subprocess.CalledProcessError, KeyError) as exc:
            raise ValueError(f'Session receipt not integrated in staging: {repo}') from exc
        if not all(marker in source for marker in (*SESSION_REQUIRED, SESSION_COMPLETED_AT)):
            raise ValueError(f'Session receipt incomplete: {repo}')
        if repo == 'backend':
            for gate in range(1, 8):
                lines = [line for line in source.splitlines() if line.startswith(f'| S{gate} ')]
                if len(lines) != 1 or '| PASS:' not in lines[0]:
                    raise ValueError(f'Session gate S{gate} not passed')
        elif f"/blob/{dict(SESSION_RECEIPTS)['backend']}/{SESSION_PATH}" not in source:
            raise ValueError('Web session receipt references another backend candidate')
        line = next(i for i, text in enumerate(source.splitlines(), 1)
                    if SESSION_REQUIRED[0] in text)
        evidence.append({'repo': repo, 'sha': sha, 'path': SESSION_PATH, 'line': line,
                         'url': f'https://github.com/{repos[repo]}/blob/{sha}/{SESSION_PATH}#L{line}'})
    return {
        'key': 'a4-protected-snapshot-session-profile', 'kind': 'operational-milestone',
        'title': 'A4: sesión y perfil verificados en copia protegida',
        'phase': 'A4', 'environment': 'staging', 'completedAt': SESSION_COMPLETED_AT,
        'summary': 'Copia saneada aislada: login y sesión reales, perfil persistido en escritorio/móvil, 9 denegaciones de privilegios, filas copiadas/cola intactas y 10 minutos nuevos de observación. Recursos temporales retirados. Solo usuario sintético nuevo; sin rifas/ventas escritas en la copia, storage/correo externos, producción ni cierre global A4.',
        'evidence': evidence,
    }


# Source integration only, explicitly not a deploy, migration or CI-green claim.
LOCAL_APPROVAL_COMPLETED_AT = '2026-10-21T01:48:51-03:00'
LOCAL_APPROVAL_RECEIPTS = (
    ('backend', '063054183347bfd11c95a15c67849d24888d4a90'),
    ('web', 'c678f08f79bbe807c856e40d995f99b976bfbd93'),
)
LOCAL_APPROVAL_PATH = 'scripts/local-approval.py'
LOCAL_APPROVAL_REQUIRED = (
    'evidence-structure-valid-awaiting-human-authorization',
    "'mergeAuthorized': False", 'github-runner-billing',
    'Required controls missing:', 'Independent exact review required',
)
PURCHASE_PREPARATION_SHA = 'c0e2ecf4a52ffbacd82d16ebb6b01fb7e1e83e34'
PURCHASE_PREPARATION_PATH = 'docs/PURCHASE_PREPARATION.md'


def _local_approval_milestone(git, refs, repos):
    if datetime.fromisoformat(LOCAL_APPROVAL_COMPLETED_AT).utcoffset() is None:
        raise ValueError('Local approval receipt needs a timezone')
    evidence = []
    for repo, sha in LOCAL_APPROVAL_RECEIPTS:
        try:
            git(repo, 'merge-base', '--is-ancestor', sha, refs[repo]['staging'])
            source = git(repo, 'show', f'{sha}:{LOCAL_APPROVAL_PATH}')
        except (subprocess.CalledProcessError, KeyError) as exc:
            raise ValueError(f'Local approval source not integrated in staging: {repo}') from exc
        if not all(marker in source for marker in LOCAL_APPROVAL_REQUIRED):
            raise ValueError(f'Local approval source incomplete: {repo}')
        line = next(i for i, text in enumerate(source.splitlines(), 1)
                    if LOCAL_APPROVAL_REQUIRED[0] in text)
        evidence.append({'repo': repo, 'sha': sha, 'path': LOCAL_APPROVAL_PATH, 'line': line,
                         'url': f'https://github.com/{repos[repo]}/blob/{sha}/{LOCAL_APPROVAL_PATH}#L{line}'})
    try:
        git('backend', 'merge-base', '--is-ancestor', PURCHASE_PREPARATION_SHA, refs['backend']['staging'])
        source = git('backend', 'show', f'{PURCHASE_PREPARATION_SHA}:{PURCHASE_PREPARATION_PATH}')
    except (subprocess.CalledProcessError, KeyError) as exc:
        raise ValueError('Purchase preparation not integrated in staging') from exc
    marker = 'No es una funcionalidad disponible ni una migración aplicada.'
    if marker not in source:
        raise ValueError('Purchase preparation limits missing')
    line = next(i for i, text in enumerate(source.splitlines(), 1) if marker in text)
    evidence.append({'repo': 'backend', 'sha': PURCHASE_PREPARATION_SHA,
                     'path': PURCHASE_PREPARATION_PATH, 'line': line,
                     'url': f'https://github.com/{repos["backend"]}/blob/{PURCHASE_PREPARATION_SHA}/{PURCHASE_PREPARATION_PATH}#L{line}'})
    return {
        'key': 'staging-local-approval-purchase-preparation', 'kind': 'operational-milestone',
        'title': 'Staging: aprobación local y preparación de compra agrupada integradas',
        'phase': 'Tooling / Purchase', 'environment': 'staging',
        'completedAt': LOCAL_APPROVAL_COMPLETED_AT,
        'summary': 'Tres candidatos exactos verificados y revisados con aprobación humana excepcional: script local, auditor sin permisos de merge y cancelación solo de PR obsoletos. Actions sigue bloqueado por cuota; no se falsean checks ni se omiten controles. Purchase conserva estado planificado: solo SQL propuesto probado en e2e local, sin migración activa ni despliegue. Sin main de apps, producción, runner ni gasto adicional.',
        'evidence': evidence,
    }


# Historical runtime acceptance, distinct from first code detection; exact owner
# receipts must already be integrated in staging before any data publication.
APPEARANCE_RECEIPTS = (
    ('backend', 'dd3a40b7584ed4c0ddc46c5b7f7d41568fe16117'),
    ('web', '66a8222bf627fa0de5f422e6aaa79f18e83b8bc8'),
)
APPEARANCE_COMPLETED_AT = '2026-10-21T15:32:24.674429-03:00'
APPEARANCE_PATH = 'docs/APPEARANCE_STAGING_CLOSEOUT.md'
APPEARANCE_REQUIRED = (
    '**Galería y colores desplegados y verificados únicamente en staging.**',
    APPEARANCE_COMPLETED_AT,
    '600.939415439032s reales',
    '21 muestras',
    '4users/2raffles/16audits/9ownratebuckets',
    'No free colors, remote images, real email/payment, app main, production or Purchase',
    'fffd258e5114144b87348d349e054b647a72043a1e584bc48e1d0a5ec19a414c',
    '80abf67a1b76a585b14fdb4f23363a1ba87d799d3ed4118a0021cc26ea55cf79',
    '029471761e108e4cee7c44223ec8894905308a836c508ba55d8516eafcee6369',
    'c7f0285df748d6daa5d8d99afc683e30f1129de4300e0b1e42591bba73a2f977',
)


def _appearance_milestone(git, refs, repos):
    completed = datetime.fromisoformat(APPEARANCE_COMPLETED_AT)
    if completed.utcoffset() is None or len(APPEARANCE_RECEIPTS) != 2 or {r for r, _ in APPEARANCE_RECEIPTS} != {'backend', 'web'}:
        raise ValueError('Appearance receipt metadata not finalized')
    evidence = []
    for repo, sha in APPEARANCE_RECEIPTS:
        try:
            git(repo, 'merge-base', '--is-ancestor', sha, refs[repo]['staging'])
            source = git(repo, 'show', f'{sha}:{APPEARANCE_PATH}')
        except (subprocess.CalledProcessError, KeyError) as exc:
            raise ValueError(f'Appearance runtime receipt not integrated in staging: {repo}') from exc
        if not all(marker in source for marker in APPEARANCE_REQUIRED):
            raise ValueError(f'Appearance runtime receipt incomplete: {repo}')
        for gate in range(1, 9):
            lines = [line for line in source.splitlines() if line.startswith(f'| G{gate} ')]
            if len(lines) != 1 or '| PASS:' not in lines[0]:
                raise ValueError(f'Appearance gate G{gate} not passed: {repo}')
        line = next(i for i, text in enumerate(source.splitlines(), 1)
                    if APPEARANCE_REQUIRED[0] in text)
        evidence.append({'repo': repo, 'sha': sha, 'path': APPEARANCE_PATH, 'line': line,
                         'url': f'https://github.com/{repos[repo]}/blob/{sha}/{APPEARANCE_PATH}#L{line}'})
    return {
        'key': 'gallery-appearance-staging-release', 'kind': 'operational-milestone',
        'title': 'Galería y colores: staging desplegado y verificado',
        'phase': 'Galería / UX-P1', 'environment': 'staging',
        'completedAt': APPEARANCE_COMPLETED_AT,
        'summary': 'Galería exclusiva SUPERADMIN y colores del propietario DRAFT/ACTIVE: SQL canónica22, imágenes exactas, sesión y pruebas sintéticas,600.939s reales/21 muestras y limpieza correlacionada, con revisión independiente. Historial conservado; sin producción, Purchase, correo externo, pagos reales ni imágenes remotas. No implica cierre global A3/A4 ni UX-P2.',
        'evidence': evidence,
    }


# Historical verified activation, not inferred from a feature check or a live poll.
PURCHASE_COMPLETED_AT = '2026-10-22T19:09:52.361117-03:00'
PURCHASE_RECEIPTS = (
    ('backend', '91841c7a4c6bd3cc1208162e459c8e5bac017653', 'docs/PURCHASE_STAGING_ACTIVATION.md'),
    ('web', '0452dfdb55b43a9f0acf04e415235195965624ed', 'docs/PAGE_FLOWS.md'),
)
PURCHASE_REQUIRED = {
    'backend': (
        '### Aceptación final', 'revisión independiente finalPASS22:09:52.361117UTC',
        '602.197261s / 21 muestras',
        '`PURCHASE_SCHEMA_ENABLED=true`, `PURCHASE_GROUPING_ENABLED=true`',
        'ledger23 vivo/checksums',
        'Limpieza exacta PASS: 5 usuarios, 1 rifa y 8 compradores propios',
        'schema ON/grouping OFF', 'CONFIRMED/final CANCELED',
        'HTTP real con rol API limitado: grupos1/2/500',
        '26c3c97d93c5ad8754c6cfc9576777f01162de1b',
        '50e0064a4a8bb4033e8352eaf62f31a924e4edd6',
        'sha256:9c9056454ff2b65fda2f064197a1bff799305b7fd69b43347d6d5f891b59c7a1',
        'sha256:6fafc2deda304d5941293a98007d04ab3f1785fc953800844f14956cfe3cec8e',
        'Producción y `main` de las aplicaciones no se modificaron.',
    ),
    'web': (
        '## Purchase — activación real solo staging (22 octubre 2026)',
        '`PURCHASE_SCHEMA_ENABLED=true`/`PURCHASE_GROUPING_ENABLED=true`',
        'web continúa BFF sin DB/migrador',
        'observación real602.197261s/21 muestras',
        'cleanup propio y readback final PASS',
        'Sin pagos/reembolsos/correos nuevos/storage remoto/producción',
    ),
}


def _purchase_milestone(git, refs, repos):
    if (len(PURCHASE_RECEIPTS) != 2
            or {r for r, _, _ in PURCHASE_RECEIPTS} != {'backend', 'web'}
            or not isinstance(PURCHASE_COMPLETED_AT, str)
            or datetime.fromisoformat(PURCHASE_COMPLETED_AT).utcoffset() is None):
        raise ValueError('Purchase receipt metadata not finalized with timezone')
    evidence = []
    for repo, sha, path in PURCHASE_RECEIPTS:
        try:
            git(repo, 'merge-base', '--is-ancestor', sha, refs[repo]['staging'])
            source = git(repo, 'show', f'{sha}:{path}')
        except (subprocess.CalledProcessError, KeyError) as exc:
            raise ValueError(f'Purchase runtime receipt not integrated in staging: {repo}') from exc
        if not all(marker in source for marker in PURCHASE_REQUIRED[repo]):
            raise ValueError(f'Purchase runtime receipt incomplete: {repo}')
        line = next(i for i, text in enumerate(source.splitlines(), 1)
                    if PURCHASE_REQUIRED[repo][0] in text)
        evidence.append({'repo': repo, 'sha': sha, 'path': path, 'line': line,
                         'url': f'https://github.com/{repos[repo]}/blob/{sha}/{path}#L{line}'})
    return {
        'key': 'purchase-staging-activation', 'kind': 'operational-milestone',
        'title': 'Purchase: compras agrupadas activas y verificadas en staging',
        'phase': 'Purchase', 'environment': 'staging',
        'completedAt': PURCHASE_COMPLETED_AT,
        'summary': 'Esquema canónico23 y backend/web exactos: compras1/2/500, permisos/SSE sin PII, mantenimiento y reversión con creación OFF,602s reales/21 muestras y limpieza propia verificados con revisión independiente. Sin backfill, pagos, correo nuevo ni producción. Hito histórico de aceptación, no monitoreo vivo ni cierre global A3/A4 o UX-P2.',
        'evidence': evidence,
    }
