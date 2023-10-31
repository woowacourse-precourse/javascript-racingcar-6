import User from "../src/User.js";
import { Console } from "@woowacourse/mission-utils";

import { ERROR_MESSAGE } from "../src/utils/constants.js";

const mockQuestions = (input) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(input);
  });
};

describe("예외 처리 테스트", () => {
  test.each(["pobiii,woni", "123456"])(
    "자동차 이름 입력 (5글자 초과 입력)",
    async (inputs) => {
      mockQuestions(inputs);

      const user = new User();
      await expect(user.inputCarNames()).rejects.toThrow(
        ERROR_MESSAGE.NAME_LENGTH_ERROR
      );
    }
  );

  test.each(["pobi", ""])(
    "자동차 이름 입력 (2개 미만 입력)",
    async (inputs) => {
      mockQuestions(inputs);

      const user = new User();
      await expect(user.inputCarNames()).rejects.toThrow(
        ERROR_MESSAGE.MINIMUM_CARS_ERROR
      );
    }
  );

  test.each(["pobi,pobi", "pobi,woni,woni"])(
    "자동차 이름 입력 (중복 입력)",
    async (inputs) => {
      mockQuestions(inputs);

      const user = new User();
      await expect(user.inputCarNames()).rejects.toThrow(
        ERROR_MESSAGE.DUPLICATE_NAMES_ERROR
      );
    }
  );

  test.each(["0", "-1", "1.1"])(
    "시도 횟수 입력 (자연수가 아닌 값 입력)",
    async (inputs) => {
      mockQuestions(inputs);

      const user = new User();

      await expect(user.inputNumberOfAttempts()).rejects.toThrow(
        ERROR_MESSAGE.INVALID_NUMBER
      );
    }
  );
});
