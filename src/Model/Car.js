import { Random } from "@woowacourse/mission-utils";
import Constant from "../util/Constant.js";

class Car {
  #step;

  constructor(name) {
    this.name = name;
    this.#step = 0;
  }

  decideGoOrStop() {
    const num = Random.pickNumberInRange(Constant.MIN_NUM, Constant.MAX_NUM);
    if (num >= Constant.STANDARD_T0_GO) {
      this.#step += 1;
    }
  }

  getStep() {
    return this.#step;
  }
}

export default Car;
