import { generateBricks } from "../bricks/bricks";
import { generateBall } from "../ball/ball";
import {
  clearPaddle,
  generatePaddle,
  initializePaddle,
} from "../paddle/paddle";
import { PADDLE_SPEED } from "../paddle/paddle-config";
import { isKeyLeft, isKeyRight } from "./isKey";

let paddleOffset: number = 0;
let secondsPassed: number = 0;
let oldTimeStamp: number = 0;

export const initializeGame: TInitializeGame = (canvas) => {
  document.addEventListener("keydown", (event) => {
    if (isKeyLeft(event)) {
      event.preventDefault();
      paddleOffset -= PADDLE_SPEED;
      return;
    }
    if (isKeyRight(event)) {
      event.preventDefault();
      paddleOffset += PADDLE_SPEED;
      return;
    }
  });

  // Initialize the paddle in the middle of the screen.
  initializePaddle(canvas, canvas.width / 2);

  // Generating the bricks only needs to happen once. After that we only need to remove the bricks that are hit
  generateBricks(canvas);
  gameLoop(canvas, 0);
};

const gameLoop = (canvas: HTMLCanvasElement, time: DOMHighResTimeStamp) => {
  // Calculate how much time has passed
  secondsPassed = (time - oldTimeStamp) / 1000;
  oldTimeStamp = time;

  drawScreen(canvas);
  window.requestAnimationFrame((newTime) => gameLoop(canvas, newTime));
};

const drawScreen: TDrawScreen = (canvas) => {
  // Draw the ball
  generateBall(canvas, canvas.width / 2);

  // Re-draw the paddle
  clearPaddle(canvas);
  generatePaddle(canvas, paddleOffset * secondsPassed);
  paddleOffset = 0;
};
