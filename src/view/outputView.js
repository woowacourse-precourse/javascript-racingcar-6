import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../constants/constants";

class OutputView {
  printGameResult({ car, progress }) {
    const result = `${car} : ${progress}`;
    Console.print(result);
  }
  printWinner() {
    const winners = cars.join(",");
    Console.print(MESSAGE.GAME_RESULT + `${winners}`);
  }
}

export default OutputView;
