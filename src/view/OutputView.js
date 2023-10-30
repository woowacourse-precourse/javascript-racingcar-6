import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../constants/messages.js";

class OutputView {
  static #DISTANCE = "-";
  static #NO_WINNER = "우승자 없음";

  static printShowResult() {
    Console.print(OUTPUT_MESSAGE.SHOW_RESULT);
  }

  static printCarDistanceRecord(carDistanceRecord) {
    OutputView.#getCarDistanceStrings(carDistanceRecord).forEach((infoString) => {
      Console.print(infoString);
    });
    OutputView.#printBlankLine();
  }

  static printWinners(cars) {
    Console.print(`최종 우승자 : ${cars.join(", ") || OutputView.#NO_WINNER}`);
  }

  static #getCarDistanceStrings(carDistanceRecord) {
    const result = [];

    for (const carName in carDistanceRecord) {
      const distanceCount = carDistanceRecord[carName];
      const distances = new Array(distanceCount).fill(OutputView.#DISTANCE).join("");
      result.push(`${carName} : ${distances}`);
    }

    return result;
  }

  static #printBlankLine() {
    Console.print("");
  }
}

export default OutputView;
