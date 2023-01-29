import { generateBricks } from "./bricks/bricks";
import { generateBall } from "./ball/ball";
import { generatePaddle } from "./paddle/paddle";

/**
 * Create canvas inside the provided container
 *
 * @param elementSelector string - the selector for the container element
 */
const generateGame: TGenerateGame = (elementSelector) => {
  const container = document.querySelector(elementSelector);
  if (!container) {
    alert("Container element not found");
    return;
  }

  const canvas = document.createElement("canvas");
  canvas.width = container.clientWidth;
  canvas.height = (canvas.width / 16) * 9;

  container.appendChild(canvas);

  generateBricks(canvas);
  generateBall(canvas, canvas.width / 2);
  generatePaddle(canvas, canvas.width / 2);
};

export default generateGame;
