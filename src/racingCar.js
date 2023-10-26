import { Random, Console } from "@woowacourse/mission-utils";

export default class racingCar {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  carMoveEvaluation() {
    const randomNumber = this.genarateRandomNumber();
    if (randomNumber >= 4) this.distance++;
    this.printRacingCarStatus();
  }

  genarateRandomNumber() {
    return Random.pickNumberInRange(0, 9);
  }

  printRacingCarStatus() {
    Console.print(`${this.name} : ${"-".repeat(this.distance)}`);
  }
}
