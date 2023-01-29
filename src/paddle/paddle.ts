import { PADDLE_WIDTH, PADDLE_HEIGHT } from "./paddle-config";

let previousPosition: number;

export const clearPaddle: TClearPaddle = (canvas) => {
  const context = canvas.getContext("2d");

  context.clearRect(
    previousPosition,
    canvas.height - 40,
    PADDLE_WIDTH,
    PADDLE_HEIGHT
  );
};

export const generatePaddle: TGeneratePaddle = (canvas, offsetX) => {
  const paddle = canvas.getContext("2d");
  previousPosition = offsetX - PADDLE_WIDTH / 2;

  paddle.fillStyle = "#f00";
  paddle.fillRect(
    offsetX - PADDLE_WIDTH / 2,
    canvas.height - 40,
    PADDLE_WIDTH,
    PADDLE_HEIGHT
  );
};
