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
  container.classList.add("web-breakout");

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
    if (isEnded(gameState)) {
      renderEndGameScreen();
      return;
    }
    togglePauseButton(isPlaying(gameState));
  });

  pauseButton.addEventListener("click", () => game.togglePause());

  const togglePauseButton = (toPause: boolean) => {
    pauseButton.classList.toggle("pause-button--state-paused", toPause);
    pauseButton.classList.toggle("pause-button--state-playing", !toPause);
  };

  const renderEndGameScreen = () => {
    const endGameScreen = document.createElement("div");
    const title = "You lost!";
    const message = "You lost the game. Would you like to try again?";
    endGameScreen.classList.add("end-game-screen");
    endGameScreen.innerHTML = `<div class="modal"><div class="modal__container"><div class="modal__header"><h2 class="modal__title">${title}</h2><button class="button button--ghost icon icon--close modal__close-button"></button></div><div class="modal__content"><p class="modal__message">${message}</p></div><div class="modal__footer"><button class="button button--primary">Try again</button></div></div></div>`;

    container.appendChild(endGameScreen);
  };
};

export default generateGame;
