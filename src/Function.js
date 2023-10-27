import { MissionUtils } from "@woowacourse/mission-utils";

function generateRandomNumber() {
  return MissionUtils.Random.pickNumberInRange(0, 9);
}

function isCarForward(number) {
  if (number >= 4) {
    return true;
  } else {
    return false;
  }
}
