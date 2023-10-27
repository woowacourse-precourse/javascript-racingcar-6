import { MissionUtils } from "@woowacourse/mission-utils";

class Car {
  name;
  moved_distance = 0;

  constructor(name) {
    this.name = name;
  }

  moveOrNot() {
    const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
	if (randomNum >= 4) {
	  this.moved_distance++;
	}
	MissionUtils.Console.print(`${this.name}: ${'-'.repeat(this.moved_distance)}`);
  }

}

export default Car;
