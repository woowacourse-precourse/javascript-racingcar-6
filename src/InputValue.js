import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from './Constant.js';
import Validation from './Validation.js';

class InputValue {
  static async carName() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.name);
    Validation.checkCarName(input.trim().split(','));
    return input.trim().split(',');
  }

  static async moveCount() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.count);
    Validation.checkMoveCount(input);
    return Number(input);
  }
}

export default InputValue;
