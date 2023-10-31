import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/messages';

class InputView {
  static async readCarNames() {
    return await Console.readLineAsync(INPUT_MESSAGE.carName);
  }

  static async readRound() {
    return await Console.readLineAsync(INPUT_MESSAGE.round);
  }
}

export default InputView;
