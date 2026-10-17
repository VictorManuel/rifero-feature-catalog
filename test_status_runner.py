"""Real Bash runner, offline fixtures: fetch/push intercepted, no remote writes."""
import os
from pathlib import Path
import shutil
import subprocess
import tempfile
import unittest

RUNNER = Path(__file__).parent / 'scripts/update-status-in-place.sh'
REAL_GIT = shutil.which('git')


class RunnerTests(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.addCleanup(self.tmp.cleanup)
        self.workspace = Path(self.tmp.name)
        self.root = self.workspace / 'catalog'
        self.root.mkdir()
        self.git('init', '-qb', 'main')
        self.git('config', 'user.name', 'Fixture')
        self.git('config', 'user.email', 'fixture@example.invalid')
        (self.root / 'data.js').write_text('original\n')
        (self.root / 'module.py').write_text('VALUE = 1\n')
        (self.root / 'generate.py').write_text("import module,os,pathlib\nif os.getenv('CHANGE'): pathlib.Path('data.js').write_text('updated\\n')\nif os.getenv('FAIL_GENERATE'): raise RuntimeError('fixture failure')\n")
        self.git('add', '.')
        self.git('commit', '-qm', 'fixture')
        self.git('remote', 'add', 'origin', 'https://github.com/VictorManuel/rifero-feature-catalog.git')
        self.git('update-ref', 'refs/remotes/origin/main', 'HEAD')
        for name in ['web', 'backend', 'email-worker']:
            folder = self.workspace / name
            folder.mkdir()
            subprocess.run([REAL_GIT, '-C', str(folder), 'init', '-q'], check=True)
        self.bin = self.workspace / 'bin'
        self.bin.mkdir()
        shim = f'''#!/usr/bin/env python3
import os,sys,subprocess
args=sys.argv[1:]
if 'fetch' in args: sys.exit(0)
if 'push' in args:
 open(os.environ['PUSH_LOG'],'a').write('push\\n')
 sys.exit(1)
sys.exit(subprocess.call([{REAL_GIT!r},*args]))
'''
        self.script('git', shim)
        self.script('pnpm', '#!/bin/sh\nif [ "$1" = --version ]; then echo 10.28.0; exit 0; fi\nif [ "$3" = test ] && [ -n "${FAIL_TEST:-}" ]; then exit 1; fi\nexit 0\n')
        self.env = {**os.environ, 'PATH': str(self.bin) + ':' + os.environ['PATH'],
                    'PUSH_LOG': str(self.workspace / 'push.log')}

    def script(self, name, text):
        path = self.bin / name
        path.write_text(text)
        path.chmod(0o755)

    def git(self, *args):
        return subprocess.check_output([REAL_GIT, '-C', str(self.root), *args], text=True).strip()

    def run_runner(self, dry=True, **env):
        return subprocess.run(['bash', str(RUNNER.resolve()), str(self.root), *(['--dry-run'] if dry else [])],
                              capture_output=True, text=True, env={**self.env, **env})

    def test_two_real_runs_leave_no_artifacts_or_publication(self):
        for _ in range(2):
            result = self.run_runner()
            self.assertEqual(result.returncode, 0, result.stderr)
            self.assertEqual(self.git('status', '--porcelain'), '')
        self.assertFalse((self.workspace / 'push.log').exists())

    def test_dryrun_restores_on_generation_or_test_failure(self):
        for failure in ['FAIL_GENERATE', 'FAIL_TEST']:
            result = self.run_runner(CHANGE='1', **{failure: '1'})
            self.assertNotEqual(result.returncode, 0)
            self.assertEqual((self.root / 'data.js').read_text(), 'original\n')
            self.assertEqual(self.git('status', '--porcelain'), '')

    def test_no_diff_does_not_commit_or_push(self):
        head = self.git('rev-parse', 'HEAD')
        result = self.run_runner(dry=False)
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertEqual(head, self.git('rev-parse', 'HEAD'))
        self.assertFalse((self.workspace / 'push.log').exists())

    def test_failed_push_preserves_only_snapshot_commit(self):
        before = self.git('rev-parse', 'HEAD')
        result = self.run_runner(dry=False, CHANGE='1')
        self.assertNotEqual(result.returncode, 0)
        self.assertEqual(self.git('diff', '--name-only', before, 'HEAD'), 'data.js')
        self.assertEqual(self.git('status', '--porcelain'), '')
        retry = self.run_runner(dry=False)
        self.assertNotEqual(retry.returncode, 0)
        self.assertEqual((self.workspace / 'push.log').read_text().count('push'), 2)

    def test_extra_pending_file_never_pushed(self):
        (self.root / 'other.txt').write_text('not a snapshot')
        self.git('add', 'other.txt')
        self.git('commit', '-qm', 'chore(catalog): refresh feature status snapshot')
        result = self.run_runner(dry=False)
        self.assertNotEqual(result.returncode, 0)
        self.assertFalse((self.workspace / 'push.log').exists())


if __name__ == '__main__':
    unittest.main()
