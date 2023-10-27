import { Random } from '@woowacourse/mission-utils';

export const makeRandomNums = (cars) => {
  const result = [];

  cars.forEach((car) => {
    const randomNum = Random.pickNumberInRange(0, 9);

    result.push([car, randomNum]);
  });

  return result;
};

export const isForward = (cars) => {
  const result = [];

  cars.forEach((car) => {
    const [carName, randomNum] = car;

    if (randomNum > 3) {
      result.push([carName, true]);
    } else {
      result.push([carName, false]);
    }
  });

  return result;
};

export const curCarState = (cars, forwardArr) => {
  const result = [];

  cars.forEach((car, index) => {
    const [carName, curState] = car;

    if (forwardArr[index][1]) {
      result.push([carName, curState + 1]);
    } else {
      result.push([carName, curState]);
    }
  });

  return result;
};

export const checkChampion = (cars) => {
  let max = 0;

  cars.forEach((car) => {
    if (max < car[1]) {
      const count = car[1];
      max = count;
    }
  });

  return cars.filter((car) => car[1] === max).map((car) => car[0]);
};
