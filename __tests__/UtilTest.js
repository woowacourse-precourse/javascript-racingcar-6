import { isInvalidTryNumber, getRandomNumber, isMovable } from "../src/util";
import { Random } from "@woowacourse/mission-utils";

jest.mock("@woowacourse/mission-utils");

describe("util", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("isInvalidTryNumber", () => {
    it("should return true if number is NaN or less than or equal to 0", () => {
      expect(isInvalidTryNumber("notanumber")).toBe(true);
      expect(isInvalidTryNumber(0)).toBe(true);
      expect(isInvalidTryNumber(-1)).toBe(true);
    });

    it("should return false if number is a positive number", () => {
      expect(isInvalidTryNumber(1)).toBe(false);
    });
  });

  describe("getRandomNumber", () => {
    it("should return a random number in range", () => {
      Random.pickNumberInRange.mockReturnValue(5);
      const randomNumber = getRandomNumber();
      expect(randomNumber).toEqual(5);
    });
  });

  describe("isMovable", () => {
    it("should return true if number is greater than or equal to 4", () => {
      expect(isMovable(4)).toBe(true);
      expect(isMovable(5)).toBe(true);
    });

    it("should return false if number is less than 4", () => {
      expect(isMovable(3)).toBe(false);
    });
  });
});
