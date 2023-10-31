import App from "../src/App";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("시도할 횟수 입력 테스트", () => {
  test("음수인 경우", async () => {
    mockQuestions(["-273"]);
    const app = new App();

    await expect(app.inputNumber()).rejects.toThrow("[ERROR]");
  });

  test("0인 경우", async () => {
    mockQuestions(["0"]);
    const app = new App();

    await expect(app.inputNumber()).rejects.toThrow("[ERROR]");
  });

  test.each([[["jeonghwan"]], [["32,1"]]])("숫자가 아닌 경우", async (inputs) => {
    mockQuestions(inputs);
    const app = new App();

    await expect(app.inputNumber()).rejects.toThrow("[ERROR]");
  });
});
