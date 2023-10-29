import { MissionUtils } from "@woowacourse/mission-utils";

function MakeRandomNum() {
  return MissionUtils.Random.pickNumberInRange(0, 9);
}

export default MakeRandomNum;
