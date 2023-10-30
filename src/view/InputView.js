import { Console } from '@woowacourse/mission-utils';

import { INPUT_MESSAGE } from '../constants.js';

const InputView = {
  async readCarNames() {
    const carNames = await Console.readLineAsync(INPUT_MESSAGE.carNames);
    return carNames.split(',');
  },

  async readTryNumber() {
    const tryNumber = await Console.readLineAsync(INPUT_MESSAGE.tryNumber);
    return Number(tryNumber);
  },
};

export default InputView;
