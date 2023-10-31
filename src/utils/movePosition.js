import { Random } from '@woowacourse/mission-utils';
import { CONSTANT, SETTING } from '../Constant/CONSTANT.js';

export default function movePosition() {
  const number = Random.pickNumberInRange(SETTING.startNum, SETTING.endNum);
  if (number < SETTING.middleNum) {
    return CONSTANT.fail;
  }
  if (number >= SETTING.middleNum) {
    return CONSTANT.complete;
  }
}
