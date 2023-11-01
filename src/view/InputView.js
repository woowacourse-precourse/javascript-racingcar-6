import { MissionUtils } from '@woowacourse/mission-utils';
import message from '../Constants.js';

const InputView = {
  async requestCarNames() {
      const userInput = await MissionUtils.Console.readLineAsync(message.REQUEST_NAME);
      return userInput.split(',');
    },

  async requestTryCount() {
    const userInput = await MissionUtils.Console.readLineAsync(message.REQUEST_TRY_COUNT);
    return Number(userInput);
  },
}

export default InputView;