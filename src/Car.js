import { Random, Console } from '@woowacourse/mission-utils';
import { ERROR, REGEX, CONSTANT } from './constants/constants';

class Car {
  #name;
  #totalDistance;

  constructor(name, totalDistance = 0) {
    if (this.isValidCarName(name)) {
      this.#name = name;
      this.#totalDistance = totalDistance;
    }
  }

  isValidCarName(name) {
    const trimmedName = name.trim();

    if (!REGEX.VALID_CAR_NAME.test(trimmedName)) {
      throw new Error(ERROR.printError(ERROR.INVALID_CAR_NAME));
    }

    return true;
  }

  canMove() {
    const randomNumber = Random.pickNumberInRange(0, 9);

    if (randomNumber < CONSTANT.MOVEMENT_THRESHOLD) {
      return false;
    }

    return true;
  }

  move() {
    if (this.canMove()) {
      this.#totalDistance += 1;
    }
  }

  printCurDistance() {
    const curDistance = CONSTANT.PROGRESS_BAR.repeat(this.#totalDistance);
    const consoleMessage = `${this.#name} : ${curDistance}`;
    Console.print(consoleMessage);
  }

  getCarName() {
    return this.#name;
  }
}

export default Car;
