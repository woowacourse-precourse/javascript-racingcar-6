import { MissionUtils } from '@woowacourse/mission-utils';
import { GAME_MESSAGES } from '../constants/gameMessages.js';

export const generatorRandomNumber = () => {
  return MissionUtils.Random.pickNumberInRange(
    GAME_MESSAGES.random_start_num,
    GAME_MESSAGES.random_end_num,
  );
};
