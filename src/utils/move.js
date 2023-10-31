import { MissionUtils } from "@woowacourse/mission-utils";

const getNumber = () => {
  return MissionUtils.Random.pickNumberInRange(0, 9);
};
