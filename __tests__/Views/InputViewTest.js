import InputView from "../../src/Views/InputView.js";
import { Console } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("InputView 기능 테스트", () => {
  test("promptCarNames 메서드 - 자동차 이름 입력", async () => {
    // given
    const inputValues = ["daniel,hani"];

    mockQuestions(inputValues);

    // when
    const carNames = await InputView.promptCarNames();

    // then
    expect(carNames).toEqual(["daniel", "hani"]);
  });

  test("promptRaceRound 메서드 - 시도 횟수 입력", async () => {
    // given
    const inputValues = ["5"];

    mockQuestions(inputValues);

    // when
    const raceRound = await InputView.promptRaceRound();

    // then
    expect(raceRound).toEqual("5");
  });
});
