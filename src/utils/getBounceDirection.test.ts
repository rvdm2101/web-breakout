import { getBounceDirection } from "./getBounceDirection";
import { Ball, BALL_SIZE } from "../ball";
import { createCanvas } from "canvas";

describe("getBounceDirection()", () => {
  const context = createCanvas(300, 300).getContext(
    "2d"
  ) as unknown as CanvasRenderingContext2D;
  const ball = new Ball(context);
  ball.draw(150, 150);

  describe("Hitting the top or bottom", () => {
    test("Hitting the top should return a bounce for Y", () => {
      expect(
        getBounceDirection(
          ball,
          ball.left(),
          ball.top(),
          140,
          160,
          150 + BALL_SIZE,
          170
        ).direction
      ).toEqual("y");
    });
    test("Hitting the bottom should return a bounce for Y", () => {
      expect(
        getBounceDirection(ball, ball.left(), ball.top(), 140, 160, 130, 150)
          .direction
      ).toEqual("y");
    });
  });

  describe("Hitting the left or right side", () => {
    test("Hitting the left should return a bounce for X", () => {
      expect(
        getBounceDirection(
          ball,
          ball.left(),
          ball.top(),
          150 + BALL_SIZE,
          170,
          140,
          160
        ).direction
      ).toEqual("x");
    });
    test("Hitting the right should return a bounce for X", () => {
      expect(
        getBounceDirection(ball, ball.left(), ball.top(), 130, 150, 140, 160)
          .direction
      ).toEqual("x");
    });
  });

  describe("Hitting a corner", () => {
    test("Hitting the top left corner of qube", () => {
      expect(
        getBounceDirection(
          ball,
          ball.left(),
          ball.top(),
          150 - BALL_SIZE,
          160,
          150 - BALL_SIZE,
          160
        ).direction
      ).toEqual("x");
    });

    test("Hitting the top left corner of rectangle", () => {
      expect(
        getBounceDirection(
          ball,
          ball.left(),
          ball.top(),
          150 - BALL_SIZE,
          180,
          150 - BALL_SIZE,
          160
        ).direction
      ).toEqual("x");
    });
  });

  describe("Returning the right bounce amount", () => {
    test("Hitting the side of current", () => {
      expect(
        getBounceDirection(
          ball,
          ball.left(),
          ball.top(),
          150 + BALL_SIZE,
          160,
          140,
          160
        ).amount
      ).toEqual(0);
    });

    test("Being inside of current", () => {
      expect(
        getBounceDirection(ball, ball.left(), ball.top(), 140, 160, 140, 160)
          .amount
      ).toEqual(10);
    });
  });
});
