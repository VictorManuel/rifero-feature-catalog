"""Resolve explicitly curated relocated evidence without changing branch semantics."""


def select_evidence(read, primary, relocated=None):
    """Prefer original evidence; use a reviewed relocation only when it is absent.

    read(repo, path) must read the same named branch from each repository and
    return an empty string for a missing path. A marker mismatch is also absent.
    """
    original = read(primary[0], primary[1])
    if original and (primary[2] is None or primary[2] in original):
        return (*primary, original, True)
    if relocated:
        source = read(relocated[0], relocated[1])
        if source and (relocated[2] is None or relocated[2] in source):
            return (*relocated, source, True)
    return (*primary, original, False)


def evidence_line(source, marker):
    """One-based start line for a curated marker, including multi-line markers."""
    offset = source.find(marker) if marker else -1
    return source.count("\n", 0, offset) + 1 if offset >= 0 else 1
