import UserInputCarName from "../src/utils/UserInputCarName";
import App from "../src/App";
import { Console } from "@woowacourse/mission-utils";

jest.mock("@woowacourse/mission-utils");

describe("예외 처리", () => {
  let userInputCarName;

  beforeEach(() => {
    userInputCarName = new UserInputCarName();
  });

  test("사용자가 자동차 이름을 잘못 입력했을 경우 에러 던짐", () => {
    const invalidCarNames = ["mini", "bentley"];

    expect(() => {
      userInputCarName.setCarNames(invalidCarNames);
    }).toThrowError("[ERROR]");
  });
});

describe("게임 종료", () => {
  let app;

  beforeEach(() => {
    app = new App();
    Console.readLineAsync.mockResolvedValue("mini,bentley");
  });

  test("사용자가 자동차 이름을 잘못 입력했을 경우 게임 종료", async () => {
    const endGameSpy = jest.spyOn(app, "endGame");

    try {
      await app.play();
    } catch (error) {}

    expect(endGameSpy).toHaveBeenCalled();
  });
});
