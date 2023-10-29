import { MissionUtils } from "@woowacourse/mission-utils";

export function randomNumber() {
  return MissionUtils.Random.pickNumberInRange(0, 9);
}
