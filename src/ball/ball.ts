import { BALL_SIZE } from "./ball-config";
import { PADDLE_HEIGHT, PADDLE_WIDTH } from "../paddle";

export class Ball {
  private positionY: number;
  private positionX: number;
  private canvas: HTMLCanvasElement;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
  }

  public draw(positionX: number, positionY: number) {
    this.positionX = positionX;
    this.positionY = positionY;

    const context = this.canvas.getContext("2d");
    context.fillStyle = "#f00";
    context.beginPath();
    context.arc(this.positionX, this.positionY, BALL_SIZE, 0, 2 * Math.PI);
    context.fill();
  }

  public top() {
    return this.positionY;
  }

  public left() {
    return this.positionX;
  }

  public right() {
    return this.positionX + BALL_SIZE;
  }

  public bottom() {
    return this.positionY + BALL_SIZE;
  }
}
