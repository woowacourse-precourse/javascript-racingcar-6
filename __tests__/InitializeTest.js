import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("초기화 단계", () => {
  test("자동차 설정", async () => {
    // given
    const inputs = ["pobi,woni", "5"];
    const output = ["pobi", "woni"];

    mockQuestions(inputs);

    // when
    const app = new App();
    await app.initialize();

    const result = app.getCar();

    expect(result).toEqual(output);
  });
});
