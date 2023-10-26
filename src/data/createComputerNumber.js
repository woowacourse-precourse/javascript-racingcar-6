import { MissionUtils } from "@woowacourse/mission-utils";

export default function createComputerNumber() {
  const number = MissionUtils.Random.pickNumberInRange(1, 9);
  return number;
}
