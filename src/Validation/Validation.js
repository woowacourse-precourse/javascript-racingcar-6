import CONSTANTS from "../Constants/Constants";
class Validation {
  isValidCarName(carNameString) {
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

  isValidTrialNumber(trialNumber) {
    let isNumber = isNaN(trialNumber);
    if (isNumber) {
      throw new Error(CONSTANTS.ERROR.ISNUMBER);
    }
  }
}
export default Validation;
