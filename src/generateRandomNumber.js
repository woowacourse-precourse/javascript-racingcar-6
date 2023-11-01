import { MissionUtils } from "@woowacourse/mission-utils";

const generateRandomNumber = () => {
  return MissionUtils.Random.pickNumberInRange(0, 9);
}

export default generateRandomNumber;