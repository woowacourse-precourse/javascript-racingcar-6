import { Random } from "@woowacourse/mission-utils";
import Constant from "../util/Constant.js";

class Car {
  #stepCount;

  constructor(name) {
    this.name = name;
    this.#stepCount = 0;
  }

  decideGoOrStop() {
    const num = Random.pickNumberInRange(Constant.MIN_NUM, Constant.MAX_NUM);
    if (num >= Constant.STANDARD_T0_GO) {
      this.#stepCount += 1;
    }
  }

  get stepCount() {
    return this.#stepCount;
  }
}

export default Car;
