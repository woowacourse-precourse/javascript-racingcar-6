import { Console } from '@woowacourse/mission-utils';
import GAME_MESSAGE from '../constants/gameMessage.js';

class InputView {
  async read(query) {
    this.result = await Console.readLineAsync(query);
    return this.result;
  }

  async readCarNames() {
    return this.read(GAME_MESSAGE.getCarNames);
  }
}

export default InputView;
