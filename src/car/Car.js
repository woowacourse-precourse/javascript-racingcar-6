import getRandomNumber from '../utils/getRandomNumber';

const MOVING_FORWARD = 4;

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    const randomNumber = getRandomNumber();
    const isMoved = randomNumber >= MOVING_FORWARD;

    if (isMoved) {
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
