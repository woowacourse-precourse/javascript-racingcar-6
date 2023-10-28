import { Random } from '@woowacourse/mission-utils';
import { MIN_RANGE, MAX_RANGE } from '../constants/constants.js';

export default function generateRandomNumber() {
  return Random.pickNumberInRange(MIN_RANGE, MAX_RANGE);
}
