import UserInputCarName from "../src/utils/UserInputCarName";
import UserInputRound from "../src/utils/UserInputRound";
import App from "../src/App";
import { Console } from "@woowacourse/mission-utils";

jest.mock("@woowacourse/mission-utils", () => ({
  Console: {
    print: jest.fn(),
    readLineAsync: jest.fn(),
  },
}));

describe("자동차 이름 예외 처리", () => {
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

describe("라운드 수 예외 처리", () => {
  let userInputRound;

  beforeEach(() => {
    userInputRound = new UserInputRound();
  });

  test("올바른 라운드 수 입력 시 라운드 값 설정", () => {
    const validRounds = 5;
    userInputRound.setRounds(validRounds);

    expect(userInputRound.getRounds()).toBe(validRounds);
  });

  test("올바르지 않은 라운드 수 입력 시 에러 던짐", () => {
    const invalidRounds = -1;

    expect(() => {
      userInputRound.setRounds(invalidRounds);
    }).toThrowError("[ERROR]");
  });

  test("문자열 입력 시 에러 던짐", () => {
    const invalidRounds = "five";

    expect(() => {
      userInputRound.setRounds(invalidRounds);
    }).toThrowError("[ERROR]");
  });
});
