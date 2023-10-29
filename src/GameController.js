import { RandomNumberGenerator } from "./utils/RandomNumberGenerator.js";
import { User } from "./User.js";
import { Console } from "@woowacourse/mission-utils";
import { Car } from "./Car.js";

export class GameController {
  constructor() {
    this.user = new User();
    this.carList = [];
  }

  async startGame() {
    const names = await this.user.inputCarNames();
    const tryNumber = await this.user.inputTryNumber();

    names.forEach((name) => this.carList.push(new Car(name)));
  }
}
