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
}
