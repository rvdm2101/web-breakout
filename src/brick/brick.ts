import { BRICK_HEIGHT, BRICK_WIDTH } from "./brick-config";

export class Brick {
  private canvas: HTMLCanvasElement;
  private positionX: number;
  private positionY: number;

  constructor(canvas: HTMLCanvasElement, positionX: number, positionY: number) {
    this.canvas = canvas;
    this.positionX = positionX;
    this.positionY = positionY;
  }

  public draw() {
    const context = this.canvas.getContext("2d");
    context.fillStyle = "#f00";
    context.fillRect(this.positionX, this.positionY, BRICK_WIDTH, BRICK_HEIGHT);
  }

  public top() {
    return this.positionY;
  }

  public left() {
    return this.positionX;
  }

  public right() {
    return this.positionX + BRICK_WIDTH;
  }

  public bottom() {
    return this.positionY + BRICK_HEIGHT;
  }
}
