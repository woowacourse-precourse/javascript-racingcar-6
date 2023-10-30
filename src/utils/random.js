import { MissionUtils } from '@woowacourse/mission-utils';

export function getRandomNumber() {
  return MissionUtils.Random.pickNumberInRange(0, 9);
}
