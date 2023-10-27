import { CONDITION } from './constants/index';

class Car {
  #name;
  #forwardCount;

  constructor(name = 'no name') {
    this.#name = name;
    this.#forwardCount = 0;
  }

  getName() {
    return this.#name;
  }

  getForwardCount() {
    return this.#forwardCount;
  }

  race(number) {
    if (CONDITION.FORWARD(number)) {
      this.#moveForward();
    }
  }

  #moveForward() {
    this.#forwardCount += 1;
  }
}

export default Car;
