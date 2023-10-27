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
  test("유저 닉네임에 같은 이름이 있을 때 예외 처리 한다.", async () => {
    // given
    const inputs = ["jak,jak", "1"];

    // when
    const racingCar = new RacingCar();
    mockQuestions(inputs);

    // then
    await expect(racingCar.init()).rejects.toThrow();
  });

  test("횟수 인풋에 숫자를 입력안하면 예외 처리 한다.", async () => {
    // given
    const inputs = ["jak,jaka", "k"];

    // when
    const racingCar = new RacingCar();
    mockQuestions(inputs);

    // then
    await expect(racingCar.init()).rejects.toThrow();
  });
});
