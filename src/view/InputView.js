import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE, GAME_STRING } from '../constants/constants';

const InputView = {
  async readCarName() {
    const carName = await Console.readLineAsync(INPUT_MESSAGE.CAR_NAME);
    return carName.split(GAME_STRING.NAME_SPLIT);
  },

  async readAttemptNumber() {
    const attemptNumber = await Console.readLineAsync(
      INPUT_MESSAGE.ATTEMPT_NUMBER
    );
    return Number(attemptNumber);
  },
};

export default InputView;
