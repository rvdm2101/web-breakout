import { GameState } from "./game-config";
import { isEnded, isPaused, isPlaying } from "./utils/isGameState";
import { Ball, BALL_SIZE, BALL_SPEED } from "@web-breakout/ball";
import {
  Paddle,
  PADDLE_FRICTION,
  PADDLE_SPEED,
  PADDLE_WIDTH,
} from "@web-breakout/paddle";
import {
  Brick,
  BRICK_HEIGHT,
  BRICK_SPACING,
  BRICK_WIDTH,
} from "@web-breakout/brick";
import {
  containsKeyLeft,
  containsKeyRight,
  KEY_SPACE_BAR,
  shouldListenToKey,
} from "../utils/isKey"; // @TODO @web-breakout/util

export class Game {
  private paddleMovementX: number = 0;
  private paddlePositionX: number;
  private ballMovementX: number = 0;
  private ballMovementY: number = 0;
  private ballPositionX: number;
  private ballPositionY: number;
  private gameState: GameState = GameState.ENDED;

  private readonly keys: Record<string, boolean> = {};
  private readonly canvas: HTMLCanvasElement;

  private readonly paddle: Paddle;
  private readonly ball: Ball;
  private readonly bricks: Brick[] = [];

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;

    // Initialize the paddle in the middle of the screen.
    this.paddlePositionX = canvas.width / 2 - PADDLE_WIDTH / 2;
    this.paddle = new Paddle(canvas);
    // @TODO make 80 a const, and maybe move it to the Ball constructor

    this.ballPositionX = canvas.width / 2 - BALL_SIZE / 2;
    this.ballPositionY = canvas.height - 80 - BALL_SIZE / 2;
    this.ballMovementX = BALL_SPEED;
    this.ballMovementY = BALL_SPEED;
    this.ball = new Ball(canvas.getContext("2d"));

    this.generateBricks();
    this.draw();
  }

  public start() {
    this.updateGameState(GameState.PLAY);
    this.addControls();
    this.startGameLoop();
  }

  private addControls(): void {
    document.addEventListener("keydown", (event) => {
      if (shouldListenToKey(event.code)) {
        event.preventDefault();
        this.keys[event.code] = true;
        return;
      }
      if (event.code === KEY_SPACE_BAR) {
        event.preventDefault();
        this.togglePause();
      }
    });
    document.addEventListener("keyup", (event) => {
      if (shouldListenToKey(event.code)) {
        event.preventDefault();
        this.keys[event.code] = false;
      }
    });
  }

  private generateBricks(
    amountOfColumns: number = 20,
    amountOfRows: number = 8
  ) {
    const totalWidthOfBricksBlock =
      amountOfColumns * (BRICK_WIDTH + BRICK_SPACING) - BRICK_SPACING;
    const bricksOffsetX = (this.canvas.width - totalWidthOfBricksBlock) / 2;

    for (let indexY = 0; indexY < amountOfRows; indexY++) {
      for (let indexX = 0; indexX < amountOfColumns; indexX++) {
        const brick = new Brick(
          this.canvas.getContext("2d"),
          indexX * (BRICK_WIDTH + BRICK_SPACING) + bricksOffsetX,
          indexY * (BRICK_HEIGHT + BRICK_SPACING)
        );
        this.bricks.push(brick);
      }
    }
  }

  private gameLoop() {
    this.update();
    this.collisionDetection();
    this.clear();
    this.draw();
    if (isPlaying(this.gameState)) {
      this.startGameLoop();
    }
  }

  private startGameLoop() {
    window.requestAnimationFrame(() => this.gameLoop());
  }

  private update() {
    if (containsKeyLeft(this.keys) && this.paddleMovementX > -PADDLE_SPEED) {
      this.paddleMovementX--;
    }
    if (containsKeyRight(this.keys) && this.paddleMovementX < PADDLE_SPEED) {
      this.paddleMovementX++;
    }

    this.paddleMovementX *= PADDLE_FRICTION;
    this.paddlePositionX += this.paddleMovementX;

    this.ballPositionX += this.ballMovementX;
    this.ballPositionY += this.ballMovementY;
  }

  private collisionDetection() {
    this.collisionDetectionWalls();

    // Detect brick hit and bounce ball
    this.bricks
      .filter((brick) => brick.isAlive())
      .forEach((brick) =>
        this.bounceBall(
          brick.hitAndBounce(this.ball, this.ballPositionX, this.ballPositionY)
        )
      );

    if (!this.bricks.find((brick) => brick.isAlive())) {
      this.gameWon();
    }

    // Detect paddle hit and bounce ball
    this.bounceBall(
      this.paddle.hitAndBounce(
        this.ball,
        this.ballPositionX,
        this.ballPositionY
      )
    );
  }

  private collisionDetectionWalls() {
    // Hitting the left or right wall
    if (
      this.ballPositionX <= 0 ||
      this.ballPositionX + BALL_SIZE >= this.canvas.width
    ) {
      this.bounceBallX(
        this.ballPositionX <= 0
          ? Math.abs(this.ballPositionX)
          : this.ballPositionX + BALL_SIZE - this.canvas.width
      );
      return;
    }

    // Hitting the top
    if (this.ballPositionY <= 0) {
      this.bounceBallY(Math.abs(this.ballPositionY));
      return;
    }

    // Hitting the bottom
    if (this.ballPositionY + BALL_SIZE >= this.canvas.height) {
      this.gameLost();
    }
  }

  private gameWon() {
    this.updateGameState(GameState.ENDED);
  }

  private gameLost() {
    this.updateGameState(GameState.ENDED);
  }

  private bounceBall(bounce: THitAndBounce) {
    if (!bounce) {
      return;
    }
    bounce.direction === "x"
      ? this.bounceBallX(bounce.amount)
      : this.bounceBallY(bounce.amount);
  }

  private returnBallToCollisionPoint(amount: number) {
    // Move the ball `amount` of points back to the point of collision.
    // Using the ballMovement we can calculate if the ball should move to the top/left or bottom/right.
    // I.e. if the this.ballMovementX is greater than 0, the ball moves to the right. So the previous position is on the left
    this.ballPositionY -= this.ballMovementY > 0 ? -amount : amount;
    this.ballPositionX -= this.ballMovementX > 0 ? -amount : amount;
  }

  private bounceBallX(amount: number) {
    this.returnBallToCollisionPoint(amount);
    this.ballMovementX = -this.ballMovementX;
    this.ballPositionX += amount;
  }

  private bounceBallY(amount: number) {
    this.returnBallToCollisionPoint(amount);
    this.ballMovementY = -this.ballMovementY;
    this.ballPositionY += amount;
  }

  private clear() {
    const context = this.canvas.getContext("2d");
    context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  private draw() {
    this.bricks
      .filter((brick) => brick.isAlive())
      .forEach((brick) => {
        brick.draw();
      });
    this.paddle.draw(this.paddlePositionX);
    this.ball.draw(this.ballPositionX, this.ballPositionY);
  }

  public canPause() {
    // Cannot pause the game, when you already lost
    return !isEnded(this.gameState);
  }

  public togglePause() {
    if (!this.canPause()) {
      return;
    }

    const isCurrentlyPaused = isPaused(this.gameState);
    if (isCurrentlyPaused) {
      this.startGameLoop();
    }
    this.updateGameState(isCurrentlyPaused ? GameState.PLAY : GameState.PAUSE);
  }

  private updateGameState(gameState: GameState) {
    this.gameState = gameState;
    this.gameStateListenerTrigger(gameState);
  }

  // @TODO feels weird. Maybe just better to use something like eventBus (or create my own custom events listener)
  // Trigger for the gameStateListener
  private gameStateListenerTrigger(_gameState: GameState) {}
  public gameStateListener(
    externalListenerFunction: (gameState: GameState) => void
  ) {
    this.gameStateListenerTrigger = externalListenerFunction;
  }
}
