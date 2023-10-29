class Car {
  #name;

  #forwardCount;

  #backwardCount;

  constructor(name) {
    this.#name = name;
    this.#forwardCount = 0;
    this.#backwardCount = 0;
  }

  moveForward(count) {
    this.#forwardCount += count;
  }

  moveBackWard(count) {
    this.#backwardCount += count;
  }

  calcPosition() {
    return this.#forwardCount - this.#backwardCount;
  }

  get name() {
    return this.#name;
  }
}

export default Car;
