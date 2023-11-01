class RacingGame {
  #carArray;
  #roundCount;
  #resultArray = [];

  constructor(carArray, roundCount) {
    this.#carArray = carArray;
    this.#roundCount = roundCount;
  }

  play() {
    for (let i = 0; i < this.#roundCount; i++) {
      this.#moveCars();
    }
  }

  #moveCars() {
    this.#carArray.forEach((car) => car.moveRandomly());
    this.#resultArray.push(this.#carNamePositionArray);
  }

  get #carNamePositionArray() {
    return this.#carArray.map((car) => {
      return { name: car.name, position: car.position };
    });
  }

  get resultArray() {
    return this.#resultArray;
  }

  getWinnerNameArray() {
    const maxPosition = Math.max(
      ...this.#carArray.map((entry) => entry.position)
    );
    return this.#carArray
      .filter((entry) => entry.position === maxPosition)
      .map((entry) => entry.name);
  }
}

export default RacingGame;
