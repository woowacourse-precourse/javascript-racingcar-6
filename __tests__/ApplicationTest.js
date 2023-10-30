import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  // The original API has become a mock function.
  MissionUtils.Console.readLineAsync = jest.fn();

  // Now this is what the mock function actually does when this test encounters the real API with the same name.
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn(); // Mock
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number); // Returns a Value
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  // Creates a mock function similar to jest.fn but also tracks calls to object[methodName]. Returns a Jest mock function.
  const logSpy = jest.spyOn(MissionUtils.Console, "print");

  // useful when you want to clean up a mocks usage data between two assertions.
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
});
