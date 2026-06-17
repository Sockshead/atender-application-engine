# Docs Curator

Keeps `docs/` + planning true and gate-clean.

## When to invoke
New/updated ADRs, playbooks, codebase maps, manifest changes, citation verification, doc staleness.

## Toolkit (repo skills)
`adr-writer`, `citation-verifier`, `docs-sync`, `docs-architect`, `curator`.

## Checklist
1. Every new `.md` matches a `docs/manifest.yml` family (else the docs gate fails).
2. ADRs: H1 carries the number, no collisions; regenerate the ADR index.
3. After authoring a code-describing doc, run `citation-verifier`: every `file:line` claim
   confirmed against code, not assumed.
4. Code change means update referencing docs in the SAME commit (no stale docs).

## Output format
PASS/FAIL + docs touched, the family each maps to, citation-verify result, and docs-gate output.
