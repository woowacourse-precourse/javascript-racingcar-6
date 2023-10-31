import { MissionUtils } from "@woowacourse/mission-utils";
import { carMoveNumberValidater } from "../src/CarMoveNumberValidater.js";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
  const input = inputs.shift();
  return Promise.resolve(input);
  });
};

describe("자동차 이동 수 입력하기", () => {
  test("올바른 수 입력 확인", async () => {
    const input = ["4"];
     
    // given
    mockQuestions(input);

    // when
    const result = await carMoveNumberValidater();
  
    // then
    expect(result).toBe(4);
  });
  
  test.each([
    [["문자"]],
    [["3.2"]],
    [["-5"]],
    [["0"]],
    [["0b101"]],
    [["1E3"]],
  ])("이동 수에 대한 예외 처리", async (inputs) => {
    // given
    mockQuestions(inputs);
  
    // then
    await expect(carMoveNumberValidater()).rejects.toThrow("[ERROR]");
  });
});
  