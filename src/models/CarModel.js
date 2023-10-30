import { ERRORS } from '../constants/errors.js';
import { throwError } from '../utils/throwError.js';

class CarModel {
  constructor() {
    this.cars = new Map();
  }

  getCars() {
    return this.cars;
  }

  addCar(name) {
    if (!this.cars.has(name)) {
      return this.cars.set(name, 0);
    }
    throwError(ERRORS.carAlreadyExists);
  }

  increaseMoveCntByName(name) {
    if (this.cars.has(name)) {
      const moveCnt = this.cars.get(name);
      return this.cars.set(name, moveCnt + 1);
    }
    throwError(ERRORS.carNotFound);
  }
}

export default CarModel;
