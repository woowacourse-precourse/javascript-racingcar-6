class RacingCar {
  #name;

  #accumulatedForward;

  constructor(name) {
    this.#name = name;
    this.#accumulatedForward = 0;
  }

  getName() {
    return this.#name;
  }

  getAccumulatedForward() {
    return this.#accumulatedForward;
  }

  moveForward() {
    this.#accumulatedForward += 1;
  }
}

export default RacingCar;
