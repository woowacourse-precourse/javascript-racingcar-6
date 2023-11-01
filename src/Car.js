class Car {
  constructor(name) {
    this.name = name;
  }

  #current = 0;

  moveForward() {
    this.#current += 1;
  }

  get current() {
    return this.#current;
  }
}

export default Car;
