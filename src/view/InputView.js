import { Console } from "@woowacourse/mission-utils";

import { INPUT_MESSAGE } from "../constants/io-message.js";
import validateRacingCarNames from "../validator/car-validator.js";
import validateAttemptCount from "../validator/attempt-validator.js";

const InputView = {
  /**
   * 자동차들의 이름을 입력받고 검증한 후 반환하는 함수
   * @returns {string[]} 자동차들의 이름
   */
  readRacingCarNames: async () => {
    const inputRacingCarNames = await Console.readLineAsync(
      INPUT_MESSAGE.RACING_CARS
    );
    const racingCarNames = inputRacingCarNames.split(",");
    validateRacingCarNames(racingCarNames);

    return racingCarNames;
  },

  /**
   * 시도 횟수를 입력받고 검증한 후 반환하는 함수
   * @returns {number} 시도 횟수
   */
  readAttemptCount: async () => {
    const inputAttemptCount = await Console.readLineAsync(
      INPUT_MESSAGE.ATTEMPT_COUNT
    );
    validateAttemptCount(inputAttemptCount);

    return Number(inputAttemptCount);
  },
};

export default InputView;
