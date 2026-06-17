# Agent Operating Principles

The Definition of Ready (DoR) every spawn must satisfy before it acts. Enforced by the orchestrator
and the spawn template (`.claude/agents/_templates/spawn-template.md`).

1. **Primary, current sources.** Read the code, do not assume. Cite `file:line`. Code beats a
   stale doc every time.
2. **Reuse, do not reinvent.** Use existing repo standards and skills; no parallel invention.
3. **Portable.** No single-machine or single-config assumption. Declare the execution tier.
4. **Surface open questions.** Ask the human; never guess past ambiguity.
5. **Respect the trust boundary.** Internal dev/ops fleet stays separate from any product-facing,
   PII-handling system. Secrets are referenced by name, never by value.
6. **Declare budget.** Every spawn states its tier and token cap before it runs.

A task whose context fails any of these is bounced back to the orchestrator, not dispatched.
