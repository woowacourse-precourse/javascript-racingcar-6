import { MissionUtils } from '@woowacourse/mission-utils';
import { THRESHOLD, MIN, MAX } from './constant.js';
import { INPUT, LINE_BREAK, ANNOUNCEMENT } from './message.js';
import * as validate from './validate.js';

export default class Game {
  constructor() {
    this.userList = [];
  }

  async start() {
    await this.createUserList();
    await this.enterNumberOfAttempt();
  }

  execution() {
    this.userList.forEach((user) => {
      const randomNum = this.pickRandomNumber();
      if (randomNum >= THRESHOLD) user.forwardNumber++;
    });
    this.printExecutionResult();
  }

  end() {
    this.selectWinner();
    this.printWinner();
  }

  async createUserList() {
    const inputName = await MissionUtils.Console.readLineAsync(INPUT.USER_LIST);
    const users = inputName.split(',');

    if (validate.name(users)) {
      users.forEach((user) => {
        this.userList.push({ name: `${user}`, forwardNumber: 0 });
      });
    }
  }

  async enterNumberOfAttempt() {
    const inputNum = await MissionUtils.Console.readLineAsync(
      INPUT.NUMBER_OF_ATTEMPTS
    );
    if (validate.attemptNum(inputNum)) this.numberOfAttempt = Number(inputNum);
  }

  pickRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(MIN, MAX);
  }

  printExecutionResult() {
    this.userList.forEach((user) => {
      MissionUtils.Console.print(
        ANNOUNCEMENT.EXECUTION_RESULT(user.name, user.forwardNumber)
      );
    });
    MissionUtils.Console.print(LINE_BREAK);
  }

  selectWinner() {
    this.ranking = [...this.userList];
    this.ranking.sort((a, b) => b.forwardNumber - a.forwardNumber);
    this.winner = this.ranking
      .filter((user) => user.forwardNumber === this.ranking[0].forwardNumber)
      .map((user) => user.name)
      .join(', ');
  }

  printWinner() {
    MissionUtils.Console.print(ANNOUNCEMENT.WINNER(this.winner));
  }
}
