import { MissionUtils, Console, Random } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.cars = [];
    this.score = [];
    this.gameCount = 0;
  }

  checkNumber(input) {
    const numericRegex = /^[0-9]+$/;
    if (numericRegex.test(input) === false)
      throw new Error("[Error]: invalid number");
  }

  rollDice() {
    return Random.pickNumberInRange(0, 9);
  }

  async play() {
    try {
      const inputNumber = await Console.readLineAsync(
        "시도할 횟수는 몇 회인가요?\n"
      );
      this.checkNumber(inputNumber);
      this.gameCount = inputNumber;
    } catch (error) {
      console.log(error);
    }
  }
}

export default App;
