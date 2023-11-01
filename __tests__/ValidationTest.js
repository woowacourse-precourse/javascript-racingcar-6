import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { ERROR } from "../src/constants/index.js";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("유효성 검사 테스트", () => {
  test.each([
    [["thunder,windy"]],
    [["Lamborghini,Maserati,Ferrari"]]
  ])("5자가 넘어가는 자동차 이름 예외 처리", async (inputs) => {
    // given
    mockQuestions(inputs);
    // when
    const app = new App();
    // then
    await expect(app.play()).rejects.toThrow(ERROR.carNameInputLong);
  });
});