import { Ball, BALL_SIZE, BALL_SPEED } from "../ball";
import { Paddle, PADDLE_FRICTION, PADDLE_SPEED, PADDLE_WIDTH } from "../paddle";
import { Brick, BRICK_HEIGHT, BRICK_SPACING, BRICK_WIDTH } from "../brick";
import {
  containsKeyLeft,
  containsKeyRight,
  shouldListenToKey,
} from "../utils/isKey";

export class Game {
  private paddleMovementX: number = 0;
  private paddlePositionX: number;
  private ballMovementX: number = 0;
  private ballMovementY: number = 0;
  private ballPositionX: number;
  private ballPositionY: number;
  private gameState: "stopped" | "playing" = "stopped";

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
    this.gameState = "playing";
    this.addControls();
    this.gameLoop();
  }

  private addControls(): void {
    document.addEventListener("keydown", (event) => {
      if (shouldListenToKey(event.code)) {
        this.keys[event.code] = true;
      }
    });
    document.addEventListener("keyup", (event) => {
      if (shouldListenToKey(event.code)) {
        this.keys[event.code] = false;
      }
    });
  }

  private generateBricks() {
    for (let indexY = 0; indexY < 8; indexY++) {
      for (let indexX = 0; indexX < 29; indexX++) {
        const brick = new Brick(
          this.canvas.getContext("2d"),
          indexX * (BRICK_WIDTH + BRICK_SPACING),
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
    if (this.gameState === "playing") {
      window.requestAnimationFrame(() => this.gameLoop());
    }
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
      this.ballPositionX - BALL_SIZE / 2 <= 0 ||
      this.ballPositionX + BALL_SIZE / 2 >= this.canvas.width
    ) {
      this.bounceBallX();
      return;
    }

    // Hitting the top
    if (this.ballPositionY - BALL_SIZE / 2 <= 0) {
      this.bounceBallY();
      return;
    }

    // Hitting the bottom
    if (this.ballPositionY + BALL_SIZE / 2 >= this.canvas.height) {
      this.gameLost();
    }
  }

  private gameWon() {
    alert("Game over, you won!");
    this.gameState = "stopped";
  }

  private gameLost() {
    alert("Game over, you lost!");
    this.gameState = "stopped";
  }

  private bounceBall(bounce: THitAndBounce) {
    if (!bounce) {
      return;
    }
    bounce === "x" ? this.bounceBallX() : this.bounceBallY();
  }

  private bounceBallX() {
    this.ballMovementX = -this.ballMovementX;
    this.ballPositionX += this.ballMovementX;
  }

  private bounceBallY() {
    this.ballMovementY = -this.ballMovementY;
    this.ballPositionY += this.ballMovementY;
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
}
