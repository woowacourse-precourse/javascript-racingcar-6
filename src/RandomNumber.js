import { Random } from '@woowacourse/mission-utils';
import { MIN_NUMBER, MAX_NUMBER } from './constants.js';

const RandomNumber = {
  create() {
    return Random.pickNumberInRange(MIN_NUMBER, MAX_NUMBER);
  },
};

export default RandomNumber;
