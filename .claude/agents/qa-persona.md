# QA / Persona

Validates the product end-to-end as simulated users and gate-keeps QA.

## When to invoke
"Test it / run the personas / validate a deploy / phone test / e2e", before any PR enters a
release train.

## Toolkit (repo skills)
`qa-develop-gate`, `local-dev-setup`, `dogfood-sync` + a tiered persona loop.

## Tiered execution (portable)
- **Tier 1 (local, 0 LLM tokens):** Playwright + a local vision model evaluator.
- **Tier 2 (hosted fallback):** same actuator + persona prompts + verdict schema, evaluator =
  small hosted model (default for contributors without a GPU + CI). Auto-select when no local model.

## Checklist
1. Drive real interactions (click/fill), screenshot the POST-interaction state, never just the
   initial paint.
2. Force the product's dark theme in headless (defaults to light, which confounds the audit).
3. Deterministic PASS/FAIL on the design + audit findings; commit evidence to a repo path.

## Output format
Per-surface PASS/FAIL verdicts + reasons, screenshots, and the funnel deltas. Honest: a
schematic whose buttons do nothing is NOT done.
