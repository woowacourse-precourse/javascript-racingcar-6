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

  validateNumber = (attemptCount) => {
    if (isNaN(attemptCount)) {
      throw new Error(ERROR.ATTEMPT_COUNT);
    }
  };

  getCarName = async () => {
    const carNames = await Console.readLineAsync(GAME.GET_CAR_NAME);
    const carNamesArray = carNames.split(",");
    this.validateCarName(carNamesArray);

    return carNamesArray;
  };

  getAttemptCount = async () => {
    const attemptCount = await Console.readLineAsync(GAME.GET_ATTEMPT_COUNT);
    this.validateNumber(attemptCount);

    return attemptCount;
  };

  generateRandomNumber = () => {
    const randomNumber = Random.pickNumberInRange(0, 9);
    return randomNumber;
  };

  moveForwardCondition = () => {
    const randomNumber = this.generateRandomNumber();
    let position = 0;
    if (randomNumber >= 4) {
      position += 1;
    }
    return position;
  };

  async play() {}
}

export default App;
