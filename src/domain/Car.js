class Car {
  #name;
  #distance = 0;

  constructor(name) {
    this.#name = name;
  }
  move() {
    this.#distance += 1;
  }

  getName() {
    return this.#name;
  }

  getDistance() {
    return this.#distance;
  }
}

export default Car;
