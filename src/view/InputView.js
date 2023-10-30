import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from '../constants/Messages';

export default class InputView {
  static async printCarNames() {
    return Console.readLineAsync(MESSAGES.CAR_NAME_PROMPT);
  }

  static async printNumberOfRounds() {
    return Console.readLineAsync(MESSAGES.NUMBER_OF_ROUNDS_PROMPT);
  }
}
