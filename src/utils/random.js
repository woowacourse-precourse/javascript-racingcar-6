import { MissionUtils } from "@woowacourse/mission-utils";

export const rangeNumber = (min, max) => {
  return MissionUtils.Random.pickNumberInRange(min, max);
};
