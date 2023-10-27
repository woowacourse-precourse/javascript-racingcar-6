import { MissionUtils } from '@woowacourse/mission-utils';
import { GAME, ERROR } from './constants.js';

class RacingCarGame {
  makeRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  }
}
