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

  public top(positionY?: number) {
    return positionY ?? this.positionY;
  }

  public left(positionX?: number) {
    return positionX ?? this.positionX;
  }

  public right(positionX?: number) {
    return (positionX ?? this.positionX) + BALL_SIZE;
  }

  public bottom(positionY?: number) {
    return (positionY ?? this.positionY) + BALL_SIZE;
  }
}
