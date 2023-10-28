import { SEPARATORS } from './utils/messages.js';

class Car {
  #name;
  #position = [];

  constructor(name) {
    this.#name = name;
  }

  getPosition() {
    return this.#position;
  }

  printPosition() {
    this.#position.push(SEPARATORS.step_symbol);
  }

  getName() {
    return this.#name;
  }
}

export default Car;
