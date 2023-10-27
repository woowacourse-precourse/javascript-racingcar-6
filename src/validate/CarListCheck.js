import { ERROR } from "../util/constants.js";
import { Console } from "@woowacourse/mission-utils";

class CarListCheck {
  validate(inputCarList) {
    try {
      const carList = inputCarList.split(",");
      this.checkCarList(carList, inputCarList);
      return carList;
    } catch (error) {
      Console.print(error);
      throw error;
    }
  }

  checkCarList(carList, inputCarList) {
    this.checkSameName(carList);
    this.checkSpace(inputCarList);
    carList.forEach((carName) => this.checkNameLength(carName));
  }

  checkSameName(carList) {
    const removeSameNameCount = new Set(carList).size;
    if (removeSameNameCount <= 1 || removeSameNameCount !== carList.length) {
      throw ERROR.carCount;
    }
  }

  checkSpace(input) {
    const re = new RegExp(/\s+/g);
    if (re.test(input)) {
      throw ERROR.carInputWord;
    }
  }

  checkNameLength(carName) {
    if (carName.length > 5) {
      throw ERROR.carNameLength;
    }
  }
}

export default CarListCheck;
