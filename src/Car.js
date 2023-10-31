import { MissionUtils } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  forward() {
    this.position++;
  }

  print() {
    MissionUtils.Console.print(this.name + " : " + "-".repeat(this.position));
  }
}

export default Car;
