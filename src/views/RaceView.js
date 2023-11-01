import { MESSAGES, ERROR_MESSAGES } from "../constants/Messages.js";
import { Console } from "@woowacourse/mission-utils";

export default class RaceView {
  static isResultMessagePrinted = false;

  static displayCarNamesInput() {
    Console.print(MESSAGES.INPUT_CARNAME);
  }

  static displayTrialInput() {
    Console.print(MESSAGES.INPUT_TRIAL);
  }

  static displayRaceResult(cars) {
    if (!RaceView.isResultMessagePrinted) {
      Console.print(MESSAGES.RESULT);
      RaceView.isResultMessagePrinted = true;
    }

    cars.forEach((car) => {
      Console.print(`${car.name} : ${"-".repeat(car.distance)}`);
    });

    Console.print("");
  }

  static displayWinners(winners) {
    Console.print(`${MESSAGES.WINNER}${winners.join(", ")}`);
  }

  static displayError(error) {
    Console.print(`${ERROR_MESSAGES[error]}`);
  }
}
