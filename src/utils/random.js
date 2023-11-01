import { MissionUtils } from '@woowacourse/mission-utils';

function getRandomDigit() {
  return MissionUtils.Random.pickNumberInRange(0, 9);
}

export default getRandomDigit;
