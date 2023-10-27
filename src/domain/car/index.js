export class Car {
  #name;
  #horizontalOffset = 0;

  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  get horizontalOffset() {
    return this.#horizontalOffset;
  }

  run() {
    this.#horizontalOffset += 1;
  }
}
