import { MissionUtils } from '@woowacourse/mission-utils';
import { CARS } from '../Constants.js';

class GameUtil {
  constructor() {}

  // 각 자동차의 전진횟수 저장하는 메소드(자동차 전진횟수 저장)
  storeMovingForward(index) {
    if (this.isMovingForward()) {
      CARS[index].forwardNumber += 1;
    }
  }

  // 각 자동차에서 4이상의 값이 나왔을 때 전진하였음을 반환하는 메소드
  isMovingForward() {
    const RANDOM_NUMBER = MissionUtils.Random.pickNumberInRange(0, 9);
    if (RANDOM_NUMBER >= 4) {
      return true;
    }
    return false;
  }
}
export default GameUtil;
