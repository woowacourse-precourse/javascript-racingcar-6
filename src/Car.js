import { MissionUtils } from "@woowacourse/mission-utils";

class Car {
  constructor(name, resultString = "") {
    this.name = name;
    this.resultString = resultString;
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

let i = new Car("apple");
console.log(i.runOrNot(i.resultString));
