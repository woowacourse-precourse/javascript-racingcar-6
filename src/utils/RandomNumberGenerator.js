import { Random } from '@woowacourse/mission-utils';
import { GAME_SETTING } from '../constants/Setting.js';

const RandomNumberGenerator = () =>
  Random.pickNumberInRange(
    GAME_SETTING.randomNumberMinRange,
    GAME_SETTING.randomNumberMaxRange,
  );

export default RandomNumberGenerator;
