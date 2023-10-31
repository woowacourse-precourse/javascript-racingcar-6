import App from "../src/App";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("자동차 입력 테스트", () => {
  test("이름이 5자리가 넘어가는 경우", async () => {
    mockQuestions(["pobi,gabozago"]);
    const app = new App();

    await expect(app.inputCars()).rejects.toThrow("[ERROR]");
  });
  test.each([[["pobi,,gabozago"]], [["gabozago,pobli,"]]])("이름의 길이가 0인 경우", async (inputs) => {
    mockQuestions(inputs);

    const app = new App();

    await expect(app.inputCars()).rejects.toThrow("[ERROR]");
  });
});
