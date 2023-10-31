import { Console } from '@woowacourse/mission-utils';
import GAME_MESSAGE from '../constants/gameMessage.js';

class InputView {
  async read(query) {
    this.result = await Console.readLineAsync(query);
    return this.result;
  }

  async readCarNames() {
    const carNames = await this.read(GAME_MESSAGE.getCarNames);
    return carNames;
  }
}

export default InputView;
