import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/views.js';

const InputView = {
  inputCarNames() {
    return Console.readLineAsync(INPUT_MESSAGE.carNames);
  },

  inputMoveCount() {
    return Console.readLineAsync(INPUT_MESSAGE.moveCount);
  },
};

export default InputView;
