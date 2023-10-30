import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import CarNamesParser from "../src/parser/CarNamesParser.js";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("자동차 이름 입력 기능에 대한 테스트", () => {
  test("6자 이상의 이름에 대해 예외 처리를 하는가", async () => {
    const app = new App();

    const inputs = ["자동차, 멋있는자동차"];

    mockQuestions(inputs);

    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("이름 입력 시 ','를 기준으로 분리하는가", async () => {
    const input = "자동차1, 자동차2, 자동차3, 자동차4";

    expect(CarNamesParser.parse(input)).toHaveLength(4);
  });
});
