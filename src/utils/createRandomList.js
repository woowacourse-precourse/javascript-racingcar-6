import { Random } from '@woowacourse/mission-utils';
import { CONFIG } from '../constants/constants';

export const createRandomNumber = () => {
  let number = Random.pickNumberInRange(
    CONFIG.range.minNumber,
    CONFIG.range.maxNumber,
  );

  return number;
};
