import { Ball } from "../ball";
import { Paddle, PADDLE_FRICTION, PADDLE_SPEED } from "../paddle";
import { Brick, BRICK_HEIGHT, BRICK_SPACING, BRICK_WIDTH } from "../brick";
import {
  containsKeyLeft,
  containsKeyRight,
  shouldListenToKey,
} from "../utils/isKey";

export class Game {
  private paddleMovementX: number = 0;
  private paddleOffsetX: number;
  private keys: Record<string, boolean> = {};
  private canvas: HTMLCanvasElement;
  private paddle: Paddle;
  private ball: Ball;
  private bricks: Brick[] = [];

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;

    // Initialize the paddle in the middle of the screen.
    this.paddleOffsetX = canvas.width / 2;
    this.paddle = new Paddle(this.paddleOffsetX, canvas);
    // @TODO make 80 a const, and maybe move it to the Ball constructor
    this.ball = new Ball(canvas, canvas.width / 2, canvas.height - 80);

    this.addControls();

    // Generating the bricks only needs to happen once. After that we only need to remove the bricks that are hit
    this.generateBricks();
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
        brick.draw();
        this.bricks.push(brick);
      }
    }
  }

  private gameLoop() {
    if (containsKeyLeft(this.keys) && this.paddleMovementX > -PADDLE_SPEED) {
      this.paddleMovementX--;
    }
    if (containsKeyRight(this.keys) && this.paddleMovementX < PADDLE_SPEED) {
      this.paddleMovementX++;
    }

    this.paddleMovementX *= PADDLE_FRICTION;
    this.paddleOffsetX += this.paddleMovementX;

    this.draw();
    window.requestAnimationFrame(() => this.gameLoop());
  }

  private draw() {
    this.ball.draw();
    this.paddle.draw(this.paddleOffsetX);
  }
}
