class Car {
  #name;
  #distance = 0;

  constructor(name) {
    this.#name = name;
  }
  move(distance) {
    this.#distance += distance;
  }

  get distance() {
    return this.#distance;
  }

  get name() {
    return this.#name;
  }
}

export default Car;
