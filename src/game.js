import { Random } from '@woowacourse/mission-utils';

/**
 * 전진 여부 판단 함수
 * @returns {boolean}
 */
export const hasMovedForward = () => {
  const randomNumber = Random.pickNumberInRange(0, 9)
  if (randomNumber >= 4) return true;
  return false;
}