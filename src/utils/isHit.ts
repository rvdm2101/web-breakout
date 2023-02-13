import { isBetween } from "./isBetween";

export const isCurrentHit = (
  targetX: number,
  targetY: number,
  currentXMin: number,
  currentXMax: number,
  currentYMin: number,
  currentYMax: number
) =>
  isBetween(targetX, currentXMin, currentXMax) &&
  isBetween(targetY, currentYMin, currentYMax);
