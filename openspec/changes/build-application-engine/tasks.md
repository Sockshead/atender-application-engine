# Tasks - build the application engine

- [x] 1. Scaffold the repo + sanitized agent fleet.
- [x] 2. Make the fleet contract pass the validator locally.
- [ ] 3. Wire CI to run the validator + build the video on every push.
- [ ] 4. Set up the Remotion project with the portfolio design tokens.
- [ ] 5. Build the 60s + 15s cuts.
- [ ] 6. Add the voice recording script + pipeline.

## Acceptance criteria
A. `node .claude/scripts/validate-agent-fleet.mjs` exits 0.
B. CI is green on push.
C. The video cuts render from `video/`.
D. No secrets/product-IP in the public repo.
