import { MissionUtils } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.moveCount = 0;
  }

  static #maxMoveCount = 0;

  static getMaxMoveCount() {
    return Car.#maxMoveCount;
  }

  // 전진 여부 결정
  playGame() {
    const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomNum >= 4) this.moveCount++;
    if (Car.#maxMoveCount < this.moveCount) Car.#maxMoveCount = this.moveCount;
  }

  printMove() {
    return '-'.repeat(this.moveCount);
  }

}

export default Car;