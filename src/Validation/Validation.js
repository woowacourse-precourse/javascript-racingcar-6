import CONSTANTS from "../Constants/Constants.js";
class Validation {
  static isValidCarName(carNameString) {
    const carNames = carNameString.split(",");
    let isNameTooLong = false;

    carNames.forEach((carName) => {
      if (carName.length > CONSTANTS.ERROR.MAXNAMELENGTH) {
        isNameTooLong = true;
      }
    });

    if (isNameTooLong) {
      throw new Error(CONSTANTS.ERROR.NAMETOOLONG);
    }
  }

  static isSameCarName(carNameString) {
    const carNames = carNameString.split(",");
    const carNameNum = carNames.length;
    const isSameName = carNameNum !== new Set(carNames).size;

    if (isSameName) {
      throw new Error(CONSTANTS.ERROR.SAMECARNAME);
    }
  }

  static isValidTrialNumber(trialNumber) {
    let isNumber = isNaN(Number(trialNumber));
    let isNotPositive = Number(trialNumber) <= 0 ? true : false;
    if (isNumber) {
      throw new Error(CONSTANTS.ERROR.ISNUMBER);
    }
    if (isNotPositive) {
      throw new Error(CONSTANTS.ERROR.ISNUMBER);
    }
  }
}
export default Validation;
