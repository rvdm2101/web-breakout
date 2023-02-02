import { BALL_SIZE } from "./ball-config";

export class Ball {
  private canvas: HTMLCanvasElement;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
  }

  public draw(positionX: number, positionY: number) {
    const context = this.canvas.getContext("2d");
    context.fillStyle = "#f00";
    context.beginPath();
    context.arc(
      positionX - BALL_SIZE / 2,
      positionY - BALL_SIZE / 2,
      BALL_SIZE,
      0,
      2 * Math.PI
    );
    context.fill();
  }
}
