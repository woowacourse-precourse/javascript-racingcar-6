import { Random } from '@woowacourse/mission-utils';

export const pickRandomtoGo = () => {
  const RANDOM = Random.pickNumberInRange(0, 9);
  return RANDOM >= 4;
};
