import { PADDLE_WIDTH, PADDLE_HEIGHT } from "./paddle-config";

export const generatePaddle: TGeneratePaddle = (canvas, offsetX) => {
  const paddle = canvas.getContext("2d");

  paddle.fillStyle = "#f00";
  paddle.fillRect(
    offsetX - PADDLE_WIDTH / 2,
    canvas.height - 40,
    PADDLE_WIDTH,
    PADDLE_HEIGHT
  );
};
