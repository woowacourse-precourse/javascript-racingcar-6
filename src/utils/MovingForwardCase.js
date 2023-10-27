import { MissionUtils } from '@woowacourse/mission-utils';
import { FORWARD_MATCHING_POINT, FORWARD_DASH } from '../const/Messages';

export const movingForwardCase = () => {
  const number = MissionUtils.Random.pickNumberInRange(0, 9);

  if (number >= FORWARD_MATCHING_POINT) {
    Console.print(FORWARD_DASH);
  }
};
