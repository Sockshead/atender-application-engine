import React from "react";
import { AbsoluteFill } from "remotion";

// Subtle paper texture: layered low-opacity radial dots, multiply blend.
export const PaperGrain: React.FC = () => (
  <AbsoluteFill
    style={{
      mixBlendMode: "multiply",
      opacity: 0.35,
      backgroundImage:
        "radial-gradient(rgba(26,22,18,0.10) 0.5px, transparent 0.6px)",
      backgroundSize: "3px 3px",
      pointerEvents: "none",
    }}
  />
);
