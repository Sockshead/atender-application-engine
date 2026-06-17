import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { theme } from "./theme";
import { TitleCard } from "./components/TitleCard";
import { FootageStage } from "./components/FootageStage";
import { Captions } from "./components/Captions";

// All footage is REAL terminal capture (VHS). Beats = clip length + ~2s hold on the result.
// Net = sum(1699) - 5 transitions * 15 = 1624 frames (~54s).
export const AtenderTuesday: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: theme.paper }}>
    <Audio src={staticFile("music.m4a")} volume={0.13} />
    <Sequence from={12}>
      <Audio src={staticFile("vo-open.m4a")} volume={0.97} />
    </Sequence>
    <Sequence from={100}>
      <Audio src={staticFile("vo.m4a")} volume={0.95} />
    </Sequence>
    <Sequence from={1010}>
      <Audio src={staticFile("vo-b.m4a")} volume={0.95} />
    </Sequence>
    <Sequence from={1455}>
      <Audio src={staticFile("vo-close.m4a")} volume={0.97} />
    </Sequence>
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={105}>
        <TitleCard line="This is my normal Tuesday." kicker="for Atender" />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: 15 })} />
      <TransitionSeries.Sequence durationInFrames={443}>
        <FootageStage label="the fleet: 1 orchestrator, 8 specialists, 2 reviewers" captureSrc="team.mp4" />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: 15 })} />
      <TransitionSeries.Sequence durationInFrames={295}>
        <FootageStage label="the contract, validated in CI" captureSrc="cli.mp4" />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: 15 })} />
      <TransitionSeries.Sequence durationInFrames={356}>
        <FootageStage label="the work the fleet shipped" captureSrc="work.mp4" />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: 15 })} />
      <TransitionSeries.Sequence durationInFrames={320}>
        <FootageStage label="CI green - the fleet shipped it" captureSrc="ci.mp4" />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: 15 })} />
      <TransitionSeries.Sequence durationInFrames={180}>
        <TitleCard line="Not a side experiment. It's how every feature ships." footer="Juan Camilo Posada  -  for Atender" />
      </TransitionSeries.Sequence>
    </TransitionSeries>
    <Captions />
  </AbsoluteFill>
);
