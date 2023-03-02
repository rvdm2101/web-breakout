import { Game } from "./game";
import "./style/index.scss";
import { isPlaying } from "./game/utils/isGameState";

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
  pauseButton.classList.add("pause-button", "pause-button--state-paused");

  container.appendChild(canvas);
  container.appendChild(pauseButton);
  const game = new Game(canvas);
  game.start();
  game.gameStateListener((gameState) => {
    if (!game.canPause()) {
      return;
    }
    togglePauseButton(isPlaying(gameState));
  });

  pauseButton.addEventListener("click", () => game.togglePause());

  const togglePauseButton = (toPause: boolean) => {
    pauseButton.classList.toggle("pause-button--state-paused", toPause);
    pauseButton.classList.toggle("pause-button--state-playing", !toPause);
  };
};

export default generateGame;
