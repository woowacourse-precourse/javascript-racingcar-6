import { Random } from '@woowacourse/mission-utils';

const RandomNumberGenerator = {
  run() {
    return Random.pickNumberInRange(0, 9);
  },
};

export default RandomNumberGenerator;
