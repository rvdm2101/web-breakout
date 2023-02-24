import { Ball } from "../ball";

export const getBounceDirection = (
  ball: Ball,
  ballPositionX: number,
  ballPositionY: number,
  currentXMin: number,
  currentXMax: number,
  currentYMin: number,
  currentYMax: number
): TBounce => {
  const closestSideX = Math.min(
    Math.abs(ball.left(ballPositionX) - currentXMax),
    Math.abs(ball.right(ballPositionX) - currentXMin)
  );
  const closestSideY = Math.min(
    Math.abs(ball.top(ballPositionY) - currentYMax),
    Math.abs(ball.bottom(ballPositionY) - currentYMin)
  );
  // If amount is greater than zero, than the ball is inside the `current` object
  return {
    direction: closestSideY < closestSideX ? "y" : "x",
    amount: Math.min(closestSideX, closestSideY),
  };
};
