import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, staticFile, OffthreadVideo } from "remotion";
import { theme } from "../theme";
import { MonoLabel } from "./MonoLabel";

// A beat stage: paper margin + a slow Ken-Burns push. Real screen-capture clip when captureSrc
// is set (OffthreadVideo from video/public/<captureSrc>), otherwise the children render.
export const FootageStage: React.FC<{
  label?: string;
  children?: React.ReactNode;
  captureSrc?: string;
  videoWidth?: number;
}> = ({ label, children, captureSrc, videoWidth = 1320 }) => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [0, 240], [1, 1.035], { extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ backgroundColor: theme.paper2, justifyContent: "center", alignItems: "center" }}>
      <div style={{ transform: `scale(${scale})` }}>
        {captureSrc ? (
          <OffthreadVideo
            src={staticFile(captureSrc)}
            style={{ width: videoWidth, borderRadius: 10, border: "1px solid #1A1612", boxShadow: "10px 10px 0 #1A1612" }}
          />
        ) : (
          children
        )}
      </div>
      {label && (
        <div style={{ position: "absolute", top: 64, left: 90 }}>
          <MonoLabel color={theme.ink} size={22}>{label}</MonoLabel>
        </div>
      )}
    </AbsoluteFill>
  );
};
