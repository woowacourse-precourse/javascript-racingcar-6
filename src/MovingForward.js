import { Console } from "@woowacourse/mission-utils";
import { GAME_HELP } from "../constants/GAME_HELP.js";
import Car from "./Car.js";
import RandomNumber from "./RandomNumber.js";

class MovingForward {
  constructor(car) {
    this.car = car;
    this.racingArray = [];
  }

  #forwardOrStop() {
    return RandomNumber.getRandomNumber() > 3
      ? GAME_HELP.FORWARD
      : GAME_HELP.STOP;
  }

  createRacingArray() {
    const carCount = this.car.carNameList.length;
    this.racingArray = Array.from({ length: carCount }, () => "");
    return this.racingArray;
  }

  #updateRacing(carIndex) {
    return (this.racingArray[carIndex] += this.#forwardOrStop());
  }

  #showCarAndRacing(carIndex) {
    Console.print(
      `${this.car.carNameList[carIndex]} : ${this.racingArray[carIndex]}`
    );
  }

  async doOneCycleRacing() {
    const carCount = this.car.carNameList.length;
    for (let i = 0; i < carCount; i++) {
      await this.#updateRacing(i);
      await this.#showCarAndRacing(i);
    }
    Console.print(" ");
  }
}

export default MovingForward;
