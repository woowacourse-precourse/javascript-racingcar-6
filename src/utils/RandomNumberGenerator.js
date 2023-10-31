import { Random } from '@woowacourse/mission-utils';
import { NUMBER } from './Constant.js';

const RandomNumberGenerator = {
  generate() {
    const randomValue = Random.pickNumberInRange(NUMBER.MIN, NUMBER.MAX);
    return randomValue;
  },
};

export default RandomNumberGenerator;
