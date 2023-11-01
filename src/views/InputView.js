import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGE } from '../constants/Message.js';

const InputView = {
  async readCarNames() {
    const inputValue = await Console.readLineAsync(GAME_MESSAGE.inputCarNames);
    return inputValue;
  },

  async readRoundNumber() {
    const inputValue = await Console.readLineAsync(
      GAME_MESSAGE.inputRoundNumber,
    );
    return inputValue;
  },
};

export default InputView;
