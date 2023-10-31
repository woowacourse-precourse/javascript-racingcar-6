import { Random } from '@woowacourse/mission-utils';
import CONDITION from '../constants/condition.js';

class Decision {
  static moveForward() {
    const random = Random.pickNumberInRange(
      CONDITION.rangeStart,
      CONDITION.rangeEnd,
    );
    return random >= CONDITION.movingForward;
  }
}

export default Decision;
