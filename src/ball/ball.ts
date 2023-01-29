import { BALL_SIZE } from "./ball-config";

export const generateBall: TGenerateBall = (canvas, offsetX) => {
  const ball = canvas.getContext("2d");

  ball.fillStyle = "#f00";
  ball.beginPath();
  ball.arc(
    offsetX - BALL_SIZE / 2,
    canvas.height - 80,
    BALL_SIZE,
    0,
    2 * Math.PI
  );
  ball.fill();
};
