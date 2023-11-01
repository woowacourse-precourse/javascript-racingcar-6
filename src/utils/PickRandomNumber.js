import { Random } from '@woowacourse/mission-utils';
import { SETTINGS } from '../constants/index.js';

const pickRandomNumber = () => {
  return Random.pickNumberInRange(SETTINGS.minRandomNumber, SETTINGS.maxRandomNumber);
};

export { pickRandomNumber };
