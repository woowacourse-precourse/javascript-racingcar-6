import { Random } from '@woowacourse/mission-utils';

const createRandomNumber = () => {
  const randomNumber = Random.pickNumberInRange(0, 9);

  return randomNumber;
};

const checkCanMove = () => {
  return createRandomNumber() >= 4 ? true : false;
};

export { createRandomNumber, checkCanMove };
