import { Ball } from "../ball";

export const getBounceDirection = (
  ball: Ball,
  ballPositionX: number,
  ballPositionY: number,
  currentXMin: number,
  currentXMax: number,
  currentYMin: number,
  currentYMax: number,
  currentWidth: number,
  currentHeight: number
): TBounce => {
  const closestSideX = Math.min(
    Math.abs(ball.left(ballPositionX) - currentXMax),
    Math.abs(ball.right(ballPositionX) - currentXMin)
  );
  const closestSideY = Math.min(
    Math.abs(ball.top(ballPositionY) - currentYMax),
    Math.abs(ball.bottom(ballPositionY) - currentYMin)
  );

  const distancePercentageX = currentWidth / 2 / closestSideX;
  const distancePercentageY = currentHeight / 2 / closestSideY;
  return distancePercentageY > distancePercentageX ? "y" : "x";
};
