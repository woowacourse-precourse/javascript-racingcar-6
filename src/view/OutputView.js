import { Console } from "@woowacourse/mission-utils";

const OutputView = {
  printRaceStartMessage() {
    Console.print("\n실행 결과");
  },

  printRaceScore(name, score) {
    Console.print(`${name} : ${"-".repeat(score)}`);
  },

  printNewRound() {
    Console.print("");
  },

  printGameWinnerMessage(winners) {
    Console.print(`최종 우승자 : ${winners.join(", ")}`);
  },
};

export default OutputView;
