import { MissionUtils } from "@woowacourse/mission-utils";

export const randomNumber = () => {
  const number = MissionUtils.Random.pickNumberInRange(0, 9);
  return number;
};
