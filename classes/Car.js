import { MissionUtils } from '@woowacourse/mission-utils';
import { printIntermediateResult } from '../utils/view.js';

const HURDLE = 4;
export default class Car {
  name;
  totalMovementDashArray;

  constructor(name) {
    this.name = name;
    this.totalMovementDashArray = [];
  }

  tryToMove() {
    const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomNum >= HURDLE) {
      this.totalMovementDashArray.push('-');
    }
  }
  print() {
    const dashes = this.totalMovementDashArray.reduce(
      (acc, cur) => `${acc}${cur}`,
      '',
    );
    printIntermediateResult({ name: this.name, dashes: dashes });
  }
}
