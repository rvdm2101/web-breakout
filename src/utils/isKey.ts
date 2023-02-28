const KEY_A = "KeyA";
const KEY_D = "KeyD";
const KEY_ARROW_LEFT = "ArrowLeft";
const KEY_ARROW_RIGHT = "ArrowRight";
export const KEY_SPACE_BAR = "Space";

export const shouldListenToKey = (keyCode: string): boolean =>
  [KEY_A, KEY_D, KEY_ARROW_LEFT, KEY_ARROW_RIGHT].includes(keyCode);

export const containsKeyLeft = (keys: Record<string, boolean>): boolean =>
  keys[KEY_A] || keys[KEY_ARROW_LEFT];

export const containsKeyRight = (keys: Record<string, boolean>): boolean =>
  keys[KEY_D] || keys[KEY_ARROW_RIGHT];
