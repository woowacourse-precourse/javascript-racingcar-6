import Validator from '../Validator/index.js';
import { MESSAGE } from '../constants/index.js';
import { Console } from '@woowacourse/mission-utils';

class Input {
  static async readAsync(query) {
    return await Console.readLineAsync(query);
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
