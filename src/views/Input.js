import { MissionUtils } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/Message';

const Input = {
  async readCarNames() {
    const carNames = await MissionUtils.Console.readLineAsync(
      MESSAGE.INPUT_CAR_NAMES,
    );
    return carNames;
  },
  async readTryNumber() {
    const tryNumber = await MissionUtils.Console.readLineAsync(
      MESSAGE.INPUT_TRY_NUMBER,
    );
    return tryNumber;
  },
};
export default Input;
