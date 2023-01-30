type TInitializePaddle = (canvas: HTMLCanvasElement, positionX: number) => void;
type TGeneratePaddle = (canvas: HTMLCanvasElement, moveX: number) => void;
type TClearPaddle = (canvas: HTMLCanvasElement) => void;
type TDrawPaddle = (
  context: CanvasRenderingContext2D,
  x: number,
  y: number
) => void;
