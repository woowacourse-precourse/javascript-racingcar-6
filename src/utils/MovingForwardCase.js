import { MissionUtils } from '@woowacourse/mission-utils';

export const movingForwardCase = () => {
  const number = MissionUtils.Random.pickNumberInRange(0, 9);

  if (number >= 4) {
    Console.print('-');
  }
};
