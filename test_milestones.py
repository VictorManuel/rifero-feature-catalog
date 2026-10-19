import subprocess
import unittest
from operational_milestones import operational_milestones, COMPLETED_AT, RECEIPTS, REQUIRED


def receipt():
    markers = [marker for marker in REQUIRED if not marker.startswith('| G')]
    return '\n'.join(markers + [f'| G{n} gate | PASS: verified |' for n in range(1, 8)])


class OperationalMilestoneTests(unittest.TestCase):
    def setUp(self):
        self.refs = {repo: {'staging': 'a' * 40, 'main': 'b' * 40} for repo, sha in RECEIPTS}
        self.repos = {'web': 'VictorManuel/rifero', 'backend': 'VictorManuel/rifero-backend'}
        self.calls = []

    def git(self, repo, *args):
        self.calls.append((repo, args))
        return receipt() if args[0] == 'show' else ''

    def test_verified_closeout_has_two_immutable_receipts_and_only_staging(self):
        result = operational_milestones(self.git, self.refs, self.repos)
        self.assertEqual(len(result), 1)
        event = result[0]
        self.assertEqual(event['completedAt'], COMPLETED_AT)
        self.assertEqual(event['environment'], 'staging')
        self.assertEqual(event['kind'], 'operational-milestone')
        self.assertEqual(len(event['evidence']), 2)
        for evidence, (repo, sha) in zip(event['evidence'], RECEIPTS):
            self.assertEqual(evidence['sha'], sha)
            self.assertIn(f'/blob/{sha}/', evidence['url'])
            self.assertIn((repo, ('merge-base', '--is-ancestor', sha, self.refs[repo]['staging'])), self.calls)
        self.assertEqual(result, operational_milestones(self.git, self.refs, self.repos))
        self.assertNotIn('implementationDates', event)

    def test_missing_or_unintegrated_receipt_fails_closed(self):
        for operation in ('show', 'merge-base'):
            def read(repo, *args):
                if repo == 'backend' and args[0] == operation:
                    raise subprocess.CalledProcessError(1, ['git', *args])
                return self.git(repo, *args)
            with self.assertRaises(ValueError):
                operational_milestones(read, self.refs, self.repos)

    def test_incomplete_or_wrong_date_receipt_is_not_a_milestone(self):
        for marker in REQUIRED:
            def read(repo, *args):
                return receipt().replace(marker, 'missing') if args[0] == 'show' else ''
            with self.subTest(marker=marker), self.assertRaises(ValueError):
                operational_milestones(read, self.refs, self.repos)

    def test_any_nonpassing_operational_gate_blocks_publication(self):
        for gate in range(1, 8):
            def read(repo, *args):
                return receipt().replace(f'| G{gate} gate | PASS:', f'| G{gate} gate | PENDING:') if args[0] == 'show' else ''
            with self.subTest(gate=gate), self.assertRaises(ValueError):
                operational_milestones(read, self.refs, self.repos)

    def test_missing_staging_reference_does_not_use_main(self):
        del self.refs['backend']['staging']
        with self.assertRaises(ValueError):
            operational_milestones(self.git, self.refs, self.repos)
