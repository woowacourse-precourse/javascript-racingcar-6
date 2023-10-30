import { Random } from '@woowacourse/mission-utils';

const getCanMove = () => {
  const randomNumber = Random.pickNumberInRange(0, 9);

  if (randomNumber < 4) return false;
  return true;
};

export default getCanMove;
