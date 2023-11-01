import { ERROR_MESSAGE } from './constants/errorMessage.js';
import { RANDOM_NUMBER_RANGE } from './constants/numberRange.js';
import { MOVE_FOWARD, RACING_RULE } from './constants/racingRule.js';
import GamePlayingError from './errors/GamePlayingError.js';
import { paramType } from './utils/paramType.js';

export default class Refree {
  #tryRound;

  constructor(tryRound, _ = paramType(tryRound, 'number')) {
    this.#tryRound = tryRound;
  }

  clearRound() {
    if (this.isGameFinish()) {
      throw new GamePlayingError(ERROR_MESSAGE.PLAY.MORE_ROUND_THAN_ALLOWED);
    }

    this.#tryRound -= RACING_RULE.DECREASE_ROUND;
  }

  isGameFinish() {
    return this.#tryRound === RACING_RULE.ALL_ROUND_DONE_AMOUNT;
  }

  isMovable(number, _ = paramType(number, 'number')) {
    if (!this.#isOverRange(number)) {
      throw new Error(
        `${RANDOM_NUMBER_RANGE.MIN}~${RANDOM_NUMBER_RANGE.MAX} 이외의 숫자가 들어왔어요`
      );
    }

    return number >= MOVE_FOWARD;
  }

  #isOverRange(number) {
    return Array.from(
      { length: RANDOM_NUMBER_RANGE.MAX - RANDOM_NUMBER_RANGE.MIN + 1 },
      (_, idx) => idx + RANDOM_NUMBER_RANGE.MIN
    ).includes(number);
  }
}
