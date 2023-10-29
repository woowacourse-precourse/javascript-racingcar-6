import { Random } from "@woowacourse/mission-utils";

export default class Car {
  constructor(name) {
    this.name = name;
    this.move = 0;
  }

  move() {
    const randomMove = Random.pickNumberInRange(0, 9);

    if (randomMove >= 4) {
      this.move++;
    }
  }
}
