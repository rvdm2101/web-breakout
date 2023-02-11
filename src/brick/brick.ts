import { BRICK_HEIGHT, BRICK_WIDTH } from "./brick-config";

export class Brick {
  private context2D: CanvasRenderingContext2D;
  private readonly positionX: number;
  private readonly positionY: number;

  constructor(
    context2D: CanvasRenderingContext2D,
    positionX: number,
    positionY: number
  ) {
    this.context2D = context2D;
    this.positionX = positionX;
    this.positionY = positionY;
  }

  public draw() {
    this.context2D.fillStyle = "#f00";
    this.context2D.fillRect(
      this.positionX,
      this.positionY,
      BRICK_WIDTH,
      BRICK_HEIGHT
    );
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
