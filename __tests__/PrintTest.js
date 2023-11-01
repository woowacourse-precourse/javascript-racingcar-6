import ShowRoundLog from "../src/utils/ShowRoundLog";
import { movingForwardCase } from "../src/utils/MovingForwardCase";

jest.mock("../src/utils/MovingForwardCase", () => ({
  movingForwardCase: jest.fn(),
}));

describe("실행 결과", () => {
  let showRoundLog;

  beforeEach(() => {
    showRoundLog = new ShowRoundLog({ mini: "" });
  });

  test("대시 기호 여러 개 출력", () => {
    const carName = "mini";
    const numbers = [1, 2, 3, 4];

    numbers.forEach(() => {
      movingForwardCase.mockReturnValue(true);
      showRoundLog.printForwardDash();
    });

    expect(showRoundLog.carPositions[carName]).toBe("----");
  });

  test("조건부 대시 기호 출력", () => {
    const carName = "mini";
    const numbers = [2, 3, 4, 5, 6, 7];

    numbers.forEach((number) => {
      movingForwardCase.mockImplementation(() => number >= 4);
      showRoundLog.printForwardDash();
    });

    expect(showRoundLog.carPositions[carName]).toBe("----");
  });
});
