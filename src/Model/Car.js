class Car {
  #movestat;
  #name;

  constructor(name) {
    this.#name = name;
    this.#movestat = 0;
  }

  move(number) {
    if (number >= 4) {
      this.#movestat++;
    }
  }

  getName() {
    return this.#name;
  }

  getMoveStat() {
    return this.#movestat;
  }
}
export default Car;
