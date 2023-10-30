import { RACING_CAR } from '../constants/constants.js';
import { validateCarName } from '../utils/validate.js';

class RacingCar {
  constructor() {
    /** @type {string} */
    this.carName = '';
    /** @type {number} */
    this.carPosition = RACING_CAR.START_POSITION;
  }

  /** @returns {string} */
  get getCarName() {
    return this.carName;
  }

  /** @param {string} name */
  set setCarName(name) {
    validateCarName(name);

    this.carName = name;
  }
}

export default RacingCar;
