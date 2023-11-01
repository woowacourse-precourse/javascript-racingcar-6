import App from "../src/App.js";
import Car from "../src/Car.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE, GAME_MESSAGE } from "../src/constants/index.js";
import RacingcarGame from "../src/RacingcarGame.js";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("자동차 경주 게임", () => {
  test("자동차 이름 테스트", () => {
    const car = new Car("mijin");
    expect(car.carName).toBe("mijin");
  });

  test("전진-정지", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,woni", "1"];
    const outputs = ["pobi : -"];
    const randoms = [MOVING_FORWARD, STOP];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const app = new App();
    await app.play();

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test.each([[["pobi,javaji"]], [["pobi,eastjun"]]])(
    "이름에 대한 예외 처리",
    async (inputs) => {
      // given
      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.play()).rejects.toThrow("[ERROR]");
    }
  );

  test("한 명의 우승자가 제대로 출력되는지 확인", () => {
    // given
    const logSpy = getLogSpy();

    // when
    const game = new RacingcarGame();
    game.printWinner({ pobi: ["-", "-", "-"] });

    // then
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(`${GAME_MESSAGE.WINNER}pobi`)
    );
  });

  test("여러 명의 우승자가 제대로 출력되는지 확인", () => {
    // given
    const logSpy = getLogSpy();

    // when
    const game = new RacingcarGame();
    game.printWinner({ pobi: ["-", "-", "-"], mijin: ["-", "-", "-"] });

    // then
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(`${GAME_MESSAGE.WINNER}pobi, mijin`)
    );
  });
});

describe("시도 횟수 테스트", () => {
  test("한 자리 숫자 입력", () => {
    const input = 1;
    const result = input;

    expect(result).toEqual(1);
  });

  test("문자를 입력했을 때 예외 처리 메세지 출력", async () => {
    const input = "abc";
    const expectedError = ERROR_MESSAGE.IS_NUMBER;

    expect(() => {
      if (isNaN(input)) {
        throw new Error(expectedError);
      }
    }).toThrow(expectedError);
  });

  test("0이하의 숫자를 입력했을 때 예외 처리 메세지 출력", async () => {
    const input = -1;
    const expectedError = ERROR_MESSAGE.IS_ZERO;

    expect(() => {
      if (input <= 0) {
        throw new Error(expectedError);
      }
    }).toThrow(expectedError);
  });
});

describe("입력 값에 대한 예외 메세지 출력 테스트", () => {
  test("5자를 초과할 경우", async () => {
    const input = "mijiniiiii";
    const expectedError = ERROR_MESSAGE.IS_LENGTH;

    expect(() => {
      if (input.length > 5) {
        throw new Error(expectedError);
      }
    }).toThrow(expectedError);
  });

  test("쉼표(,)로 구분하지 않을 경우", async () => {
    const input = "mijin jun pobi";
    const expectedError = ERROR_MESSAGE.IS_COMMA;

    expect(() => {
      if (!input.includes(",")) {
        throw new Error(expectedError);
      }
    }).toThrow(expectedError);
  });
});
