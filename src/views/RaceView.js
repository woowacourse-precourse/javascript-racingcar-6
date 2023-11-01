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
    Console.print("");
    if (!RaceView.isResultMessagePrinted) {
      Console.print(MESSAGES.RESULT);
      RaceView.isResultMessagePrinted = true;
    }

    cars.forEach((car) => {
      Console.print(`${car.name} : ${"-".repeat(car.distance)}`);
    });
  }

  static displayWinners(winners) {
    Console.print("");
    Console.print(`${MESSAGES.WINNER}${winners.join(", ")}`);
  }

  static displayError() {}
}
