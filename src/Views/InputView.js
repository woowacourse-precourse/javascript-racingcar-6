import {Console} from '@woowacourse/mission-utils';
import MESSAGES from '../../utils/Messages';

const InputView = {
  async readCarNames() {
    return await Console.readLineAsync(MESSAGES.nameQuery);
  },
  async readTrialCount() {
    return await Console.readLineAsync(MESSAGES.trialQuery);
  },
};

export default InputView;
