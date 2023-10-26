import { Random as RandomNumber } from '@woowacourse/mission-utils';

class Random {
  static createRandomNumber() {
    return RandomNumber.pickNumberInRange(0, 9);
  }
}
