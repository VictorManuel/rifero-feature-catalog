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
    return _a27_milestone(git, refs, repos) + [_a34_milestone(git, refs, repos), _snapshot_milestone(git, refs, repos), _session_milestone(git, refs, repos)]


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
