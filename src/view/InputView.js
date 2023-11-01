import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/message.js';

const InputView = {
  async getCarNames() {
    try {
      const carNameString = await Console.readLineAsync(INPUT_MESSAGE.CAR_NAMES);
      return carNameString;
    } catch (error) {
      throw error;
    }
  },

  async getTotalRounds() {
    try {
      const totalRoundsString = await Console.readLineAsync(INPUT_MESSAGE.TOTAL_ROUNDS);
      return totalRoundsString;
    } catch (error) {
      throw error;
    }
  },
};

export default InputView;
