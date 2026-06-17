import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { theme } from "../theme";
import { Panel } from "./Panel";

const ROUTING = [
  '  "orchestrator": "cto-orchestrator",',
  '  "specialists": {',
  '    "frontend-engineer":  { "match": ["ui","component","flag"] },',
  '    "backend-engineer":   { "match": ["api","migration","auth"] },',
  '    "qa-persona":         { "match": ["test","e2e","persona"] },',
  '    "data-analyst":       { "match": ["metric","funnel","dau"] },',
  '    "devops-deploy":      { "match": ["deploy","lambda","rollback"] },',
  '    "docs-curator":       { "match": ["adr","docs","citation"] },',
  '    "release-conductor":  { "match": ["release","promote","train"] },',
  '    "growth-ops":         { "match": ["growth","activation"] }',
  "  }",
];

export const FleetPanel: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <Panel title="fleet-routing.json  -  the contract">
      <div style={{ fontSize: 22 }}>
        {ROUTING.map((line, i) => {
          const op = interpolate(frame, [i * 5, i * 5 + 8], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          return (
            <div key={i} style={{ opacity: op, whiteSpace: "pre" }}>
              {line}
            </div>
          );
        })}
        <div
          style={{
            marginTop: 26,
            opacity: interpolate(frame, [70, 84], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
          }}
        >
          <span style={{ color: theme.inkFaint }}>$ node .claude/scripts/validate-agent-fleet.mjs</span>
          <div style={{ color: theme.green, marginTop: 8 }}>
            AGENT FLEET: PASS  (routing + resolution + secret-scan)
          </div>
        </div>
      </div>
    </Panel>
  );
};
