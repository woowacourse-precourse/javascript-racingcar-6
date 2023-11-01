import { Random } from '@woowacourse/mission-utils';
import {isNaturalNumber, isShorterThan5Chars} from './validation.js';

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
 * @param {number} count
 * @returns {boolean[]}
 */
export const getMovingResult = (count) => {
  if (!isNaturalNumber(count)) {
    throw new Error('[ERROR] 인자로 자연수를 입력해주세요. (getMovingResult) ')
  }
  return Array.from({ length: count }).map(() => hasMovedForward());
}

/**
 * 자동차 이름 배열과 시도할 횟수를 받아서, 각 자동차별 전진 여부 배열을 객체 형식으로 반환하는 함수
 *
 * @param {string[]} carNames
 * @param {number} count
 * @returns {{[carName: string]: boolean[]}}
 */
export const getCarsMovementInfo = (carNames, count) => {
  const carsMovementInfo = {};

  for (const carName of carNames) {
    carsMovementInfo[carName] = getMovingResult(count);
  }

  return carsMovementInfo;
}