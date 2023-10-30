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

  // 여기부터 내 꺼
  test("특수기호 입력에 대한 예외처리", async () => {
    const input = ["#$@$@"];

    mockQuestions(input);

    //when
    const app = new App();

    //then
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("공백만 입력 시 예외 처리", async () => {
    const input = "";

    mockQuestions(input);

    //when
    const app = new App();

    //then
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test.each([["song,seop", "3"], ["jin,mark", "abc"], ["jeny,kai"]])(
    "시도횟수에 숫자 이외의 값을 입력 시 예외 처리",
    async (inputs) => {
      mockQuestions(inputs);

      const regex = /^\d{1,2}$/;
      const isValid = regex.test(inputs[1]);

      //when
      const app = new App();

      //then
      if (isValid) await expect(app.play()).resolves.not.toThrow();
      if (!isValid) await expect(app.play()).rejects.toThrow("[ERROR]");
    }
  );
});
