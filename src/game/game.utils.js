import { MissionUtils } from '@woowacourse/mission-utils';

import VALIDATION_CONDITION from './game.validation';

const gameUtils = {
  getRandomNumber(
    min = VALIDATION_CONDITION.randomNumberRange.min,
    max = VALIDATION_CONDITION.randomNumberRange.max,
  ) {
    return MissionUtils.Random.pickNumberInRange(min, max);
  },

  getNumberToDash(repeatNumber) {
    if (Number.isNaN(Number(repeatNumber))) {
      throw new Error('[ERROR] 인자는 숫자여야 합니다');
    }

    if (repeatNumber <= 0) return '';

    return '-'.repeat(repeatNumber);
  },
};

export default gameUtils;
