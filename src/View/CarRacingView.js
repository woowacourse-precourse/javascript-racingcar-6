import { Console } from "@woowacourse/mission-utils";
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
