import { Random } from '@woowacourse/mission-utils';
import { MAX_RANDOM_NUMBER, MIN_RANDOM_NUMBER } from './lib/constants';

export function generateRandomArr(arrLength) {
  return Array.from({ length: arrLength }, () =>
    Random.pickNumberInRange(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER),
  );
}
