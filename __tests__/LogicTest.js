import { GameLogic } from "../src/logic/GameLogic";
import { Random } from "@woowacourse/mission-utils";
import { RANGE } from "../src/constants/range.js";

jest.mock("@woowacourse/mission-utils", () => ({
  Random: {
    pickNumberInRange: jest.fn(),
  },
}));

describe("GameLogic", () => {
  let gameLogic;

  beforeEach(() => {
    gameLogic = new GameLogic();
  });

  describe("addMoveCount", () => {
    test("전진하는 조건(랜덤 값이 4 이상)에 해당하면 각 자동차를 이동시킨다(moveCount를 증가시킨다)", () => {
      Random.pickNumberInRange.mockReturnValue(RANGE.MOVE_THERESHOLD);
      const moveCount = { car: "" };
      gameLogic.addMoveCount(["car"], moveCount);
      expect(moveCount.car).toBe("-");
    });

    test("전진하는 조건에 해당하지 않으면(랜덤 값이 4 미만) 자동차를 이동시키지 않는다", () => {
      Random.pickNumberInRange.mockReturnValue(RANGE.MOVE_THERESHOLD - 1);
      const moveCount = { car: "" };
      gameLogic.addMoveCount(["car"], moveCount);
      expect(moveCount.car).toBe("");
    });
  });

  describe("getMaxMoveCount", () => {
    test("가장 많이 이동한 자동차의 이동 횟수를 반환한다", () => {
      const moveCount = { car1: "--", car2: "-" };
      expect(gameLogic.getMaxMoveCount(moveCount)).toBe(2);
    });
  });

  describe("getWinnerNames", () => {
    test("최대 이동 횟수와 같은 횟수를 이동한 자동차들(우승자)의 이름을 반환한다", () => {
      const moveCount = { car1: "--", car2: "-" };
      expect(gameLogic.getWinnerNames(moveCount, 2)).toEqual(["car1"]);
    });
  });
});
