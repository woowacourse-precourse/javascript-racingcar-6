import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from './constants.js';

class InputValue {
  async carName() {
    try {
      const input = await Console.readLineAsync(MESSAGE.INPUT_CAR_NAME);
      const arr = input.split(',');
      return arr;
    } catch (error) {
      Console.print('[ERROR] ' + error.message);
    }
  }
}

export default InputValue;
