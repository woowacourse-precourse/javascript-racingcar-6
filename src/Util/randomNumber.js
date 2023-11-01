import { MissionUtils } from '@woowacourse/mission-utils';

const checkRandomNumber = () => {
  return MissionUtils.Random.pickNumberInRange(0, 9) >= 4;
};

export default checkRandomNumber;
