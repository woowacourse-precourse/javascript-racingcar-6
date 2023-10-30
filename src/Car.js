import { constants } from './constants';
import { Console } from '@woowacourse/mission-utils';

export default class Car {
  constructor(name) {
    this.name = name;
    this.movingCount = 0;
  }

  doForward(random) {
    if (random >= constants.JUDGE_NUMBER) {
      forward();
      printForward();
    }
  }

  forward() {
    this.movingCount = this.movingCount + 1;
  }

  printForward() {
    Console.print('-');
  }
}
