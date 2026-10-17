#!/usr/bin/env python3
"""Actualiza y publica el catálogo en un worktree aislado, sin tocar cambios ajenos."""
import argparse
import fcntl
import json
import os
from pathlib import Path
import subprocess
import sys

BRANCH = 'codex/catalog-status-publisher'
REMOTE = 'VictorManuel/rifero-feature-catalog'
ALLOWED = {f'https://github.com/{REMOTE}.git', f'https://github.com/{REMOTE}',
           f'git@github.com:{REMOTE}.git', f'ssh://git@github.com/{REMOTE}.git'}


def git(root, *args):
    return subprocess.check_output(['git', '-C', str(root), *args], text=True).strip()


def publish(source, dry_run=False):
    source = Path(source).resolve()
    if git(source, 'rev-parse', '--show-toplevel') != str(source):
        raise RuntimeError('Expected a catalog repository root')
    if git(source, 'remote', 'get-url', 'origin') not in ALLOWED:
        raise RuntimeError('Unexpected catalog origin; no fetch or publication attempted')
    pushes = git(source, 'remote', 'get-url', '--push', '--all', 'origin').splitlines()
    if len(pushes) != 1 or pushes[0] not in ALLOWED:
        raise RuntimeError('Unexpected catalog push destination; publication refused')
    common = Path(git(source, 'rev-parse', '--path-format=absolute', '--git-common-dir'))
    # One lock for every checkout, held through tests, generation and push.
    lockpath = common / 'rifero-status.lock'
    if lockpath.is_symlink():
        raise RuntimeError('Refusing symlinked publisher lock')
    with lockpath.open('a') as lock:
        try:
            fcntl.flock(lock, fcntl.LOCK_EX | fcntl.LOCK_NB)
        except BlockingIOError as exc:
            raise RuntimeError('Another catalog update is running; retry after it finishes') from exc
        target = source.parent / 'worktree-rifero-status-publisher'
        marker = common / 'rifero-status-worktree.json'
        expected = {'path': str(target), 'branch': BRANCH}
        if marker.is_symlink() or target.is_symlink():
            raise RuntimeError('Refusing symlinked publisher metadata/worktree')
        if marker.exists():
            if json.loads(marker.read_text()) != expected:
                raise RuntimeError('Publisher ownership does not match this workspace')
            if not target.is_dir():
                raise RuntimeError('Managed worktree missing; inspect ownership metadata')
            if git(target, 'rev-parse', '--path-format=absolute', '--git-common-dir') != str(common):
                raise RuntimeError('Publisher belongs to a different repository')
            if git(target, 'symbolic-ref', '--short', 'HEAD') != BRANCH:
                raise RuntimeError('Managed worktree branch changed; no reset performed')
            if git(target, 'status', '--porcelain', '--untracked-files=all'):
                raise RuntimeError(f'Managed worktree has changes; preserved at {target}')
        else:
            if target.exists():
                raise RuntimeError(f'Unmanaged path exists: {target}; nothing overwritten')
            git(source, 'fetch', '--quiet', '--no-tags', 'origin',
                'refs/heads/main:refs/remotes/origin/main')
            git(source, 'worktree', 'add', '-b', BRANCH, str(target), 'origin/main')
            # Only mark after successful creation. An interrupted unmarked creation
            # fails closed on next invocation rather than adopting arbitrary files.
            marker.write_text(json.dumps(expected) + '\n')
        print(f'Publisher aislado: {target}', flush=True)
        command = ['bash', str(source / 'scripts/update-status-in-place.sh'), str(target)]
        if dry_run:
            command.append('--dry-run')
        subprocess.run(command, check=True, env={**os.environ, 'GIT_TERMINAL_PROMPT': '0', 'PYTHONDONTWRITEBYTECODE': '1'})
        return target


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--dry-run', action='store_true', help='Validate without commit/push; restore data.js')
    args = parser.parse_args()
    try:
        publish(Path(__file__).resolve().parents[1], args.dry_run)
    except (OSError, RuntimeError, ValueError, subprocess.CalledProcessError) as exc:
        print(f'Error: {exc}. No se limpian cambios ni se fuerza publicación.', file=sys.stderr)
        return 1
    return 0


if __name__ == '__main__':
    sys.exit(main())
