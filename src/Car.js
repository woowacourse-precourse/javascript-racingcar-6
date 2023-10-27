import { Random } from "@woowacourse/mission-utils";
import { GO_SYMBOL, RANDOM } from "./constant/rule.js";

class Car {
  constructor(name) {
    this.name = name;
    this.result = "";
  }

  getRandomNumber() {
    const num = Random.pickNumberInRange(RANDOM.MIN_RANGE, RANDOM.MAX_RANGE);
    return num;
  }

  decideGo() {
    const randomNumber = this.getRandomNumber();

    if (randomNumber >= RANDOM.CAN_GO_NUM) {
      this.result += GO_SYMBOL;
    }

    return this;
  }

  getCurrentCarState() {
    return [this.name, this.result];
  }
}

export default Car;
