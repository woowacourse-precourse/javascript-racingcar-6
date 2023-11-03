import { MissionUtils } from '@woowacourse/mission-utils';
import { RANGE_NUMBER } from '../constant.js';

class Util {
  static getInRangeRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(RANGE_NUMBER.min, RANGE_NUMBER.max);
  }
}

export default Util;
