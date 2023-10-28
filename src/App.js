import { Random, Console } from "@woowacourse/mission-utils";

import INPUT_MESSAGE from "./constants/game.js";
import { validateRacingCars } from "./util/car-validation.js";
import validateAttemptCount from "./util/attempt-validation.js";
import { convertArrayToObject } from "./util/converter.js";

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

    const carsObject = convertArrayToObject(racingCarNames);

    for (let i = 0; i < inputAttemptCount; i++) {
      Object.entries(carsObject).forEach(([carName, carDistance]) => {
        const randomNumber = Random.pickNumberInRange(0, 9);
      });
    }
  }
}

export default App;
