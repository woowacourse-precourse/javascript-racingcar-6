import { Random } from '@woowacourse/mission-utils';

class Is {
  static running() {
    return Random.pickNumberInRange(0, 9) >= 4;
  }
}

export default Is;
