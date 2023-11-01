import { Random } from '@woowacourse/mission-utils';

export const pickRandomtoGo = () => {
  const RANDOM = Random.pickNumberInRange(0, 9);
  return RANDOM >= 4;
};

export const findWinner = (carlist) => {
  const MAX = Math.max(...carlist.values());
  const WINNER = [...carlist.keys()].filter((cur) => MAX == carlist.get(cur));
  return WINNER;
};
