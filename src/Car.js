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
    if (number >= 4) {
      this.#moveForward();
    }
  }

  #moveForward() {
    this.#forwardCount += 1;
  }
}

export default Car;
