import { Random } from "@woowacourse/mission-utils";

class NumberGenerator {
  static createRandomNumber() {
    const randomNumber = Random.pickNumberInRange(1, 9);
    return randomNumber >= 4 ? "MOVING_FORWARD" : "STOP";
  }
}

export default NumberGenerator;
