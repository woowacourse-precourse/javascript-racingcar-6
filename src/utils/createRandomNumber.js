import { Random } from '@woowacourse/mission-utils';

const createRandomNumber = (minCount, maxCount) =>
  Random.pickNumberInRange(minCount, maxCount);

export default createRandomNumber;
