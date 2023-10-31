import { Random } from '@woowacourse/mission-utils';

const random = (carsLength) => {
  const randomNumber = [];

  while (randomNumber.length < carsLength) {
    randomNumber.push(Random.pickNumberInRange(1, 9));
  }

  return randomNumber;
};

export default random;
