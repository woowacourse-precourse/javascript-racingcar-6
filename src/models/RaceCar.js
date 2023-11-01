import { Console, Random } from "@woowacourse/mission-utils";

export default class RaceCar {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  go() {
    const randomNumber = Random.pickNumberInRange(0, 9);

    // 랜덤 숫자 로깅
    // console.log(`Generated number for ${this.name} : ${randomNumber}`);

    if (randomNumber >= 4) {
      this.distance += 1;
    }
    // console.log(`Distance for ${this.name}: ${this.distance}`);
  }

  isWinner(maxDistance) {
    return this.distance === maxDistance;
  }
}
