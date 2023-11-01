import { RANDOM_NUMBER_THRESHOLD } from "../utils/constants.js";
import { Random } from "@woowacourse/mission-utils";
import IOManager from "../utils/IOManager.js";

class Car {
  constructor() {
    this.ioManager = new IOManager();
  }

  createRandomNum() {
    return Random.pickNumberInRange(0, 9);
  }

  moveOrStop(randomNum) {
    if (randomNum >= RANDOM_NUMBER_THRESHOLD) {
      return 1;
    }
    if (randomNum < RANDOM_NUMBER_THRESHOLD) {
      return 0;
    }
  }

  moveAllCars(carsName, carsPosition) {
    carsName.forEach((carName, index) => {
      const randomNum = this.createRandomNum();

      carsPosition[index] += this.moveOrStop(randomNum);
      this.ioManager.printCurrentPosition(carName, carsPosition[index]);
    });
  }
}

export default Car;
