import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "./constant/MESSAGE.js";

class OutputHandler {
  static printGameExecution(roundArray) {
    Console.print(MESSAGE.GAME_RESULT);
    roundArray.forEach((round) => this.printRoundResult(round));
  }

  static printRoundResult(carArray) {
    carArray.forEach((car) =>
      Console.print(`${car.name} : ${this.generateHyphens(car.position)}`)
    );
    Console.print("");
  }

  static generateHyphens(number) {
    return "-".repeat(number);
  }
}

export default OutputHandler;
