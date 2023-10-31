import { Random } from '@woowacourse/mission-utils';
import { SYSTEM } from '../constants/System.js';

const RandomNumberGenerator = {
  run() {
    return Random.pickNumberInRange(SYSTEM.randomNumberMin, SYSTEM.randomNumberMax);
  },
};

export default RandomNumberGenerator;
