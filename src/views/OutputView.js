import { Console } from "@woowacourse/mission-utils";

class OutputView {
  printRoundResultInitMessage() {
    Console.print("실행 결과");
  }

  printRoundStatus(roundResult) {
    roundResult.forEach((result) => {
      Console.print(`${result.name} : ${"-".repeat(result.position)}`);
    });
    Console.print("\n");
  }

  printWinners(winnerNames) {
    Console.print(`Winner: ${winnerNames.join(", ")}`);
  }
}

export default OutputView;
