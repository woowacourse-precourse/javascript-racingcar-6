import { Console } from "@woowacourse/mission-utils";

import validateRacingCarNames from "../validator/car-validator.js";
import validateAttemptCount from "../validator/attempt-validator.js";

const INPUT_MESSAGE = Object.freeze({
  RACING_CARS:
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  ATTEMPT_COUNT: "시도할 횟수는 몇 회인가요?\n",
});

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
