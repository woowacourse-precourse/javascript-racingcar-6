import { MissionUtils } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.moveCount = 0;
  }

  // 전진 여부 결정
  playGame() {
    const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomNum >= 4) this.moveCount++;
    // console.log(`${this.name}의 moveCount = ${this.moveCount}, 난수 = ${randomNum}`);
  }

}

export default Car;