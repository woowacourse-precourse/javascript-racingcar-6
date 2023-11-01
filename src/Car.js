import constants from "./constants";
import { Random } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.Count = 0;
  }

  move = () => {
    const randomNumber = Random.pickNumberInRange(
      constants.NUMBER_RANGE_MIN,
      constants.NUMBER_RANGE_MAX
    );

    if (randomNumber >= constants.JUDGE_NUMBER) {
      this.Count++;
    }
  };

  printScore = () => {
    return `${this.name} : ${"-".repeat(this.Count)}`;
  };
}

export default Car;
