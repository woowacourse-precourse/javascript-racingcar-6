import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/index.js';
import Validator from '../Validator/index.js';

class Input {
  static async readAsync(query) {
    const answer = await Console.readLineAsync(query);
    return answer;
  }

  static async readCarNames() {
    const carNames = await this.readAsync(MESSAGE.askCarNames);
    Validator.validateCarNames(carNames);
    return carNames;
  }

  static async readLapCount() {
    const lapCount = await this.readAsync(MESSAGE.askLapCount);
    Validator.validateLapCount(lapCount);
    return lapCount;
  }
}

export default Input;
