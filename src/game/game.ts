import { Ball, BALL_SIZE, BALL_SPEED } from "../ball";
import { Paddle, PADDLE_FRICTION, PADDLE_SPEED } from "../paddle";
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

  private readonly keys: Record<string, boolean> = {};
  private readonly canvas: HTMLCanvasElement;

  private readonly paddle: Paddle;
  private readonly ball: Ball;
  private readonly bricks: Brick[] = [];

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;

    // Initialize the paddle in the middle of the screen.
    this.paddlePositionX = canvas.width / 2;
    this.paddle = new Paddle(canvas);
    // @TODO make 80 a const, and maybe move it to the Ball constructor

    this.ballPositionX = canvas.width / 2;
    this.ballPositionY = canvas.height - 80;
    this.ballMovementX = BALL_SPEED;
    this.ballMovementY = BALL_SPEED;
    this.ball = new Ball(canvas);

    this.generateBricks();
    this.draw();
  }

  public start() {
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
    for (let indexY = 0; indexY < 2; indexY++) {
      for (let indexX = 0; indexX < 10; indexX++) {
        const brick = new Brick(
          this.canvas,
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
    if (
      this.ballPositionX - BALL_SIZE / 2 <= 0 ||
      this.ballPositionX + BALL_SIZE / 2 >= this.canvas.width
    ) {
      this.ballMovementX = -this.ballMovementX;
      this.ballPositionX += this.ballMovementX;
    }
    if (
      this.ballPositionY - BALL_SIZE / 2 <= 0 ||
      this.ballPositionY + BALL_SIZE / 2 >= this.canvas.height
    ) {
      this.ballMovementY = -this.ballMovementY;
      this.ballPositionY += this.ballMovementY;
    }
  }

  private clear() {
    const context = this.canvas.getContext("2d");
    context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  private draw() {
    this.bricks.forEach((brick) => {
      brick.draw();
    });
    this.paddle.draw(this.paddlePositionX);
    this.ball.draw(this.ballPositionX, this.ballPositionY);
  }
}
