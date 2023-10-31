import { Random } from '@woowacourse/mission-utils';
import { GAME_CONDITION } from '../constants/constants.js';

const randomNumberGenerator = () => {
  return Random.pickNumberInRange(GAME_CONDITION.startScope, GAME_CONDITION.endScope);
};

export default randomNumberGenerator;
