from implementation_evidence import select_evidence, evidence_line
import unittest

from implementation_timeline import track_implementations


class RelocatedEvidenceTests(unittest.TestCase):
    def setUp(self):
        self.primary = ("web", "old.ts", None)
        self.relocated = ("backend", "new.ts", "realImplementation")

    def test_original_branch_keeps_its_own_source(self):
        calls = []
        def read(repo, path):
            calls.append((repo, path))
            return "old implementation"
        result = select_evidence(read, self.primary, self.relocated)
        self.assertEqual(result[:3], self.primary)
        self.assertTrue(result[-1])
        self.assertEqual(calls, [("web", "old.ts")])

    def test_moved_branch_uses_exact_reviewed_marker(self):
        result = select_evidence(lambda repo, path: "realImplementation" if repo == "backend" else "",
                                 self.primary, self.relocated)
        self.assertEqual(result[:3], self.relocated)
        self.assertTrue(result[-1])

    def test_missing_or_wrong_marker_does_not_claim_implementation(self):
        for source in ("", "unrelated implementation"):
            result = select_evidence(lambda repo, path: source if repo == "backend" else "",
                                     self.primary, self.relocated)
            self.assertEqual(result[:3], self.primary)
            self.assertFalse(result[-1])

    def test_unmapped_source_has_no_implicit_fallback(self):
        self.assertFalse(select_evidence(lambda repo, path: "", self.primary)[-1])

    def test_primary_marker_mismatch_can_use_curated_worker_source(self):
        primary = ("web", "old.ts", "required")
        relocated = ("email-worker", "send.ts", "send(")
        result = select_evidence(lambda repo, path: "send(" if repo == "email-worker" else "unrelated",
                                 primary, relocated)
        self.assertEqual(result[:3], relocated)
        self.assertTrue(result[-1])


class ImplementationTimelineTests(unittest.TestCase):
    def setUp(self):
        self.now = "2026-10-16T12:00:00+00:00"
        self.feature = {
            "id": "F001",
            "category": "Cuentas y acceso",
            "title": "Ingreso",
            "staging": False,
            "main": False,
            "note": "Ingreso seguro",
            "evidence": {
                branch: {"repo": "web", "path": "src/login.ts", "match": "login"}
                for branch in ("staging", "main")
            },
        }

    def test_migrator_evidence_move_preserves_history(self):
        previous_feature = {
            **self.feature, "title": "Política CI de migrador único",
            "timelineKey": "source-original-web-policy", "staging": True,
            "implementationDates": {"staging": "2026-10-10T00:00:00+00:00", "main": None},
        }
        current = {
            **previous_feature,
            "evidence": {b: {"repo": "backend", "path": "scripts/migration-policy.mjs",
                             "match": "Backend must remain the migration owner"}
                         for b in ("staging", "main")},
        }
        current.pop("timelineKey")
        timeline = track_implementations([current], {"timeline": {"startedAt": self.now, "baseline": []},
                                                   "features": [previous_feature]}, self.now)
        self.assertEqual(current["timelineKey"], "source-original-web-policy")
        self.assertEqual(current["implementationDates"]["staging"], "2026-10-10T00:00:00+00:00")
        self.assertFalse(any(e["implementedAt"] == self.now for e in timeline["events"]))

    def test_restoring_moved_baseline_evidence_does_not_invent_new_date(self):
        previous_feature = {**self.feature, "timelineKey": "baseline-login"}
        previous = {
            "timeline": {"startedAt": "2026-10-01T00:00:00+00:00", "baseline": [
                {"key": "baseline-login", "id": "F001", "category": self.feature["category"],
                 "title": self.feature["title"], "branches": ["staging"]}]},
            "features": [previous_feature],
        }
        current = {**self.feature, "staging": True, "main": True,
                   "evidence": {b: {"repo": "backend", "path": "moved.ts", "match": None}
                                for b in ("staging", "main")}}
        timeline = track_implementations([current], previous, self.now)
        self.assertIsNone(current["implementationDates"]["staging"])
        # Main was never in the baseline: a real first observation is still dated.
        self.assertEqual(current["implementationDates"]["main"], self.now)
        self.assertEqual([e["branch"] for e in timeline["events"]], ["main"])

    def test_initial_snapshot_records_baseline_without_faking_old_dates(self):
        initial = {**self.feature, "staging": True, "main": False}
        timeline = track_implementations([initial], {"features": [initial]}, self.now)

        self.assertEqual(timeline["startedAt"], self.now)
        self.assertEqual(timeline["baseline"][0]["branches"], ["staging"])
        self.assertEqual(initial["implementationDates"], {"staging": None, "main": None})
        self.assertEqual(timeline["events"], [])

    def test_false_to_true_transition_records_first_observation_once(self):
        previous = {
            "timeline": {"startedAt": "2026-10-01T00:00:00+00:00", "baseline": []},
            "features": [{**self.feature, "implementationDates": {"staging": None, "main": None}}],
        }
        current = {**self.feature, "staging": True}
        timeline = track_implementations([current], previous, self.now)

        self.assertEqual(current["implementationDates"]["staging"], self.now)
        self.assertEqual(len(timeline["events"]), 1)
        self.assertEqual(timeline["events"][0]["branch"], "staging")
        self.assertEqual(timeline["events"][0]["implementedAt"], self.now)

        # Later snapshots retain the original date instead of adding duplicates.
        later = "2026-10-17T12:00:00+00:00"
        next_timeline = track_implementations(
            [{**current, "implementationDates": dict(current["implementationDates"])}],
            {"timeline": timeline, "features": [current]},
            later,
        )
        self.assertEqual(next_timeline["events"][0]["implementedAt"], self.now)
        self.assertEqual(len(next_timeline["events"]), 1)

    def test_existing_pre_timeline_snapshot_can_seed_transition(self):
        previous = {"features": [self.feature]}
        current = {**self.feature, "staging": True}
        timeline = track_implementations([current], previous, self.now)

        self.assertEqual(timeline["startedAt"], self.now)
        self.assertEqual(current["implementationDates"]["staging"], self.now)

    def test_newly_cataloged_implementation_is_dated_after_tracking_starts(self):
        previous = {
            "timeline": {"startedAt": "2026-10-01T00:00:00+00:00", "baseline": []},
            "features": [],
        }
        current = {**self.feature, "staging": True}
        timeline = track_implementations([current], previous, self.now)

        self.assertEqual(current["implementationDates"]["staging"], self.now)
        self.assertEqual(timeline["events"][0]["title"], "Ingreso")

    def test_newly_cataloged_implementation_does_not_get_historical_date_on_first_run(self):
        current = {**self.feature, "staging": True}
        timeline = track_implementations([current], None, self.now)

        self.assertIsNone(current["implementationDates"]["staging"])
        self.assertEqual(timeline["baseline"][0]["branches"], ["staging"])
        self.assertEqual(timeline["events"], [])

    def test_row_insertion_does_not_reassign_history_by_sequential_id(self):
        previous_feature = {
            **self.feature,
            "id": "F012",
            "staging": True,
            "implementationDates": {"staging": "2026-10-10T00:00:00+00:00", "main": None},
        }
        current = {**previous_feature, "id": "F013", "implementationDates": {"staging": None, "main": None}}
        timeline = track_implementations([current], {"timeline": {"startedAt": self.now, "baseline": []}, "features": [previous_feature]}, self.now)

        self.assertEqual(current["implementationDates"]["staging"], "2026-10-10T00:00:00+00:00")
        self.assertEqual(timeline["events"][0]["id"], "F013")

    def test_title_and_category_edits_preserve_identity_by_source(self):
        previous_feature = {
            **self.feature,
            "staging": True,
            "implementationDates": {"staging": "2026-10-10T00:00:00+00:00", "main": None},
        }
        current = {
            **self.feature,
            "id": "F009",
            "title": "Ingreso con identidad verificada",
            "category": "Autenticación",
            "staging": True,
        }
        timeline = track_implementations(
            [current],
            {
                "timeline": {"startedAt": self.now, "baseline": []},
                "features": [previous_feature],
            },
            "2026-10-17T00:00:00+00:00",
        )

        self.assertEqual(current["implementationDates"]["staging"], "2026-10-10T00:00:00+00:00")
        self.assertEqual(timeline["events"][0]["implementedAt"], "2026-10-10T00:00:00+00:00")

    def test_explicit_key_preserves_history_when_shared_source_label_changes(self):
        previous_feature = {
            **self.feature,
            "timelineKey": "social-share-metadata",
            "category": "Sorteos y publicación",
            "title": "Metadatos al compartir",
            "staging": True,
            "implementationDates": {"staging": "2026-10-10T00:00:00+00:00", "main": None},
        }
        current = {
            **previous_feature,
            "category": "Publicación",
            "title": "Metadatos sociales al compartir",
            "implementationDates": {"staging": None, "main": None},
        }
        timeline = track_implementations(
            [current],
            {"timeline": {"startedAt": self.now, "baseline": []}, "features": [previous_feature]},
            "2026-10-17T00:00:00+00:00",
        )

        self.assertEqual(current["implementationDates"]["staging"], "2026-10-10T00:00:00+00:00")
        self.assertEqual(current["timelineKey"], "social-share-metadata")
        self.assertEqual(timeline["events"][0]["implementedAt"], "2026-10-10T00:00:00+00:00")

    def test_removed_baseline_entry_cannot_link_to_reused_display_id(self):
        previous = {
            "timeline": {
                "startedAt": self.now,
                "baseline": [{"id": "F001", "category": "Antigua", "title": "Retirada", "branches": ["staging"]}],
            },
            "features": [{
                "id": "F001",
                "category": "Antigua",
                "title": "Retirada",
                "staging": True,
                "main": False,
                "evidence": {
                    branch: {"repo": "web", "path": "src/retired.ts", "match": None}
                    for branch in ("staging", "main")
                },
            }],
        }
        replacement = {
            **self.feature,
            "id": "F001",
            "category": "Nueva",
            "title": "Otra capacidad",
            "evidence": {
                branch: {"repo": "web", "path": "src/replacement.ts", "match": None}
                for branch in ("staging", "main")
            },
        }
        timeline = track_implementations([replacement], previous, self.now)

        self.assertNotEqual(replacement["timelineKey"], timeline["baseline"][0]["key"])
        self.assertEqual(timeline["baseline"][0]["title"], "Retirada")

    def test_initial_migration_preserves_explicit_keys_for_shared_legacy_evidence(self):
        previous_features = []
        current_features = []
        for key, title, branch in (
            ("public-raffle-landing", "Landing pública del sorteo", "staging"),
            ("social-share-metadata", "Metadatos al compartir", "main"),
        ):
            previous = {
                **self.feature,
                "id": "F022" if branch == "staging" else "F024",
                "category": "Sorteos y publicación",
                "title": title,
                "staging": branch == "staging",
                "main": branch == "main",
            }
            # These two legacy rows deliberately share the same evidence, as
            # they do in the pre-timeline catalog snapshot.
            previous["evidence"] = {
                name: {"repo": "web", "path": "src/raffle/share.ts", "match": "share"}
                for name in ("staging", "main")
            }
            previous_features.append(previous)
            current_features.append({
                **previous,
                "timelineKey": key,
                "implementationDates": {"staging": None, "main": None},
            })

        timeline = track_implementations(
            current_features,
            {"features": previous_features},
            self.now,
        )

        self.assertEqual(
            [feature["timelineKey"] for feature in current_features],
            ["public-raffle-landing", "social-share-metadata"],
        )
        self.assertEqual(
            {entry["key"] for entry in timeline["baseline"]},
            {"public-raffle-landing", "social-share-metadata"},
        )
        self.assertEqual(
            {entry["key"] for entry in timeline["baseline"]},
            {feature["timelineKey"] for feature in current_features},
        )
        self.assertEqual(timeline["events"], [])

    def test_moved_evidence_keeps_established_key_and_rebinds_baseline(self):
        old = {
            **self.feature,
            "timelineKey": "source-established-key",
            "staging": True,
            "implementationDates": {"staging": None, "main": None},
            "evidence": {
                branch: {"repo": "web", "path": "src/old.ts", "match": "login"}
                for branch in ("staging", "main")
            },
        }
        current = {
            **old,
            "evidence": {
                branch: {"repo": "web", "path": "src/new.ts", "match": "login"}
                for branch in ("staging", "main")
            },
        }
        timeline = track_implementations(
            [current],
            {
                "timeline": {
                    "startedAt": self.now,
                    "baseline": [{
                        "key": "source-established-key",
                        "id": "F001",
                        "category": current["category"],
                        "title": current["title"],
                        "branches": ["staging"],
                    }],
                    "events": [],
                },
                "features": [old],
            },
            "2026-10-17T00:00:00+00:00",
        )

        self.assertEqual(current["timelineKey"], "source-established-key")
        self.assertEqual(timeline["baseline"][0]["key"], current["timelineKey"])
        self.assertIsNone(current["implementationDates"]["staging"])
        self.assertEqual(timeline["events"], [])




class EvidenceLineTests(unittest.TestCase):
    def test_multiline_marker_anchors_its_first_line(self):
        source = 'header\n\n  newEmail: verification.targetEmail,\n            correlationId: input.correlationId,\nend'
        marker = 'newEmail: verification.targetEmail,\n            correlationId: input.correlationId,'
        self.assertEqual(evidence_line(source, marker), 3)

    def test_singleline_first_occurrence_and_missing_fallback(self):
        self.assertEqual(evidence_line('header\n  match\nmatch', 'match'), 2)
        self.assertEqual(evidence_line('match', 'match'), 1)
        self.assertEqual(evidence_line('header', 'missing'), 1)
        self.assertEqual(evidence_line('header', None), 1)
        self.assertEqual(evidence_line('', 'missing'), 1)




class PlannedCapabilityPromotionTests(unittest.TestCase):
    def test_complete_same_branch_producer_consumer_code_required(self):
        from implementation_evidence import all_markers_present
        requirements = [('web', 'editor.tsx', 'Editor'), ('backend', 'save.ts', 'Save'),
                        ('backend', 'migration.sql', 'CREATE TABLE')]
        complete = {('web', 'editor.tsx'): 'Editor', ('backend', 'save.ts'): 'Save',
                    ('backend', 'migration.sql'): 'CREATE TABLE'}
        self.assertTrue(all_markers_present(lambda repo, path: complete.get((repo, path), ''), requirements))
        for missing in complete:
            self.assertFalse(all_markers_present(lambda repo, path: '' if (repo, path) == missing else complete.get((repo, path), ''), requirements))
        self.assertFalse(all_markers_present(lambda repo, path: 'wrong marker', requirements))
        self.assertFalse(all_markers_present(lambda repo, path: 'anything', []))
        self.assertFalse(all_markers_present(lambda repo, path: 'anything', [('web', 'x', '')]))

    def test_promoting_existing_key_appends_event_without_rewriting_history(self):
        import copy
        previous = {'features': [{'id': 'F125', 'category': 'Landing', 'title': 'UX-P1', 'timelineKey': 'raffle-visual-personalization', 'staging': False, 'main': False}],
                    'timeline': {'startedAt': '2026-01-01T00:00:00+00:00', 'baseline': [], 'events': []}}
        original = copy.deepcopy(previous)
        rows = [{'id': 'F125', 'category': 'Landing', 'title': 'UX-P1', 'timelineKey': 'raffle-visual-personalization', 'staging': True, 'main': False}]
        result = track_implementations(rows, previous, '2026-10-21T18:00:00+00:00')
        self.assertEqual(previous, original)
        self.assertEqual(result['startedAt'], original['timeline']['startedAt'])
        self.assertEqual(result['baseline'], original['timeline']['baseline'])
        self.assertEqual(len(result['events']), 1)
        self.assertEqual(result['events'][0]['branch'], 'staging')

if __name__ == "__main__":
    unittest.main()
