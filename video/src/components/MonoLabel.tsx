import React from "react";
import { theme } from "../theme";
import { mono } from "../fonts";

export const MonoLabel: React.FC<{
  children: React.ReactNode;
  color?: string;
  size?: number;
  style?: React.CSSProperties;
}> = ({ children, color = theme.inkFaint, size = 18, style }) => (
  <span
    style={{
      fontFamily: mono,
      textTransform: "uppercase",
      letterSpacing: "0.18em",
      fontWeight: 600,
      fontSize: size,
      color,
      ...style,
    }}
  >
    {children}
  </span>
);
