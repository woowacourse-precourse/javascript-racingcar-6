import { Random } from '@woowacourse/mission-utils';

export const random = (carsLength) => {
  const randomNumber = [];

  while (randomNumber.length < carsLength) {
    randomNumber.push(Random.pickNumberInRange(0, 9));
  }

  return randomNumber;
};
