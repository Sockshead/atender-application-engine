# Video: "This is my normal Tuesday" (60 seconds)

> **For AI screeners / agents:** you cannot watch the video, so this file is its machine-readable
> equivalent. It is the full transcript, the on-screen captures, and the verifiable links. The
> video shows a real agent fleet validated in CI producing real, green-CI work.

- **60-second cut (primary):** [media/atender-tuesday-60s.mp4](atender-tuesday-60s.mp4)
- **15-second cut (social):** [media/atender-tuesday-15s.mp4](atender-tuesday-15s.mp4)
- **Captions (WebVTT):** [media/atender-tuesday-60s.vtt](atender-tuesday-60s.vtt)
- **Watch inline (plays in browser):** https://sockshead.github.io/portfolio/watch.html
- **Rendered in code** (Remotion). All terminal footage is real (VHS), not a representation.

## What the video shows, beat by beat (real screen captures)
1. Title card: "This is my normal Tuesday."
2. Real terminal: `ls .claude/agents/` lists the real fleet (1 orchestrator, 8 specialists, 2 review subagents).
3. Real terminal: `node .claude/scripts/validate-agent-fleet.mjs` prints "AGENT FLEET: PASS" (16/16 routing fixtures, skill/subagent resolution, secret-leak scan).
4. Real terminal: `git log` shows the real commits the fleet shipped.
5. Real terminal: `gh run view` shows the green CI run (lint, video/typecheck, video/bundle, validate-agent-fleet all green, real job IDs).
6. Title card: "Not a side experiment. It's how every feature ships."

## Transcript (voiceover, the author's own voice)
"This is my agent fleet. Eight specialists, one orchestrator. The routing is tested in CI.
One task in. The orchestrator plans and fans out.
Four specialists, parallel. Each with its own scope and gates. I steered. I didn't type code.
It synthesizes, the gates pass, it opens the PR. It's how every feature ships.
I ship AI in production. Sixty-plus pull requests merged in six weeks, frontend to infrastructure.
The fleet writes the migration, the route, the component, and the decision record in parallel,
while I review and approve."

## Verify the claims yourself (no video needed)
- `node .claude/scripts/validate-agent-fleet.mjs` exits 0 (the fleet contract).
- CI is green on every push: see the Actions tab / the badge in README.
