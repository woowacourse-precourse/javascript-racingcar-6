import { Console, MissionUtils } from "@woowacourse/mission-utils";
import { RESULT_HEADER, SPACE_LINE } from "../utills/Constants.js";

export default class PlayGame {
  progress(carList, gameCount) {
    const carMovingCountList = this.makeCarMovingCountList(carList);
    return this.repeatCount(gameCount, carMovingCountList);
  }

  showCount(count) {
    return "-".repeat(count);
  }

  printCarListElement(name, count) {
    Console.print(`${name} : ${this.showCount(count)}`);
  }

  makeCarMovingCountList(carList) {
    Console.print(RESULT_HEADER);
    return carList.map((car) => ({ name: car, count: 0 }));
  }

  repeatCount(gameCount, carMovingCountList) {
    while (gameCount > 0) {
      carMovingCountList = this.moveCar(carMovingCountList);
      gameCount--;
    }
    return carMovingCountList;
  }

  moveCar(carMovingCountList) {
    carMovingCountList.forEach((car) => {
      const RandomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
      car.count += RandomNumber >= 4 ? 1 : 0;
      this.printCarListElement(car.name, car.count);
    });
    Console.print(SPACE_LINE);
    return carMovingCountList;
  }
}
