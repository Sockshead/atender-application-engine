import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, staticFile, OffthreadVideo } from "remotion";
import { theme } from "../theme";
import { MonoLabel } from "./MonoLabel";

// Stage for a beat: paper margin + a slow Ken-Burns push on the framed content.
// To use REAL screen capture instead of the code-drawn panel, drop the clip at
// video/public/<captureSrc> and pass captureSrc; otherwise the children render.
export const FootageStage: React.FC<{
  label?: string;
  children: React.ReactNode;
  captureSrc?: string;
}> = ({ label, children, captureSrc }) => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [0, 240], [1, 1.04], { extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ backgroundColor: theme.paper2, justifyContent: "center", alignItems: "center" }}>
      <div style={{ transform: `scale(${scale})` }}>
        {captureSrc ? (
          <OffthreadVideo src={staticFile(captureSrc)} style={{ width: 1320, borderRadius: 10 }} />
        ) : (
          children
        )}
      </div>
      {label && (
        <div style={{ position: "absolute", bottom: 70, left: 90 }}>
          <MonoLabel color={theme.ink} size={22}>
            {label}
          </MonoLabel>
        </div>
      )}
    </AbsoluteFill>
  );
};
