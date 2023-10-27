import { Random } from "@woowacourse/mission-utils";
import { CAN_GO_NUM, GO_SYMBOL, MAX_NUM, MIN_NUM } from "./constant/rule.js";

class Car {
  constructor(name) {
    this.name = name;
    this.result = "";
  }

  getRandomNumber() {
    const num = Random.pickNumberInRange(MIN_NUM, MAX_NUM);
    return num;
  }

  decideGo() {
    const randomNumber = this.getRandomNumber();

    if (randomNumber >= CAN_GO_NUM) {
      this.result += GO_SYMBOL;
    }

    console.log(this.name, this.result);
  }
}

export default Car;
