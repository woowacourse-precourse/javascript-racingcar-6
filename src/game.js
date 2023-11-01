import { Random } from '@woowacourse/mission-utils';
import {isNaturalNumber} from './validation.js';

/**
 * 전진 여부 판단 함수
 * @returns {boolean}
 */
export const hasMovedForward = () => {
  const randomNumber = Random.pickNumberInRange(0, 9)
  if (randomNumber >= 4) return true;
  return false;
}


/**
 * 횟수만큼 전진 여부 판단 후, 그 결과를 배열로 반환하는 함수
 * @param count
 * @returns {boolean[]}
 */
export const getMovingResult = (count) => {
  if (!isNaturalNumber(count)) {
    throw new Error('[ERROR] 인자로 자연수를 입력해주세요. (getMovingResult) ')
  }
  return Array.from({ length: count }).map(() => hasMovedForward());
}