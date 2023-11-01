import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from './Constant.js';
import Validation from './Validation.js';

class InputValue {
  static async carName() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.name);
    Validation.checkCarName(input.trim().split(','));
    return this.createCarArr(input.trim().split(','));
  }

  static createCarArr(input) {
    const arr = input.map((carName) => ({
      carName,
      forward: 0,
    }));
    return arr;
  }

  static async numberOfMoves() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.count);
    Validation.checkMoveCount(input);
    return Number(input);
  }
}

export default InputValue;
