/* eslint-disable import/extensions */
import MovableNumber from "../movement/movableNumber.js";

class RacingCar {
  #name;

  #moveCount;

  constructor(name) {
    this.#name = name;
    this.#moveCount = 0;
    this.movableNumber = new MovableNumber();
  }

  getName() {
    return this.#name;
  }

  getMoveCount() {
    return this.#moveCount;
  }

  move() {
    if (this.movableNumber.isMovable()) {
      this.#moveCount += 1;
    }
  }
}
export default RacingCar;
