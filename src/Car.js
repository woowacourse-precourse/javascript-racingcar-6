import { MissionUtils } from "@woowacourse/mission-utils";

class Car {
  name = "";
  position = 0;

  constructor(carName) {
    this.name = carName;
  }

  static #randomNumGenerate() {
    const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
    return randomNum;
  }

  #printPosition() {
    MissionUtils.Console.print(`${this.name} : ${"-".repeat(this.position)}`);
  }

  move() {
    const randomNum = Car.#randomNumGenerate();
    if (randomNum >= 4) this.position += 1;
    this.#printPosition();
  }
}

export default Car;
