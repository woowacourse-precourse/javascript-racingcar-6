import { MissionUtils, Console, Random } from "@woowacourse/mission-utils";

class App {
  checkNumber(input) {
    const numericRegex = /^[0-9]+$/;
    if (numericRegex.test(input) === false)
      throw new Error("[Error]: invalid number");
  }

  rollDice() {
    return Random.pickNumberInRange(0, 9);
  }

  async play() {
    const number = Console.readLineAsync("시도할 횟수는 몇 회인가요?");
    this.checkNumber(number);
  }
}

export default App;
