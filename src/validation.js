import { MissionUtils } from '@woowacourse/mission-utils';

const MINIMUM_MOVE_THRESHOLD = 4;
const MAXIMUM_NAME_LENTH = 5;

function isCarReadyToMove() {
  return MissionUtils.Random.pickNumberInRange(0, 9) >= MINIMUM_MOVE_THRESHOLD;
}

function validateNameLength(name) {
  if (name.length > MAXIMUM_NAME_LENTH) {
    throw Error(`[ERROR] 이름 길이가 ${MAXIMUM_NAME_LENTH}글자를 초과했습니다`);
  }
  return name;
}

export { validateNameLength, isCarReadyToMove };
