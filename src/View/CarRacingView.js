import { Console } from "@woowacourse/mission-utils";
class CarRacingView {
  printResult(namesAndDistances) {
    namesAndDistances.forEach((car) => {
      Console.print(car[0] + " : " + "-".repeat(car[1]));
    });
  }

  printWinner(namesAndDistances) {
    let winnerCount = Math.max(...namesAndDistances.map((car) => car[1]));
    let winners = [];

    namesAndDistances.forEach((car) => {
      if (car[1] === winnerCount) {
        winners.push(car[0]);
      }
    });

    if (winners.length === 1) {
      Console.print("최종 우승자 : " + winners[0]);
    } else {
      Console.print("최종 우승자 : " + winners.join(", "));
    }
  }

  printResultMessage() {
    Console.print("\n실행 결과");
  }

  lineBreak() {
    Console.print("\n");
  }
}
export default CarRacingView;
