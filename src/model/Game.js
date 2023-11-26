import { Random } from "@woowacourse/mission-utils";

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
    const result = [...new Array(this.cars.length).fill(0)];
    result.forEach((score) => {
      this.advanceCondition() ? (score += 1) : score;
    });

    return result;
  }
}

export default Game;
