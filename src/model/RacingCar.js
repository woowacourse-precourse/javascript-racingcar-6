import { RACING_CAR } from '../constants/constants.js';
import { validateCarName } from '../utils/validate.js';

class RacingCar {
  constructor() {
    /** @type {string} */
    this.carName = '';
    /** @type {number} */
    this.carPosition = RACING_CAR.START_POSITION;
  }

  get getCarName() {
    return this.carName;
  }

  get getCarPosition() {
    return this.carPosition;
  }

  /** @param {string} name */
  set setCarName(name) {
    validateCarName(name);
    this.carName = name;
  }

  move() {
    this.carPosition++;
  }
}

export default RacingCar;
