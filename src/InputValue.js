import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from './Constant.js';
import Validation from './Validation.js';

class InputValue {
  static async carName() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.name);
    Validation.checkCarName(input.trim().split(','));
    return this.carNameArr(input.trim().split(','));
  }

  static carNameArr(input) {
    const arr = input.map((carName) => ({
      carName,
      move: 0,
    }));
    return arr;
  }

  static async moveCount() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.count);
    Validation.checkMoveCount(input);
    return Number(input);
  }
}

export default InputValue;
