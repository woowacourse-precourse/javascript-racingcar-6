import { GMAEVALIDATION } from "../constants/validation.js";
import { Console } from "@woowacourse/mission-utils";

class Car {
  constructor(input) {
    (this.name = input), (this.moveForward = ""), (this.moveCount = 0);
  }

  static move(object, randomNum) {
    if (randomNum >= GMAEVALIDATION.car_move_condition) {
      object.moveForward += "-";
      object.moveCount += 1;
    }
  }
  static printMove(object) {
    Console.print(`${object.name} : ${object.moveForward}`);
  }
}

export default Car;
