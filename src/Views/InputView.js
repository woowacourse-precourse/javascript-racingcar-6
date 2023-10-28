import {Console} from '@woowacourse/mission-utils';
import MESSAGES from '../../utils/Messages';
import Validator from '../../utils/Validator';

const InputView = {
  async readCarNames() {
    return await Console.readLineAsync(MESSAGES.nameQuery);
  },
};

export default InputView;
