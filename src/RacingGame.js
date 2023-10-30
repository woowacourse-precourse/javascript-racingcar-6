import Messages from './Messages.js';
import RacingCars from './RacingCars.js';
import { MissionUtils } from '@woowacourse/mission-utils';

class RacingGame {
  #TRY_NUMBER;
  #CARS_LIST = [];

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

  printCarPosition = (status) => {
    Object.keys(status).forEach((key) => {
      const dashes = '-'.repeat(status[key]);
      MissionUtils.Console.print(`${key} : ${dashes}`);
    });
    MissionUtils.Console.print('');
  };

  printWinners = (status) => {
    const max_score = Math.max(...Object.values(status));
    const winners = Object.keys(status).filter(
      (key) => status[key] === max_score
    );

    const result = Messages.PRINT_WINNERS + winners.join(', ');
    MissionUtils.Console.print(result);
  };

  startGame = async () => {
    try {
      await this.setCarName();
      await this.setTryNumber();

      const cars = new RacingCars(this.#CARS_LIST);
      const CARS_STATUS = cars.getStatus();

      MissionUtils.Console.print('\n' + Messages.PRINT_RACING_RESULT);
      while (this.#TRY_NUMBER--) {
        for (let car of this.#CARS_LIST) {
          if (this.shouldMoveForward()) {
            cars.increaseCarPosition(car);
          }
        }
        this.printCarPosition(CARS_STATUS);
      }
      this.printWinners(CARS_STATUS);
    } catch {
      throw new Error(Messages.ERROR_DEFAULT);
    }
  };
}

export default RacingGame;
