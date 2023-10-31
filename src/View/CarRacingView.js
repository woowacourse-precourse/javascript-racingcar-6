import { Console } from "@woowacourse/mission-utils";
import CONSTANTS from "../Constants/Constants.js";

class CarRacingView {
  printResult(carData) {
    carData.forEach((carData) => {
      Console.print(carData[0] + " : " + "-".repeat(carData[1]));
    });
  }

  printWinner(carData) {
    let winnerCount = Math.max(...carData.map((carData) => carData[1]));
    let winners = [];

    carData.forEach((carData) => {
      if (carData[1] === winnerCount) {
        winners.push(carData[0]);
      }
    });

    if (winners.length === 1) {
      Console.print(CONSTANTS.RESULT.WINNER + winners[0]);
    } else {
      Console.print(CONSTANTS.RESULT.WINNER + winners.join(", "));
    }
  }

  printResultMessage() {
    Console.print(CONSTANTS.RESULT.RESULT_MESSAGE);
  }

  lineBreak() {
    Console.print("\n");
  }
}
export default CarRacingView;
