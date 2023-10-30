import { Random } from '@woowacourse/mission-utils';
import { CONFIG } from '../constants/constants';

export const createRandomList = (moveCount) => {
  const randomList = [];
  const count = Number(moveCount);
  for (let i = 0; i < count; i++) {
    let number = Random.pickNumberInRange(
      CONFIG.range.minNumber,
      CONFIG.range.maxNumber,
    );
    randomList.push(number);
  }
  return randomList;
};
