import constants from './constants';
import { Random, Console } from '@woowacourse/mission-utils';

export default class Car {
  constructor(name) {
    this.name = name;
    this.movingCount = 0;
  }

  doForward(count) {
    let judgeGoSTOP = 0;
  
    for (let i = 0; i < count; i++) {
      judgeGoSTOP = Random.pickNumberInRange(
        constants.NUMBER_RANGE_MIN,
        constants.NUMBER_RANGE_MAX
      );
      if (judgeGoSTOP >= constants.JUDGE_NUMBER) {
        this.movingCount++;
      }
      Console.print(this.printResult(this.movingCount));
    }
  }

  printResult(movingCount) {
    return `${this.name} : ${'-'.repeat(movingCount)}`;
  }
}

export { Car }