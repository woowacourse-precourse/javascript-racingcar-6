class Car {
  #name;
  #step;

  constructor(name) {
    this.#name = name;
    this.#step = 0;
  }

  getName() {
    return this.#name;
  }

  getStep() {
    return this.#step;
  }

  run(canMove) {
    if (canMove) this.#step += 1;
  }
}

export default Car;
