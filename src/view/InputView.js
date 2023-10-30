import { Console } from '@woowacourse/mission-utils';
import Message from '../constant/Message.js';

export default class InputView {
  static carName() {
    return Console.readLineAsync(Message.RACE_START);
  }
}
