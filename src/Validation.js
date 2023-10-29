const CAR_NAME_MAX_LENGTH = 5;
class Validation {
  hasProperCarName(car) {
    const regex = /^[a-zA-Z]+$/;
    return regex.test(car);
  }

  hasProperCarNameLength(car) {
    return car.length === CAR_NAME_MAX_LENGTH;
  }
}

export default Validation;
