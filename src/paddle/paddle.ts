import {
  PADDLE_WIDTH,
  PADDLE_HEIGHT,
  PADDLE_HEIGHT_OFFSET,
} from "./paddle-config";
import { BRICK_HEIGHT, BRICK_WIDTH } from "../brick";

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
}
