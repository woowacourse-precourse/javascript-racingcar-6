export class Car {
  #name;
  #speed;
  #horizontalOffset = 0;

  constructor(name, speed = 1) {
    this.#name = name;
    this.#speed = speed;
  }

  get name() {
    return this.#name;
  }

  get horizontalOffset() {
    return this.#horizontalOffset;
  }

  run() {
    this.#horizontalOffset += this.#speed;
  }
}
