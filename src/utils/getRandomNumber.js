import { Random } from '@woowacourse/mission-utils';

const getRandomNumber = () => {
  const randomNumber = Random.pickNumberInRange(0, 9);

  return randomNumber;
};

export default getRandomNumber;
