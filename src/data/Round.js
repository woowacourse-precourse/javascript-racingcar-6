import { ERROR_MESSAGE, ROUND_REGEXP } from '../constants/index.js';
import { throwError } from '../utils/Error.js';

class Round {
  #round;
  constructor(text) {
    this.#round = Number(text);
    this.#validateRound(text);
  }
  #validateRound(text) {
    const pass = ROUND_REGEXP.test(text);
    if (!pass) {
      throwError(ERROR_MESSAGE.roundError);
    }
  }
  getNumber() {
    return this.#round;
  }
}

export default Round;
