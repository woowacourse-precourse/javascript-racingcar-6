import { Random } from '@woowacourse/mission-utils';
import { RANDOM_NUMBER } from '../constants/constants.js';

/** 랜덤 숫자 반환하는 함수 */
export default function generateRandomNumber() {
  /** @type {number} */
  const number = Random.pickNumberInRange(
    RANDOM_NUMBER.START,
    RANDOM_NUMBER.END,
  );
  return number;
}
