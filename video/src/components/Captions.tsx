import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { theme } from "../theme";
import { serif } from "../fonts";

// Approximate cue timings (absolute frames @30fps). Block A: frames 100-994. Block B: 1010-1610.
const CUES: { from: number; to: number; text: string }[] = [
  { from: 100, to: 372, text: "This is my agent fleet. Eight specialists, one orchestrator. The routing is tested in CI." },
  { from: 372, to: 470, text: "One task in. The orchestrator plans and fans out." },
  { from: 470, to: 706, text: "Four specialists, parallel. Each with its own scope and gates. I steered. I didn't type code." },
  { from: 706, to: 992, text: "It synthesizes, the gates pass, it opens the PR. It's how every feature ships." },
  { from: 1010, to: 1250, text: "I ship AI in production. Sixty-plus pull requests merged in six weeks, frontend to infrastructure." },
  { from: 1250, to: 1610, text: "The fleet writes the migration, the route, the component, and the decision record in parallel, while I review and approve." },
];

export const Captions: React.FC = () => {
  const frame = useCurrentFrame();
  const cue = CUES.find((c) => frame >= c.from && frame < c.to);
  if (!cue) return null;
  const op = interpolate(frame, [cue.from, cue.from + 6, cue.to - 6, cue.to], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <AbsoluteFill style={{ justifyContent: "flex-end", alignItems: "center", paddingBottom: 96 }}>
      <div
        style={{
          opacity: op,
          maxWidth: 1340,
          margin: "0 80px",
          backgroundColor: "rgba(14,13,11,0.84)",
          color: theme.slateInk,
          fontFamily: serif,
          fontSize: 40,
          lineHeight: 1.28,
          padding: "20px 34px",
          borderRadius: 12,
          textAlign: "center",
          borderBottom: `3px solid ${theme.clay}`,
        }}
      >
        {cue.text}
      </div>
    </AbsoluteFill>
  );
};
