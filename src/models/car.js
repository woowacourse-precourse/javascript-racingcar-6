class Car {
  #carName;

  #forwardCount;

  constructor(carName) {
    this.#carName = carName;
    this.#forwardCount = 0;
  }

  forward(amount = 1) {
    this.#forwardCount += amount;
  }

  getCarName() {
    return this.#carName;
  }

  getForwardCount() {
    return this.#forwardCount;
  }
}

export default Car;
