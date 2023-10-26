import { NUMBER_RANGE } from './constants.js';
import { MissionUtils } from '@woowacourse/mission-utils';

export const generateRandomNumbers = MissionUtils.Random.pickNumberInRange(
  NUMBER_RANGE.MIN,
  NUMBER_RANGE.MAX
);
