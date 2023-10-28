import { ERROR } from "../util/constants.js";

class TryNumberCheck {
  validate(tryNumber) {
    try {
      this.checkTryNumber(tryNumber);
      return tryNumber;
    } catch (error) {
      throw error;
    }
  }

  checkTryNumber(tryNumber) {
    this.checkZero(tryNumber);
    this.checkType(tryNumber);
  }

  checkZero(tryNumber) {
    if (Number(tryNumber) === 0) {
      throw ERROR.tryNumberZero;
    }
  }

  checkType(tryNumber) {
    if (isNaN(Number(tryNumber))) {
      throw ERROR.tryNumberIntType;
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
