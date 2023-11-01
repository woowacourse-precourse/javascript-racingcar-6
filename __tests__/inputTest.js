import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockUserInput = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("자동차 경주 게임", () => {
  test("올바르지 않은 자동차 이름 예외 처리", async () => {
    // given
    const inputs = ["pobi,javaji"];

    mockUserInput(inputs);

    // when
    const game = new App();

    // then
    await expect(game.play()).rejects.toThrow("[ERROR]");
  });

  test("올바르지 않은 경주 횟수 예외 처리", async () => {
    // given
    const invalidRound = "0";
    const inputs = ["pobi,woni", invalidRound];

    mockUserInput(inputs);

    // when
    const game = new App();

    // then
    await expect(game.play()).rejects.toThrow("[ERROR]");
  });
});
