import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/messages';

const InputView = {
  async getCarNames() {
    const carNames = await Console.readLineAsync(MESSAGE.carsNameInputGuide);

    return carNames.split(',').map((name) => name.trim());
  },

  async getRound() {
    return await Console.readLineAsync(MESSAGE.roundInputGuide);
  },
};

export default InputView;
