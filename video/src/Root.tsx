import React from "react";
import { Composition } from "remotion";
import { VIDEO } from "./theme";
import { AtenderTuesday } from "./AtenderTuesday";
import { LinkedInCut } from "./LinkedInCut";

export const RemotionRoot: React.FC = () => (
  <>
    <Composition
      id="AtenderTuesday"
      component={AtenderTuesday}
      durationInFrames={1755}
      fps={VIDEO.fps}
      width={VIDEO.width}
      height={VIDEO.height}
    />
    <Composition
      id="LinkedInCut"
      component={LinkedInCut}
      durationInFrames={435}
      fps={VIDEO.fps}
      width={1080}
      height={1920}
    />
  </>
);
