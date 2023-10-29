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

  test("공동 우승자", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,woni", "2"];
    const outputs = ["pobi : ", "woni : -", "pobi : -", "woni : -"];
    const randoms = [STOP, MOVING_FORWARD, MOVING_FORWARD, STOP];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    const app = new App();
    await app.play();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("계속 정지일 때", async () => {
    // given
    const STOP = 3;
    const inputs = ["pobi,woni", "2"];
    const outputs = ["pobi : ", "woni : "];
    const randoms = [STOP, STOP, STOP, STOP];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    const app = new App();
    await app.play();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("undefined일 때 예외 처리", async () => {
    mockQuestions([]);

    const app = new App();

    await expect(app.play()).rejects.toThrow(
      "[ERROR]2개 이상으로 입력해주세요.",
    );
  });

  test("빈값일 때 예외 처리", async () => {
    mockQuestions([""]);

    const app = new App();

    await expect(app.play()).rejects.toThrow(
      "[ERROR]2개 이상으로 입력해주세요.",
    );
  });

  test("한명일 때 예외 처리", async () => {
    mockQuestions(["pobi"]);

    const app = new App();

    await expect(app.play()).rejects.toThrow(
      "[ERROR]2개 이상으로 입력해주세요.",
    );
  });

  test("10명 이상일 때 예외 처리", async () => {
    const input = ["a,b,c,d,e,f,g,h,i,j,k"];
    mockQuestions(input);

    const app = new App();

    await expect(app.play()).rejects.toThrow(
      "[ERROR]10개 이하로 입력해주세요.",
    );
  });

  test("횟수 undefined일 때 예외 처리", async () => {
    mockQuestions(["pobi,rin"], undefined);

    const app = new App();

    await expect(app.play()).rejects.toThrow(
      "[ERROR]아무것도 입력하지 않았습니다.",
    );
  });

  test("횟수 30 초과일 때 에러 처리", async () => {
    const inputs = ["pobi, jun", "31"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.play()).rejects.toThrow(
      "[ERROR]30이하의 수를 입력해주세요.",
    );
  });

  test.each(["0", "seven", "2.3"])("횟수에 대한 예외 처리", async (inputs) => {
    mockQuestions(["pobi,rin"], inputs);

    const app = new App();

    await expect(app.play()).rejects.toThrow(
      "[ERROR]1이상의 정수를 입력해 주세요.",
    );
  });

  test.each([[["pobi,javaji"]], [["pobi,eastjun"]]])(
    "이름 길이에 대한 예외 처리",
    async (inputs) => {
      mockQuestions(inputs);

      const app = new App();

      await expect(app.play()).rejects.toThrow(
        "[ERROR]이름은 5자 이내여야 합니다.",
      );
    },
  );

  test.each([[["pobi,pobi"]], [["pobi,rin,pobi,jun"]]])(
    "이름 중복에 대한 예외 처리",
    async (inputs) => {
      mockQuestions(inputs);

      const app = new App();

      await expect(app.play()).rejects.toThrow(
        "[ERROR]중복되는 이름이 있습니다.",
      );
    },
  );
});
