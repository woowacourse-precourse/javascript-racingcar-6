class Car {
  #name;
  #step;

  constructor(name) {
    this.#name = name;
    this.#step = 0;
  }

  move(step) {
    this.#step += step;
  }

  get name() {
    return this.#name;
  }

  get step() {
    return this.#step;
  }
}

export default Car;
