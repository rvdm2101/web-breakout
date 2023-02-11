import { BALL_SIZE } from "./ball-config";

export class Ball {
  private context2D: CanvasRenderingContext2D;
  private positionY: number;
  private positionX: number;

  constructor(context2D: CanvasRenderingContext2D) {
    this.context2D = context2D;
  }

  public draw(positionX: number, positionY: number) {
    this.positionX = positionX;
    this.positionY = positionY;

    this.context2D.fillStyle = "#f00";
    this.context2D.beginPath();
    this.context2D.arc(
      this.positionX,
      this.positionY,
      BALL_SIZE,
      0,
      2 * Math.PI
    );
    this.context2D.fill();
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
