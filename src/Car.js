import randomNumberGenerator from './utils/randomNumberGenerator.js';

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    const couldMove = randomNumberGenerator() >= 4;
    if (couldMove) {
      this.position++;
    }
  }
}

export default Car;