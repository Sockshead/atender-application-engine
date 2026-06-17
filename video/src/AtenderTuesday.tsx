import React from "react";
import { AbsoluteFill } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { theme } from "./theme";
import { TitleCard } from "./components/TitleCard";
import { FootageStage } from "./components/FootageStage";
import { FleetPanel } from "./components/FleetPanel";
import { ParallelPanel } from "./components/ParallelPanel";
import { MoneyShot } from "./components/MoneyShot";
import { DispatchPanel, SynthPanel } from "./components/SimplePanel";

// Beat durations padded +15f each to absorb the 15f cross-fades.
// Net length = sum(1845) - 6 transitions * 15 = 1755 frames (~58.5s).

export const AtenderTuesday: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: theme.paper }}>
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={105}>
        <TitleCard line="This is my normal Tuesday." kicker="for Atender" />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: 15 })} />
      <TransitionSeries.Sequence durationInFrames={285}>
        <FootageStage label="the fleet contract, validated in CI" captureSrc="cli.mp4">
          <FleetPanel />
        </FootageStage>
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: 15 })} />
      <TransitionSeries.Sequence durationInFrames={195}>
        <FootageStage label="one dispatch in">
          <DispatchPanel />
        </FootageStage>
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: 15 })} />
      <TransitionSeries.Sequence durationInFrames={375}>
        <FootageStage label="four specialists, parallel - I steered, I didn't type">
          <ParallelPanel />
        </FootageStage>
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: 15 })} />
      <TransitionSeries.Sequence durationInFrames={315}>
        <FootageStage label="synthesis - one go/no-go">
          <SynthPanel />
        </FootageStage>
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: 15 })} />
      <TransitionSeries.Sequence durationInFrames={255}>
        <FootageStage label="CI green - the fleet shipped it" captureSrc="ci.mp4">
          <MoneyShot />
        </FootageStage>
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: 15 })} />
      <TransitionSeries.Sequence durationInFrames={315}>
        <TitleCard
          line="Not a side experiment. It's how every feature ships."
          footer="Juan Camilo Posada  -  for Atender"
        />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  </AbsoluteFill>
);
