import { MissionUtils } from "@woowacourse/mission-utils";
import { FORWARD_MATCHING_POINT } from "../const/Messages";

export const movingForwardCase = () => {
  const number = MissionUtils.Random.pickNumberInRange(0, 9);
  return number >= FORWARD_MATCHING_POINT;
};
