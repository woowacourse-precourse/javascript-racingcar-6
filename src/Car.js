import { Random } from "@woowacourse/mission-utils";
import { CAN_GO_NUM, GO_SYMBOL, MAX_NUM, MIN_NUM } from "./constant/rule";

class Car {
  constructor(name, count) {
    this.name = name;
    this.count = count;
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
  }
}

export default Car;
