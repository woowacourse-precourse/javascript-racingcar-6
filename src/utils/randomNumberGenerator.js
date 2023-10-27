import { Random } from '@woowacourse/mission-utils';

const randomNumberGenerator = () => {
  return Random.pickNumberInRange(0, 9);
};

export default randomNumberGenerator;
