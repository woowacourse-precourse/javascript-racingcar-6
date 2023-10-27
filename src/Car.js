import { MissionUtils } from "@woowacourse/mission-utils";

const isBreakdown = () => MissionUtils.Random.pickNumberInRange(0, 9) <= 3;

export default class Car {
  #name;

  #mileage = 0;

  constructor(name) {
    this.#name = name;
  }

  move() {
    if (isBreakdown()) return;
    this.#mileage += 1;
  }

  getName() {
    return this.#name;
  }

  getMileage() {
    return this.#mileage;
  }
}
