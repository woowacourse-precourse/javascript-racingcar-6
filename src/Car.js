import generateRandomNumber from './functions/generateRandomNumber.js';
import { MIN_MOVEMENT } from './constants/constants.js';

class Car {
  constructor(name) {
    this.name = name;
    this.number = generateRandomNumber();
  }

  move() {
    if (this.number >= MIN_MOVEMENT) {
      return true;
    }
    return false;
  }
}

export default Car;
