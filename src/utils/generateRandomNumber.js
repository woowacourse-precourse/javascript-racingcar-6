import { Random } from '@woowacourse/mission-utils';
import { GAME_RULL } from '../constants/gameRules';

export default function generateRandomNumber() {
  return Random.pickNumberInRange(
    GAME_RULL.START_PICK_NUMBER,
    GAME_RULL.END_PICK_NUMBER,
  );
}
