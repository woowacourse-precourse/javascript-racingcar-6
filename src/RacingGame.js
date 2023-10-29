import Messages from './Messages.js';
import { MissionUtils } from '@woowacourse/mission-utils';

class RacingGame {
  #TRY_NUMBER;
  #CARS_LIST = [];

  getCarsList = () => {
    return this.#CARS_LIST;
  };

  getTryNumber = () => {
    return this.#TRY_NUMBER;
  };

  isValidCarName = (input) => {
    const car_names = input
      .split(',')
      .map((name) => name.trim())
      .filter((name) => name !== '');
    let isValid = true;
    car_names.forEach((carName) => {
      if (carName.length > 5) {
        isValid = false;
      }
    });
    if (isValid) {
      this.#CARS_LIST = car_names;
    }
    return isValid;
  };

  setTryNumber = async () => {
    try {
      let input = await MissionUtils.Console.readLineAsync(
        Messages.INPUT_TRY_NUMBER
      );
      input = parseInt(input);
      if (isNaN(input) | (input < 1)) {
        throw new Error(Messages.ERROR_TRY_NUMBER);
      } else {
        this.#TRY_NUMBER = input;
      }
    } catch {
      throw new Error(Messages.ERROR_DEFAULT);
    }
  };

  setCarName = async () => {
    try {
      let input = await MissionUtils.Console.readLineAsync(
        Messages.INPUT_CAR_NAME
      );
      if (!this.isValidCarName(input)) {
        throw new Error(Messages.ERROR_CAR_NAME_LENGTH);
      }
    } catch {
      throw new Error(Messages.ERROR_DEFAULT);
    }
  };

  startGame = async () => {
    try {
      await this.setCarName();
      await this.setTryNumber();

      console.log(this.getCarsList());
      console.log(this.getTryNumber());
    } catch {
      throw new Error(Messages.ERROR_DEFAULT);
    }
  };
}

export default RacingGame;
