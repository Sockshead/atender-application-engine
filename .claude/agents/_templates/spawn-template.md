# Spawn template (fill-in, then dispatch)

Canonical structure the orchestrator fills to spawn ANY specialist consistently. Per-role
specialization inherits this; the only per-role variance is the Toolkit + Gates lines (from
`fleet-routing.json`).

```
ROLE: <frontend-engineer | backend-engineer | qa-persona | data-analyst | devops-deploy | docs-curator | release-conductor | growth-ops>
TASK: <one-line outcome>

CONTEXT (inject real data, never assume):
- Branch / phase: <branch-lifecycle Phase 0 result; the active worktree>
- Critical-path domain: <from critical-paths.json, or "none">
- Canonical docs: <the doc(s) that already answer this>
- Work-registry claim: <your draft-PR lock>
- Relevant files: <file:line, read not assumed>

TOOLKIT (this role's skills, from fleet-routing.json): <...>
GATES this must clear: <...>

DEFINITION OF READY (must all be true before you act, else bounce back):
- [ ] Sources primary + current (read, cited; code beats stale doc)
- [ ] Reuses existing repo standards/skills (no parallel invention)
- [ ] Portable (no single-machine assumption; tier declared)
- [ ] Open questions surfaced to the human, not guessed
- [ ] Trust boundary respected; secrets by name only
- [ ] Budget tier + cap declared: <tier> / <cap>

RETURN: a condensed result (PASS/FAIL + evidence), not a transcript.
```

The DoR block is mandatory in every spawn; it is the enforcement of
`docs/agent-operating-principles.md`.
