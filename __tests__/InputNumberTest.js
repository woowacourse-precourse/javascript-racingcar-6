import App from "../src/App";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("InputNumber 테스트", () => {
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

  test("값이 없는 경우", async () => {
    mockQuestions([""]);
    const app = new App();

    await expect(app.inputNumber()).rejects.toThrow("[ERROR]");
  });

  test.each([[["jeonghwan"]], [["32,1"]]])("숫자가 아닌 경우", async (inputs) => {
    mockQuestions(inputs);
    const app = new App();

    await expect(app.inputNumber()).rejects.toThrow("[ERROR]");
  });
});
