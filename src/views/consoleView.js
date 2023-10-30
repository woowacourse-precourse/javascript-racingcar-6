const { Console } = require("@woowacourse/mission-utils");

class ConsoleView {
  static print(message) {
    Console.print(message);
  }

  static async readLineAsync(message) {
    return await Console.readLineAsync(message);
  }
}

module.exports = ConsoleView;
