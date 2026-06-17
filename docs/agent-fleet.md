# The Agent Fleet

An orchestrator-worker fleet for shipping software: one lead orchestrator routes a task to the
specialist whose intent matches highest, runs independent work in parallel, then synthesizes a
single go/no-go.

- **Orchestrator:** `cto-orchestrator` (plan, delegate, synthesize, enforce gates).
- **Specialists (8):** frontend-engineer, backend-engineer, qa-persona, data-analyst,
  devops-deploy, docs-curator, release-conductor, growth-ops.
- **Subagents:** security-reviewer, migration-safety-checker (spawned on auth/migration work).
- **Routing:** `.claude/agents/fleet-routing.json`, validated against
  `.claude/agents/routing-fixtures.json` by `.claude/scripts/validate-agent-fleet.mjs`.
- **Isolation:** each specialist runs in its own git worktree under a session lock (a session-id
  + epoch heartbeat, never a PID, so it is OS-agnostic). Branch hooks stop two agents crossing
  branches.

The fleet is governed like production code: the routing map has a contract, the contract is
tested in CI, and a secret-leak scan runs over every fleet file.
