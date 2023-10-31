class Car {
  #name;
  #straightCount = "";

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  addStraightCount(number) {
    if (number >= 4) this.#straightCount += "-";
  }
  getStraightCount() {
    return this.#straightCount;
  }
}

export default Car;
