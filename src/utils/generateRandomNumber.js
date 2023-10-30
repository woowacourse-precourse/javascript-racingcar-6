import { Random } from '@woowacourse/mission-utils';

/** 랜덤 숫자 반환하는 함수 */
export default function generateRandomNumber() {
  /** @type {number} */
  const number = Random.pickNumberInRange(0, 9);
  return number;
}
