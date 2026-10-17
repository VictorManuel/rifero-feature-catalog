import importlib.util
import json
from pathlib import Path
import subprocess
import tempfile
import unittest
from unittest.mock import patch

spec = importlib.util.spec_from_file_location('publisher', Path(__file__).parent / 'scripts/status_publisher.py')
publisher = importlib.util.module_from_spec(spec)
spec.loader.exec_module(publisher)


class PublisherTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.source = Path(self.temp.name) / 'catalog'
        self.source.mkdir()
        self.git('init', '-q', '-b', 'main')
        self.git('config', 'user.name', 'Fixture')
        self.git('config', 'user.email', 'fixture@example.invalid')
        (self.source / 'data.js').write_text('original')
        self.git('add', 'data.js')
        self.git('commit', '-qm', 'fixture')
        self.git('remote', 'add', 'origin', next(iter(publisher.ALLOWED)))
        self.git('update-ref', 'refs/remotes/origin/main', 'HEAD')
        self.real_git = publisher.git
        def offline_git(root, *args):
            if args[0] == 'fetch':
                return ''
            return self.real_git(root, *args)
        self.patchgit = patch.object(publisher, 'git', side_effect=offline_git)
        self.patchgit.start()
        self.addCleanup(self.patchgit.stop)
        # Mock only the runner: all Git worktree operations remain real/local.
        self.original_run = subprocess.run
        def run(command, **kwargs):
            if command[0] == 'bash':
                return subprocess.CompletedProcess(command, 0)
            return self.original_run(command, **kwargs)
        self.runpatch = patch.object(publisher.subprocess, 'run', side_effect=run)
        self.mockrun = self.runpatch.start()
        self.addCleanup(self.runpatch.stop)

    def git(self, *args):
        return subprocess.check_output(['git', '-C', str(self.source), *args], text=True).strip()

    def test_dirty_source_preserved_and_reuses_clean_worktree(self):
        (self.source / 'data.js').write_text('user change')
        (self.source / 'untracked').write_text('user new file')
        before = self.git('status', '--porcelain')
        target = publisher.publish(self.source, True)
        self.assertEqual((target / 'data.js').read_text(), 'original')
        self.assertEqual(self.git('status', '--porcelain'), before)
        self.assertEqual((self.source / 'data.js').read_text(), 'user change')
        self.assertEqual(publisher.publish(self.source), target)
        calls = [c.args[0] for c in self.mockrun.call_args_list if c.args[0][0] == 'bash']
        self.assertIn('--dry-run', calls[0])
        self.assertNotIn('--dry-run', calls[1])
        runner = [c for c in self.mockrun.call_args_list if c.args[0][0] == 'bash'][0]
        self.assertEqual(runner.kwargs['env']['PYTHONDONTWRITEBYTECODE'], '1')

    def test_unmanaged_target_rejected(self):
        (self.source.parent / 'worktree-rifero-status-publisher').mkdir()
        with self.assertRaisesRegex(RuntimeError, 'Unmanaged'):
            publisher.publish(self.source)

    def test_dirty_managed_worktree_preserved(self):
        target = publisher.publish(self.source)
        (target / 'data.js').write_text('failed generation')
        with self.assertRaisesRegex(RuntimeError, 'has changes'):
            publisher.publish(self.source)
        self.assertEqual((target / 'data.js').read_text(), 'failed generation')

    def test_changed_branch_rejected(self):
        target = publisher.publish(self.source)
        self.real_git(target, 'checkout', '-qb', 'user-work')
        with self.assertRaisesRegex(RuntimeError, 'branch changed'):
            publisher.publish(self.source)

    def test_wrong_origin_rejected_before_fetch(self):
        self.git('remote', 'set-url', 'origin', 'https://example.invalid/other')
        with self.assertRaisesRegex(RuntimeError, 'Unexpected catalog origin'):
            publisher.publish(self.source)

    def test_wrong_push_destination_rejected(self):
        self.git('config', 'remote.origin.pushurl', 'https://example.invalid/wrong')
        with self.assertRaisesRegex(RuntimeError, 'push destination'):
            publisher.publish(self.source)

    def test_lock_rejects_concurrent_publisher(self):
        import fcntl
        with (self.source / '.git/rifero-status.lock').open('a') as lock:
            fcntl.flock(lock, fcntl.LOCK_EX | fcntl.LOCK_NB)
            with self.assertRaisesRegex(RuntimeError, 'Another catalog update'):
                publisher.publish(self.source)

    def test_symlink_target_rejected(self):
        (self.source.parent / 'worktree-rifero-status-publisher').symlink_to(self.source, target_is_directory=True)
        with self.assertRaisesRegex(RuntimeError, 'symlinked'):
            publisher.publish(self.source)

    def test_ownership_mismatch_rejected(self):
        publisher.publish(self.source)
        (self.source / '.git/rifero-status-worktree.json').write_text(json.dumps({'path': 'elsewhere'}))
        with self.assertRaisesRegex(RuntimeError, 'ownership'):
            publisher.publish(self.source)


if __name__ == '__main__':
    unittest.main()
