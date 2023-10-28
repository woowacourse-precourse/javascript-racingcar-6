import generateRandomNumber from './functions/generateRandomNumber.js';
import { MIN_MOVEMENT, MOVEMENT_FORWARD } from './constants/constants.js';

class Car {
  constructor(name) {
    this.name = name;
    this.number = generateRandomNumber();
    this.movement = '';
  }

  move() {
    if (this.number >= MIN_MOVEMENT) {
      this.movement += MOVEMENT_FORWARD;
      return true;
    }
    return false;
  }
}

export default Car;
