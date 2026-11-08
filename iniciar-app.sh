#!/usr/bin/env sh
cd "$(dirname "$0")" || exit 1
PORT="${PORT:-8080}"
printf 'Mesa Madrid disponible en http://127.0.0.1:%s\nPulsa Ctrl+C para detener.\n' "$PORT"
python3 -m http.server "$PORT" --bind 127.0.0.1
