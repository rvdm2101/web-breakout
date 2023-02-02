import { generateBricks } from "../bricks/bricks";
import { generateBall } from "../ball/ball";
import { clearPaddle, generatePaddle } from "../paddle/paddle";
import { PADDLE_FRICTION, PADDLE_SPEED } from "../paddle/paddle-config";
import { containsKeyLeft, containsKeyRight, shouldListenToKey } from "./isKey";

let paddleMovementX: number = 0;
let paddleOffsetX: number = 0;
const keys: Record<string, boolean> = {};

export const initializeGame: TInitializeGame = (canvas) => {
  // Register keyboard event listeners
  document.addEventListener("keydown", (event) => {
    if (shouldListenToKey(event.code)) {
      keys[event.code] = true;
    }
  });
  document.addEventListener("keyup", (event) => {
    if (shouldListenToKey(event.code)) {
      keys[event.code] = false;
    }
  });

  // Initialize the paddle in the middle of the screen.
  paddleOffsetX = canvas.width / 2;
  generatePaddle(canvas, paddleOffsetX);

  // Generating the bricks only needs to happen once. After that we only need to remove the bricks that are hit
  generateBricks(canvas);
  gameLoop(canvas);
};

const gameLoop = (canvas: HTMLCanvasElement) => {
  if (containsKeyLeft(keys) && paddleMovementX > -PADDLE_SPEED) {
    paddleMovementX--;
  }
  if (containsKeyRight(keys) && paddleMovementX < PADDLE_SPEED) {
    paddleMovementX++;
  }

  paddleMovementX *= PADDLE_FRICTION;
  paddleOffsetX += paddleMovementX;

  drawScreen(canvas);
  window.requestAnimationFrame(() => gameLoop(canvas));
};

const drawScreen: TDrawScreen = (canvas) => {
  // Draw the ball
  generateBall(canvas, canvas.width / 2);

  // Re-draw the paddle
  clearPaddle(canvas);
  generatePaddle(canvas, paddleOffsetX);
};
