import { Random } from '@woowacourse/mission-utils';

const makeRandomNumber = () => {
  return Random.pickNumberInRange(0, 9);
};

export default makeRandomNumber;
