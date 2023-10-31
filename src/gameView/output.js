import { Console } from "@woowacourse/mission-utils";

class Output {
  printGameResult() {
    Console.print("실행결과");
  }

  printCarStatusResult(cars) {
    cars.forEach((car) => {
      Console.print(`${car.getName()} : ${"-".repeat(car.getMoveCount())}`);
    });
    Console.print("");
  }

  printWinners(winners) {
    Console.print(`최종 우승자: ${winners.join(",")}`);
  }
}
export default Output;
