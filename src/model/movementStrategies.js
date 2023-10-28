import { GameSettings } from '../constants/GameSettings.js';
import { Random } from '@woowacourse/mission-utils';

export const randomMovementStrategy = {
  shouldMove() {
    const randomNumber = Random.pickNumberInRange(
      GameSettings.MIN_RANDOM_NUMBER,
      GameSettings.MAX_RANDOM_NUMBER
    );
    return randomNumber >= GameSettings.MOVE_THRESHOLD;
  }
};
