import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { theme } from "../theme";
import { serif } from "../fonts";

// Cue frames derived from transcribing the actual VO tracks (mlx-whisper), so captions match audio.
const CUES: { from: number; to: number; text: string }[] = [
  { from: 100, to: 292, text: "This is my agent fleet. Eight specialists, one orchestrator. The routing is tested in CI." },
  { from: 321, to: 527, text: "One task in. The orchestrator plans and fans out. Four specialists in parallel," },
  { from: 549, to: 803, text: "each with its own scope and gates. I steered. I didn't type code. It synthesizes, the gates pass." },
  { from: 803, to: 958, text: "It opens the PR. Not a side experiment. It's how every feature ships." },
  { from: 1010, to: 1075, text: "I ship AI in production." },
  { from: 1075, to: 1198, text: "In the last six weeks I merged 60+ pull requests" },
  { from: 1198, to: 1372, text: "from frontend to infrastructure, at an average cycle time under 18 hours." },
];

export const Captions: React.FC = () => {
  const frame = useCurrentFrame();
  const cue = CUES.find((c) => frame >= c.from && frame < c.to);
  if (!cue) return null;
  const op = interpolate(frame, [cue.from, cue.from + 5, cue.to - 5, cue.to], [0, 1, 1, 0], {
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
