import { MOVE_FOWARD, RACING_RULE } from './constants/racingRule.js';
import { paramType } from './utils/paramType.js';

export default class Refree {
  #tryRound;

  constructor(tryRound, _ = paramType(tryRound, 'number')) {
    this.#tryRound = tryRound;
  }

  clearRound() {
    this.#tryRound -= RACING_RULE.DECREASE_ROUND;
  }

  isGameFinish() {
    return this.#tryRound === RACING_RULE.ALL_ROUND_DONE_AMOUNT;
  }

  isMovalbe(number, _ = paramType(number, 'number')) {
    return number >= MOVE_FOWARD;
  }
}
