import subprocess
import unittest
from operational_milestones import (operational_milestones, _a27_milestone, COMPLETED_AT, RECEIPTS, REQUIRED, A34_COMPLETED_AT, A34_RECEIPTS, A34_PATH, A34_REQUIRED)


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
        result = _a27_milestone(self.git, self.refs, self.repos)
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
        self.assertEqual(result, _a27_milestone(self.git, self.refs, self.repos))
        self.assertNotIn('implementationDates', event)

    def test_missing_or_unintegrated_receipt_fails_closed(self):
        for operation in ('show', 'merge-base'):
            def read(repo, *args):
                if repo == 'backend' and args[0] == operation:
                    raise subprocess.CalledProcessError(1, ['git', *args])
                return self.git(repo, *args)
            with self.assertRaises(ValueError):
                _a27_milestone(read, self.refs, self.repos)

    def test_incomplete_or_wrong_date_receipt_is_not_a_milestone(self):
        for marker in REQUIRED:
            def read(repo, *args):
                return receipt().replace(marker, 'missing') if args[0] == 'show' else ''
            with self.subTest(marker=marker), self.assertRaises(ValueError):
                _a27_milestone(read, self.refs, self.repos)

    def test_any_nonpassing_operational_gate_blocks_publication(self):
        for gate in range(1, 8):
            def read(repo, *args):
                return receipt().replace(f'| G{gate} gate | PASS:', f'| G{gate} gate | PENDING:') if args[0] == 'show' else ''
            with self.subTest(gate=gate), self.assertRaises(ValueError):
                _a27_milestone(read, self.refs, self.repos)

    def test_missing_staging_reference_does_not_use_main(self):
        del self.refs['backend']['staging']
        with self.assertRaises(ValueError):
            _a27_milestone(self.git, self.refs, self.repos)

class A34OperationalMilestoneTests(unittest.TestCase):
    def setUp(self):
        self.refs = {repo: {'staging': 'a' * 40, 'main': 'b' * 40} for repo, _ in A34_RECEIPTS}
        self.repos = {'web': 'VictorManuel/rifero', 'backend': 'VictorManuel/rifero-backend'}

    def git(self, repo, *args):
        if args[0] != 'show':
            return ''
        return a34_receipt() if args[1].endswith(':' + A34_PATH) else receipt()

    def test_append_only_operational_event_does_not_change_a27(self):
        events = operational_milestones(self.git, self.refs, self.repos)
        self.assertEqual(events[:-1], _a27_milestone(self.git, self.refs, self.repos))
        self.assertEqual(len(events), 2)
        event = events[-1]
        self.assertEqual(event['key'], 'a3-a4-staging-cutover')
        self.assertEqual(event['completedAt'], A34_COMPLETED_AT)
        self.assertEqual(event['environment'], 'staging')
        self.assertNotIn('implementationDates', event)
        self.assertEqual([e['sha'] for e in event['evidence']], [sha for _, sha in A34_RECEIPTS])
        self.assertEqual(events, operational_milestones(self.git, self.refs, self.repos))

    def test_each_new_receipt_needs_all_markers_and_passed_gates(self):
        for repo, _ in A34_RECEIPTS:
            for marker in A34_REQUIRED:
                def read(r, *args):
                    text = self.git(r, *args)
                    return text.replace(marker, 'missing') if r == repo and args[0] == 'show' and args[1].endswith(':' + A34_PATH) else text
                with self.subTest(repo=repo, marker=marker), self.assertRaises(ValueError):
                    operational_milestones(read, self.refs, self.repos)
            for gate in range(1, 8):
                def read(r, *args):
                    text = self.git(r, *args)
                    return text.replace(f'| G{gate} gate | PASS:', f'| G{gate} gate | PENDING:') if r == repo and args[0] == 'show' and args[1].endswith(':' + A34_PATH) else text
                with self.subTest(repo=repo, gate=gate), self.assertRaises(ValueError):
                    operational_milestones(read, self.refs, self.repos)

    def test_each_new_receipt_requires_staging_ancestry_and_existence(self):
        for repo, sha in A34_RECEIPTS:
            for operation in ['merge-base', 'show']:
                def read(r, *args):
                    if r == repo and args[0] == operation and (sha in args or any(a.startswith(sha + ':') for a in args)):
                        raise subprocess.CalledProcessError(1, ['git', *args])
                    return self.git(r, *args)
                with self.subTest(repo=repo, operation=operation), self.assertRaises(ValueError):
                    operational_milestones(read, self.refs, self.repos)

    def test_no_main_fallback_for_new_receipts(self):
        for repo, _ in A34_RECEIPTS:
            refs = {r: dict(v) for r, v in self.refs.items()}
            del refs[repo]['staging']
            with self.assertRaises(ValueError):
                operational_milestones(self.git, refs, self.repos)

    def test_duplicate_gate_fails_closed(self):
        def read(repo, *args):
            text = self.git(repo, *args)
            return text + '\n| G1 gate | PASS: duplicate |' if args[0] == 'show' and args[1].endswith(':' + A34_PATH) else text
        with self.assertRaises(ValueError):
            operational_milestones(read, self.refs, self.repos)


def a34_receipt():
    markers = [marker for marker in A34_REQUIRED if not marker.startswith('| G')]
    return '\n'.join(markers + [f'| G{n} gate | PASS: verified |' for n in range(1, 8)])
