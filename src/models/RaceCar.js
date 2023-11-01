import { Console, Random } from "@woowacourse/mission-utils";

export default class RaceCar {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  go() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
      this.distance += 1;
    }
  }

  isWinner(maxDistance) {
    return this.distance === maxDistance;
  }
}
