import { MissionUtils } from "@woowacourse/mission-utils";

class CarRace {
  constructor(name) {
    this.name = name;
    this.track = "";
  }

  move() {
    const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomNum >= 4) {
      this.track += 1;
    }
  }
}

export default Car;
