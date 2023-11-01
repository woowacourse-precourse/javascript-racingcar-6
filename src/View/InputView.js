import { Console } from '@woowacourse/mission-utils';

import Validator from '../utils/Validator.js';

const InputView = {
  async readLineAsync(message) {
    const userInput = await Console.readLineAsync(message);
    Validator.validateUserInput(userInput);

    return userInput;
  },

  async readIntegerAsync(message, radix) {
    const userInput = await this.readLineAsync(message);

    Validator.validateInteger(userInput);

    return parseInt(userInput, radix);
  },
};

export default InputView;
