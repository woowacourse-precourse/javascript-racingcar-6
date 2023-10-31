import { MESSAGE } from "./constants/messages.js";
import { Console, Random } from "@woowacourse/mission-utils";

export class App {
  async play() {
    this.getInputValue();
  }

  startGame(params) {}

  async getInputValue() {
    Console.print(MESSAGE.START);
    const carNames = await Console.readLineAsync("");
    Console.print(MESSAGE.INPUT);
    const tryNumber = await Console.readLineAsync("");

    return { carNames, tryNumber };
  }

  gameStart(tryNumber) {
    Console.print("실행 결과");
    for (let i = 0; i < tryNumber; i++) {
      this.resultResult;
    }
  }

  resultOutput(...carNames) {
    carNames.forEach((name) => Console.print(`${name} : `));
  }
}

export default App;
