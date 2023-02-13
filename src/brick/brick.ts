import { BRICK_HEIGHT, BRICK_WIDTH } from "./brick-config";
import { Ball, BALL_SIZE } from "../ball";
import { isCurrentHit } from "../utils/isHit";
import { getBounceDirection } from "../utils/getBounceDirection";

export class Brick {
  private context2D: CanvasRenderingContext2D;
  private readonly positionX: number;
  private readonly positionY: number;
  private color: string;
  private lifes: number;

  constructor(
    context2D: CanvasRenderingContext2D,
    positionX: number,
    positionY: number
  ) {
    this.context2D = context2D;
    this.positionX = positionX;
    this.positionY = positionY;
    this.color = "#f00";
    this.lifes = 1;
  }

  public draw() {
    if (!this.isAlive()) {
      return;
    }

    this.context2D.fillStyle = this.color;
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

  public isAlive(): boolean {
    return this.lifes > 0;
  }

  public detectHit(
    ball: Ball,
    newPositionX: number,
    newPositionY: number
  ): boolean {
    if (!this.isAlive()) {
      return false;
    }

    const isHit = isCurrentHit(
      ball.right(newPositionX),
      ball.bottom(newPositionY),
      this.left(),
      this.right() + BALL_SIZE,
      this.top(),
      this.bottom() + BALL_SIZE
    );
    this.color = isHit ? "#ff0" : "#f00";
    return isHit;
  }

  public hitAndBounce(
    ball: Ball,
    newPositionX: number,
    newPositionY: number
  ): THitAndBounce {
    if (!this.detectHit(ball, newPositionX, newPositionY)) {
      return false;
    }
    this.lifes -= 1;

    return getBounceDirection(
      ball,
      newPositionX,
      newPositionY,
      this.left(),
      this.right(),
      this.top(),
      this.bottom(),
      BRICK_WIDTH,
      BRICK_HEIGHT
    );
  }
}
