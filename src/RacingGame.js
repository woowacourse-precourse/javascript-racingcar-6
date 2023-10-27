class RacingGame {
  #carArray;

  constructor(carArray) {
    this.#carArray = carArray;
  }

  moveCars() {
    this.#carArray.forEach((car) => car.moveRandomly());
  }
}

export default RacingGame;
