import { Console } from '@woowacourse/mission-utils';
import { INPUT_MSG } from '../constants/messages.js';

const inputView = {
  async CarList() {
    const input = await Console.readLineAsync(INPUT_MSG.CAR_NAME);
    return input;
  },

  async moveCount() {
    const input = await Console.readLineAsync(INPUT_MSG.MOVE_COUNT);
    return input;
  },
};

export default inputView;
