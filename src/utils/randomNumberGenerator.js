import { MissionUtils } from "@woowacourse/mission-utils";

const randomNumberGenerator = () => {
  return MissionUtils.Random.pickNumberInRange(0, 9);
}

export default randomNumberGenerator;