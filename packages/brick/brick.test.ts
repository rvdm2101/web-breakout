import { Ball, BALL_SIZE } from "../ball";
import { Brick } from "./brick";
import { createCanvas } from "canvas";

describe("Brick class", () => {
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

  describe("detectHit()", () => {
    test("Ball is inside of the brick", () => {
      ball.draw(brick.left() + 20, brick.top() + 20);
      expect(brick.detectHit(ball, ball.left(), ball.top())).toBeTruthy();
    });

    test("Ball to far above the top of the brick", () => {
      ball.draw(brick.left(), brick.top() - 50);
      expect(brick.detectHit(ball, ball.left(), ball.top())).toBeFalsy();
    });

    test("Ball on the top of the brick", () => {
      ball.draw(brick.left(), brick.top() - BALL_SIZE);
      expect(brick.detectHit(ball, ball.left(), ball.top())).toBeTruthy();
    });

    test("Ball inside the top of the brick", () => {
      ball.draw(brick.left(), brick.top() + BALL_SIZE / 2);
      expect(brick.detectHit(ball, ball.left(), ball.top())).toBeTruthy();
    });

    test("Ball to far to the left of the brick", () => {
      ball.draw(brick.left() - 50, brick.top());
      expect(brick.detectHit(ball, ball.left(), ball.top())).toBeFalsy();
    });

    test("Ball on the left side of the brick", () => {
      ball.draw(brick.left() - BALL_SIZE, brick.top());
      expect(brick.detectHit(ball, ball.left(), ball.top())).toBeTruthy();
    });

    test("Ball inside the left side of the brick", () => {
      ball.draw(brick.left() + BALL_SIZE / 2, brick.top());
      expect(brick.detectHit(ball, ball.left(), ball.top())).toBeTruthy();
    });

    test("Ball to far to the right of the brick", () => {
      ball.draw(brick.right() + 50, brick.top());
      expect(brick.detectHit(ball, ball.left(), ball.top())).toBeFalsy();
    });

    test("Ball on the right side of the brick", () => {
      ball.draw(brick.right(), brick.top());
      expect(brick.detectHit(ball, ball.left(), ball.top())).toBeTruthy();
    });

    test("Ball inside the right side of the brick", () => {
      ball.draw(brick.right() - BALL_SIZE / 2, brick.top());
      expect(brick.detectHit(ball, ball.left(), ball.top())).toBeTruthy();
    });

    test("Ball to far bellow the brick", () => {
      ball.draw(brick.left(), brick.bottom() - 50);
      expect(brick.detectHit(ball, ball.left(), ball.top())).toBeFalsy();
    });

    test("Ball on the bottom of the brick", () => {
      ball.draw(brick.left(), brick.bottom());
      expect(brick.detectHit(ball, ball.left(), ball.top())).toBeTruthy();
    });

    test("Ball inside the bottom of the brick", () => {
      ball.draw(brick.left(), brick.bottom() - BALL_SIZE / 2);
      expect(brick.detectHit(ball, ball.left(), ball.top())).toBeTruthy();
    });
  });

  describe("hitAndBounce()", () => {
    test("Returns false if ball doesn't hit the brick", () => {
      ball.draw(brick.left(), brick.bottom() - 50);
      expect(brick.hitAndBounce(ball, ball.left(), ball.top())).toBeFalsy();
    });

    test("Hitting the left or right side returns direction `x`", () => {
      expect(true).toBeFalsy();
    });

    test("Hitting the top or bottom side returns direction `y`", () => {
      expect(true).toBeFalsy();
    });

    test("Hitting a brick kills it", () => {
      expect(true).toBeFalsy();
    });
  });

  describe("draw()", () => {
    test("Adds the brick to the canvas", () => {
      expect(true).toBeFalsy();
    });

    test("Does nothing if the bricks isn't alive", () => {
      expect(true).toBeFalsy();
    });
  });
});
