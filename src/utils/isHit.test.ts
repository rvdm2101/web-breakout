import { isCurrentHit } from "./isHit";

describe("isCurrentHit()", () => {
  let targetX = 150;
  let targetY = 150;

  describe("Only X or Y of target and current align", () => {
    it("Shouldn't count as a hit if ony X aligns", () => {
      expect(isCurrentHit(targetX, targetY, 140, 160, 100, 120)).toBeFalsy();
      expect(isCurrentHit(targetX, targetY, 140, 150, 100, 120)).toBeFalsy();
      expect(isCurrentHit(targetX, targetY, 150, 160, 100, 120)).toBeFalsy();
    });
    it("Shouldn't count as a hit if ony Y aligns", () => {
      expect(isCurrentHit(targetX, targetY, 100, 120, 140, 160)).toBeFalsy();
      expect(isCurrentHit(targetX, targetY, 100, 120, 140, 150)).toBeFalsy();
      expect(isCurrentHit(targetX, targetY, 100, 120, 150, 160)).toBeFalsy();
    });
  });

  describe("X and Y of target and current align", () => {
    it("Should count as a hit if the target and current touch", () => {
      expect(isCurrentHit(targetX, targetY, 140, 150, 140, 150)).toBeTruthy();
      expect(isCurrentHit(targetX, targetY, 140, 150, 150, 160)).toBeTruthy();
      expect(isCurrentHit(targetX, targetY, 150, 160, 150, 160)).toBeTruthy();
      expect(isCurrentHit(targetX, targetY, 150, 160, 140, 150)).toBeTruthy();
    });
    it("Should count as a hit if the target is inside the current", () => {
      expect(isCurrentHit(targetX, targetY, 140, 160, 140, 160)).toBeTruthy();
    });
  });

  describe("X and Y of target and current dont align", () => {
    it("Shouldn't count as a hit if X and Y dont align", () => {
      expect(isCurrentHit(targetX, targetY, 120, 130, 120, 130)).toBeFalsy();
      expect(isCurrentHit(targetX, targetY, 160, 170, 160, 170)).toBeFalsy();
    });
  });
});
