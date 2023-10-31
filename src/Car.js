import { ERROR, REGEX } from './constants/constants';

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
}

export default Car;
