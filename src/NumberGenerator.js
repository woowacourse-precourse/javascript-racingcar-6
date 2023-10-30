import { Random } from "@woowacourse/mission-utils";

class NumberGenerator {
  constructor() {}

  createRandomNumbers() {
    const randomNumber = Random.pickNumberInRange(0, 9);

    if (randomNumber >= 4) {
      return true;
    } else {
      return false;
    }
  }
}

export default NumberGenerator;
