import { Console } from "@woowacourse/mission-utils";
import { ASK, MESSAGE } from "./constant/message.js";

class Print {
  static async getCars() {
    const enteredCars = await Console.readLineAsync(ASK.CARS);
    return enteredCars;
  }

  static async getTryCount() {
    const count = await Console.readLineAsync(ASK.TRY_COUNT);
    return count;
  }

  static showResultPhrase() {
    Console.print(MESSAGE.RESULT_PHRASE);
  }

  static showRaceResult(name, result) {
    Console.print(MESSAGE.RACING_RESULT(name, result));
  }

  static showEmptyNewLine() {
    Console.print("");
  }

  static showWinners(winners) {
    Console.print(MESSAGE.WINNERS(winners));
  }
}

export default Print;
