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
    PADDLE_HEIGHT_OFFSET
  );
};

const drawPaddle: TDrawPaddle = (context, x, y) => {
  context.fillStyle = "#f00";
  context.fillRect(x, y, PADDLE_WIDTH, PADDLE_HEIGHT);
};

export const generatePaddle: TGeneratePaddle = (
  canvas: HTMLCanvasElement,
  positionX: number
) => {
  previousPosition = positionX - PADDLE_WIDTH / 2;
  drawPaddle(
    canvas.getContext("2d"),
    previousPosition,
    getPaddleYPosition(canvas)
  );
};
