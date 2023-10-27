import { Random } from '@woowacourse/mission-utils';
import { GAME_NUMBERS, SYMBOLS } from '../utils/constants.js';

class RacingCar {
  #name;
  #position;
  #moveResult;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
    this.#moveResult = `${this.#name}${SYMBOLS.playerResultSeparator}`;
  }

  getName() {
    return this.#name;
  }

  getPosition() {
    return this.#position;
  }

  getMoveResult() {
    return this.#moveResult;
  }

  #canMove() {
    const randomNumber = Random.pickNumberInRange(
      GAME_NUMBERS.rangeMin,
      GAME_NUMBERS.rangeMax
    );
    return randomNumber >= GAME_NUMBERS.movementThreshold;
  }

  move() {
    if (this.#canMove()) {
      this.#position += 1;
      this.#moveResult += SYMBOLS.dash;
    }
  }
}

export default RacingCar;
