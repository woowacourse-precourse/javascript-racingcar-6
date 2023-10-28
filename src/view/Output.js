import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../util/constants.js";

class Output {
  racingStartMessage() {
    Console.print(MESSAGE.racingResult);
  }

  eachRacingResult(carName, winner) {
    for (let i = 0; i < carName.length; i++) {
      Console.print(`${carName[i]} : ${winner[i]}`);
    }
    Console.print(``);
  }

  finalResult(finalWinner) {
    Console.print(`${MESSAGE.finalMessage}${finalWinner.join(`, `)}`);
  }
}

export default Output;
