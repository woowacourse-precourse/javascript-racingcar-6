import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App";
import Car from "../src/App";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("자동차 참가 테스트", () => {
  test.each([[["pobi,longname"]], [["longname"]], [["pobi,,name"]]])(
    "자동차 이름 예외 처리 테스트",
    async (inputs) => {
      mockQuestions(inputs);

      const app = new App();

      await expect(app.inputCar()).rejects.toThrow("[ERROR]");
    }
  );
});
