import { Random } from '@woowacourse/mission-utils';
import { GAME_RULE_NUMBER } from '../constant/Constants.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.progress = 0;
  }

  move() {
    if (
      Random.pickNumberInRange(
        GAME_RULE_NUMBER.numMin,
        GAME_RULE_NUMBER.numMax,
      ) >= GAME_RULE_NUMBER.thresholdNum
    ) {
      this.progress += 1;
    }
  }

  getName() {
    return this.name;
  }

  getProgress() {
    return this.progress;
  }
}
