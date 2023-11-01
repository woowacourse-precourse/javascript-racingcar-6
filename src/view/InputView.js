import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE, GAME_STRING } from '../constants/constants';
import { validateAttemptNumber, validateCarNames } from '../utils/validation';

const InputView = {
  async readCarName(callback) {
    try {
      const input = await Console.readLineAsync(INPUT_MESSAGE.CAR_NAME);
      validateCarNames(input);
      callback(input);
    } catch (error) {
      throw new Error(error);
    }
  },

  async readAttemptNumber(callback) {
    try {
      const input = await Console.readLineAsync(INPUT_MESSAGE.ATTEMPT_NUMBER);
      validateAttemptNumber(input);
      callback(input);
    } catch (error) {
      throw new Error(error);
    }
  },
};

export default InputView;
