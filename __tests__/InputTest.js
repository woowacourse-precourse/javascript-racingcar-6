import { MissionUtils } from "@woowacourse/mission-utils";
import Input from "../src/racingGame/Input.js"

const mockQuestions = (input) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(input);
  });
};



describe("Input 클래스 테스트", () => {
  test("바르게 입력한 경우", async () => {
    // given
    const inputs = "hyun,mong,car,good";
    const outputs = ["hyun", "mong", "car", "good"];
    mockQuestions(inputs);

    // when
    const input = new Input();
    const result = await input.getCarName();

    // then
    expect(result).toEqual(outputs);
  });

  test("입력 예외처리", async () => {
    // given
    const inputs = "hyun,mong,car,gooddd";
    mockQuestions(inputs);

    // when
    const input = new Input();

    // then
    await expect(input.getCarName()).rejects.toThrow("[ERROR]");
  });

});
