import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../../src/App.js";

function mockConsoleReadLineAsync(inputs) {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
}

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

describe("🔹 경주 할 자동차 이름 입력", () => {
  test("올바른 자동차 이름 입력 시 프로그램이 정상적으로 동작", async () => {
    const correctInputs = ["AAA, BBB, CCC", 3];
    mockConsoleReadLineAsync(correctInputs);

    const app = new App();
    await expect(app.play()).resolves.not.toThrow();
  });

  test("잘못된 자동차 이름 입력 시 예외 발생", async () => {
    const incorrectInputs = ["AAAAAAAAAA, BBB, CCC", 3];
    mockConsoleReadLineAsync(incorrectInputs);

    const app = new App();
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });
});

describe("🔹 시도할 횟수 입력", () => {
  test("올바른 값 입력 시 프로그램이 정상적으로 동작", async () => {
    const correctInputs = ["AAA, BBB, CCC", 3];
    mockConsoleReadLineAsync(correctInputs);

    const app = new App();
    await expect(app.play()).resolves.not.toThrow();
  });

  test("잘못된 값 이름 입력 시 예외 발생", async () => {
    const incorrectInputs = ["AAA, BBB, CCC", "error"];
    mockConsoleReadLineAsync(incorrectInputs);

    const app = new App();
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });
});

describe("🔹 경주 결과 출력", () => {
  test("자동차 이름과 결과가 같이 출력되는지 확인", async () => {
    const MOVE = 5;
    const STOP = 0;
    const correctInputs = ["AAA, BBB", 2];
    const randoms = [MOVE, STOP, MOVE, STOP];
    const messages = ["AAA : -", "BBB : ", "AAA : --", "BBB : "];

    const logSpy = getLogSpy();

    mockConsoleReadLineAsync(correctInputs);
    mockRandoms([...randoms]);

    const app = new App();
    await app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});

describe("🔹 최종 우승자 출력", () => {
  test("우승자가 한 명일 경우", async () => {
    const MOVE = 5;
    const STOP = 0;
    const correctInputs = ["AAA, BBB", 2];
    const randoms = [MOVE, STOP, MOVE, STOP];
    const messages = ["최종 우승자 : AAA"];

    const logSpy = getLogSpy();

    mockConsoleReadLineAsync(correctInputs);
    mockRandoms([...randoms]);

    const app = new App();
    await app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
  test("우승자가 여러 명일 경우", async () => {
    const MOVE = 5;
    const STOP = 0;
    const correctInputs = ["AAA, BBB", 2];
    const randoms = [MOVE, MOVE, STOP, STOP];
    const messages = ["최종 우승자 : AAA, BBB"];

    const logSpy = getLogSpy();

    mockConsoleReadLineAsync(correctInputs);
    mockRandoms([...randoms]);

    const app = new App();
    await app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
