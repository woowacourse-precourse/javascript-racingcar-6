import { ERROR } from "../util/constants.js";
import { Console } from "@woowacourse/mission-utils";

class TryNumberCheck {
  validate(tryNumber) {
    try {
      // this.checkCarList(carList, inputCarList);
      return tryNumber;
    } catch (error) {
      Console.print(error);
      throw error;
    }
  }

  // checkCarList(carList, inputCarList) {
  //   this.checkSameName(carList);
  //   this.checkNoInput(inputCarList);
  //   carList.forEach((carName) => this.checkNameLength(carName));
  // }

  // checkNoInput(inputCarList) {
  //   if (inputCarList.length === 0) {
  //     throw ERROR.noInputCarList;
  //   }
  // }

  // checkSameName(carList) {
  //   const removeSameNameCount = new Set(carList).size;
  //   if (removeSameNameCount !== carList.length) {
  //     throw ERROR.carCount;
  //   }
  // }

  // checkNameLength(carName) {
  //   if (carName.length > 5) {
  //     throw ERROR.carNameLength;
  //   }
  // }
}

export default TryNumberCheck;
