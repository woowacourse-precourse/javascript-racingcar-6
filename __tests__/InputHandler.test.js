import InputHandler from "../src/InputHandler.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import MESSAGE from "../src/constant/MESSAGE.js";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("사용자 입력 테스트", () => {
  test.each([
    ["pobi,woni,joo,java", ["pobi", "woni", "joo", "java"]],
    ["pobi,woni", ["pobi", "woni"]],
    [
      "java,react,woo,wa,han,tech",
      ["java", "react", "woo", "wa", "han", "tech"],
    ],
  ])("자동차 이름 입력", async (input, expectedOutput) => {
    mockQuestions([input]);

    const result = await InputHandler.getCarNameArray();

    expect(result).toEqual(expectedOutput);
    expect(MissionUtils.Console.readLineAsync).toHaveBeenCalledWith(
      MESSAGE.ENTER_CAR_NAMES
    );
  });
});
