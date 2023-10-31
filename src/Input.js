import { Console } from '@woowacourse/mission-utils';
import MESSAGE from './constants/Message.js';
import Validate from './Validate.js';

const Input = {
  async getCarNames() {
    const names = await Console.readLineAsync(
      MESSAGE.carName,
    );

    Validate.checkNameExist(names);

    return names;
  },

  async getRepeatTimes() {
    const times = await Console.readLineAsync(MESSAGE.attemptNum);
    Console.print('');

    Validate.checkNaturalNum(times);

    return times;
  },

};

export default Input;
