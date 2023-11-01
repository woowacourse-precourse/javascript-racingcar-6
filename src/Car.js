import { MissionUtils } from "@woowacourse/mission-utils";

class Car {
  constructor(name, runningResult = "") {
    this.name = name;
    this.runningResult = runningResult;
  }

  runOrNot(previousResult = "") {
    if (MissionUtils.Random.pickNumberInRange(0, 9) < 4) {
      return previousResult;
    } else {
      return previousResult + "-";
    }
  }
}

export default Car;
