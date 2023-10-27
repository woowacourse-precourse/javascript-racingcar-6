class Car {
  #name;
  #progress;

  constructor(name) {
    this.#name = name;
    this.#progress = 0;
  }

  getName() {
    return this.#name;
  }

  getProgress() {
    return this.#progress;
  }

  move() {
    this.#progress += 1;
  }
}

export default Car;
