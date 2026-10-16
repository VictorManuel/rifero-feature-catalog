import unittest

from implementation_timeline import track_implementations


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


if __name__ == "__main__":
    unittest.main()
