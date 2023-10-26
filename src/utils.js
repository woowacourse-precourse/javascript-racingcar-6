import { MissionUtils } from '@woowacourse/mission-utils';

export const generateRandomNumber = (min, max) => {
  MissionUtils.Random.pickNumberInRange(min, max);
};
