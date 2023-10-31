import CAR from '../constants/car.js';
import Validator from '../utils/Validator.js';

class Car {
  #name;

  #position;

  constructor(name) {
    Validator.validateCarName(name);

    this.#name = name;
    this.#position = CAR.position.default;
  }

  move() {
    this.#position += CAR.movement.unit;
  }

  getName() {
    return this.#name;
  }

  getPosition() {
    return this.#position;
  }
}

export default Car;
