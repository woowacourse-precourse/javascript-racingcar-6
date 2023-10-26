import { Random } from "@woowacourse/mission-utils";
import { MAX_NUM, MIN_NUM } from "./constant/rule";

class Car {
  constructor(name, count) {
    this.name = name;
    this.count = count;
  }

  getRandomNumber() {
    const num = Random.pickNumberInRange(MIN_NUM, MAX_NUM);
    return num;
  }
}

export default Car;
