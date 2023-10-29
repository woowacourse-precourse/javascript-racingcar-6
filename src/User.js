import { Console } from '@woowacourse/mission-utils';
import Computer from './Computer.js';

export default class User {
  static async inputQuery(query) {
    const input = await Console.readLineAsync(query);
    return input;
  }

  static async inputCarName() {
    const input = await User.inputQuery(
      Computer.MESSAGE.COMMAND_INPUT_CAR_NAME,
    );
    return input;
  }

  static async inputTrialNumber() {
    const input = await User.inputQuery(
      Computer.MESSAGE.COMMAND_INPUT_TRIAL_NUMBER,
    );
    return input;
  }
}
