import { Random } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  //UI 로직
  getCarName() {
    return this.name;
  }

  getCarPosition() {
    return this.position;
  }

  //비지니스 로직
  checkPosition() {
    const randomString = Random.pickNumberInRange(0, 9);
    if (randomString >= 4) {
      this.position += 1;
    }
  }
}

export default Car;
