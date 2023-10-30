import { Console } from '@woowacourse/mission-utils';
import { INPUT_MSG } from '../utils/constants';

const InputView = {
  async inputCarNames(callback) {
    return await Console.readLine(INPUT_MSG.INPUT_CAR_NAMES, callback);
  },

  async inputTryCount(callback) {
    return await Console.readLine(INPUT_MSG.INPUT_TRY_COUNT, callback);
  },
};

export default InputView;
