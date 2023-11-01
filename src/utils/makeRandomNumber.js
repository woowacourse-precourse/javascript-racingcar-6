import { Random } from '@woowacourse/mission-utils';
import { GAME_INT } from '../constants/constants';

const makeRandomNumber = () => {
  return Random.pickNumberInRange(GAME_INT.RANGE_FROM, GAME_INT.RANGE_TO);
};

export default makeRandomNumber;
