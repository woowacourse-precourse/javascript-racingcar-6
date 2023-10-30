import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../constants/constants";

class OutputView {
  // car의 moveCount를 받아서 '-'의 수로 표현
  printTotalProgress() {}

  printSingleRaceResult({ car, progress }) {
    const result = `${car} : ${progress}`;
    Console.print(result);
  }
  printWinner() {
    Console.print(MESSAGE.GAME_RESULT + `${winner}`);
  }
}

export default OutputView;
