import React from "react";
import { AbsoluteFill, Series } from "remotion";
import { theme } from "./theme";
import { TitleCard } from "./components/TitleCard";
import { FootageStage } from "./components/FootageStage";
import { FleetPanel } from "./components/FleetPanel";
import { ParallelPanel } from "./components/ParallelPanel";
import { MoneyShot } from "./components/MoneyShot";
import { DispatchPanel, SynthPanel } from "./components/SimplePanel";

// 58s at 30fps = 1740 frames. Beat sheet per the approved plan.
export const AtenderTuesday: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: theme.paper }}>
    <Series>
      <Series.Sequence durationInFrames={90}>
        <TitleCard line="This is my normal Tuesday." kicker="for Atender" />
      </Series.Sequence>

      <Series.Sequence durationInFrames={270}>
        <FootageStage label="8 specialists - 1 orchestrator - tested in CI">
          <FleetPanel />
        </FootageStage>
      </Series.Sequence>

      <Series.Sequence durationInFrames={180}>
        <FootageStage label="one dispatch in">
          <DispatchPanel />
        </FootageStage>
      </Series.Sequence>

      <Series.Sequence durationInFrames={360}>
        <FootageStage label="four specialists, parallel - I steered, I didn't type">
          <ParallelPanel />
        </FootageStage>
      </Series.Sequence>

      <Series.Sequence durationInFrames={300}>
        <FootageStage label="synthesis - one go/no-go">
          <SynthPanel />
        </FootageStage>
      </Series.Sequence>

      <Series.Sequence durationInFrames={240}>
        <FootageStage label="CI green - fleet contract passing">
          <MoneyShot />
        </FootageStage>
      </Series.Sequence>

      <Series.Sequence durationInFrames={300}>
        <TitleCard
          line="Not a side experiment. It's how every feature ships."
          footer="Juan Camilo Posada  -  for Atender"
        />
      </Series.Sequence>
    </Series>
  </AbsoluteFill>
);
