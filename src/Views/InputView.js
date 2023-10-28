import {Console} from '@woowacourse/mission-utils';
import MESSAGES from '../../utils/Messages';
import Validator from '../../utils/Validator';

const InputView = {
  async readCarNames() {
    const carNames = await Console.readLineAsync(MESSAGES.nameQuery);
    Validator.validateCarNames(carNames);
    return carNames;
  },
};

export default InputView;
