import ShowRoundLog from "../src/utils/ShowRoundLog";
import { movingForwardCase } from "../src/utils/MovingForwardCase";

jest.mock("../src/utils/MovingForwardCase", () => ({
  movingForwardCase: jest.fn(),
}));

describe("ShowRoundLog", () => {
  let showRoundLog;

  beforeEach(() => {
    showRoundLog = new ShowRoundLog({ mini: "" });
  });

  test("대시 기호 여러 개 출력", () => {
    const carName = "mini";
    const numbers = [1, 2, 3, 4];

    numbers.forEach(() => {
      movingForwardCase.mockReturnValue(true); // 항상 true를 반환
      showRoundLog.printForwardDash();
    });

    expect(showRoundLog.carPositions[carName]).toBe("----");
  });

  test("조건부 대시 기호 출력", () => {
    const carName = "mini";
    const numbers = [2, 3, 4, 5, 6, 7];

    numbers.forEach((number) => {
      movingForwardCase.mockImplementation(() => number >= 4); // 4이상일 경우 true를 반환
      showRoundLog.printForwardDash();
    });
    expect(showRoundLog.carPositions[carName]).toBe("----");
  });
});
