import { Random } from '@woowacourse/mission-utils';

export default class RandomNumberGenerator {
  static generate(amount) {
    return Array.from({ length: amount }, () => Random.pickNumberInRange(0, 9));
  }
}
