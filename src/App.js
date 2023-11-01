import { Console } from "@woowacourse/mission-utils";
import {
  getCarName,
  getMoveNumber,
  getCarsMovedCount,
} from "./functions/input";
import { moveCars, printResult } from "./functions/move";
import { getWinner } from "./functions/winner";

class App {
  async play() {
    const names = await getCarName();
    let moveNumber = await getMoveNumber();

    const carsMovedCount = getCarsMovedCount(names);

    Console.print("실행 결과");
    while (moveNumber--) {
      moveCars(names, carsMovedCount);
      printResult(names, carsMovedCount);
    }

    Console.print("최종 우승자 : " + getWinner(names, carsMovedCount));
  }
}

export default App;
