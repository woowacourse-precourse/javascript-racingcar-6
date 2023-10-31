import { MissionUtils } from '@woowacourse/mission-utils';
import CONSTANTS from '../constants/index.js';

export function getRandomNumber() {
  return MissionUtils.Random.pickNumberInRange(
    CONSTANTS.MIN_BOUND,
    CONSTANTS.MAX_BOUND
  );
}
