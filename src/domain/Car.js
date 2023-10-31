import ApplicationError from '../exceptions/ApplicationError.js';

import ERROR_MESSAGE from '../constants/error.js';

class Car {
  static DEAD_ZONE = 4;

  static SPEED = 1;

  static SKID_MARK = '-';

  #distance = 0;

  static of() {
    return new Car();
  }

  getDistance() {
    return this.#distance;
  }

  move(power) {
    this.#validateMove(power);
    if (power >= Car.DEAD_ZONE) {
      this.#distance += Car.SPEED;
    }
  }

  #validateMove(power) {
    if (typeof power !== 'number') {
      throw new ApplicationError(ERROR_MESSAGE.car.isNotNumberMoveArg);
    }
  }
}

export default Car;
