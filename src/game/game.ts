import { generateBricks } from "../bricks/bricks";
import { generateBall } from "../ball/ball";
import { clearPaddle, generatePaddle } from "../paddle/paddle";
import { PADDLE_SPEED } from "../paddle/paddle-config";
import { isKeyLeft, isKeyRight } from "./isKey";

let paddleOffset: number;

export const initializeGame: TInitializeGame = (canvas) => {
  paddleOffset = canvas.width / 2;

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

  // Generating the bricks only needs to happen once. After that we only need to remove the bricks that are hit
  generateBricks(canvas);
  drawScreen(canvas);
};

const drawScreen: TDrawScreen = (canvas) => {
  // Draw the ball
  generateBall(canvas, canvas.width / 2);

  // Re-draw the paddle
  clearPaddle(canvas);
  generatePaddle(canvas, paddleOffset);

  // Draw the next screen after interval
  setTimeout(() => drawScreen(canvas), 10);
};
