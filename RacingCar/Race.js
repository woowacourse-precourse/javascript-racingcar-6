import { Console } from '@woowacourse/mission-utils';
import { IN_GAME_MESSAGE } from '../src/constants.js';
import { validateTurnNumber } from '../validations/validateTurnNumber.js';

class Race {
  constructor() {
    this.turnNumber = 0;
  }

  async setTurnNumber() {
    const turnNumber = await Console.readLineAsync(IN_GAME_MESSAGE.getInputTurnNumber);
    validateTurnNumber(turnNumber);

    this.turnNumber = turnNumber;
  }
}

export default Race;
