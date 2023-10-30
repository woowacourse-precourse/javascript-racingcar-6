import { Random } from '@woowacourse/mission-utils';

class GameUtils {
  static getRandomNumberInRange(min, max) {
    return Random.pickNumberInRange(min, max);
  }

  static forEachApply(arr, func) {
    arr.forEach((item) => func(item));
  }
}

export default GameUtils;
