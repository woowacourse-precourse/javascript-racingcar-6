class RacingGame {
  #carArray;
  #attemptCount;
  #resultArray = [];

  constructor(carArray, attemptCount) {
    this.#carArray = carArray;
    this.#attemptCount = attemptCount;
  }

  play() {
    for (let i = 0; i < this.#attemptCount; i++) {
      this.moveCars();
    }
  }

  moveCars() {
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
}

export default RacingGame;
