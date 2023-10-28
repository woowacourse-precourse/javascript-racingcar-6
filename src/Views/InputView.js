import {Console} from '@woowacourse/mission-utils';
import MESSAGES from '../../utils/Messages';

const InputView = {
  async readCarNames() {
    return await Console.readLineAsync(MESSAGES.nameQuery);
  },
};

export default InputView;
