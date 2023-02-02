import {
  PADDLE_WIDTH,
  PADDLE_HEIGHT,
  PADDLE_HEIGHT_OFFSET,
} from "./paddle-config";

export class Paddle {
  private positionX: number;
  private positionY: number;
  private canvas: HTMLCanvasElement;

  constructor(initialPositionX: number, canvas: HTMLCanvasElement) {
    this.positionX = initialPositionX - PADDLE_WIDTH / 2;
    this.canvas = canvas;

    // @TODO should this be responsive??
    this.positionY = this.canvas.height - PADDLE_HEIGHT_OFFSET;
  }

  private clear(): void {
    const context = this.canvas.getContext("2d");

    // Clear the entire bottom part of the game screen
    context.clearRect(
      0,
      this.positionY,
      this.canvas.width,
      PADDLE_HEIGHT_OFFSET
    );
  }

  public draw(positionX: number): void {
    this.clear();
    this.positionX = positionX - PADDLE_WIDTH / 2;

    const context = this.canvas.getContext("2d");
    context.fillStyle = "#f00";
    context.fillRect(
      this.positionX,
      this.positionY,
      PADDLE_WIDTH,
      PADDLE_HEIGHT
    );
  }
}
