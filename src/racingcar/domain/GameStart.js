import { MissionUtils } from '@woowacourse/mission-utils';
import Input from '../domain/Input.js';

class GameStart {
  static carMoveDecide(CAR_NAMES) {
    for (let i = 0; i < CAR_NAMES.length; i++) {
      let dice = MissionUtils.Random.pickNumberInRange(0, 9);
      if (4 <= dice) {
        CAR_NAMES[i] += '-';
      }
    }
  }

  static carMoveTryResult(CAR_NAMES) {
    for (let i = 0; i < CAR_NAMES.length; i++) {
      MissionUtils.Console.print(CAR_NAMES[i]);
    }

    //줄바꿈
    MissionUtils.Console.print('');
  }
}

export default GameStart;
