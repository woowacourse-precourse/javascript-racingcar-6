import { RANGE } from "../constants/range.js";
import { Random } from "@woowacourse/mission-utils";

export class GameLogic {
  addMoveCount(carNames, moveCount) {
    carNames.forEach((name) => {
      if (
        Random.pickNumberInRange(RANGE.START, RANGE.END) >=
        RANGE.MOVE_THERESHOLD
      )
        moveCount[name] += "-";
    });
  }

  getMaxMoveCount(moveCount) {
    const sortedMoveCount = Object.entries(moveCount).sort(
      (a, b) => b[1].length - a[1].length
    );
    const maxMoveCount = sortedMoveCount[0][1].length;

    return maxMoveCount;
  }

  getWinnerNames(moveCount, maxMoveCount) {
    const WinnerNames = [];

    for (let car in moveCount) {
      if (moveCount[car].length === maxMoveCount) WinnerNames.push(car);
    }

    return WinnerNames;
  }
}
