import { isBetween } from "./isBetween";

describe("isBetween()", () => {
  test("Value between min and max", () => {
    expect(isBetween(25, 20, 30)).toBeTruthy();
  });

  test("Value below min", () => {
    expect(isBetween(10, 20, 30)).toBeFalsy();
  });

  test("Value above max", () => {
    expect(isBetween(40, 20, 30)).toBeFalsy();
  });
});
