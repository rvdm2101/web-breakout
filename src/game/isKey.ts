const KEY_A = "KeyA";
const KEY_D = "KeyD";
const KEY_ARROW_LEFT = "ArrowLeft";
const KEY_ARROW_RIGHT = "ArrowRight";

export const isKeyLeft = (event: KeyboardEvent): boolean =>
  [KEY_A, KEY_ARROW_LEFT].includes(event.code);

export const isKeyRight = (event: KeyboardEvent): boolean =>
  [KEY_D, KEY_ARROW_RIGHT].includes(event.code);
