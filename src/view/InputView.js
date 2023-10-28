import { Console } from "@woowacourse/mission-utils";

import INPUT_MESSAGE from "../constants/game.js";
import validateRacingCars from "../util/car-validation.js";
import validateAttemptCount from "../util/attempt-validation.js";

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
