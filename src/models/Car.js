import Util from '../utils/Util.js';

class Car {
  #distance;

  #name;

  constructor(name) {
    this.#name = name;
    this.#distance = 0;
  }

  getName() {
    return this.#name;
  }

  getDistance() {
    return this.#distance;
  }

  move() {
    const randomNumber = Util.getInRangeRandomNumber();

    if (randomNumber >= 4) {
      this.#distance += 1;
    }
  }
}

export default Car;
