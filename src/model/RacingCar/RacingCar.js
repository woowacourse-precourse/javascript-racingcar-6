class RacingCar {
  #name;
  #count;
  constructor(name) {
    this.#name = name;
    this.#count = 0;
  }

  move() {
    this.#count++;
  }

  getCount() {
    return this.#count;
  }

  getLog() {
    return `${this.#name} : ${"-".repeat(this.#count)}`;
  }
}

export default RacingCar;
