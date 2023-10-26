import { MissionUtils } from '@woowacourse/mission-utils';
import { GAME_MESSAGES } from './constants.js';

const InputView = {
  async inputGetCarNames() {
    try {
      const userInput = await MissionUtils.Console.readLineAsync(
        GAME_MESSAGES.START
      );
      const carNames = userInput.split(',');
      return carNames;
    } catch (error) {
      throw error;
    }
  },
  async inputgetTryCount() {
    try {
      const userInput = await MissionUtils.Console.readLineAsync(
        GAME_MESSAGES.GET_TRIES
      );
      return userInput;
    } catch (error) {
      throw error;
    }
  },
};

export default InputView;
