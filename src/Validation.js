const CAR_NAME_MAX_LENGTH = 5;
class Validation {
  isProperInput(userInput) {
    const carList = userInput.split(',');
    if (carList.length === 0) {
      return false;
    }
    if (!carList.every(this.hasProperCarName)) {
      return false;
    }
    if (!carList.every(this.hasProperCarNameLength)) {
      return false;
    }
    return true;
  }

  hasProperCarName(car) {
    const regex = /^[a-zA-Z]+$/;
    return regex.test(car);
  }

  hasProperCarNameLength(car) {
    return car.length === CAR_NAME_MAX_LENGTH;
  }
}

export default Validation;
