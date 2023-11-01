import { Random } from '@woowacourse/mission-utils';
import { RANGE_NUMBER } from '../constant.js';

const createRandomNumber = () => {
  const randomNumber = Random.pickNumberInRange(
    RANGE_NUMBER.randomNumberMax,
    RANGE_NUMBER.randomNumberMax
  );

  return randomNumber;
};

const checkCanMove = () => createRandomNumber() >= RANGE_NUMBER.canMove;

export { checkCanMove };
