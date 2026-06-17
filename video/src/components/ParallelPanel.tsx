import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { theme } from "../theme";
import { Panel } from "./Panel";

const AGENTS = [
  { name: "backend-engineer", task: "migration + TSOA route", done: 150 },
  { name: "frontend-engineer", task: "flagged component", done: 200 },
  { name: "docs-curator", task: "ADR draft", done: 120 },
  { name: "release-conductor", task: "next train slot", done: 240 },
];

export const ParallelPanel: React.FC = () => {
  const frame = useCurrentFrame();
  const spin = ["|", "/", "-", "\\"][Math.floor(frame / 4) % 4];
  return (
    <Panel title="orchestrator  -  4 specialists in parallel">
      <div style={{ color: theme.inkFaint, marginBottom: 18 }}>
        dispatch: add a sport filter (schema + API + flagged FE + ADR + release slot)
      </div>
      {AGENTS.map((a, i) => {
        const isDone = frame >= a.done;
        const files = Math.min(
          Math.round(interpolate(frame, [i * 10, a.done], [0, 6 + i], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })),
          6 + i
        );
        return (
          <div key={a.name} style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 14 }}>
            <span style={{ width: 28, color: isDone ? theme.green : theme.clay, fontSize: 26 }}>
              {isDone ? "✓" : spin}
            </span>
            <span style={{ width: 320, color: theme.slateInk }}>{a.name}</span>
            <span style={{ color: theme.inkFaint, flex: 1 }}>{a.task}</span>
            <span style={{ color: isDone ? theme.green : theme.slateInk, opacity: 0.8 }}>
              {files} files
            </span>
          </div>
        );
      })}
      <div
        style={{
          marginTop: 22,
          color: theme.green,
          opacity: interpolate(frame, [250, 270], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
        }}
      >
        synthesis: 4/4 done, single go/no-go: GO
      </div>
    </Panel>
  );
};
