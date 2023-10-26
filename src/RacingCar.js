import { generateRandomNumbers } from './utils.js';

class RacingCar {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    const random = generateRandomNumbers();
    if (random >= 4) {
      this.position++;
    }
  }
}

export default RacingCar;
