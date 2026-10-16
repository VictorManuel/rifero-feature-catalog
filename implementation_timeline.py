"""Tracks the first catalog refresh that observes an implementation per branch."""

import hashlib
import json

BRANCHES = ("staging", "main")

def _source_key(feature):
    evidence = feature.get("evidence") or {}
    sources = [
        [branch, (evidence.get(branch) or {}).get("repo"),
         (evidence.get(branch) or {}).get("path"),
         (evidence.get(branch) or {}).get("match")]
        for branch in BRANCHES
    ]
    serialized = json.dumps(sources, ensure_ascii=False, separators=(",", ":"))
    return "source-" + hashlib.sha256(serialized.encode("utf-8")).hexdigest()[:20]


def _identity(feature):
    if feature.get("timelineKey"):
        return feature["timelineKey"]
    return _source_key(feature)


def _label(feature):
    return (feature.get("category"), feature.get("title"))


def track_implementations(rows, previous, now):
    """Add first-seen implementation dates and return the persistent timeline.

    The first run establishes a baseline from the previous snapshot. Existing
    implementations are intentionally left without historical dates. A later
    false-to-true transition records the time this generator first observes it.
    Once tracking has started, a newly cataloged implementation is also dated
    when first observed, because its prior status is unknown.
    """
    previous = previous or {}
    previous_features = previous.get("features", [])
    previous_rows = {_identity(feature): feature for feature in previous_features}
    previous_by_label = {_label(feature): feature for feature in previous_features}
    current_by_label = {_label(feature): feature for feature in rows}
    declared_keys = {id(feature): feature.get("timelineKey") for feature in rows}
    old_timeline = previous.get("timeline") or {}
    started_at = old_timeline.get("startedAt") or now

    # Display IDs are sequential and can shift or be reused after row changes.
    # Track by implementation evidence (or immutable explicit keys for sources
    # shared by multiple capabilities, assigned beside each generator row).
    for feature in rows:
        feature["timelineKey"] = _identity(feature)
    keys = [feature["timelineKey"] for feature in rows]
    if len(keys) != len(set(keys)):
        raise ValueError("Capacidades con evidencia compartida necesitan timeline_key explícita en generate.py")

    # If evidence moves to another file but the curated label remains exact,
    # carry the established key forward instead of losing its history.
    for feature in rows:
        previous_feature = previous_rows.get(feature["timelineKey"])
        if previous_feature is None:
            previous_feature = previous_by_label.get(_label(feature))
        if previous_feature is not None:
            # Keep an existing generated identity when evidence moved, unless
            # this row declares a curated key (for shared-evidence features).
            # A legacy snapshot without timelineKey must not replace that key.
            if not declared_keys[id(feature)] and previous_feature.get("timelineKey"):
                feature["timelineKey"] = previous_feature["timelineKey"]
            previous_rows[feature["timelineKey"]] = previous_feature
    keys = [feature["timelineKey"] for feature in rows]
    if len(keys) != len(set(keys)):
        raise ValueError("La migración de timeline produjo timeline_key duplicadas")

    if old_timeline.get("startedAt"):
        baseline = list(old_timeline.get("baseline", []))
        for feature in baseline:
            current_feature = current_by_label.get(_label(feature))
            previous_feature = previous_by_label.get(_label(feature))
            if current_feature is not None:
                feature["key"] = current_feature["timelineKey"]
            elif not feature.get("key") and previous_feature is not None:
                feature["key"] = _identity(previous_feature)
    else:
        baseline_source = previous_features or rows
        baseline = []
        for feature in baseline_source:
            branches = [branch for branch in BRANCHES if feature.get(branch, False)]
            if branches:
                current_feature = current_by_label.get(_label(feature))
                baseline.append({
                    "key": current_feature["timelineKey"] if current_feature else _identity(feature),
                    "id": feature["id"],
                    "category": feature["category"],
                    "title": feature["title"],
                    "branches": branches,
                })

    # Rebind baseline links to current IDs when a row was inserted before it.
    current_ids = {feature["timelineKey"]: feature["id"] for feature in rows}
    for feature in baseline:
        current_id = current_ids.get(feature.get("key"))
        if current_id:
            feature["id"] = current_id

    events = []
    for feature in rows:
        previous_feature = previous_rows.get(feature["timelineKey"])
        if previous_feature is None:
            previous_feature = previous_by_label.get(_label(feature))
        old_dates = (previous_feature or {}).get("implementationDates", {})
        dates = {}
        for branch in BRANCHES:
            date = old_dates.get(branch)
            if (
                not date
                and feature[branch]
                and (
                    (previous_feature is not None and not previous_feature.get(branch, False))
                    or (previous_feature is None and old_timeline.get("startedAt"))
                )
            ):
                date = now
            dates[branch] = date
            if date:
                events.append({
                    "key": feature["timelineKey"],
                    "id": feature["id"],
                    "category": feature["category"],
                    "title": feature["title"],
                    "branch": branch,
                    "implementedAt": date,
                })
        feature["implementationDates"] = dates

    events.sort(key=lambda event: (event["implementedAt"], event["id"], event["branch"]), reverse=True)
    return {"startedAt": started_at, "baseline": baseline, "events": events}
