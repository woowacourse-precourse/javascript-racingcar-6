import { MissionUtils } from '@woowacourse/mission-utils';

export const movingForwardCase = () => {
  const number = MissionUtils.Random.pickNumberInRange(0, 9);
  return number >= 4; //4 이상 true 반환
};
