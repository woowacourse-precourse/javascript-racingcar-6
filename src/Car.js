import * as MissionUtils from "@woowacourse/mission-utils";

class Car {
  #name = "";
  #moveCount = 0;

  constructor(name) {
    this.#name = name;
  }

  canMove() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);

    return randomNumber >= 4;
  }

  move() {
    if (this.canMove()) {
      this.#moveCount += 1;
    }
  }

  getName() {
    return this.#name;
  }

  getMoveCount() {
    return this.#moveCount;
  }

  print() {
    MissionUtils.Console.print(
      `${this.#name} : ${"-".repeat(this.#moveCount)}`
    );
  }
}

export default Car;
