import { BALL_SIZE } from "./ball-config";

export class Ball {
  private canvas: HTMLCanvasElement;
  private positionX: number;
  private positionY: number;

  constructor(canvas: HTMLCanvasElement, positionX: number, positionY: number) {
    this.canvas = canvas;
    this.positionX = positionX - BALL_SIZE / 2;
    this.positionY = positionY - BALL_SIZE / 2;
  }

  private clear() {
    // @TODO clear previous ball position
  }

  public draw() {
    this.clear();

    const context = this.canvas.getContext("2d");
    context.fillStyle = "#f00";
    context.beginPath();
    context.arc(this.positionX, this.positionY, BALL_SIZE, 0, 2 * Math.PI);
    context.fill();
  }
}
