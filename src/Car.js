import { Random } from '@woowacourse/mission-utils';
import { ERROR, REGEX, CONSTANT } from './constants/constants';

class Car {
  #name;
  #totalDistance;

  constructor(name, totalDistance = 0) {
    this.#name = name;
    this.#totalDistance = totalDistance;
  }

  isValidCarName() {
    const trimmedName = this.#name.trim();

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
}

export default Car;
