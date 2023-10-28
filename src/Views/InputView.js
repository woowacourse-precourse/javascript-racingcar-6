import {Console} from '@woowacourse/mission-utils';
import MESSAGES from '../../utils/Messages';

const InputView = {
  async readCarsName() {
    const carNames = await Console.readLineAsync(MESSAGES.nameQuery);
  },
};

export default InputView;
