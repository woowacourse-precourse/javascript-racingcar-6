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
    const result = [...new Array(this.cars.length).fill("")];
    let round = 0;
    while (round < this.number) {
      this.executeByRound(result);

      round += 1;
    }

    return result;
  }

  executeByRound(result) {
    this.cars.forEach((_, idx) => {
      if (this.advanceCondition()) {
        result[idx] += "-";
      }
      OutputView.print(`${this.cars[idx]}: ${result[idx]}`);
    });
  }
}

export default Game;
