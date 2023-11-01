import { Console } from "@woowacourse/mission-utils";

class OutputPrinter {
  constructor() {}

  printRaceStatus(carObjects) {
    Console.print("");
    carObjects.forEach((car, index) => {
      Console.print(`${car.name} : ${"-".repeat(car.position)}`);
    });
  }

  printGameResults(winnerList) {
    if (winnerList.length === 1) {
      Console.print("");
      Console.print(`최종 우승자 : ${winnerList[0]}`);
    } else {
      Console.print("");
      Console.print(`최종 우승자 : ${winnerList.join(", ")}`);
    }
  }
}

export default OutputPrinter;
