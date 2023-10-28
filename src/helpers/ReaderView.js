import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from '../constants/index.js';
import InputProcessor from '../utils/inputProcessor.js';

const ReaderView = {
  async read(query) {
    const inputValue = await Console.readLineAsync(query);
    return inputValue;
  },

  async readCarNames() {
    const carNames = await this.read(INPUT_MESSAGES.CAR_NAMES);
    return InputProcessor.processCarNames(carNames);
  },

  async readAttempts() {
    const attempts = await this.read(INPUT_MESSAGES.ATTEMPTS);
    return InputProcessor.processAttempts(attempts);
  },
};

export default ReaderView;
