import { MissionUtils } from "@woowacourse/mission-utils";

class RandomNumberGenerator {
  RANGE_START = 0;
  RANGE_END = 9;

  generate = () => {
    return MissionUtils.Random.pickNumberInRange(
      this.RANGE_START,
      this.RANGE_END
    );
  };
}

export default RandomNumberGenerator;
