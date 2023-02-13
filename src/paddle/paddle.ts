import {
  PADDLE_WIDTH,
  PADDLE_HEIGHT,
  PADDLE_HEIGHT_OFFSET,
} from "./paddle-config";
import { Ball, BALL_SIZE } from "../ball";
import { isCurrentHit } from "../utils/isHit";
import { getBounceDirection } from "../utils/getBounceDirection";

export class Paddle {
  private positionY: number;
  private positionX: number;
  private canvas: HTMLCanvasElement;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.positionY = this.canvas.height - PADDLE_HEIGHT_OFFSET;
  }

  public draw(positionX: number): void {
    this.positionX = positionX;

    const context = this.canvas.getContext("2d");
    context.fillStyle = "#f00";
    context.fillRect(
      this.positionX,
      this.positionY,
      PADDLE_WIDTH,
      PADDLE_HEIGHT
    );
  }

  public top() {
    return this.positionY;
  }

  public left() {
    return this.positionX;
  }

  public right() {
    return this.positionX + PADDLE_WIDTH;
  }

  public bottom() {
    return this.positionY + PADDLE_HEIGHT;
  }

  public detectHit(
    ball: Ball,
    newPositionX: number,
    newPositionY: number
  ): boolean {
    return isCurrentHit(
      ball.right(newPositionX),
      ball.bottom(newPositionY),
      this.left(),
      this.right() + BALL_SIZE,
      this.top(),
      this.bottom() + BALL_SIZE
    );
  }

  public hitAndBounce(
    ball: Ball,
    newPositionX: number,
    newPositionY: number
  ): THitAndBounce {
    if (!this.detectHit(ball, newPositionX, newPositionY)) {
      return false;
    }

    return getBounceDirection(
      ball,
      newPositionX,
      newPositionY,
      this.left(),
      this.right(),
      this.top(),
      this.bottom(),
      PADDLE_WIDTH,
      PADDLE_HEIGHT
    );
  }
}
