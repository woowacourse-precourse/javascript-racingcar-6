import { MissionUtils } from '@woowacourse/mission-utils';

export const generatorRandomNumber = () => {
  return MissionUtils.Random.pickNumberInRange(0, 9);
};
