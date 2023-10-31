import { QUERY_MESSAGE } from '../constants.js';
import { Console } from '@woowacourse/mission-utils';

export class InputService {
  async readCarName() {
    return await Console.readLineAsync(QUERY_MESSAGE.carName);
  }

  async readCarTries() {
    return await Console.readLineAsync(QUERY_MESSAGE.try);
  }
}
