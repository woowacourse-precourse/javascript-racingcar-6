import { MissionUtils } from '@woowacourse/mission-utils';
import * as validate from './validate.js';

export default class Game {
  constructor() {
    this.userList = [];
    this.numberOfAttempt = 0;
  }

  async start() {
    await this.createUserList();
    await this.enterNumberOfAttempt();
  }

  async createUserList() {
    const inputName = await MissionUtils.Console.readLineAsync(
      `경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n`
    );
    const users = inputName.split(',');

    if (validate.name(users)) {
      for (const user of users) {
        this.userList.push({ name: `${user}`, forwardNumber: 0 });
      }
    }
  }

  async enterNumberOfAttempt() {
    const inputNum = await MissionUtils.Console.readLineAsync(
      `시도할 횟수는 몇 회인가요?\n`
    );
    if (validate.attemptNum(inputNum)) this.numberOfAttempt = Number(inputNum);
  }
}
