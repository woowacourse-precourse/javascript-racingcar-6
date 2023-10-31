class Car {
  #name;
  #progress = 0;

  constructor(name) {
    this.#name = name;
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
