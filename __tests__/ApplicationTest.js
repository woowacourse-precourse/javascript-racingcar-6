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

describe("function test", () => {
  test("우승 출력", async () => {
    const logSpy = getLogSpy();
    const input = [
      {
        name: "aa",
        score: 3,
      },
      {
        name: "bb",
        score: 4,
      },
    ];
    const outputs = ["최종 우승자 : bb"];

    // when
    const app = new App();
    await app.printWinner(input);

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
describe("function test", () => {
  test("getRounds 함수 테스트(숫자 입력)", async () => {
    const logSpy = getLogSpy();
    const inputs = ["5"];
    mockQuestions(inputs);

    const outputs = ["5"];

    // when
    const app = new App();
    const result = await app.getRounds();
    expect(result).toEqual("5");
  });
  test.each([[["ㅇㅇ"]], [[","]]])("횟수에 대한 예외 처리", async (inputs) => {
    // given
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });
});
describe("function test", () => {
  test("repeatPrint 함수 테스트(- 반복 출력)", async () => {
    const keyword = "*"
    const number=5;

    const outputs = "*****";

    // when
    const app = new App();
    const result = await app.repeatPrint(keyword,number);
    expect(result).toEqual(outputs);
  });
  
});
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
});
