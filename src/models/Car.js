class Car {
  #carName;

  #carPosition;

  constructor(carName) {
    this.#carName = carName;
    this.#carPosition = 0;
  }

  moveCar() {
    this.#carPosition += 1;
  }

  getCarName() {
    return this.#carName;
  }

  getCarPosition() {
    return this.#carPosition;
  }

  getCarInfo() {
    return {
      name: this.#carName,
      position: this.#carPosition,
    };
  }
}

export default Car;
