import { MESSAGE } from "./constants/messages.js";
import { Console, Random } from "@woowacourse/mission-utils";

export class App {
  async play() {
    this.getInputValue();
  }

  startGame() {}

  async getInputValue() {
    Console.print(MESSAGE.START);
    const carNames = await Console.readLineAsync("");
    Console.print(MESSAGE.INPUT);
    const tryNumber = await Console.readLineAsync("");

    return { carNames, tryNumber };
  }
}

export default App;
