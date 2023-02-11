import { Ball, BALL_SIZE } from "../ball";
import { Brick } from "./brick";
import { createCanvas } from "canvas";

describe("Brick getting hit", () => {
  let brick: Brick;
  let ball: Ball;
  let canvas;
  let ctx;

  beforeEach(function () {
    canvas = createCanvas(300, 300);
    ctx = canvas.getContext("2d") as unknown as CanvasRenderingContext2D;
    ball = new Ball(ctx);
    brick = new Brick(ctx, 100, 100);
  });

  test("Ball is inside of the brick", () => {
    ball.draw(brick.left() + 20, brick.top() + 20);
    expect(brick.detectHit(ball)).toBeTruthy();
  });

  test("Ball to far above the top of the brick", () => {
    ball.draw(brick.left(), brick.top() - 50);
    expect(brick.detectHit(ball)).toBeFalsy();
  });

  test("Ball on the top of the brick", () => {
    ball.draw(brick.left(), brick.top() - BALL_SIZE);
    expect(brick.detectHit(ball)).toBeTruthy();
  });

  test("Ball inside the top of the brick", () => {
    ball.draw(brick.left(), brick.top() + BALL_SIZE / 2);
    expect(brick.detectHit(ball)).toBeTruthy();
  });

  test("Ball to far to the left of the brick", () => {
    ball.draw(brick.left() - 50, brick.top());
    expect(brick.detectHit(ball)).toBeFalsy();
  });

  test("Ball on the left side of the brick", () => {
    ball.draw(brick.left() - BALL_SIZE, brick.top());
    expect(brick.detectHit(ball)).toBeTruthy();
  });

  test("Ball inside the left side of the brick", () => {
    ball.draw(brick.left() + BALL_SIZE / 2, brick.top());
    expect(brick.detectHit(ball)).toBeTruthy();
  });

  test("Ball to far to the right of the brick", () => {
    ball.draw(brick.right() + 50, brick.top());
    expect(brick.detectHit(ball)).toBeFalsy();
  });

  test("Ball on the right side of the brick", () => {
    ball.draw(brick.right(), brick.top());
    expect(brick.detectHit(ball)).toBeTruthy();
  });

  test("Ball inside the right side of the brick", () => {
    ball.draw(brick.right() - BALL_SIZE / 2, brick.top());
    expect(brick.detectHit(ball)).toBeTruthy();
  });

  test("Ball to far bellow the brick", () => {
    ball.draw(brick.left(), brick.bottom() - 50);
    expect(brick.detectHit(ball)).toBeFalsy();
  });

  test("Ball on the bottom of the brick", () => {
    ball.draw(brick.left(), brick.bottom());
    expect(brick.detectHit(ball)).toBeTruthy();
  });

  test("Ball inside the bottom of the brick", () => {
    ball.draw(brick.left(), brick.bottom() - BALL_SIZE / 2);
    expect(brick.detectHit(ball)).toBeTruthy();
  });
});
