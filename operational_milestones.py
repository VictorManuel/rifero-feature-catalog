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


def operational_milestones(git, refs, repos):
    # Keep the historical A2.7 receipt/event byte-equivalent and append one event.
    return _a27_milestone(git, refs, repos) + [_a34_milestone(git, refs, repos)]
