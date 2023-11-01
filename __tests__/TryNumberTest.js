import { MissionUtils } from "@woowacourse/mission-utils";
import Init from "../src/Init";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("게임 시도 횟수 값 예외 테스트 ", () => {
  test("시도 횟수를 숫자가 아닌 값 입력했을 경우 예외 처리", async () => {
    const carNames = ["둘"];

    mockQuestions(carNames);

    const init = new Init();

    await expect(init.getNumberOfTries()).rejects.toThrow("[ERROR]");
  });
  test("시도 횟수를 음수로 입력했을 경우 예외 처리", async () => {
    const carNames = [-4];

    mockQuestions(carNames);

    const init = new Init();

    await expect(init.getNumberOfTries()).rejects.toThrow("[ERROR]");
  });
});
