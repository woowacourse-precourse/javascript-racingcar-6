import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/messages.js';

const InputView = {
  async getCarNames() {
    return await Console.readLineAsync(MESSAGE.carsNameInputGuide);
  },

  async getRound() {
    return await Console.readLineAsync(MESSAGE.roundInputGuide);
  },
};

export default InputView;
