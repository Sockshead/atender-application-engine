import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { theme } from "../theme";
import { Panel } from "./Panel";

const CHECKS = [
  "validate-agent-fleet (routing + resolution + secret-scan)",
  "video / typecheck",
  "video / bundle",
  "lint",
];

export const MoneyShot: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <Panel title="github.com/Sockshead/atender-application-engine  -  CI">
      <div style={{ color: theme.slateInk, fontSize: 26, marginBottom: 6 }}>
        feat: agent fleet builds the application
      </div>
      <div style={{ color: theme.inkFaint, marginBottom: 22 }}>
        opened by the fleet  -  commit 901aba7 on main  -  run #27661360704
      </div>
      {CHECKS.map((c, i) => {
        const on = frame >= 30 + i * 22;
        return (
          <div key={c} style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 14 }}>
            <span
              style={{
                width: 30,
                height: 30,
                borderRadius: "50%",
                background: on ? theme.green : "rgba(240,232,214,0.15)",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
              }}
            >
              {on ? "✓" : ""}
            </span>
            <span style={{ color: theme.slateInk }}>{c}</span>
            <span style={{ color: on ? theme.green : theme.inkFaint, marginLeft: "auto" }}>
              {on ? "passed" : "..."}
            </span>
          </div>
        );
      })}
      <div
        style={{
          marginTop: 24,
          color: theme.green,
          fontSize: 28,
          opacity: interpolate(frame, [140, 160], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
        }}
      >
        All checks have passed
      </div>
    </Panel>
  );
};
