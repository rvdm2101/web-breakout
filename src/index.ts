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
  renderStartGameScreen(container);
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

const startGame = (container: HTMLElement) => {
  container.querySelector(".game-screen").remove();
  createGame(container);
};

const renderStartGameScreen = (container: HTMLElement) => {
  const title = "Wanna play breakout?";
  const message = "Click the button below to start the game";

  const start = () => startGame(container);

  const gameScreen = renderGameScreen(
    container,
    title,
    `<p class="modal__message">${message}</p>`,
    `<button id="action_start-game" class="button button--primary">Start game</button>`
  );

  gameScreen
    .querySelector("#action_start-game")
    .addEventListener("click", start);
};

const renderEndGameScreen = (container: HTMLElement) => {
  const title = "You lost!";
  const message = "You lost the game. Would you like to try again?";

  const startAgain = () => startGame(container);

  const gameScreen = renderGameScreen(
    container,
    title,
    `<p class="modal__message">${message}</p>`,
    `<button id="action_try-again" class="button button--primary">Try again</button>`
  );

  gameScreen
    .querySelector("#action_try-again")
    .addEventListener("click", startAgain);
};

const renderGameScreen = (
  container: HTMLElement,
  title: string,
  content: string,
  actions: string
): HTMLDivElement => {
  const gameScreenModal = document.createElement("div");

  gameScreenModal.classList.add("modal", "game-screen");
  gameScreenModal.innerHTML = `<div class="modal__container"><div class="modal__header"><h2 class="modal__title">${title}</h2></div><div class="modal__content">${content}</div><div class="modal__footer">${actions}</div></div>`;

  container.appendChild(gameScreenModal);
  return gameScreenModal;
};

export default generateGame;
