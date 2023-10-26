import { MissionUtils } from '@woowacourse/mission-utils';

export const generateRandomNumber = (min, max) => {
  return MissionUtils.Random.pickNumberInRange(min, max);
};
