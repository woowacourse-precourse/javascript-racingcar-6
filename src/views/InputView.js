import { Console } from '@woowacourse/mission-utils';
import Validator from '../utils/Validator.js';
import { MESSAGE } from '../utils/Constant.js';

const InputView = {
  async readCarNames() {
    const carNames = await Console.readLineAsync(MESSAGE.READ_NAMES);
    Validator.validateBlank(carNames);
    return carNames;
  },

  async readAttempts() {
    const attempts = await Console.readLineAsync(MESSAGE.READ_ATTEMPTS);
    Validator.validateNumber(attempts);
    return attempts;
  },
};

export default InputView;
