export default class Car {
  #name;

  #forward = 0;

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  getForward() {
    return this.#forward;
  }

  setForward(value) {
    this.#forward = value;
  }
}
