import { Console } from '@woowacourse/mission-utils';
import { InputValidator } from '../models/InputValidator';

class InputView {
  async getCarName(msg) {
    const carNameInput = await Console.readLineAsync(msg);
    return carNameInput;
  }

  async getAttemptNum(msg) {
    const attemptNum = await Console.readLineAsync(msg);
    return attemptNum;
  }
}

export default InputView;
