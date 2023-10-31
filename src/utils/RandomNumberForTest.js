import { Random } from '@woowacourse/mission-utils';

const RandomNumberForTest = {
  generate() {
    const randomValue = Random.pickNumberInRange(4, 9);
    return randomValue;
  },
};

export default RandomNumberForTest;
