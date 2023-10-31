import { Random } from "@woowacourse/mission-utils";

export class Car {
    constructor(name) {
      this.name = name;
      this.position = 0;
    }
  
    move() {
      const randomNumber = Random.pickNumberInRange(0, 9);
      if (randomNumber >= 4) {
        this.position += 1;
      }
    }
  }
  