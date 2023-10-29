import { MIN_MOVEMENT, MOVEMENT_FORWARD } from './constants/constants.js';

class Car {
  constructor(name) {
    this.name = name;
    this.movement = '';
  }

  move(number) {
    if (number >= MIN_MOVEMENT) {
      this.movement += MOVEMENT_FORWARD;
      return true;
    }
    return false;
  }
}

export default Car;
