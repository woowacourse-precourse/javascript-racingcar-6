import * as MissionUtils from "@woowacourse/mission-utils";

export const randomNumGenerator = () => {
  return MissionUtils.Random.pickNumberInRange(0, 9);
};