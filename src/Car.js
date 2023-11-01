import NUMBER from "../constants/NUMBER.js";

class Car {
  #carName;
  #distance;

  constructor(carName) {
    this.#carName = carName;
    this.#distance = 0;
  }

  getCarName() {
    return this.#carName;
  }
  getDistance() {
    return this.#distance;
  }
  getCarStatus() {
    return {
      carName: this.#carName,
      distance: this.#distance,
    };
  }
  move(power) {
    this.#distance += power;
  }
}

export default Car;
