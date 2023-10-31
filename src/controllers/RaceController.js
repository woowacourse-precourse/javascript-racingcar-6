import { Console, Random } from "@woowacourse/mission-utils";
import ConsoleView from "../views/ConsoleView.js";
class RaceController {
  static RESULT_NOTIFICATION = "실행 결과";
  static FINAL_RESULT_NOTIFICATION = "최종 우승자";
  constructor() {
    this.consoleView = new ConsoleView();
  }

  createNumber = (carList) => {
    for (const car in carList) {
      const moveNum = Random.pickNumberInRange(0, 9);
      if (moveNum >= 4) {
        carList[car] += 1;
      }
    }
    this.consoleView.printRaceResult(carList);
  };

  moveCar = (inputChance, carList) => {
    Console.print(RaceController.RESULT_NOTIFICATION);
    for (let i = 0; i < inputChance; i++) {
      this.createNumber(carList);
    }
    this.finalResult(carList);
  };

  finalResult = (carList) => {
    const maxScore = Math.max(...Object.values(carList));
    const winner = Object.keys(carList).filter(
      (car) => carList[car] === maxScore,
    );

    Console.print(`${RaceController.FINAL_RESULT_NOTIFICATION} : ${winner}`);
  };
}

export default RaceController;
// 재환,지은,수잔
