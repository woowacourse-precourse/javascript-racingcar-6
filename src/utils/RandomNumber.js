import { MissionUtils } from '@woowacourse/mission-utils';

// 상수 모듈
import { NUMBER } from './Constants';

class RandomNumber {
  static isGreaterThanFour() {
    return RandomNumber.getRandomNumber() >= NUMBER.FOUR;
  }

  static getRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(NUMBER.MIN, NUMBER.MAX);
  }
}

export default RandomNumber;
