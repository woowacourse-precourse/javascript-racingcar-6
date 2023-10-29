import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from './Constant.js';
import Validation from './Validation.js';

class InputValue {
  static async carName() {
    const input = await Console.readLineAsync(MESSAGE.INPUT_CAR_NAME);
    Validation.checkCarName(input.trim().split(','));
    return input.trim().split(',');
  }

  static async moveCount() {
    try {
      const input = await Console.readLineAsync(MESSAGE.INPUT_MOVE_COUNT);
      Validation.checkMoveCount(input);
      return Number(input);
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
    }
  }
}

export default InputValue;
