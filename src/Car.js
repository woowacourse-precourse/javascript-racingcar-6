import constants from './constants/constants';
import { Random } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
    this.moveCount = 0;
  }

  move = () => {
    const randomNumber = Random.pickNumberInRange(
      constants.NUMBER_RANGE_MIN,
      constants.NUMBER_RANGE_MAX,
    );

    if (randomNumber >= constants.JUDGE_NUMBER) {
      this.moveCount++;
    }
  };

  printScore = () => {
    return `${this.name} : ${'-'.repeat(this.moveCount)}`;
  };
}

export default Car;
