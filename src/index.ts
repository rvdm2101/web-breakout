import { Game } from "./game";
import "./style/index.scss";

/**
 * Create canvas inside the provided container
 *
 * @param elementSelector string - the selector for the container element
 */
const generateGame: TGenerateGame = (elementSelector) => {
  const container = document.querySelector(elementSelector) as HTMLElement;
  if (!container) {
    alert("Container element not found");
    return;
  }
  container.style.position = "relative";

  const canvas = document.createElement("canvas");
  canvas.width = container.clientWidth;
  canvas.height = (canvas.width / 16) * 9;
  canvas.style.border = "1px solid black";

  const pauseButton = document.createElement("button");
  pauseButton.classList.add("pause-button");
  pauseButton.innerText = "play";

  container.appendChild(canvas);
  container.appendChild(pauseButton);
  const game = new Game(canvas);
  game.start();

  pauseButton.addEventListener("click", () => {
    game.togglePause();
    pauseButton.classList.toggle("pause-button--paused", game.isPaused());
    pauseButton.innerText = game.isPaused() ? "pause" : "play";
  });
};

export default generateGame;
