import { Random } from '@woowacourse/mission-utils';
import { SYSTEM } from '../constants/System.js';
import Validators from '../utils/validator/index.js';

const RandomNumberGenerator = {
  run() {
    const randomNumber = Random.pickNumberInRange(SYSTEM.randomNumberMin, SYSTEM.randomNumberMax);
    Validators.checkRandomNumber(randomNumber, SYSTEM.randomNumberMin, SYSTEM.randomNumberMax);
    return randomNumber;
  },
};

export default RandomNumberGenerator;
