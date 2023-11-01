const NAME_MIN_LENGTH = 1;
const NAME_MAX_LENGTH = 5;
class Validation {
  static isProperInput(userInput) {
    const carList = userInput.split(',');
    if (carList.length === 0) {
      return false;
    }

    return carList.every(Validation.hasProperCarName);
  }

  static hasProperCarName(car) {
    const regex = new RegExp(
      `^[a-zA-Z]{${NAME_MIN_LENGTH},${NAME_MAX_LENGTH}}$`
    );
    return regex.test(car);
  }

  static isProperTryTime(tryTime) {
    const regex = /^[1-9]\d*$/;
    return regex.test(tryTime);
  }
}

export default Validation;
