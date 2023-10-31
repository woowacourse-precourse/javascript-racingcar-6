import { Random } from '@woowacourse/mission-utils';
import { GAME_CONDITION } from '../constants/constants';

const randomNumberGenerator = () => {
  return Random.pickNumberInRange(GAME_CONDITION.startScope, GAME_CONDITION.endScope);
};

export default randomNumberGenerator;
