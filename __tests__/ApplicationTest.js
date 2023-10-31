import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

jest.mock("@woowacourse/mission-utils", () => ({
  ...jest.requireActual("@woowacourse/mission-utils"),
  Console: {
    ...jest.requireActual("@woowacourse/mission-utils").Console,
    readLineAsync: jest.fn(),
  },
}));

const mockQuestions = (inputs) => {
  jest.spyOn(App.prototype, "readLineAsync").mockImplementation(async () => {
    const input = inputs.shift();
    console.log("readLineAsync가 호출되었습니다. 남은 입력:", inputs);
    console.log("readLineAsync의 결과:", input);
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
  const logSpy = jest
    .spyOn(MissionUtils.Console, "print")
    .mockImplementation(() => {});
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
      await expect(app.play()).rejects.toThrow(
        "자동차 이름은 5자 이하만 가능합니다."
      );
    }
  );
});
