import { Console } from '@woowacourse/mission-utils';

import { INPUT_MESSAGE } from '../constants.js';

const InputView = {
  async readCarName() {
    try {
      const carName = await Console.readLineAsync(INPUT_MESSAGE.carName);
      return carName.split(',');
    } catch (error) {
      throw error;
    }
  },

  async readTryNumber() {
    try {
      const tryNumber = await Console.readLineAsync(INPUT_MESSAGE.tryNumber);
      return Number(tryNumber);
    } catch (error) {
      throw error;
    }
  },
};

export default InputView;
