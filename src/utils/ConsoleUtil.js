const { MissionUtils } = require("@woowacourse/mission-utils");

class ConsoleUtil {
  static async readLineAsync(message) {
    return MissionUtils.Console.readLineAsync(message);
  }

  static print(message) {
    MissionUtils.Console.print(message);
  }
}

module.exports = ConsoleUtil;
