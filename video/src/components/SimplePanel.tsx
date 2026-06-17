import React from "react";
import { useCurrentFrame } from "remotion";
import { theme } from "../theme";
import { Panel } from "./Panel";

// Dispatch beat: the one prompt, "typed" with a blinking cursor.
export const DispatchPanel: React.FC = () => {
  const frame = useCurrentFrame();
  const full =
    "Add a sport filter to the community feed: schema + index + API + flagged FE + ADR + release slot. Use the fleet. Parallelize. Single go/no-go.";
  const chars = Math.min(full.length, Math.round(frame * 2.4));
  const cursor = Math.floor(frame / 8) % 2 === 0 ? "_" : " ";
  return (
    <Panel title="cto-orchestrator  -  dispatch">
      <div style={{ color: theme.inkFaint }}>$ dispatch &gt;</div>
      <div style={{ color: theme.slateInk, marginTop: 12 }}>
        {full.slice(0, chars)}
        <span style={{ color: theme.clay }}>{cursor}</span>
      </div>
    </Panel>
  );
};

export const SynthPanel: React.FC = () => (
  <Panel title="orchestrator  -  synthesis">
    <div style={{ color: theme.slateInk }}>backend-engineer: migration + route ... PASS</div>
    <div style={{ color: theme.slateInk }}>frontend-engineer: flagged component ... PASS</div>
    <div style={{ color: theme.slateInk }}>docs-curator: ADR drafted ... PASS</div>
    <div style={{ color: theme.slateInk }}>release-conductor: slotted next train ... PASS</div>
    <div style={{ color: theme.green, marginTop: 18, fontSize: 28 }}>
      single go/no-go: GO  -&gt;  shipping to the application repo
    </div>
  </Panel>
);
