import { Console } from '@woowacourse/mission-utils';

import Validator from '../utils/Validator.js';

const InputView = {
  async readLineAsync(message) {
    const userInput = await Console.readLineAsync(message);
    Validator.validateUserInput(userInput);

    return userInput;
  },
};

export default InputView;
