import { Random } from '@woowacourse/mission-utils';
import { SYSTEM } from '../constants/System.js';

const RandomNumberGenerator = {
  run() {
    const randomNumber = Random.pickNumberInRange(SYSTEM.randomNumberStart, SYSTEM.randomNumberEnd);
    return randomNumber;
  },
};

export default RandomNumberGenerator;
