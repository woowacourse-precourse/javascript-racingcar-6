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

describe("[CUSTOM] 입력받은 시도횟수에 대한 예외 처리", () => {
  test("비어있는 문자열", async () => {
    // given
    const inputs = [""]; // 비어있는 문자열을 포함하는 배열
    mockQuestions(inputs);

    // when
    const app = new App();
    const playPromise = app.play();

    // then
    await expect(playPromise).rejects.toThrow("[ERROR]");
  });
  test.each([[["one"]], [["?"]], [["!"]]])("숫자가 아님", async (inputs) => {
    // given
    mockQuestions(inputs);

    // when
    const app = new App();
    const playPromise = app.play();

    // then
    await expect(playPromise).rejects.toThrow("[ERROR]");
  });
});
