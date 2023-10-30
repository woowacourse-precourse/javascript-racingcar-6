import { Console, Random } from "@woowacourse/mission-utils";
import { GAME_MESSAGE } from "./constants/index.js";

class Car {
  constructor(carName) {
    this.carName = carName;
  }

  moveForward(tryCount) {
    this.tryCount = tryCount;
    const randomValue = Random.pickNumberInRange(0, 9);
    let countForward = [];
    if (randomValue > 4) {
      countForward.push('-')
    }
    Console.print(`${this.carName} : ${countForward.join("")}`)
  }
}

export default Car;
