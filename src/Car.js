import { CONSTANTS, ERROR_MESSAGE } from "./Constants.js";
import { Console, Random } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.checkName(name);
    this.name = name;
    this.position = CONSTANTS.MIN_DISTANCE;
  }

  checkName(name) {
    if (name.length > CONSTANTS.MIN_NAME_LENGTH) {
      throw new Error(ERROR_MESSAGE.ERROR_CAR_NAME_LENGTH_EXCEED);
    }
  }

  move() {
    const randomNumber = Random.pickNumberInRange(1, 9);
    if (randomNumber >= CONSTANTS.MIN_MOVE_VALUE) {
      this.position += 1;
    }
    this.printCurrentRace();
  }

  printCurrentRace() {
    Console.print(`${this.name} : ${"-".repeat(this.position)}`);
  }
}

export default Car;
