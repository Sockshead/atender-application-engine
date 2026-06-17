import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { theme } from "./theme";
import { serif } from "./fonts";
import { MonoLabel } from "./components/MonoLabel";
import { FootageStage } from "./components/FootageStage";
import { PaperGrain } from "./components/PaperGrain";

const Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const op = interpolate(frame, [0, 16], [0, 1], { extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ backgroundColor: theme.paper, padding: 90, justifyContent: "center" }}>
      <PaperGrain />
      <div style={{ opacity: op }}>
        <MonoLabel color={theme.clay} size={26}>for atender</MonoLabel>
        <div style={{ fontFamily: serif, fontSize: 78, lineHeight: 1.06, color: theme.ink, marginTop: 28, letterSpacing: "-0.02em" }}>
          "Five to ten agents in parallel on a normal day."
          <span style={{ display: "block", fontStyle: "italic", color: theme.clayDeep, marginTop: 16 }}>
            Here's one of mine - and the CI test that proves the fleet is real.
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Net = sum(480) - 2 transitions * 15 = 450 frames (~15s), vertical 1080x1920.
export const LinkedInCut: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: theme.paper }}>
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={90}>
        <Hook />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: 15 })} />
      <TransitionSeries.Sequence durationInFrames={150}>
        <FootageStage label="the contract, tested in CI" captureSrc="cli.mp4" videoWidth={980} />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: 15 })} />
      <TransitionSeries.Sequence durationInFrames={240}>
        <FootageStage label="CI green - the fleet shipped it" captureSrc="ci.mp4" videoWidth={980} />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  </AbsoluteFill>
);
