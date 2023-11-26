import { Random } from "@woowacourse/mission-utils";
import OutputView from "../view/OutputView.js";

class Game {
  constructor(cars, number) {
    this.cars = cars;
    this.number = number;
  }

  advanceCondition() {
    const random = Random.pickNumberInRange(0, 9);
    if (random >= 4) {
      return true;
    }

    return false;
  }

  execute() {
    const score = [...new Array(this.cars.length).fill("")];
    let round = 0;
    while (round < this.number) {
      this.executeByRound(score);

      round += 1;
    }

    return score;
  }

  executeByRound(score) {
    this.cars.forEach((_, idx) => {
      if (this.advanceCondition()) {
        score[idx] += "-";
      }
      OutputView.print(`${this.cars[idx]}: ${score[idx]}`);
    });
  }

  selectWinner(result) {
    const maxScore = Math.max(...result.map((el) => el.length));
    const winner = this.cars.filter(
      (_, idx) => result[idx].length === maxScore
    );

    return winner;
  }
}

export default Game;
