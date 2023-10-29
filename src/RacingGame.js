import Messages from './Messages.js';
import { MissionUtils } from '@woowacourse/mission-utils';

class RacingGame {
  constructor() {
    this.CARS_LIST = [];
  }

  shouldMoveForward = () => {
    let canMove = true;
    const score = MissionUtils.Random.pickNumberInRange(0, 9);
    if (score < 4) canMove = false;
    return canMove;
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
      this.CARS_LIST = car_names;
    }
    return isValid;
  };

  getTryNumber = async () => {
    try {
      let input = await MissionUtils.Console.readLineAsync(
        Messages.INPUT_TRY_NUMBER
      );
      input = parseInt(input);
      if (isNaN(input) | (input < 1)) {
        throw new Error(Messages.ERROR_TRY_NUMBER);
      }
      return input;
    } catch (error) {
      throw error;
    }
  };

  getCarName = async () => {
    try {
      let input = await MissionUtils.Console.readLineAsync(
        Messages.INPUT_CAR_NAME
      );
      if (!this.isValidCarName(input)) {
        throw new Error(Messages.ERROR_CAR_NAME_LENGTH);
      }
      return this.CARS_LIST;
    } catch (error) {
      throw error;
    }
  };

  startGame = async () => {
    try {
      const CARS = await this.getCarName();
      const TRY_NUMBER = await this.getTryNumber();
    } catch (error) {
      throw error;
    }
  };
}

export default RacingGame;
