import { shouldListenToKey, containsKeyLeft, containsKeyRight } from "./isKey";

describe("isKey()", () => {
  let keys: Record<string, boolean>;

  beforeEach(() => {
    keys = {};
  });

  describe("Using the arrow keys", () => {
    it("Should register the left arrow as a left key", () => {
      keys["ArrowLeft"] = true;

      expect(shouldListenToKey("ArrowLeft")).toBeTruthy();
      expect(containsKeyLeft(keys)).toBeTruthy();
      expect(containsKeyRight(keys)).toBeFalsy();
    });

    it("Should register the right arrow as a right key", () => {
      keys["ArrowRight"] = true;

      expect(shouldListenToKey("ArrowRight")).toBeTruthy();
      expect(containsKeyLeft(keys)).toBeFalsy();
      expect(containsKeyRight(keys)).toBeTruthy();
    });
  });

  describe("Using the letter keys", () => {
    it("Should register the A key as a left key", () => {
      keys["KeyA"] = true;

      expect(shouldListenToKey("KeyA")).toBeTruthy();
      expect(containsKeyLeft(keys)).toBeTruthy();
      expect(containsKeyRight(keys)).toBeFalsy();
    });
    it("Should register the D key as a right key", () => {
      keys["KeyD"] = true;

      expect(shouldListenToKey("KeyD")).toBeTruthy();
      expect(containsKeyLeft(keys)).toBeFalsy();
      expect(containsKeyRight(keys)).toBeTruthy();
    });
  });

  describe("Using any unspecified key", () => {
    it("Shouldn't listen to any unspecified key", () => {
      keys["KeyH"] = true;

      expect(shouldListenToKey("KeyH")).toBeFalsy();
      expect(containsKeyLeft(keys)).toBeFalsy();
      expect(containsKeyRight(keys)).toBeFalsy();
    });
  });
});
