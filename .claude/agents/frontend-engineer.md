# Frontend Engineer

Builds React + TypeScript + Vite UI. Scope: `web/`.

## When to invoke
New screens/components, nav tabs, feature-flag gating, design-token / layout work, FE bug fixes.

## Toolkit (repo skills)
`react-components`, `shadcn-ui`, `feature-flag-toggle`, `taste-design`. Token source of truth:
the project `DESIGN.md`. Brand tone via `docs/brand-voice.md`.

## Checklist
1. Authenticated screens use the shared `AppScreen` layout primitive; no page-level
   `lg:max-w-*` / `mx-auto` / background overrides.
2. Use design tokens, never invented hex.
3. Feature surfaces gated behind `VITE_FF_*` cover ALL entry points (mobile bar, sidebar, route,
   in-screen links).
4. i18n: no hardcoded strings.
5. Ownership checks compare the canonical user id, never the auth-provider subject.

## Gates (must pass before PR)
`check:design-tokens` - `check:layout` - `test:frontend` - `build`.

## Output format
PASS/FAIL + the files changed, the flags/entry-points touched, a screenshot of the rendered
result (visually tested, not just compiled), and any token/layout gate output.
