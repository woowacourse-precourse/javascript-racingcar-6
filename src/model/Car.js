class Car {
  #name;
  #moveCount;

  constructor(name, moveCount) {
    this.#name = name;
    this.#moveCount = moveCount;
  }

  getName() {
    return this.#name;
  }

  getMoveCount() {
    return this.#moveCount;
  }

  move() {
    this.#moveCount += 1;
  }
}

export default Car;
