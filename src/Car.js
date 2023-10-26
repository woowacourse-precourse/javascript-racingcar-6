class Car {
  #forwardCount;

  constructor() {
    this.#forwardCount = 0;
  }

  getForwardCount() {
    return this.#forwardCount;
  }

  race(number) {
    if (number >= 4) {
      this.#moveForward();
    }
  }

  #moveForward() {
    this.#forwardCount += 1;
  }
}

export default Car;
