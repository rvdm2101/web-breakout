import {
  PADDLE_WIDTH,
  PADDLE_HEIGHT,
  PADDLE_HEIGHT_OFFSET,
} from "./paddle-config";

export class Paddle {
  private positionY: number;
  private canvas: HTMLCanvasElement;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.positionY = this.canvas.height - PADDLE_HEIGHT_OFFSET;
  }

  public draw(positionX: number): void {
    const context = this.canvas.getContext("2d");
    context.fillStyle = "#f00";
    context.fillRect(
      positionX - PADDLE_WIDTH / 2,
      this.positionY,
      PADDLE_WIDTH,
      PADDLE_HEIGHT
    );
  }
}
