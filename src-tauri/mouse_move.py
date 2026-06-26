import sys

import pyautogui

try:
    dx = int(sys.argv[1]) if len(sys.argv) > 1 else 0
    dy = int(sys.argv[2]) if len(sys.argv) > 2 else 0
except ValueError as exc:
    raise SystemExit("dx and dy must be integers") from exc

current_x, current_y = pyautogui.position()
pyautogui.moveRel(dx, dy, duration=0)
print(f"Moved from ({current_x}, {current_y}) to ({current_x + dx}, {current_y + dy})")
