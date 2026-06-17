#!/usr/bin/env bash
# Generate a new voiceover line in Choko's cloned voice, fully locally (F5-TTS-MLX, MIT code).
# Usage: ./clone.sh "Text to say" out.wav
# One-time setup:
#   curl -LsSf https://astral.sh/uv/install.sh | sh
#   uv venv ~/.f5venv --python 3.12 && uv pip install --python ~/.f5venv f5-tts-mlx
#   # reference: a ~9s clean clip of your voice + its transcript
set -e
TEXT="${1:?usage: clone.sh \"text\" out.wav}"
OUT="${2:-clone-out.wav}"
REF="${REF:-ref.wav}"; REFTXT="${REFTXT:-This is my agent fleet. Eight specialists, one orchestrator. The routing is tested in CI.}"
VENV="${VENV:-$HOME/.f5venv}"
# total duration heuristic: ref(~9s) + ~0.4s per word
WORDS=$(echo "$TEXT" | wc -w | tr -d ' ')
DUR=$(python3 -c "print(round(9 + $WORDS*0.42, 1))")
"$VENV/bin/python" -m f5_tts_mlx.generate --ref-audio "$REF" --ref-text "$REFTXT" \
  --text "$TEXT" --duration "$DUR" --steps 24 --output "$OUT"
echo "wrote $OUT"
