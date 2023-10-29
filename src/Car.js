import { MissionUtils } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.dist = "";
  }

  go() {
    this.dist += "-";
  }

  getLengthOfDist() {
    return this.dist.length;
  }

  goIfNumberIsLagerThanThree() {
    const NUMBER = MissionUtils.Random.pickNumberInRange(0, 9);
    if (NUMBER > 3) this.go();
  }

  printResult() {
    MissionUtils.Console.print(`${this.name} : ${this.dist}`);
  }
}

export default Car;
