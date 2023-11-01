import { Random, Console } from '@woowacourse/mission-utils';
import {isNaturalNumber } from './validation.js';

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

/**
 * 각 자동차별 전진 여부 배열 정보를 가진 객체를 받아서, 우승한 자동차들의 이름 배열을 반환하는 함수
 *
 * @param {{[carName: string]: boolean[]}} carsMovementInfo
 * @returns {string[]}
 */
export const getWinners = (carsMovementInfo) => {
  let winners = [];
  let maxMovingCount = -Infinity;

  Object.entries(carsMovementInfo).forEach(([carName, movingResult]) => {
    const movingCount = movingResult.reduce((acc, curr) => acc + Number(curr), 0);
    if (movingCount > maxMovingCount) {
      winners = [carName];
      maxMovingCount = movingCount;
    } else if (movingCount === maxMovingCount) {
      winners.push(carName);
    }
  });

  return winners;
}

/**
 * 각 자동차별 전진 여부 배열 정보를 가진 객체를 받아서, 출력 형식에 맞게 반복 출력하는 함수
 * @param {{[carName: string]: boolean[]}} carsMovementInfo
 */
export const printCarsMovementInfo = (carsMovementInfo) => {
  const carNames = Object.keys(carsMovementInfo);
  const movingCount = carsMovementInfo[carNames[0]].length;

  const status = {};
  carNames.forEach(carName => status[carName] = '')

  const result = [];

  Array.from({ length: movingCount }, (_, i) => i).forEach(i => {
    carNames.forEach(carName => {
      status[carName] += carsMovementInfo[carName][i] ? '-' : '';
    })

    const roundResult = [];
    Object.entries(status).forEach(([carName, currentStatus]) => {
      roundResult.push(`${carName} : ${currentStatus}`);
    })
    result.push(roundResult.join('\n'))
  })

  Console.print(result.join('\n\n'))
}

/**
 * 우승자를 출력하는 함수
 * @param {string[]} winners
 */
export const printWinners = (winners) => {
  Console.print(`최종 우승자 : ${winners.join(', ')}`);
}