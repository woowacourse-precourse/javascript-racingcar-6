import { MissionUtils } from '@woowacourse/mission-utils';

const pickRandomNumberInRange = (start, end) => {
  return MissionUtils.Random.pickNumberInRange(start, end);
};

export default pickRandomNumberInRange;
