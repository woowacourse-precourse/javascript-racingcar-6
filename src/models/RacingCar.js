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

  #generateRandomRacingGameNumber() {
    return Random.pickNumberInRange(
      GAME_NUMBERS.rangeMin,
      GAME_NUMBERS.rangeMax,
    );
  }

  #canMove(randomNumber) {
    return randomNumber >= GAME_NUMBERS.movementThreshold;
  }

  move() {
    const randomNumber = this.#generateRandomRacingGameNumber();
    if (this.#canMove(randomNumber)) {
      this.#position += 1;
      this.#moveResult += SYMBOLS.moveIndicator;
    }
  }
}

export default RacingCar;
