class RacingCar {
  #name;
  #distance;

  constructor(name) {
    this.#name = name;
    this.#distance = 0;
  }

  getName() {
    return this.#name;
  }
  
  getDistance() {
    return this.#distance;
  }

  move() {
    this.#distance += 1;
  }
}

export { RacingCar };