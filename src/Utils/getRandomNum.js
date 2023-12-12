import { MissionUtils } from '@woowacourse/mission-utils';

export const getRandomNum = () => {
  return MissionUtils.Random.pickNumberInRange(0, 9);
};
