import { Random } from '@woowacourse/mission-utils';
import { GRANDPRIX_MAGICNUMBER } from '../constants/GrandPrixOption.js';

export default class RandomNumberGenerator {
  static generate(amount) {
    return Array.from({ length: amount }, () =>
      Random.pickNumberInRange(GRANDPRIX_MAGICNUMBER.min, GRANDPRIX_MAGICNUMBER.max),
    );
  }
}
