import getRandomNumber from '../utils/getRandomNumber';
import { NUMBER } from '../constant/constants';

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    const randomNumber = getRandomNumber();
    const canMove = randomNumber >= NUMBER.MOVING_FORWARD;

    if (canMove) {
      this.position += 1;
    }
  }

  getName() {
    return this.name;
  }

  getPosition() {
    return this.position;
  }
}

export default Car;
