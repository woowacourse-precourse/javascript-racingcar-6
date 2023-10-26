import InputHandler from "../src/InputHandler.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import MESSAGE from "../src/constant/MESSAGE.js";
import ERROR from "../src/constant/ERROR.js";

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
    ["java,woo,wa,han,tech", ["java", "woo", "wa", "han", "tech"]],
    ["joo", ["joo"]],
  ])("유효한 자동차 이름 입력 - %s", async (input, expectedOutput) => {
    mockQuestions([input]);

    const inputHandler = new InputHandler();
    const result = await inputHandler.getCarNameArray();

    expect(result).toEqual(expectedOutput);
    expect(MissionUtils.Console.readLineAsync).toHaveBeenCalledWith(
      MESSAGE.ENTER_CAR_NAMES
    );
  });

  test.each([
    [" ", ERROR.EMPTY_INPUT],
    ["joo,", ERROR.INPUT_ENDS_WITH_COMMA],
    ["joo,woni,", ERROR.INPUT_ENDS_WITH_COMMA],
    ["pobi,woni  ", ERROR.INVALID_CAR_NAMES],
    ["pobi, woni,java", ERROR.INVALID_CAR_NAMES],
    ["pobi,woni,joowoni", ERROR.INVALID_CAR_NAMES],
    ["pobi,pobi", ERROR.DUPLICATE_CAR_NAME],
    ["woni,woni,wond,java", ERROR.DUPLICATE_CAR_NAME],
  ])("자동차 이름 입력 예외 처리 - %s", (input, expectedError) => {
    mockQuestions([input]);

    const inputHandler = new InputHandler();

    expect(async () => {
      await inputHandler.getCarNameArray();
    }).rejects.toThrow(expectedError);
    expect(MissionUtils.Console.readLineAsync).toHaveBeenCalledWith(
      MESSAGE.ENTER_CAR_NAMES
    );
  });
});
