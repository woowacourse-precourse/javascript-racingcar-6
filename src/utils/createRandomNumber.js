import { Random } from '@woowacourse/mission-utils';
import CONFIG from '../constants/config';

const createRandomNumber = () =>
  Random.pickNumberInRange(CONFIG.MIN_RANDOM_COUNT, CONFIG.MAX_RANDOM_COUNT);

export default createRandomNumber;
