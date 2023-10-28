import { Console } from "@woowacourse/mission-utils";

import INPUT_MESSAGE from "../constants/game.js";
import validateRacingCars from "../util/car-validation.js";

const InputView = {
  readRacingCarNames: async () => {
    const inputRacingCarNames = await Console.readLineAsync(
      INPUT_MESSAGE.RACING_CARS
    );
    const racingCarNames = inputRacingCarNames.split(",");
    validateRacingCars(racingCarNames);

    return racingCarNames;
  },
};

export default InputView;
