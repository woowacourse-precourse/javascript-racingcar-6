import { Random } from '@woowacourse/mission-utils';

const canMoveForward = (minFowardNumber, minRandomNumber, maxRandomNumber) => {
  const randomNumber = Random.pickNumberInRange(
    minRandomNumber,
    maxRandomNumber,
  );

  if (randomNumber >= minFowardNumber) {
    return true;
  }
  return false;
};

export default canMoveForward;
