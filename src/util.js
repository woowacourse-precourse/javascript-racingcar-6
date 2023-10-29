import { Random } from '@woowacourse/mission-utils';

export function generateRandomArr(carsNum) {
  return Array.from({ length: carsNum }, () => Random.pickNumberInRange(0, 9));
}

export function computeWinners(progresses, cars, max) {
  if (max === 0) {
    return [];
  }

  return progresses
    .map((e, i) => (e === max ? cars[i] : null))
    .filter(e => !!e);
}
