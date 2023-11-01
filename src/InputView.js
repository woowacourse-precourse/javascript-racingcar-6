import { MissionUtils } from '@woowacourse/mission-utils';
import { splitAndTrim } from './utils.js';

const InputView = {
  async inputCommon(message) {
    try {
      const userInput = await MissionUtils.Console.readLineAsync(message);
      const userInputRemoveSpaces = splitAndTrim(userInput);
      return userInputRemoveSpaces;
    } catch (error) {
      throw error;
    }
  },
};

export default InputView;
