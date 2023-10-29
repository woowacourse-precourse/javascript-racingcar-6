import { Console } from '@woowacourse/mission-utils';
import Validator from '../util/Validator.js';
import { MESSAGE } from '../util/Constant.js';

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
