import { Random } from '@woowacourse/mission-utils';
import { RANGE_NUMBER } from './constant';

const createRandomNumber = () => {
  const randomNumber = Random.pickNumberInRange(
    RANGE_NUMBER.randomNumberMax,
    RANGE_NUMBER.randomNumberMax
  );

  return randomNumber;
};

const checkCanMove = () => {
  return createRandomNumber() >= RANGE_NUMBER.canMove ? true : false;
};

export { createRandomNumber, checkCanMove };
