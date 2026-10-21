import subprocess
import unittest
import operational_milestones as milestone_module
from operational_milestones import (operational_milestones, _a27_milestone, COMPLETED_AT, RECEIPTS, REQUIRED, A34_COMPLETED_AT, A34_RECEIPTS, A34_PATH, A34_REQUIRED, _a34_milestone, _snapshot_milestone, SNAPSHOT_COMPLETED_AT, SNAPSHOT_RECEIPTS, SNAPSHOT_PATH, SNAPSHOT_REQUIRED, SESSION_PATH, SESSION_REQUIRED, SESSION_RECEIPTS, SESSION_COMPLETED_AT, _session_milestone)


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
        if args[1].endswith(':' + milestone_module.APPEARANCE_PATH):return appearance_receipt()
        if args[1].endswith(':' + milestone_module.LOCAL_APPROVAL_PATH):return '\n'.join(milestone_module.LOCAL_APPROVAL_REQUIRED)
        if args[1].endswith(':' + milestone_module.PURCHASE_PREPARATION_PATH):return 'No es una funcionalidad disponible ni una migración aplicada.'
        if args[1].endswith(':' + SESSION_PATH):return session_receipt(repo)
        if args[1].endswith(':' + SNAPSHOT_PATH):return snapshot_receipt(repo)
        return a34_receipt() if args[1].endswith(':' + A34_PATH) else receipt()

    def test_append_only_operational_event_does_not_change_a27(self):
        events = operational_milestones(self.git, self.refs, self.repos)
        self.assertEqual(events[:1], _a27_milestone(self.git, self.refs, self.repos))
        self.assertEqual(len(events), 6)
        event = events[1]
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


def snapshot_receipt(repo):
    common='\n'.join(SNAPSHOT_REQUIRED)
    if repo=='backend':return common+'\n'+'\n'.join(f'| R{n} gate | PASS: verified |' for n in range(1,7))
    return common+f"\n/blob/{dict(SNAPSHOT_RECEIPTS)['backend']}/{SNAPSHOT_PATH}"


class ProtectedSnapshotMilestoneTests(unittest.TestCase):
    setUp = A34OperationalMilestoneTests.setUp
    git = A34OperationalMilestoneTests.git
    def test_append_only_preserves_both_prior_receipts(self):
        events=operational_milestones(self.git,self.refs,self.repos)
        self.assertEqual(events[:2],_a27_milestone(self.git,self.refs,self.repos)+[_a34_milestone(self.git,self.refs,self.repos)])
        event=events[2]
        self.assertEqual(event['key'],'a4-protected-snapshot-read-rehearsal')
        self.assertEqual(event['completedAt'],SNAPSHOT_COMPLETED_AT)
        self.assertEqual(event['environment'],'staging')
        self.assertNotIn('implementationDates',event)
        self.assertEqual([e['sha'] for e in event['evidence']],[sha for _,sha in SNAPSHOT_RECEIPTS])
        self.assertIn('Sin pruebas de login real',event['summary'])

    def test_requires_each_immutable_receipt_and_only_staging(self):
        for repo,sha in SNAPSHOT_RECEIPTS:
            for op in ['show','merge-base']:
                def read(r,*args):
                    if r==repo and args[0]==op and (sha in args or any(a.startswith(sha+':') for a in args)):
                        raise subprocess.CalledProcessError(1,['git',*args])
                    return self.git(r,*args)
                with self.assertRaises(ValueError):_snapshot_milestone(read,self.refs,self.repos)
            refs={r:dict(v) for r,v in self.refs.items()};del refs[repo]['staging']
            with self.assertRaises(ValueError):_snapshot_milestone(self.git,refs,self.repos)

    def test_markers_failed_or_duplicate_gates_and_wrong_link_fail_closed(self):
        for repo,_ in SNAPSHOT_RECEIPTS:
            for marker in SNAPSHOT_REQUIRED:
                def read(r,*args):
                    value=self.git(r,*args)
                    return value.replace(marker,'missing') if r==repo and args[0]=='show' and args[1].endswith(':'+SNAPSHOT_PATH) else value
                with self.subTest(repo=repo,marker=marker),self.assertRaises(ValueError):_snapshot_milestone(read,self.refs,self.repos)
        for changed in [snapshot_receipt('backend').replace('| R2 gate | PASS:','| R2 gate | PENDING:'),snapshot_receipt('backend')+'\n| R1 gate | PASS: duplicate |']:
            def read(r,*args):return changed if r=='backend' and args[0]=='show' and args[1].endswith(':'+SNAPSHOT_PATH) else self.git(r,*args)
            with self.assertRaises(ValueError):_snapshot_milestone(read,self.refs,self.repos)
        def wrong_link(r,*args):
            value=self.git(r,*args)
            return value.replace(dict(SNAPSHOT_RECEIPTS)['backend'],'0'*40) if r=='web' and args[0]=='show' and args[1].endswith(':'+SNAPSHOT_PATH) else value
        with self.assertRaises(ValueError):_snapshot_milestone(wrong_link,self.refs,self.repos)


class SessionProfileMilestoneTests(unittest.TestCase):
    def setUp(self):
        import operational_milestones as module
        from unittest.mock import patch
        self.module=module
        self.receipts=(('backend','c'*40),('web','d'*40))
        self.completed='2026-10-20T20:00:00-03:00'  # synthetic unit fixture, not an operational timestamp
        self.refs={r:{'staging':'a'*40,'main':'b'*40} for r,_ in self.receipts}
        self.repos={'web':'VictorManuel/rifero','backend':'VictorManuel/rifero-backend'}
        for name,value in [('SESSION_RECEIPTS',self.receipts),('SESSION_COMPLETED_AT',self.completed)]:
            p=patch.object(module,name,value);p.start();self.addCleanup(p.stop)

    def source(self,repo):
        common='\n'.join((*self.module.SESSION_REQUIRED,self.completed))
        if repo=='backend':return common+'\n'+'\n'.join(f'| S{n} gate | PASS: verified |' for n in range(1,8))
        return common+f'\n/blob/{dict(self.receipts)["backend"]}/{self.module.SESSION_PATH}'

    def git(self,repo,*args):return self.source(repo) if args[0]=='show' else ''

    def test_new_receipt_is_operational_not_feature_availability(self):
        value=self.module._session_milestone(self.git,self.refs,self.repos)
        self.assertEqual(value['environment'],'staging')
        self.assertEqual(value['completedAt'],self.completed)
        self.assertEqual(value['key'],'a4-protected-snapshot-session-profile')
        self.assertNotIn('implementationDates',value)
        self.assertIn('sin rifas/ventas escritas',value['summary'])
        self.assertEqual([x['sha'] for x in value['evidence']],[sha for _,sha in self.receipts])

    def test_missing_or_unintegrated_receipt_and_missing_staging_fail(self):
        for repo,sha in self.receipts:
            for op in ('merge-base','show'):
                def read(r,*args):
                    if r==repo and args[0]==op:raise subprocess.CalledProcessError(1,['git',*args])
                    return self.git(r,*args)
                with self.assertRaises(ValueError):self.module._session_milestone(read,self.refs,self.repos)
            refs={r:dict(v) for r,v in self.refs.items()};del refs[repo]['staging']
            with self.assertRaises(ValueError):self.module._session_milestone(self.git,refs,self.repos)

    def test_every_marker_and_gate_is_required(self):
        for repo,_ in self.receipts:
            for marker in (*self.module.SESSION_REQUIRED,self.completed):
                def read(r,*args):return self.git(r,*args).replace(marker,'missing') if r==repo and args[0]=='show' else self.git(r,*args)
                with self.subTest(repo=repo,marker=marker),self.assertRaises(ValueError):self.module._session_milestone(read,self.refs,self.repos)
        for gate in range(1,8):
            def read(r,*args):return self.git(r,*args).replace(f'| S{gate} gate | PASS:',f'| S{gate} gate | PENDING:') if r=='backend' and args[0]=='show' else self.git(r,*args)
            with self.assertRaises(ValueError):self.module._session_milestone(read,self.refs,self.repos)

    def test_duplicate_gate_and_wrong_backend_link_fail(self):
        def duplicate(r,*args):return self.git(r,*args)+'\n| S1 gate | PASS: duplicate |' if r=='backend' and args[0]=='show' else self.git(r,*args)
        with self.assertRaises(ValueError):self.module._session_milestone(duplicate,self.refs,self.repos)
        def wrong(r,*args):return self.git(r,*args).replace('c'*40,'e'*40) if r=='web' and args[0]=='show' else self.git(r,*args)
        with self.assertRaises(ValueError):self.module._session_milestone(wrong,self.refs,self.repos)

    def test_unfinalized_or_naive_metadata_fails_closed(self):
        from unittest.mock import patch
        for field,value in [('SESSION_RECEIPTS',()),('SESSION_COMPLETED_AT',None),('SESSION_COMPLETED_AT','2026-10-20T20:00:00')]:
            with patch.object(self.module,field,value),self.assertRaises(ValueError):self.module._session_milestone(self.git,self.refs,self.repos)


def session_receipt(repo):
    common='\n'.join((*SESSION_REQUIRED,SESSION_COMPLETED_AT))
    if repo=='backend':return common+'\n'+'\n'.join(f'| S{n} gate | PASS: verified |' for n in range(1,8))
    return common+f"\n/blob/{dict(SESSION_RECEIPTS)['backend']}/{SESSION_PATH}"


class SessionAppendHistoryTests(unittest.TestCase):
    setUp=A34OperationalMilestoneTests.setUp
    git=A34OperationalMilestoneTests.git
    def test_all_three_historical_milestones_remain_exactly_identical(self):
        events=operational_milestones(self.git,self.refs,self.repos)
        prior=_a27_milestone(self.git,self.refs,self.repos)+[_a34_milestone(self.git,self.refs,self.repos),_snapshot_milestone(self.git,self.refs,self.repos)]
        self.assertEqual(events[:3],prior)
        self.assertEqual(len(events),6)
        self.assertEqual(events[3],_session_milestone(self.git,self.refs,self.repos))


class LocalApprovalMilestoneTests(unittest.TestCase):
    setUp = A34OperationalMilestoneTests.setUp
    git = A34OperationalMilestoneTests.git

    def test_append_only_preserves_all_four_prior_milestones(self):
        events = operational_milestones(self.git, self.refs, self.repos)
        prior = _a27_milestone(self.git, self.refs, self.repos) + [
            _a34_milestone(self.git, self.refs, self.repos),
            _snapshot_milestone(self.git, self.refs, self.repos),
            _session_milestone(self.git, self.refs, self.repos)]
        self.assertEqual(events[:4], prior)
        self.assertEqual(len(events), 6)
        event = events[4]
        self.assertEqual(event['key'], 'staging-local-approval-purchase-preparation')
        self.assertEqual(event['environment'], 'staging')
        self.assertEqual(event['completedAt'], milestone_module.LOCAL_APPROVAL_COMPLETED_AT)
        self.assertNotIn('implementationDates', event)
        self.assertIn('estado planificado', event['summary'])
        self.assertIn('sin migración activa ni despliegue', event['summary'])
        self.assertEqual([x['sha'] for x in event['evidence']],
                         [s for _, s in milestone_module.LOCAL_APPROVAL_RECEIPTS] +
                         [milestone_module.PURCHASE_PREPARATION_SHA])

    def test_each_source_must_exist_and_be_integrated_only_staging(self):
        receipts = (*milestone_module.LOCAL_APPROVAL_RECEIPTS,
                    ('backend', milestone_module.PURCHASE_PREPARATION_SHA))
        for repo, sha in receipts:
            for operation in ('show', 'merge-base'):
                def read(r, *args):
                    if r == repo and args[0] == operation and (sha in args or any(a.startswith(sha+':') for a in args)):
                        raise subprocess.CalledProcessError(1, ['git', *args])
                    return self.git(r, *args)
                with self.subTest(repo=repo, operation=operation), self.assertRaises(ValueError):
                    milestone_module._local_approval_milestone(read, self.refs, self.repos)
            refs = {r: dict(v) for r, v in self.refs.items()}; del refs[repo]['staging']
            with self.assertRaises(ValueError):
                milestone_module._local_approval_milestone(self.git, refs, self.repos)

    def test_missing_tooling_marker_or_purchase_exclusion_fails_closed(self):
        for repo, _ in milestone_module.LOCAL_APPROVAL_RECEIPTS:
            for marker in milestone_module.LOCAL_APPROVAL_REQUIRED:
                def read(r, *args):
                    source = self.git(r, *args)
                    return source.replace(marker, 'missing') if r == repo and args[0] == 'show' else source
                with self.subTest(repo=repo, marker=marker), self.assertRaises(ValueError):
                    milestone_module._local_approval_milestone(read, self.refs, self.repos)
        def read(r, *args):
            return 'missing' if args[0] == 'show' and args[1].endswith(':'+milestone_module.PURCHASE_PREPARATION_PATH) else self.git(r, *args)
        with self.assertRaises(ValueError):
            milestone_module._local_approval_milestone(read, self.refs, self.repos)


def appearance_receipt():
    return '\n'.join(milestone_module.APPEARANCE_REQUIRED) + '\n' + '\n'.join(
        f'| G{n} gate | PASS: verified |' for n in range(1, 9))


class AppearanceMilestoneTests(unittest.TestCase):
    setUp = A34OperationalMilestoneTests.setUp
    git = A34OperationalMilestoneTests.git

    def test_appends_runtime_event_without_changing_five_prior_events(self):
        events = operational_milestones(self.git, self.refs, self.repos)
        prior = _a27_milestone(self.git, self.refs, self.repos) + [
            _a34_milestone(self.git, self.refs, self.repos),
            _snapshot_milestone(self.git, self.refs, self.repos),
            _session_milestone(self.git, self.refs, self.repos),
            milestone_module._local_approval_milestone(self.git, self.refs, self.repos)]
        self.assertEqual(events[:5], prior)
        self.assertEqual(len(events), 6)
        event = events[-1]
        self.assertEqual(event['completedAt'], milestone_module.APPEARANCE_COMPLETED_AT)
        self.assertEqual(event['environment'], 'staging')
        self.assertEqual([x['sha'] for x in event['evidence']], [s for _, s in milestone_module.APPEARANCE_RECEIPTS])
        self.assertNotIn('implementationDates', event)

    def test_missing_unintegrated_or_main_only_receipt_is_rejected(self):
        for role, sha in milestone_module.APPEARANCE_RECEIPTS:
            for op in ['show', 'merge-base']:
                def read(repo, *args):
                    if repo == role and args[0] == op:
                        raise subprocess.CalledProcessError(1, ['git', *args])
                    return self.git(repo, *args)
                with self.assertRaises(ValueError):milestone_module._appearance_milestone(read, self.refs, self.repos)
            refs = {k: dict(v) for k, v in self.refs.items()}; del refs[role]['staging']
            with self.assertRaises(ValueError):milestone_module._appearance_milestone(self.git, refs, self.repos)

    def test_every_marker_and_each_single_passing_gate_required(self):
        for marker in milestone_module.APPEARANCE_REQUIRED:
            def read(repo, *args):
                return appearance_receipt().replace(marker, 'missing') if args[0] == 'show' else ''
            with self.subTest(marker=marker), self.assertRaises(ValueError):milestone_module._appearance_milestone(read, self.refs, self.repos)
        for n in range(1, 9):
            for source in [appearance_receipt().replace(f'| G{n} gate | PASS:', f'| G{n} gate | PENDING:'), appearance_receipt()+f'\n| G{n} duplicate | PASS: duplicate |']:
                def read(repo, *args):return source if args[0] == 'show' else ''
                with self.subTest(gate=n), self.assertRaises(ValueError):milestone_module._appearance_milestone(read, self.refs, self.repos)
