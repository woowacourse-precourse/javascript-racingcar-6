import { MissionUtils } from "@woowacourse/mission-utils";
import RacingCar from "../src/RacingCar";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("입력값 유효성 검사", () => {
  test.each([["jak,jak"], ["jay, key, "], ["jak"], ["jaksdff,jak"]])("유저 닉네임에 같은 이름이 있을 때 예외 처리 한다.", async (input) => {
    // given
    mockQuestions([input]);

    // when
    const racingCar = new RacingCar();

    // then
    await expect(racingCar.init()).rejects.toThrow("[ERROR]");
  });

  test.each([
    { a: "jak,jaka", b: "k" },
    { a: "jak,jaka", b: "1.2" },
    { a: "jak,jaka", b: "-1" },
  ])("횟수 인풋에 0보다 작거나 소수 또는 숫자가 아니면 예외 처리 한다.", async ({ a, b }) => {
    // given
    mockQuestions([a, b]);

    // when
    const racingCar = new RacingCar();

    // then
    await expect(racingCar.init()).rejects.toThrow("[ERROR]");
  });
});
