import { Random, Console } from "@woowacourse/mission-utils";
import { GAME, ERROR } from "./message";

class App {
  validateCarName = (carNamesArray) => {
    carNamesArray.forEach((carName) => {
      if (carName.length > 5) {
        throw new Error(ERROR.CAR_NAME);
      }
    });
  };

  getCarName = async () => {
    const carNames = await Console.readLineAsync(GAME.GET_CAR_NAME);
    const carNamesArray = carNames.split(",");
    this.validateCarName(carNamesArray);

    return carNamesArray;
  };

  validateNumber = (attemptCount) => {
    if (isNaN(attemptCount)) {
      throw new Error(ERROR.ATTEMPT_COUNT);
    }
  };

  getAttemptCount = async () => {
    const attemptCount = await Console.readLineAsync(GAME.GET_ATTEMPT_COUNT);
    this.validateNumber(attemptCount);

    return attemptCount;
  };

  async play() {}
}

export default App;
