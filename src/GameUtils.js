import { Random } from '@woowacourse/mission-utils';

class GameUtils {
  static getRandomNumberInRange(min, max) {
    return Random.pickNumberInRange(min, max);
  }
}

export default GameUtils;
