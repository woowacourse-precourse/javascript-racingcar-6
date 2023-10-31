import { MESSAGES, ERROR_MESSAGES } from "../constants.js";
import { Console } from "@woowacourse/mission-utils";

export default class RaceView {
  static displayCarNamesInput() {
    Console.print(MESSAGES.INPUT_CARNAME);
  }

  static displayTrialInput() {
    Console.print(MESSAGES.INPUT_TRIAL);
  }

  static displayRaceResult(cars) {
    Console.print(MESSAGES.RESULT);
    cars.forEach((car) => {
      Console.print(`${car.name}: ${"-".repeat(car.distance)}`);
    });
  }

  static displayWinners(winners) {
    Console.print(`${MESSAGES.WINNER}${winners.join(", ")}`);
  }

  static displayError(error) {
    Console.print(`${ERROR_MESSAGES[error]} or [ERROR] ${error}`);
  }
}
