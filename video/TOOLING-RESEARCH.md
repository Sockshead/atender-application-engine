# Video tooling research - why Remotion, and what else was evaluated

The brief asked to record and edit the "normal Tuesday" video and to research whether anything
beats Remotion for speed and quality on THIS use case (real terminal/agent footage bookended by
polished, on-brand title cards, multiple cuts, retake-able).

## Machine audit (what was already installed)
ffmpeg 8.0.1, Node 22, QuickTime, macOS native `screencapture -v` (headless screen video).
Not installed: Screen Studio, Loom, OBS, VHS, asciinema, DaVinci, Motion Canvas.

## Options evaluated

| Tool | Best at | Cost | Fit here |
|---|---|---|---|
| **Remotion** (chosen) | Programmatic React video: title cards, captions, zoom, compositing real clips, multiple cuts from one timeline, deterministic + retake-able, CI-buildable | Free (OSS) | **Strong.** One timeline -> 60s + 15s + 3min. On-brand cards from the portfolio DESIGN.md tokens. And it is itself the meta-flex: the application video is rendered in code, in the public repo. |
| Screen Studio | Auto-zoom + cursor smoothing for live screen recordings; the 2025-26 de-facto for premium dev demos | ~$89-229 | Good for the raw capture, but paid + not installed, and it cannot produce the programmatic cards/cuts. Optional upgrade for the capture step only. |
| charmbracelet VHS | Deterministic scripted TERMINAL recordings (.tape -> mp4/gif), CI-friendly | Free | Great for fake terminal panes, but our fleet is Claude Code subagents, not shell streams - VHS would dramatize, not show the real thing. Skipped. |
| asciinema + agg | Lightweight terminal capture to gif | Free | Same mismatch as VHS; gif quality is lower. Skipped. |
| Motion Canvas | Hand-timed procedural animation (TS) | Free | Overlaps Remotion; weaker at compositing real clips + data-driven scenes. Skipped. |
| QuickTime/OBS + DaVinci | Manual capture + timeline editing | Free | The fully-manual path: slow, not retake-able, not code-reviewable. Skipped. |

## Decision
**Remotion for the title cards, pacing, captions, and the multiple cuts** (the parts that must be
polished, on-brand, and reproducible), plus **real screen captures composited in** for the
verifiable beats (the fleet contract, the parallel CI jobs, and the green-CI money shot are
captured from the real GitHub repo). macOS `screencapture -v` (or Screen Studio if Choko wants the
extra polish) records the live Claude Code fan-out for the one beat that needs his real
environment. ffmpeg is the glue. This hybrid is the fastest path to a polished, retake-able result
and keeps the whole pipeline in the public repo as part of the application's proof.
