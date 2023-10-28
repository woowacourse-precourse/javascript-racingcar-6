import { Console } from '@woowacourse/mission-utils';

export default class User {
  async getCarNameInput(query) {
    return await Console.readLineAsync(query);
  }
  async getTrialNumber(query) {
    return Number(await Console.readLineAsync(query));
  }
}
