import { Console } from '@woowacourse/mission-utils';

import { INPUT_MESSAGE } from '../constants.js';

const InputView = {
  async readcarName() {
    try {
      return await Console.readLineAsync(INPUT_MESSAGE.carName);
    } catch (error) {
      throw error;
    }
  },
};

export default InputView;
