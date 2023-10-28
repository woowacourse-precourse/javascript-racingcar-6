import { Console } from "@woowacourse/mission-utils";

import INPUT_MESSAGE from "./constants/game.js";
import { validateRacingCars } from "./util/car-validation.js";
import validateAttemptCount from "./util/attempt-validation.js";

class App {
  async play() {
    const inputRacingCars = await Console.readLineAsync(
      INPUT_MESSAGE.RACING_CARS
    );
    const racingCarNames = inputRacingCars.split(",");
    validateRacingCars(racingCarNames);

    const inputAttemptCount = await Console.readLineAsync(
      INPUT_MESSAGE.ATTEMPT_COUNT
    );
    validateAttemptCount(inputAttemptCount);
  }
}

export default App;
