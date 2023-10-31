/* eslint-disable import/extensions */
import MovableNumber from "../movement/movableNumber.js";

class RacingCar {
  #name;

  #moveCount;

  constructor(name) {
    this.#name = name;
    this.#moveCount = 0;
  }

  getName() {
    return this.#name;
  }

  getMoveCount() {
    return this.#moveCount;
  }
}
export default RacingCar;
