import { Console } from "@woowacourse/mission-utils";

class Attempt {
  async userInputTry() {
    const input = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");

    this.userInput = Number(input);

    if (!this.validate()) throw new Error("[ERROR]");
    return true;
  }

  validate() {
    return (
      !isNaN(this.userInput) &&
      this.userInput > 0 &&
      Number.isInteger(this.userInput)
    );
  }
}

export default Attempt;
