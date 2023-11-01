export default class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  moveFoward() {
    this.#position += 1;
  }

  getPositionResult() {
    return { name: this.#name, position: this.#position };
  }
}
