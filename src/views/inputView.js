import { Console } from '@woowacourse/mission-utils';
import GAME_MESSAGE from '../constants/gameMessage.js';

class InputView {
  async read(query) {
    this.result = await Console.readLineAsync(query);
    return this.result;
  }

  async readCarNames() {
    const carNames = await this.read(GAME_MESSAGE.PROMPT_CAR_NAMES);
    return carNames;
  }

  async readRoundNumber() {
    return this.read(GAME_MESSAGE.PROMPT_ROUND_NUMBER);
  }
}

export default InputView;
