import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { theme } from "../theme";
import { serif } from "../fonts";
import { MonoLabel } from "./MonoLabel";
import { PaperGrain } from "./PaperGrain";

// Word-by-word fade-in (60ms stagger ~ 2 frames at 30fps), per DESIGN.md hero motion.
export const TitleCard: React.FC<{
  line: string;
  emphasis?: string;
  kicker?: string;
  footer?: string;
  dark?: boolean;
}> = ({ line, emphasis, kicker, footer, dark }) => {
  const frame = useCurrentFrame();
  const words = line.split(" ");
  const bg = dark ? theme.slate : theme.paper;
  const fg = dark ? theme.slateInk : theme.ink;

  return (
    <AbsoluteFill style={{ backgroundColor: bg, justifyContent: "center", padding: 160 }}>
      {!dark && <PaperGrain />}
      <div
        style={{
          position: "absolute",
          top: 90,
          right: 110,
          width: 22,
          height: 22,
          borderRadius: "50%",
          backgroundColor: theme.clay,
        }}
      />
      {kicker && (
        <div style={{ marginBottom: 34 }}>
          <MonoLabel color={theme.clay} size={22}>
            {kicker}
          </MonoLabel>
        </div>
      )}
      <div
        style={{
          fontFamily: serif,
          fontSize: 110,
          lineHeight: 1.02,
          letterSpacing: "-0.03em",
          fontWeight: 420,
          color: fg,
          maxWidth: 1300,
        }}
      >
        {words.map((w, i) => {
          const start = i * 2;
          const opacity = interpolate(frame, [start, start + 10], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          const y = interpolate(frame, [start, start + 10], [14, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          return (
            <span
              key={i}
              style={{ display: "inline-block", opacity, transform: `translateY(${y}px)`, marginRight: "0.28em" }}
            >
              {w}
            </span>
          );
        })}
        {emphasis && (
          <span
            style={{
              display: "block",
              marginTop: 18,
              fontStyle: "italic",
              color: theme.clayDeep,
              opacity: interpolate(frame, [words.length * 2, words.length * 2 + 14], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            {emphasis}
          </span>
        )}
      </div>
      {footer && (
        <div style={{ position: "absolute", bottom: 96, left: 160 }}>
          <MonoLabel color={dark ? theme.slateInk : theme.inkSoft} size={20}>
            {footer}
          </MonoLabel>
        </div>
      )}
    </AbsoluteFill>
  );
};
