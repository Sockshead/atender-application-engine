# AGENTS.md

Any agent working in this repo reads `DESIGN.md` (or the `video/` theme that mirrors it) before
touching anything visual, and states in its plan which skin applies. Any new color, font, or
motion pattern requires an ADR before code.

The fleet contract lives in `.claude/agents/fleet-routing.json` and is tested by
`.claude/scripts/validate-agent-fleet.mjs`. If you change the routing map, the fixtures, or a
specialist's skills, run the validator and keep it green.

Voice: plain English, hard numbers, no jargon, no emoji.
