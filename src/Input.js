import { Console } from '@woowacourse/mission-utils';
import ERROR from './constants/Error.js';
import MESSAGE from './constants/Message.js';

const Input = {
  async getCarNames() {
    const names = await Console.readLineAsync(
      MESSAGE.carName,
    );

    if (!names) {
      throw new Error(ERROR.carName);
    }

    return names;
  },

  async getRepeatTimes() {
    const times = await Console.readLineAsync(MESSAGE.attemptNum);
    Console.print('');

    const pattern = /^[1-9]d*$/;
    if (!pattern.test(times)) {
      throw new Error(ERROR.attemptNum);
    }
    return times;
  },

};

export default Input;
