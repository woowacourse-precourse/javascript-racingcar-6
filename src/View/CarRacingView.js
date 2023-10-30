import { Console } from "@woowacourse/mission-utils";
class CarRacingView {
  numToBar(num) {
    let bar = "";
    for (let i = 0; i < num; i++) {
      bar += "-";
    }
    return bar;
  }

  printResult(namesAndDistances) {
    for (let i = 0; i < namesAndDistances.length; i++) {
      Console.print(
        namesAndDistances[i][0] + " : " + this.numToBar(namesAndDistances[i][1])
      );
    }
  }

  printWinner(namesAndDistances) {
    let winnerCount = Math.max(...namesAndDistances.map((car) => car[1]));
    let winners = [];
    for (let i = 0; i < namesAndDistances.length; i++) {
      if (namesAndDistances[i][1] == winnerCount) {
        winners.push(namesAndDistances[i][0]);
      }
    }
    if (winners.length == 1) {
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
