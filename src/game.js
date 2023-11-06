import { MissionUtils } from '@woowacourse/mission-utils';
import {
  THRESHOLD,
  MIN,
  MAX,
  MINIMUM_NAME_NUMBER,
  NULL,
  NAME_LETTER_NUMBER_LIMIT,
} from './constant.js';
import { INPUT, LINE_BREAK, ANNOUNCEMENT, ERROR } from './message.js';

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

    this.validateName(users);
    users.forEach((user) => {
      this.userList.push({ name: `${user}`, forwardNumber: 0 });
    });
  }

  validateName(users) {
    if (users.length < MINIMUM_NAME_NUMBER) {
      throw new Error(ERROR.SHORTAGE_NAME_NUMBER);
    } else if (users.length !== new Set(users).size) {
      throw new Error(ERROR.DUPLICATE_NAME);
    }

    users.forEach((user) => {
      if (!user || user.trim() === NULL) {
        throw new Error(ERROR.SHORTAGE_NAME_LETTER_NUMBER);
      } else if (user.length > NAME_LETTER_NUMBER_LIMIT) {
        throw new Error(ERROR.EXCEEDING_NAME_LETTER_LIMIT);
      }
    });
  }

  async enterNumberOfAttempt() {
    const inputNum = await MissionUtils.Console.readLineAsync(
      INPUT.NUMBER_OF_ATTEMPTS
    );

    this.validateAttemptNum(inputNum);
    this.numberOfAttempt = Number(inputNum);
  }

  validateAttemptNum(inputNum) {
    const checkNumTypeRegExp = new RegExp('^[1-9]\\d*$');

    if (!checkNumTypeRegExp.test(inputNum)) {
      throw new Error(ERROR.INPUT_ATTEMPT);
    }
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
    const topProgress = Math.max(
      ...this.userList.map((user) => user.forwardNumber)
    );
    this.winner = this.userList
      .filter((user) => user.forwardNumber === topProgress)
      .map((user) => user.name)
      .join(', ');
  }

  printWinner() {
    MissionUtils.Console.print(ANNOUNCEMENT.WINNER(this.winner));
  }
}
