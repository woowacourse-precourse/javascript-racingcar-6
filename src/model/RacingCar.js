import { RACING_MOVE } from '../constants/constants.js';

class RacingCar {
  constructor() {
    /** @type {string} */
    this.carName = '';
    /** @type {number} */
    this.moveCount = RACING_MOVE.START_POSITION;
  }

  /** @returns {string} */
  get getCarName() {
    return this.carName;
  }

  /** @param {string} name */
  set setCarName(name) {
    this.carName = name;
  }
}

export default RacingCar;
