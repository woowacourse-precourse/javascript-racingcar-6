class Validation {
  isValidCarName(carNameString) {
    const carNames = carNameString.split(",");
    let isNameTooLong = false;

    carNames.forEach((carName) => {
      if (carName.length > 5) {
        isNameTooLong = true;
      }
    });

    if (isNameTooLong) {
      throw new Error("[ERROR] 자동차 이름은 5자 이하여야 합니다.");
    }
  }

  isValidTrialNumber(trialNumber) {
    let isNumber = isNaN(trialNumber);
    if (isNumber) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }
}
export default Validation;
