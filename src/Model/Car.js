import NUMBER from '../constants/Number.js';

class Car {
  #name;

  #position;

  constructor(name) {
    this.#name = name;
    this.#position = NUMBER.ZERO;
  }

  getCarName() {
    return this.#name;
  }

  getCarPosition() {
    return this.#position;
  }

  moveCar() {
    this.#position += NUMBER.ONE;
  }
}

export default Car;
