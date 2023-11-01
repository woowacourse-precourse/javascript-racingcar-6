import { Random } from '@woowacourse/mission-utils';
import { GAME_RANDOM_RANGE } from '../constants/GameSetting.js';

export default function RandomInRange() {
  return Random.pickNumberInRange(GAME_RANDOM_RANGE.start, GAME_RANDOM_RANGE.end);
}
