import { Random } from "@woowacourse/mission-utils";
import OutputView from "../view/OutputView.js";

class Game {
  advanceCondition() {
    const number = Random.pickNumberInRange(0, 9);
    if (number >= 4) {
      return true;
    }

    return false;
  }

  execute(cars, number) {
    const score = [...new Array(cars.length).fill("")];
    let round = 0;
    while (round < number) {
      this.executeByRound(cars, score);

      round += 1;
    }

    return score;
  }

  executeByRound(cars, score) {
    cars.forEach((_, idx) => {
      if (this.advanceCondition()) {
        score[idx] += "-";
      }
      OutputView.print(`${cars[idx]} : ${score[idx]}`);
    });
  }

  selectWinner(cars, result) {
    const maxScore = Math.max(...result.map((el) => el.length));
    const winner = cars.filter((_, idx) => result[idx].length === maxScore);

    return winner;
  }
}

export default Game;
