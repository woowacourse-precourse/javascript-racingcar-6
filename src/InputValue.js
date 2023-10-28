import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from './Constant.js';

class InputValue {
  static async carName() {
    try {
      const input = await Console.readLineAsync(MESSAGE.INPUT_CAR_NAME);
      const arr = input.split(',');
      return arr;
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
    }
  }

  static async moveCount() {
    try {
      const input = await Console.readLineAsync(MESSAGE.INPUT_MOVE_COUNT);
      return input;
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
    }
  }
}

export default InputValue;
