import { Random } from '@woowacourse/mission-utils';
import { RANDOM_NUMBER } from '../constants/utils.js';

class NumberGenerator {
  #from = RANDOM_NUMBER.from;

  #to = RANDOM_NUMBER.to;

  createRandomNumbers() {
    return Random.pickNumberInRange(this.#from, this.#to);
  }
}

export default NumberGenerator;
