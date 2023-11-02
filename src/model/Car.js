class Car {
  #name;
  #distance;

  constructor(name, distance) {
    this.#name = name;
    this.#distance = distance;
  }

  getName() {
    return this.#name;
  }

  getDistance() {
    return this.#distance;
  }

  moveForward() {
    this.#distance += 1;
  }
}

export default Car;
