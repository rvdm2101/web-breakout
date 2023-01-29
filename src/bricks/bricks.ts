import { BRICK_HEIGHT, BRICK_SPACING, BRICK_WIDTH } from "./bricks-config";

export const generateBricks: TGenerateBricks = (canvas) => {
  for (let indexY = 0; indexY < 2; indexY++) {
    for (let indexX = 0; indexX < 10; indexX++) {
      generateBrick(canvas, indexX, indexY);
    }
  }
};

export const generateBrick: TGenerateBrick = (canvas, column = 0, row = 0) => {
  const brick = canvas.getContext("2d");

  brick.fillStyle = "#f00";
  brick.fillRect(
    column * (BRICK_WIDTH + BRICK_SPACING),
    row * (BRICK_HEIGHT + BRICK_SPACING),
    BRICK_WIDTH,
    BRICK_HEIGHT
  );
};
