const { MissionUtils } = require("@woowacourse/mission-utils");

class RandomUtil {
  static pickNumberInRange(min, max) {
    return MissionUtils.Random.pickNumberInRange(min, max);
  }
}

module.exports = RandomUtil;
