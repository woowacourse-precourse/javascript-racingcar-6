import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../constants/messages.js";

class OutputView {
  static #DISTANCE = "-";
  static #NO_WINNER = "우승자 없음";

  static printShowResult() {
    Console.print(OUTPUT_MESSAGE.SHOW_RESULT);
  }

  static printCarDistanceRecord(cars, carDistanceRecord) {
    OutputView.#getCarDistanceStrings(cars, carDistanceRecord).forEach((infoString) => {
      Console.print(infoString);
    });
    OutputView.printBlankLine();
  }

  static printWinners(cars) {
    Console.print(`최종 우승자 : ${cars.join(", ") || OutputView.#NO_WINNER}`);
  }

  static printBlankLine() {
    Console.print("");
  }

  static #getCarDistanceStrings(cars, carDistanceRecord) {
    const carNames = cars.getCarNames();

    return carNames.map((name) => {
      const distanceCount = carDistanceRecord[name] || 0;
      const distances = new Array(distanceCount).fill(OutputView.#DISTANCE).join("");
      return `${name} : ${distances}`;
    });
  }
}

export default OutputView;
