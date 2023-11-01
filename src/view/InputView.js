import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE, GAME_STRING } from '../constants/constants';
import { validateAttemptNumber, validateCarNames } from '../utils/validation';

const InputView = {
  async readCarName() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.CAR_NAME);
    validateCarNames(input);
    return input;
  },

  async readAttemptNumber() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.ATTEMPT_NUMBER);
    validateAttemptNumber(input);
    return input;
  },
};

export default InputView;
