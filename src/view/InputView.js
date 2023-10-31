import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../Constant.js';

const InputView = {
  async getCarNames() {
    const name = await Console.readLineAsync(MESSAGE.carNamesInput);
    return name;
  },

  async getAttemptsCount() {
    const count = await Console.readLineAsync(MESSAGE.countInput);
    return count;
  }
}

export default InputView;