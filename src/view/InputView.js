import { Console } from "@woowacourse/mission-utils";

import validateRacingCars from "../util/car-validation.js";
import validateAttemptCount from "../util/attempt-validation.js";

const INPUT_MESSAGE = Object.freeze({
  RACING_CARS:
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  ATTEMPT_COUNT: "시도할 횟수는 몇 회인가요?\n",
});

const InputView = {
  readRacingCarNames: async () => {
    const inputRacingCarNames = await Console.readLineAsync(
      INPUT_MESSAGE.RACING_CARS
    );
    const racingCarNames = inputRacingCarNames.split(",");
    validateRacingCars(racingCarNames);

    return racingCarNames;
  },

  readAttemptCount: async () => {
    const inputAttemptCount = await Console.readLineAsync(
      INPUT_MESSAGE.ATTEMPT_COUNT
    );
    validateAttemptCount(inputAttemptCount);

    return Number(inputAttemptCount);
  },
};

export default InputView;
