import { Random } from '@woowacourse/mission-utils';

export const makeRandomNums = (cars) => {
  const result = [];

  cars.forEach((car) => {
    const randomNum = Random.pickNumberInRange(0, 9);

    result.push([car, randomNum]);
  });

  return result;
};

export const isForward = (car) => {
  const num = car[1];

  return num > 3;
};
