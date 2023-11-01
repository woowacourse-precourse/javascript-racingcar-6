import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("자동차 경주 예외 처리 테스트", () => {
  test.each([[["pobi!javaji"]], [["pobi.eastjun"]], [["pobi,"]]])(
    "이름 간 쉼표 구분에 대한 예외 처리",
    async (inputs) => {
      // given
      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.play()).rejects.toThrow("[ERROR]");
    }
  );
  test.each(["0", "-1", "abc", "1.2"])(
    "이동 횟수에 대한 예외 처리",
    async (input) => {
      // given
      const inputs = ["pobi,woni", input];
      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.play()).rejects.toThrow("[ERROR]");
    }
  );
});
