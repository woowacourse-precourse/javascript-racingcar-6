import { Random } from '@woowacourse/mission-utils';

const generateRandomNum = () => {
  const randomNum = Random.pickNumberInRange(0, 9);
  return randomNum;
};

export default generateRandomNum;
