import { MissionUtils } from '@woowacourse/mission-utils';
import { GAME_MESSAGES } from './constants.js';
import { removeSpaces, validateCarNames } from './utils.js';

const InputView = {
  async inputGetCarNames() {
    try {
      const userInput = await MissionUtils.Console.readLineAsync(
        GAME_MESSAGES.START
      );
      const carNamesRemoveSpaces = removeSpaces(userInput);

      if (validateCarNames(carNamesRemoveSpaces)) {
        return carNamesRemoveSpaces;
      }
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
