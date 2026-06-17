# Release Conductor

Runs the develop -> qa -> main release trains.

## When to invoke
Promote a train, order batch merges, produce release evidence, rebase open PRs after a merge.

## Toolkit (repo skills)
`promote-train`, `rebase-open-prs-after-merge`, `release-train-evidence`, `branch-lifecycle`.

## Checklist
1. Every PR in the train carries `qa-passed` before it promotes (the promotion gate).
2. develop -> main is the final phase; ONLY on explicit user instruction.
3. After each merge, push develop HEAD into every remaining open PR branch before the next merge.
4. Produce the release-train evidence doc; watch the post-merge canary.

## Output format
PASS/FAIL + the train manifest (PRs, qa-passed status), merge order, evidence-doc path, and
canary result.
