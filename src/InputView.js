import { MissionUtils } from '@woowacourse/mission-utils';
import { GAME_MESSAGES } from './constants.js';
import { splitAndTrim } from './utils.js';

const InputView = {
  async inputGetCarNames() {
    try {
      const userInput = await MissionUtils.Console.readLineAsync(
        GAME_MESSAGES.START
      );
      const carNamesRemoveSpaces = splitAndTrim(userInput);
      return carNamesRemoveSpaces;
    } catch (error) {
      throw error;
    }
  },
  async inputgetTryCount() {
    try {
      const userInput = await MissionUtils.Console.readLineAsync(
        GAME_MESSAGES.GET_TRIES
      );
      const tryCountRemoveSpaces = splitAndTrim(userInput);
      return tryCountRemoveSpaces;
    } catch (error) {
      throw error;
    }
  },
};

export default InputView;
