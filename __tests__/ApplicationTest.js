import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

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

  test("우승자 두명 이상일 경우 최종 결과 출력", () => {
    // given
    const carArr = [
      ["pobi", "---"],
      ["woni", "---"],
      ["brown", "-"],
    ];
    const expectedOutput = "최종 우승자 : pobi, woni";

    // when
    const logSpy = getLogSpy();

    const moveCounts = carArr.map((car) => car[1].length);
    const highestMoveCount = Math.max(...moveCounts);
    const winners = carArr
      .filter((car) => car[1].length === highestMoveCount)
      .map((car) => car[0]);
    MissionUtils.Console.print(`최종 우승자 : ${winners.join(", ")}`);

    // then
    expect(logSpy).toHaveBeenCalledWith(expectedOutput);
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

  test("자동차 이름값이 하나만 들어올 경우 예외 처리", async () => {
    // given
    const invalidCarNames = "pobi woni brown";
    const inputs = [invalidCarNames];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow(
      "[ERROR] 이름은 쉼표로 구분해야합니다. 게임이 종료됩니다."
    );
  });

  test("이동값은 숫자만 가능하도록 예외 처리", async () => {
    const invalidMoveNum = "삼";
    const inputs = ["pobi,woni", invalidMoveNum];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow(
      "[ERROR] 이동횟수는 숫자로만 입력해야합니다. 게임이 종료합니다."
    );
  });
});
