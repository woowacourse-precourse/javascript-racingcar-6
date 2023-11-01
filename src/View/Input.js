import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/messages';

export default class Input {
  static async readCarName() {
    const answer = await Console.readLineAsync(INPUT_MESSAGE.run);
    return answer;
  }

  static async readAttemps() {
    const answer = await Console.readLineAsync(INPUT_MESSAGE.attemps);
    return answer;
  }
}
