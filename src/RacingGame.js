import { ERROR } from './constants/constants';

class RacingGame {
  #cars;
  #moveCount;
  #winners;

  constructor(cars = [], moveCount = 0, winners = []) {
    this.#cars = cars;
    this.#moveCount = moveCount;
    this.#winners = winners;
  }

  hasDuplicateCarName(carName) {
    if (this.#cars.some((car) => car.getCarName() === carName)) {
      throw new Error(ERROR.printError(ERROR.DUPLICATE_CAR_NAME));
    }

    return false;
  }
}

export default RacingGame;
