import { Console } from '@woowacourse/mission-utils';

export default class User {
  async getCarNameInput(query) {
    return await Console.readLineAsync(query);
  }
}
