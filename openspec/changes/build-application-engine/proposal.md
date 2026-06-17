# Change: build the application engine

## Why
Atender's JD asks for an engineer who treats AI as substrate, automates their own work, and runs a
parallel agent fleet, and it asks for a repo an AI can read. The strongest possible answer is to
build that repo: an agent fleet that produces the application itself, governed by a tested contract.

## What changes
- Stand up a public repo with the orchestrator-worker fleet (sanitized from a private codebase).
- Make the routing contract testable: a validator that runs in CI (routing fixtures + resolution +
  secret-leak scan).
- Add a Remotion video project that renders the 60s and 15s cuts in the portfolio design system.
- Add the voice pipeline (recording script + synthesis or self-recorded read).

## Non-goals
- Do not include any product IP, customer data, or credentials.
- Do not couple to the private codebase; this repo is standalone.

## Where work runs / where artefacts land
- Runs in: /Users/sockshead/develop/atender-application-engine (public on GitHub).
- Outputs: the video cuts, the CI green check, the linked portfolio.

## Dependencies on the human
- Scrub review before going public.
- Voice samples (or approve silent).
