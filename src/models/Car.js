class Car {
  #moveCount = 0;

  constructor(name) {
    this.name = name;
  }

  move() {
    this.#moveCount += 1;
  }

  getMoveCount() {
    return this.#moveCount;
  }
}

export default Car;
