import { Console } from '@woowacourse/mission-utils';
import { IN_GAME_MESSAGE } from '../src/constants.js';
import { validateTurnNumber } from '../validations/validateTurnNumber.js';

class Race {
  constructor() {
    this.turnNumber = this.setTurnNumber();
  }

  async setTurnNumber() {
    const turnNumber = await Console.readLineAsync(IN_GAME_MESSAGE.getInputTurnNumber);
    validateTurnNumber(turnNumber);
    return turnNumber;
  }

  startRaceTurn(car) {
    // TODO: 턴 진행 코드 구현
  }
}

export default Race;
