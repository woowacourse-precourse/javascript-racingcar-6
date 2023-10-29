import { SYSTEM } from '../constants/System.js';
import RandomNumberGenerator from './RandomNumberGenerator.js';

class RacingCarModel {
  #carData;

  static canMove() {
    const randomNumber = RandomNumberGenerator.run();
    return randomNumber >= SYSTEM.moveStartPoint;
  }

  saveCarNames(carNames) {
    this.#carData = new Map();
    carNames.split(SYSTEM.delimiter).forEach((carName) => {
      this.#carData.set(carName, '');
    });
  }

  racing() {
    this.#carData.forEach((progress, car) => {
      if (RacingCarModel.canMove()) {
        this.#carData.set(car, `${progress}${SYSTEM.move}`);
      }
    });
  }

  getCarData() {
    return this.#carData;
  }
}

export default RacingCarModel;
