import { generateBricks } from "./bricks/bricks";

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
};

export default generateGame;
