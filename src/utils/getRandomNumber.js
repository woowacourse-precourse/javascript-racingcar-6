import { Random } from '@woowacourse/mission-utils';

const getRandomNumber = () => {
  const START = 0;
  const STOP = 9;
  const randomNumber = Random.pickNumberInRange(START, STOP);

  return randomNumber;
};

export default getRandomNumber;
