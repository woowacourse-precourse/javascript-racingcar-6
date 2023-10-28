class Car {
  #carName;

  #forwardDistance;

  constructor(carName) {
    this.#carName = carName;
    this.#forwardDistance = 0;
  }

  getCarName() {
    return this.#carName;
  }

  getForwardDistance() {
    return this.#forwardDistance;
  }

  moveForward() {
    this.#forwardDistance += 1;
  }
}

export default Car;
