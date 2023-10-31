import { Random } from '@woowacourse/mission-utils';
import { MOVESET, RANDOMSET } from '../Constant/SETTING.js';

export default function movePosition() {
  const number = Random.pickNumberInRange(RANDOMSET.startNum, RANDOMSET.endNum);
  if (number < RANDOMSET.middleNum) {
    return MOVESET.stay;
  }
  if (number >= RANDOMSET.middleNum) {
    return MOVESET.move;
  }
}
