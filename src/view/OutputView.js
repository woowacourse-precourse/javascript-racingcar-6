import { Console } from "@woowacourse/mission-utils";

const OutputView = {
  printRaceResultMessage() {
    Console.print("\n실행 결과");
  },

  printRaceScore(car) {
    Console.print(`${car} : ${this.cars[car]}`);
  },

  printGameWinnerMessage(winners) {
    Console.print(`최종 우승자 : ${winners.join(", ")}`);
  },
};

export default OutputView;
