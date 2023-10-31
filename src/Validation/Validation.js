import CONSTANTS from "../Constants/Constants.js";
class Validation {
  static isValidCarName(carNameString) {
    const carNames = carNameString.split(",");
    let isNameTooLong = false;

    carNames.forEach((carName) => {
      if (carName.length > CONSTANTS.ERROR.MAX_NAME_LENGTH) {
        isNameTooLong = true;
      }
    });

    if (isNameTooLong) {
      throw new Error(CONSTANTS.ERROR.NAME_TOO_LONG);
    }
  }

  static isSameCarName(carNameString) {
    const carNames = carNameString.split(",");
    const carNameNum = carNames.length;
    const isSameName = carNameNum !== new Set(carNames).size;

    if (isSameName) {
      throw new Error(CONSTANTS.ERROR.SAME_CAR_NAME);
    }
  }

  static isValidTrialNumber(trialNumber) {
    let isNumber = isNaN(Number(trialNumber));
    let isNotPositive = Number(trialNumber) <= 0 ? true : false;
    if (isNumber) {
      throw new Error(CONSTANTS.ERROR.IS_NUMBER);
    }
    if (isNotPositive) {
      throw new Error(CONSTANTS.ERROR.IS_NUMBER);
    }
  }
}
export default Validation;
