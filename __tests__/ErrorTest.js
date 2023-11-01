import UserInputCarName from "../src/utils/UserInputCarName";

describe("자동차 이름 입력", () => {
  let userInputCarName;

  beforeEach(() => {
    userInputCarName = new UserInputCarName();
  });

  test("사용자가 자동차 이름을 잘못 입력했을 경우 예외 발생", () => {
    const invalidCarNames = ["mini", "bentley"];

    expect(() => {
      userInputCarName.setCarNames(invalidCarNames);
    }).toThrowError("[ERROR]");
  });
});
