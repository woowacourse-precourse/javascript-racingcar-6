import { MissionUtils } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.dist = "";
  }

  goIfNumberIsLagerThanThree() {
    const NUMBER = MissionUtils.Random.pickNumberInRange(0, 9);
    if (NUMBER > 3) this.dist += "-";
  }

  printResult() {
    MissionUtils.Console.print(`${this.name} : ${this.dist}`);
  }
}

export default Car;
