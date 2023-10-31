import { Random } from '@woowacourse/mission-utils';

export class RandomGenerator {
  static RANGE = {
    MIN: 0,
    MAX: 9,
  };

  constructor(min, max) {
    this.min = min;
    this.max = max;
  }

  generate() {
    return Random.pickNumberInRange(this.min, this.max);
  }
}
