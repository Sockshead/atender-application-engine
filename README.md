# atender-application-engine

I am applying to Atender as a Software Engineer. Your job post says you want engineers who treat
**AI as the substrate every software job is being rebuilt on**, who **automate their own job away
as a career plan**, and who run **five to ten agents in parallel on a normal day**. It asks me to
send a repo an AI can read first.

So I did not write a cover letter and stop there. I treated the application the way I treat
shipping: I specced it, pointed my agent fleet at it, and let the fleet build the artifacts. This
repo is the engine. The video, the portfolio patch, and the voiceover were produced by it.

This is not a description of the engineer in your JD. It is that engineer's working setup.

## What is in here

- **`.claude/agents/`** - an orchestrator-worker agent fleet: one `cto-orchestrator` that routes a
  task to the specialist whose intent matches highest (8 specialists + 2 review subagents), runs
  independent work in parallel under git-worktree isolation, and synthesizes a single go/no-go.
- **`.claude/agents/fleet-routing.json`** - the routing contract. Not vibes: a map with scope,
  owned skills, gates, and matched intents per specialist.
- **`.claude/scripts/validate-agent-fleet.mjs`** - the contract is **tested**. This validator
  asserts every routing fixture lands on the right specialist, every skill/subagent/enforced-doc
  resolves, and runs a secret-leak scan over every fleet file. It runs in CI on every push. Green
  CI means the fleet is real, not a screenshot.
- **`video/`** - a [Remotion](https://www.remotion.dev) project (video rendered in code) that
  builds the 60-second "normal Tuesday" cut and a 15-second social cut from one timeline, in the
  same design system as my portfolio.
- **`voice/`** - the recording script + pipeline used to produce the optional voiceover in my own
  voice.
- **`openspec/`** - the spec-driven change that planned this build. I plan before the fleet runs.

## Why a fleet, and what it is worth

I run this model on a private production codebase. The numbers from the last six weeks of that work:

- **60+ pull requests merged**, frontend to infrastructure, at an average open-to-merge cycle time
  under 18 hours.
- **Roughly 3x per-engineer throughput** versus solo coding, via 5 to 10 agents in parallel under
  a session-isolation system I designed (OS-agnostic, around 50 in-house skills, branch-safety hooks).
- **Subscription billing foundation stood up end to end in 48 hours** (industry baseline 2 to 3
  weeks): integration, schema migrations, 17 tests across 4 critical paths, deploy automation, runbook.
- **Alert noise cut around 90%**, time-to-acknowledge from about 25 minutes to under 5.

Before that: 270+ production lending workflows on a multi-tenant Node/AWS pipeline at about 99.5%
job-success, and the internal workspace a 25-agent customer-support team ran on every day (average
handle time cut around 30%). Customer service is the closest user I have built for.

## Honesty note

This is a **sanitized extraction** of the fleet I run on a private codebase. Product names, business
metrics, credentials, and customer data are genericized or removed. The architecture, the routing
map, the gates, and the CI validation are real and runnable here:

```bash
node .claude/scripts/validate-agent-fleet.mjs   # the fleet contract, tested
```

## Links

- Portfolio: https://sockshead.github.io/portfolio
- GitHub: https://github.com/Sockshead
- LinkedIn: https://www.linkedin.com/in/juan-camilo-posada/
- CV: in this repo and attached to the application.

Juan Camilo Posada (Choko). For Atender.
