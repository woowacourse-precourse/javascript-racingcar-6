import { Random } from '@woowacourse/mission-utils';
import OPTIONS from '../constants/options';

const randomNumberGenerator = () => {
  return Random.pickNumberInRange(
    OPTIONS.minRandomNumber,
    OPTIONS.maxRandomNumber,
  );
};

export default randomNumberGenerator;
