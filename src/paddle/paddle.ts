import {
  PADDLE_WIDTH,
  PADDLE_HEIGHT,
  PADDLE_HEIGHT_OFFSET,
} from "./paddle-config";

let previousPosition: number = 0;
const getPaddleYPosition = (canvas: HTMLCanvasElement) =>
  canvas.height - PADDLE_HEIGHT_OFFSET;

export const clearPaddle: TClearPaddle = (canvas) => {
  const context = canvas.getContext("2d");

  // Clear the entire bottom part of the game screen
  context.clearRect(
    0,
    getPaddleYPosition(canvas),
    canvas.width,
    PADDLE_HEIGHT + PADDLE_HEIGHT_OFFSET
  );
};

const drawPaddle: TDrawPaddle = (context, x, y) => {
  context.fillStyle = "#f00";
  context.fillRect(x, y, PADDLE_WIDTH, PADDLE_HEIGHT);
};

export const initializePaddle: TInitializePaddle = (canvas, positionX) => {
  const context = canvas.getContext("2d");
  previousPosition = positionX - PADDLE_WIDTH / 2;
  drawPaddle(context, previousPosition, getPaddleYPosition(canvas));
};

export const generatePaddle: TGeneratePaddle = (canvas, moveX) => {
  const context = canvas.getContext("2d");
  previousPosition = moveX === 0 ? previousPosition : previousPosition + moveX;

  drawPaddle(context, previousPosition, getPaddleYPosition(canvas));
};
