import React from "react";
import { theme } from "../theme";
import { mono } from "../fonts";

// A framed dark editor/terminal window, sat on the paper canvas with the
// signature hard offset shadow (the only shadow the design system allows).
export const Panel: React.FC<{
  title: string;
  children: React.ReactNode;
  width?: number;
}> = ({ title, children, width = 1320 }) => (
  <div
    style={{
      width,
      borderRadius: 10,
      overflow: "hidden",
      border: `1px solid ${theme.ink}`,
      boxShadow: `10px 10px 0 ${theme.ink}`,
      backgroundColor: theme.slate,
      fontFamily: mono,
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "14px 18px",
        backgroundColor: theme.slate2,
        borderBottom: `1px solid rgba(240,232,214,0.12)`,
      }}
    >
      <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#E66" }} />
      <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#EC6" }} />
      <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#6C8" }} />
      <span
        style={{
          marginLeft: 14,
          color: theme.slateInk,
          opacity: 0.7,
          fontSize: 18,
          letterSpacing: "0.04em",
        }}
      >
        {title}
      </span>
    </div>
    <div style={{ padding: 30, color: theme.slateInk, fontSize: 24, lineHeight: 1.5 }}>
      {children}
    </div>
  </div>
);
