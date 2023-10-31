import { Random } from "@woowacourse/mission-utils";

export default class Car {
  constructor(name) {
    this.name = name;
    this.move = 0;
  }

  moveCar() {
    const randomMove = Random.pickNumberInRange(0, 9);

    if (randomMove >= 4) {
      this.move++;
    } else {
      this.move = this.move;
    }
  }
}
