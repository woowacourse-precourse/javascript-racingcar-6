export default class Car {
  #name;

  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  getCarName() {
    return this.#name;
  }

  getCarPosition() {
    return this.#position;
  }

  moveCar() {
    this.#position += 1;
  }
}
