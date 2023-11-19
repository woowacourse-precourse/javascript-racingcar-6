import { ERROR_MESSAGE, ROUND_REGEXP } from '../constants/index.js';
import { throwError } from '../utils/Error.js';

class Round {
  #round = {
    total: 0,
    current: 0,
  };
  constructor(totalRound) {
    this.#setTotalRound(totalRound);
  }
  #validateRound(totalRound) {
    const pass = ROUND_REGEXP.test(totalRound);
    if (!pass) {
      throwError(ERROR_MESSAGE.roundError);
    }
  }
  #setTotalRound(totalRound) {
    this.#validateRound(totalRound);
    this.#round.total = Number(totalRound);
  }
  updateCurrentRound() {
    this.#round.current += 1;
  }
  getRound() {
    return this.#round;
  }
}

export default Round;
