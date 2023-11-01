import { MissionUtils } from '@woowacourse/mission-utils';
// import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE, GAME_STRING } from '../constants/constants';
import { validateAttemptNumber, validateCarNames } from '../utils/validation';

const InputView = {
  async readCarName() {
    MissionUtils.Console.print(INPUT_MESSAGE.CAR_NAME);
    const input = await MissionUtils.Console.readLineAsync('');
    validateCarNames(input);
    return input;
  },

  async readAttemptNumber() {
    MissionUtils.Console.print(INPUT_MESSAGE.ATTEMPT_NUMBER);
    const input = await MissionUtils.Console.readLineAsync();
    validateAttemptNumber(input);
    return input;
  },
};

export default InputView;
