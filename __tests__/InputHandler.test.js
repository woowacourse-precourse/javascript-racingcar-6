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

    const result = await InputHandler.getCarNameArray();

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

    expect(async () => {
      await InputHandler.getCarNameArray();
    }).rejects.toThrow(expectedError);
    expect(MissionUtils.Console.readLineAsync).toHaveBeenCalledWith(
      MESSAGE.ENTER_CAR_NAMES
    );
  });

  test.each([
    ["1", 1],
    ["23", 23],
    ["4", 4],
    ["250", 250],
  ])("유효한 이동 시도 횟수 입력 - %s", async (input, expectedOutput) => {
    mockQuestions([input]);

    const result = await InputHandler.getRoundCount();

    expect(result).toBe(expectedOutput);
  });

  test.each([
    [" ", ERROR.EMPTY_INPUT],
    ["10s", ERROR.INVALID_MOVE_ATTEMPT_COUNT],
    ["joowon", ERROR.INVALID_MOVE_ATTEMPT_COUNT],
    ["-1", ERROR.INVALID_MOVE_ATTEMPT_COUNT],
    ["102.3", ERROR.INVALID_MOVE_ATTEMPT_COUNT],
  ])("이동 시도 횟수 입력 예외 처리 -%s", (input, expectedError) => {
    mockQuestions([input]);

    expect(async () => {
      await InputHandler.getRoundCount();
    }).rejects.toThrow(expectedError);
  });
});
