import { Random } from "@woowacourse/mission-utils";

export default class RaceCar {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  go() {
    if (Random.pickNumberInRange(0, 9) >= 4) {
      this.distance++;
    }
  }

  isWinner(maxDistance) {
    return this.distance === maxDistance;
  }
}
