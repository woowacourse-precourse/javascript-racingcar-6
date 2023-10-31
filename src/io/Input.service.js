import { QUERY_MESSAGE } from '../constants.js';
import { Console } from '@woowacourse/mission-utils';

export class InputService {
  async readCarName() {
    return Console.readLineAsync(QUERY_MESSAGE.carName);
  }

  async readCarTries() {
    return Console.readLineAsync(QUERY_MESSAGE.try);
  }
}
