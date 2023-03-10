import { Game } from "./game";
import "./style/index.scss";
import { isEnded, isPlaying } from "./game/utils/isGameState";

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

  generateElements(container);
  createGame(container);
};

// Generate the basic html elements
const generateElements = (container: HTMLElement) => {
  container.classList.add("web-breakout");

  const canvas = document.createElement("canvas");
  canvas.width = container.clientWidth - 2; // -2 for border
  canvas.height = container.clientHeight - 2; // -2 for border
  canvas.style.border = "1px solid black";

  const pauseButton = document.createElement("button");
  pauseButton.classList.add("pause-button", "pause-button--state-paused");

  container.appendChild(canvas);
  container.appendChild(pauseButton);
};

const createGame = (container: HTMLElement) => {
  const canvas = container.querySelector("canvas");
  const pauseButton = container.querySelector(".pause-button");

  const game = new Game(canvas);
  game.start();
  game.gameStateListener((gameState) => {
    if (isEnded(gameState)) {
      renderEndGameScreen(container);
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

const renderEndGameScreen = (container: HTMLElement) => {
  const endGameScreen = document.createElement("div");
  const title = "You lost!";
  const message = "You lost the game. Would you like to try again?";

  const startAgain = () => {
    container.querySelector(".end-game-screen").remove();
    createGame(container);
  };

  endGameScreen.classList.add("end-game-screen");
  endGameScreen.innerHTML = `<div class="modal"><div class="modal__container"><div class="modal__header"><h2 class="modal__title">${title}</h2></div><div class="modal__content"><p class="modal__message">${message}</p></div><div class="modal__footer"><button id="action_try-again" class="button button--primary">Try again</button></div></div></div>`;
  endGameScreen
    .querySelector("#action_try-again")
    .addEventListener("click", startAgain);

  container.appendChild(endGameScreen);
};

export default generateGame;
