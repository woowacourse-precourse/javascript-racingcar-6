import { Random } from '@woowacourse/mission-utils';
import { paramType } from './paramType.js';
import { RANDOM_NUMBER_RANGE } from '../constants/numberRange.js';

export default class RandomNumberGenerator {
  create(
    min = RANDOM_NUMBER_RANGE.MIN,
    max = RANDOM_NUMBER_RANGE.MAX,
    _0 = paramType(min, 'number'),
    _1 = paramType(max, 'number')
  ) {
    return Random.pickNumberInRange(
      RANDOM_NUMBER_RANGE.MIN,
      RANDOM_NUMBER_RANGE.MAX
    );
  }

  createNumbers(
    min = RANDOM_NUMBER_RANGE.MIN,
    max = RANDOM_NUMBER_RANGE.MAX,
    length,
    _0 = paramType(min, 'number'),
    _1 = paramType(max, 'number'),
    _2 = paramType(length, 'number')
  ) {
    return Array.from({ length }, () => this.create(min, max));
  }
}
