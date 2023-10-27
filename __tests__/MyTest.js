import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import Message from "../src/util/Message.js";

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

describe("예외처리", () => {
  test.each([[["pobi javaji"]], [["pobi eastjun"]]])(
    "이름을 , 로 구분 안 한 경우",
    async (inputs) => {
      // given
      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.play()).rejects.toThrow(
        Message.ERROR.NAME_SHOULD_SPLIT_BY_COMMA
      );
    }
  );

  test.each([[["pobi,javaji"]], [["pobiiiii,eastjun"]]])(
    "이름이 5자 초과한 경우",
    async (inputs) => {
      // given
      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.play()).rejects.toThrow(
        Message.ERROR.NAME_EXCEEDED_MAX_LEN
      );
    }
  );
});
