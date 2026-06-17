import React from "react";
import { AbsoluteFill, Series, useCurrentFrame, interpolate } from "remotion";
import { theme } from "./theme";
import { serif } from "./fonts";
import { MonoLabel } from "./components/MonoLabel";
import { ParallelPanel } from "./components/ParallelPanel";
import { MoneyShot } from "./components/MoneyShot";
import { PaperGrain } from "./components/PaperGrain";

const Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const op = interpolate(frame, [0, 16], [0, 1], { extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ backgroundColor: theme.paper, padding: 90, justifyContent: "center" }}>
      <PaperGrain />
      <div style={{ opacity: op }}>
        <MonoLabel color={theme.clay} size={26}>
          for atender
        </MonoLabel>
        <div
          style={{
            fontFamily: serif,
            fontSize: 78,
            lineHeight: 1.06,
            color: theme.ink,
            marginTop: 28,
            letterSpacing: "-0.02em",
          }}
        >
          "Five to ten agents in parallel on a normal day."
          <span style={{ display: "block", fontStyle: "italic", color: theme.clayDeep, marginTop: 16 }}>
            Here's one of mine - and the CI test that proves the fleet is real.
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

const Portrait: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <AbsoluteFill style={{ backgroundColor: theme.paper2, justifyContent: "center", alignItems: "center" }}>
    <div style={{ transform: "scale(0.78)" }}>{children}</div>
  </AbsoluteFill>
);

// 15s at 30fps = 450 frames, vertical 1080x1920.
export const LinkedInCut: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: theme.paper }}>
    <Series>
      <Series.Sequence durationInFrames={90}>
        <Hook />
      </Series.Sequence>
      <Series.Sequence durationInFrames={180}>
        <Portrait>
          <ParallelPanel />
        </Portrait>
      </Series.Sequence>
      <Series.Sequence durationInFrames={180}>
        <Portrait>
          <MoneyShot />
        </Portrait>
      </Series.Sequence>
    </Series>
  </AbsoluteFill>
);
